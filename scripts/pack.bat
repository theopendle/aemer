REM Packs the extension into a .crx file.
"c:\Program Files (x86)\Google\Chrome\Application\chrome.exe" --pack-extension=c:\Projects\aemer\extension

REM Creates a dist directory. If the directory exists, throw the error away
md ..\dist 2> nul
move ..\extension.crx ..\dist\aemer.crx
move ..\extension.pem ..\dist\aemer.pem
