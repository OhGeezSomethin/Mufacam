if ("serviceWorker" in navigator){
    window.addEventListener("load", (event)=> {
        navigator.serviceWorker.register("sw.js").then(registration => {
            console.log("SW Registered.");
            console.log(registration);
        }).catch(error => {
            console.log("SW Registration failed.");
            confirm.log(error);
        });
    });
}