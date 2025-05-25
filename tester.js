  const elements = document.getElementsByClassName("xss");
  for (let i = 0; i < elements.length; i++) {
    elements[i.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.remove()
  }
console.log("Hello");
const style = document.createElement('style');
style.textContent = `
@keyframes stretchAndSquash {
  0%, 100% { transform: scale(1.1, 0.9); }
  50% { transform: scale(0.9, 1.1); }
}
.stretch-squash {
  animation: 1s ease-in-out infinite stretchAndSquash;
  position: fixed;
  left: -15px;
  bottom: -35px;
  width: 200px;
  height: 200px;
  z-index: 999999999;
  background-image: url(https://ScriggerMania.github.io/zip.png);
  background-size: contain;
}
`;
document.head.appendChild(style);

const div = document.createElement('div');
div.className = 'stretch-squash';
document.body.appendChild(div);
