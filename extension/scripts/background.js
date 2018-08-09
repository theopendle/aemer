const ICON_OK = 'resources/icons/icon_ok-16.png';
const ICON_NOK = 'resources/icons/icon_nok-16.png';
const BADGE = 'AEM';
const AEM_URLS = 'aemUrls';

function saveUrl(url){
  chrome.storage.sync.get([AEM_URLS], function(result) {
    var array = (result[AEM_URLS]) ? result[AEM_URLS] : [];
    if(!array.includes(url)) {
      array.push(url);
      array.sort();
    }
    chrome.storage.sync.set({ "aemUrls": array }, function(){
      console.log(url + ' saved.');
    });
  });
}

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    // Set icon
    var iconSetter = { tabId: sender.tab.id };
    iconSetter.path = request.aem ? ICON_OK : ICON_NOK;
    chrome.browserAction.setIcon(iconSetter);

    if(request.aem) {
      // Set badge
      var badgeSetter = { tabId: sender.tab.id };
      badgeSetter.text = request.aem ? BADGE : null;
      chrome.browserAction.setBadgeText(badgeSetter);

      // Save Url
      saveUrl(request.url);
    };
  }
);
