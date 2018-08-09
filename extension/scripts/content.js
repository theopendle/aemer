const ETC_DESIGNS = '/etc/designs';

var html = document.documentElement.innerHTML;

var links = $('link[href*="' + ETC_DESIGNS + '"]');
var scripts = $('script[src*="' + ETC_DESIGNS + '"]');
var aem = links.length > 0 || scripts.length > 0;

if(aem) {
  console.log("Aemer: This website uses AEM.");
} else {
  console.log("Aemer: This website does not use AEM.");
}

chrome.runtime.sendMessage({ "aem": aem , "url": window.location.hostname});
