REM Packs the extension into a .crx file (must be absolute path).
chrome.exe --pack-extension=C:\Projects\aemer\extension

REM Creates a dist directory. If the directory exists, throw the error away
md ..\dist 2> nul
move ..\extension.crx ..\dist\aemer.crx
move ..\extension.pem ..\dist\aemer.pem

REM Zips the necessary files
7z.exe a -tzip ..\dist\aemer.zip ..\extension

REM Open the Google Developer Dashboard
chrome.exe https://chrome.google.com/webstore/developer/dashboard
