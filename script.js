let latesttime = new Date().toLocaleTimeString('en-US', { hour12: true });
console.log(latesttime)
document.querySelector("h1").textContent = latesttime;

setInterval(() => {
    let latesttime = new Date().toLocaleTimeString('en-US', { hour12: true });
    document.querySelector("h1").textContent = latesttime;
}, 1000);

latesttime = new Date().toLocaleTimeString('en-US', { hour12: false });
console.log(latesttime);
document.querySelector("h2").textContent = latesttime;
setInterval(() => {
    let latesttime = new Date().toLocaleTimeString('en-US', { hour12: false });
    document.querySelector("h2").textContent = latesttime;
}, 1000);

// Dubai Clock (UTC+4)
setInterval(() => {
    let dubaiTime = new Date().toLocaleTimeString('en-US', { 
        hour12: true,
        timeZone: 'Asia/Dubai'
    });
    document.querySelector(".dubai-digital").textContent = dubaiTime;
}, 1000);

// New York Clock (UTC-5 or UTC-4)
setInterval(() => {
    let nyTime = new Date().toLocaleTimeString('en-US', { 
        hour12: true,
        timeZone: 'America/New_York'
    });
    document.querySelector(".newyork-digital").textContent = nyTime;
}, 1000);