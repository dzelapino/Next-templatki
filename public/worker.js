addEventListener('message', async e => {
  if (e.data === "Start") {
    setTimeout(() => {
      console.log("REDIRECTUJE")
      postMessage("Finished");
    }, 5000);
  }
});
