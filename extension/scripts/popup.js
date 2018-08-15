const AEM_URLS = 'aemUrls';
var siteList;

function init() {
  $('document').ready(function(){
    refreshList();

    $('#upload-input').change(function(e) {
      doUpload();
    });
  });
}

function refreshList() {
  chrome.storage.sync.get([AEM_URLS], function(result) {
    siteList = !!result && !!result[AEM_URLS] ? result[AEM_URLS] : [];
    if(siteList.length > 0) {
      for (var i = 0; i < siteList.length; i++) {
        $('#site-list').append('<li><a href="http://' + siteList[i] + '" target="_blank">' + siteList[i] + '</a></li>');
      }
      $('#sites').removeAttr('hidden');
      $('#no-sites').attr('hidden', '');

    } else {
      $('#sites').attr('hidden', '');
      $('#no-sites').removeAttr('hidden');
    }
    initDownload();
  });
}

function initDownload() {
  var sitesString = encodeURIComponent(siteList.join(','));
  $('#download-link').each(function() {
    $(this).attr('href', $(this).attr('href') + sitesString);
  });
}

function doUpload() {
  var input = $('#upload-input')[0];
  if(!!input.files) {
    if(input.files.length < 1) {
      alert('Please select a file.');
    } else {
      var file = input.files[0];
      readFileContent(file).then(function(content) {
        var importList = content.split(',');
        saveSites(importList);
      });
    }
  }
}

function readFileContent(file) {
	const reader = new FileReader()
  return new Promise((resolve, reject) => {
    reader.onload = event => resolve(event.target.result)
    reader.onerror = error => reject(error)
    reader.readAsText(file)
  })
}

function saveSites(urlList){
  chrome.storage.sync.get([AEM_URLS], function(result) {
    var array = (result[AEM_URLS]) ? result[AEM_URLS] : [];
    for (var i = 0; i < urlList.length; i++) {
      var site = urlList[i];
      if(!array.includes(site)) {
        array.push(site);
      }
    }
    array.sort();
    chrome.storage.sync.set({ "aemUrls": array }, function() {
      refreshList();
    });
  });
}

init();
