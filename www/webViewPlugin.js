/*global cordova, module */
'use strict';
module.exports = (function() {

  var _data;
  
  var _show = function(url, successCallback, errorCallback, data) {    
    if(data) {
      var queryString = Object.keys(data)
      .map(function(key) {
        return key + "=" + data[key];
      })
      .join('&');
      
      url += '?' + queryString;
    }
    cordova.exec(successCallback, errorCallback, 'WebViewPlugin', 'show', [url]);    
  };

  var _getData = function() {
    if(!_data) {
      _data = {};     
      var searchParams = new URLSearchParams(window.location.search);
      for(var key of searchParams.keys()) {
        _data[key] = searchParams.get(key);
      }
    }
    
    return _data;    
  }

  var _hide = function(successCallback, errorCallback) {
    cordova.exec(successCallback, errorCallback, 'WebViewPlugin', 'hide', []);
  };

  var _hideLoading = function(successCallback, errorCallback) {
    cordova.exec(successCallback, errorCallback, 'WebViewPlugin', 'hideLoading', []);
  };

  var _subscribeCallback = function(successCallback, errorCallback) {
    cordova.exec(successCallback, errorCallback, 'WebViewPlugin', 'subscribeCallback', []);
  };

  var _subscribeExitCallback = function(successCallback, errorCallback) {
    cordova.exec(successCallback, errorCallback, 'WebViewPlugin', 'subscribeExitCallback', []);
  };

  var _exitApp = function() {
    cordova.exec(function(){},function(){}, 'WebViewPlugin', 'exitApp', []);
  };

  var _setWebViewBehavior = function() {
    cordova.exec(function(){},function(){}, 'WebViewPlugin', 'webViewAdjustmenBehavior', []);
  };

  return {
    Show: _show,
    Hide: _hide,
    Close: _hide,
    SubscribeCallback: _subscribeCallback,
    SubscribeExitCallback: _subscribeExitCallback,
    ExitApp: _exitApp,
    HideLoading: _hideLoading,
    SetWebViewBehavior: _setWebViewBehavior,

    show: _show,
    hide: _hide,
    close: _hide,
    subscribeCallback: _subscribeCallback,
    subscribeExitCallback: _subscribeExitCallback,
    exitApp: _exitApp,
    hideLoading: _hideLoading,
    setWebViewBehavior: _setWebViewBehavior,
    getItuniData: _getData    
  };

})();
