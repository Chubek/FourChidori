browser.runtime.onMessage.addListener(notify);

function notify(message) {
  browser.notifications.create({
    "type": "basic",
    "iconUrl": browser.extension.getURL("boxxy.png"),
    "title": "Are you in the right place?",
    "message": message.message
  });
}
