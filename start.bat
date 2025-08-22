@echo off
echo ========================================
echo   Portfolio Reda - Installation Guide
echo ========================================
echo.

echo 1. Installation des dependances du serveur...
cd server
call npm install
cd ..

echo.
echo 2. Installation des dependances du client...
cd client
call npm install
cd ..

echo.
echo 3. Installation des dependances principales...
call npm install

echo.
echo ========================================
echo   Installation terminee !
echo ========================================
echo.
echo Pour demarrer l'application :
echo   npm run dev
echo.
echo Ou ouvrir deux terminaux et executer :
echo   Terminal 1: npm run server
echo   Terminal 2: npm run client
echo.
pause
