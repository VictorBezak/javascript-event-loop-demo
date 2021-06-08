var output = document.querySelector('.output');
var iframe = document.querySelector('iframe');

// Wait for the iframe to load
iframe.addEventListener("load", onLoad);

function onLoad() {
    setInterval(sendMessages, 0)
}

function sendMessages() {
    for (let i = 0; i < 20; i++) {
        let channel = new MessageChannel()
    
        // Send message through port1 to the iframe
        iframe.contentWindow.postMessage('', '*', [channel.port1]);

        // Send message through port2 to the iframe
        iframe.contentWindow.postMessage('', '*', [channel.port2]);
    }
}
