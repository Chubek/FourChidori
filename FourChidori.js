function getBoardAndNotify() {
  const url_split = window.location.href.split("/");
  const last = url_split[url_split.length - 2];
  browser.runtime.sendMessage({"message": `You are posting on ${last}`});
   
}


window.addEventListener('click', function (e) {
  if (e.originalTarget.innerText == "Start a New Thread") {
    getBoardAndNotify();
  }
})


