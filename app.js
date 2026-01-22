function yap() {
  alert("you clicked it. happy now?");
}
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js")
    .then(() => console.log("service worker locked in"))
    .catch(err => console.log("sw failed", err));
}
