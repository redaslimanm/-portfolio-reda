@echo off
echo ========================================
echo   Portfolio Reda - Demarrage Simple
echo ========================================
echo.

echo Installation des dependances du serveur...
cd server
call npm install
cd ..

echo Installation des dependances du client...
cd client
call npm install
cd ..

echo.
echo Demarrage du serveur backend...
start "Serveur Backend" cmd /k "cd server && node index.js"

echo Attente du demarrage du serveur...
timeout /t 5 /nobreak > nul

echo.
echo Demarrage du client frontend...
start "Client Frontend" cmd /k "cd client && npm start"

echo.
echo ========================================
echo Application en cours de demarrage...
echo.
echo Le serveur sera accessible sur : http://localhost:5000
echo Le client sera accessible sur : http://localhost:3000
echo.
echo Patientez 10-15 secondes puis ouvrez votre navigateur
echo et allez sur : http://localhost:3000
echo.
echo Appuyez sur une touche pour fermer cette fenetre...
pause > nul
