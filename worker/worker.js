console.log(":)");

var checkStatus = () => {
  if(navigator.onLine) {
    return "online";
  }
  else {
    return "offline";
  }
}

setTimeout(()=> {
  switch(checkStatus()) {
    case "online":
    postMessage("online");

  }
}, 1000)