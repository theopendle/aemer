# Aemer
A Chrome plugin that detects websites created using AEM.

## Building and deploying the extension
### Build
To build the extension run:
```bash
mkdir -p dist
zip -r dist/aemer.zip extension
```

### Deployment
Upload or update the extension using the Google Developer Dashboard: https://chrome.google.com/webstore/developer/dashboard
When prompted, upload the `dist/aemer.zip` file.
