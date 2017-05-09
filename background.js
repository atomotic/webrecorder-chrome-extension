chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.update(tab.id, {
    url: "https://webrecorder.io/$record/temp/Recording%20Session/" +
      tab.url
  });
});
