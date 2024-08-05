@echo off
ECHO Running Packager
START /wait "Packager" CMD /c generateExe.bat
ECHO Executables were generated
ECHO build finished