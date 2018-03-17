var WebPushManager = function(){
};

WebPushManager.prototype.start = function(callback) {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('src/options/service-worker.js')
      .then(this.getRegistrationId(callback));
  } else {
    callback('Service workers aren\'t supported in this browser.', null);
  }
};

WebPushManager.prototype.getRegistrationId = function (callback) {
  navigator.serviceWorker.ready.then(function(serviceWorkerRegistration) {
 });
};

WebPushManager.prototype.forceNotification = function(message) {
  navigator.serviceWorker.ready.then(function(serviceWorkerRegistration) {
    serviceWorkerRegistration.active.postMessage(message);
  });
};
