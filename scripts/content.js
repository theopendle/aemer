var html = document.documentElement.innerHTML;
var aem = html.includes('/etc/designs');

if(aem) {
  console.log("Aemer: This website uses AEM.");
} else {
  console.log("Aemer: This website does not use AEM.");
}

chrome.runtime.sendMessage({ "aem": aem , "url": window.location.hostname});
