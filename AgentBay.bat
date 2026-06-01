@echo off
REM AgentBay - double-click to start. No commands to type.
cd /d "%~dp0"
set "PORT=8700"
if not "%AGENTBAY_PORT%"=="" set "PORT=%AGENTBAY_PORT%"

where py >nul 2>nul && (set "PY=py") || (where python >nul 2>nul && (set "PY=python") || (set "PY="))
if "%PY%"=="" (
  echo Python 3 is required. Install it from https://python.org , then double-click again.
  pause
  exit /b 1
)

if exist "server.py" (
  "%PY%" server.py --port %PORT%
) else (
  echo Setting up AgentBay...
  powershell -NoProfile -ExecutionPolicy Bypass -Command "irm https://raw.githubusercontent.com/NullNaveen/agentbay/main/install.ps1 | iex"
)
pause
