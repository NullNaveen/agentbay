#!/usr/bin/env bash
# AgentBay EC2 self-update — pulls the shared checkout and restarts every
# per-user AgentBay service. Invoked by the in-app "Update now" button via a
# passwordless sudoers rule (see infra docs). Safe to run repeatedly.
#
# Why a script: /opt/agentbay is a single root-owned checkout shared by all the
# agentbay@<user> services, so the unprivileged service process can't pull or
# restart siblings itself.
set -euo pipefail

APP_DIR="${AGENTBAY_DIR:-/opt/agentbay}"
echo "[ec2-update] pulling $APP_DIR"
git -C "$APP_DIR" pull --ff-only origin main

# Restart every installed agentbay@<user> instance so they all load the new code.
units=$(systemctl list-units --all --type=service --no-legend 'agentbay@*' 2>/dev/null | awk '{print $1}')
if [ -z "$units" ]; then
  units=$(systemctl list-unit-files --no-legend 'agentbay@*' 2>/dev/null | awk '{print $1}')
fi
echo "[ec2-update] restarting: $units"
for u in $units; do
  systemctl restart "$u" || echo "[ec2-update] WARN: failed to restart $u"
done
echo "[ec2-update] done"
