#!/usr/bin/env python3
"""AgentBay launcher — what the Desktop / Start Menu / Applications icon runs.

If AgentBay is already running, just open it in the browser; otherwise start the
server (which opens the browser itself). No terminal, nothing to type.
"""
import os
import sys
import subprocess
import urllib.request
import webbrowser

PORT = int(os.environ.get("AGENTBAY_PORT", "8700"))
HERE = os.path.dirname(os.path.abspath(__file__))


def _up(p):
    try:
        urllib.request.urlopen("http://127.0.0.1:%d/api/health" % p, timeout=1)
        return True
    except Exception:
        return False


def main():
    # Already running on its port (or the next few it may have fallen back to)?
    for p in range(PORT, PORT + 12):
        if _up(p):
            webbrowser.open("http://127.0.0.1:%d/" % p)
            return
    # Not running — start the server; it opens the browser when ready.
    server = os.path.join(HERE, "server.py")
    try:
        subprocess.Popen([sys.executable, server, "--port", str(PORT)], cwd=HERE)
    except Exception:
        # last resort: run in the foreground
        os.execv(sys.executable, [sys.executable, server, "--port", str(PORT)])


if __name__ == "__main__":
    main()
