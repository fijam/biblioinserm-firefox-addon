// This is an active module of the fijam (1) Add-on
var contextMenu = require("sdk/context-menu");
var tabs = require("sdk/tabs");
//var url = require("sdk/url");

function url_domain(url)
{
var matches = url.match(/^(https?\:\/\/[^\/?#]+)(?:[\/?#]|$)/i);
return matches[1];
}

exports.main = function() {
};

tabs.on('activate', function () {
  currTab = tabs.activeTab.url;
});

tabs.on('load', function () {
  currTab = tabs.activeTab.url;
});

 var menuItem = contextMenu.Item({
    label: "View in BiblioInserm",
    contentScript: 'self.on("click", function () {' +
//                 '  console.log("clicked!");' +
                 '  var goSignal = "go";' +
                 '  self.postMessage(goSignal);' +
                 '});',
  onMessage: function (){
    console.log(currTab);
    var ourHost = url_domain(currTab);
    var ourTail = currTab.replace(ourHost, "");
//    console.log(ourHost, '+', ourTail);
    tabs.open(ourHost + ".gate2.inist.fr" + ourTail);

  }
});
