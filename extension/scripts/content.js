const ETC_DESIGNS = '/etc/designs';
const EVIDENCE = ['/etc/designs', '/etc.clientlibs']

var html = document.documentElement.innerHTML;

var aem = false;

// If page contains any piece of evidence that it uses AEM, consider that it does
for (item of EVIDENCE) {
  var links = $('link[href*="' + item + '"]');
  var scripts = $('script[src*="' + item + '"]');
  if(links.length > 0 || scripts.length > 0){
    aem = true;
    break;
  }
}

if(aem) {
  console.log("Aemer: This website uses AEM.");
} else {
  console.log("Aemer: This website does not use AEM.");
}

chrome.runtime.sendMessage({ "aem": aem , "url": window.location.hostname});
