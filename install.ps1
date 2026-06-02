# AgentBay bootstrap installer (Windows PowerShell)
#   irm https://raw.githubusercontent.com/NullNaveen/agentbay/main/install.ps1 | iex
$ErrorActionPreference = "Stop"
$Repo   = if ($env:AGENTBAY_REPO) { $env:AGENTBAY_REPO } else { "NullNaveen/agentbay" }
$AppDir = if ($env:AGENTBAY_HOME) { $env:AGENTBAY_HOME } else { "$HOME\.agentbay\app" }
$Port   = if ($env:AGENTBAY_PORT) { $env:AGENTBAY_PORT } else { "8700" }

function Say($m){ Write-Host "[agentbay] $m" -ForegroundColor Yellow }

# 1. need python  (PowerShell 5.1-compatible: no ?? operator)
function Find-Python {
  foreach ($cmd in @("py","python","python3")) {
    $c = Get-Command $cmd -ErrorAction SilentlyContinue
    if (-not $c) { continue }
    # skip the Microsoft Store execution-alias stub (it only redirects to the Store)
    if ($c.Source -and $c.Source -like "*\WindowsApps\*") { continue }
    try { $v = & $c.Source --version 2>&1 } catch { continue }
    if ("$v" -match "Python 3") { return $c }
  }
  return $null
}
$py = Find-Python
if (-not $py) {
  $wg = Get-Command winget -ErrorAction SilentlyContinue
  if ($wg) {
    Say "Python 3 not found — installing it via winget…"
    winget install -e --id Python.Python.3.12 --accept-source-agreements --accept-package-agreements --silent
    # refresh PATH for this session so the freshly-installed 'py' launcher resolves
    $env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path","User")
    $py = Find-Python
  }
}
if (-not $py) { Write-Error "Python 3 is required. Install it from https://python.org (tick 'Add python.exe to PATH'), open a NEW terminal, and re-run this command."; exit 1 }
Say "using $($py.Source)"

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

# 2b. record the installed commit (so the in-app update check works for zip installs)
try {
  $sha = (Invoke-WebRequest -UseBasicParsing -Headers @{ Accept = "application/vnd.github.sha" } `
    -Uri "https://api.github.com/repos/$Repo/commits/main").Content.Trim()
  if ($sha) { Set-Content -Path "$AppDir\.agentbay-build" -Value $sha -NoNewline }
} catch { }

# 3. launch (server falls back to the next free port if $Port is taken,
#    then prints the real URL + opens your browser)
Say "starting AgentBay… it will open in your browser"
& $py.Source "$AppDir\server.py" --port $Port
