@echo off
echo ========================================
echo   Portfolio Reda - Demarrage
echo ========================================
echo.
echo Demarrage du serveur et du client...
echo.
echo Le serveur sera accessible sur : http://localhost:5000
echo Le client sera accessible sur : http://localhost:3000
echo.
echo Appuyez sur Ctrl+C pour arreter l'application
echo.

REM Démarrer le serveur backend en arrière-plan
start "Serveur Backend" cmd /k "cd server && node index.js"

REM Attendre un peu que le serveur démarre
timeout /t 3 /nobreak > nul

REM Démarrer le client frontend
start "Client Frontend" cmd /k "cd client && npm start"

echo.
echo Application en cours de demarrage...
echo Patientez quelques secondes puis ouvrez : http://localhost:3000
echo.
pause
