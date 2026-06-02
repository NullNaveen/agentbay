# AgentBay bootstrap installer (Windows PowerShell)
#   irm https://raw.githubusercontent.com/NullNaveen/agentbay/main/install.ps1 | iex
$ErrorActionPreference = "Stop"
$Repo   = if ($env:AGENTBAY_REPO) { $env:AGENTBAY_REPO } else { "NullNaveen/agentbay" }
$AppDir = if ($env:AGENTBAY_HOME) { $env:AGENTBAY_HOME } else { "$HOME\.agentbay\app" }
$Port   = if ($env:AGENTBAY_PORT) { $env:AGENTBAY_PORT } else { "8700" }

function Say($m){ Write-Host "[agentbay] $m" -ForegroundColor Yellow }

# 1. need python  (PowerShell 5.1-compatible: no ?? operator)
$py = $null
foreach ($cmd in @("py","python","python3")) {
  $c = Get-Command $cmd -ErrorAction SilentlyContinue
  if ($c) { $py = $c; break }
}
if (-not $py) { Write-Error "Python 3 is required. Install from https://python.org (tick 'Add to PATH') and re-run."; exit 1 }

# 2. fetch / update
New-Item -ItemType Directory -Force -Path (Split-Path $AppDir) | Out-Null
if (Test-Path "$AppDir\.git") {
  Say "updating AgentBay…"; git -C $AppDir pull --quiet
} elseif (Get-Command git -ErrorAction SilentlyContinue) {
  Say "downloading AgentBay…"; git clone --depth 1 "https://github.com/$Repo.git" $AppDir --quiet
} else {
  Say "downloading AgentBay (zip)…"
  $zip = "$env:TEMP\agentbay.zip"
  Invoke-WebRequest "https://github.com/$Repo/archive/refs/heads/main.zip" -OutFile $zip
  Expand-Archive $zip -DestinationPath "$env:TEMP\agentbay-x" -Force
  New-Item -ItemType Directory -Force -Path $AppDir | Out-Null
  Copy-Item "$env:TEMP\agentbay-x\agentbay-main\*" $AppDir -Recurse -Force
}

# 3. launch
Say "starting AgentBay on http://127.0.0.1:$Port …"
& $py.Source "$AppDir\server.py" --port $Port
