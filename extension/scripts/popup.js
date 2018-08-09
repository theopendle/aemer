const AEM_URLS = 'aemUrls';

$('document').ready(function(){
  chrome.storage.sync.get([AEM_URLS], function(result) {
    if(!!result[AEM_URLS] && result[AEM_URLS].length > 0) {
      var sites = result[AEM_URLS];
      for (var i = 0; i < sites.length; i++) {
        $('#site-list').append('<li><a href="http://' + sites[i] + '" target="_blank">' + sites[i] + '</a></li>');
      }
      $('#site-list').removeAttr('hidden');
      $('#no-list').attr('hidden', '');

    } else {
      $('#site-list').attr('hidden', '');
      $('#no-list').removeAttr('hidden');
    }
  });
});
