 document.head.innerHTML = `
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>JanitorAI - Shut Down for Maintenance</title>
      <style>
        body, html {
          margin: 0;
          padding: 0;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          font-family: 'Arial', sans-serif;
          background-color: #1a0d3f; /* Background similar to image */
          color: #fff;
        }
        .message-container {
          text-align: center;
        }
        .message-container h1 {
          font-size: 3em;
          margin-bottom: 20px;
          color: #cb6cf6;
          background: -webkit-linear-gradient(#cb6cf6, #00f);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .message-container p {
          font-size: 1.5em;
          color: #aaa;
        }
        .beta-badge {
          display: inline-block;
          background-color: #4a0069;
          color: #cb6cf6;
          padding: 10px 20px;
          border-radius: 25px;
          font-size: 1.2em;
          margin-top: 15px;
          border: 2px solid #cb6cf6;
        }
        @keyframes stretchAndSquash{0%,100%{transform:scale(1.1,.9)}50%{transform:scale(.9,1.1)}}.stretch-squash{animation:1s ease-in-out infinite stretchAndSquash;position:fixed;left:-15px;bottom:-35px;width:200px;height:200px;z-index:999999999;background-image: url(https://ScriggerMania.github.io/zip.png);background-size: contain;}
      </style><link href="https://fonts.googleapis.com/css2?family=Barrio&display=swap" rel="stylesheet"><link href="https://fonts.googleapis.com/css2?family=Jura&display=swap" rel="stylesheet">
    `;
    
    document.body.innerHTML = `
 <div class="message-container">
        <div class="beta-badge" style="
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
    height: 60px;
">
        <p style="
    font-family: 'Jura', sans-serif;;
    font-weight: var(--chakra-fontWeights-bold);
">Shut down for maintenance.</p></div>
        <p style="
    position: fixed;
    bottom: 150px;
    font-size: 20px;
    left: 25px;
    opacity: 0.5;
    font-family: 'Barrio', cursive;
">Ps.. Zip wuz here n shieeet...</p><div class="stretch-squash"></div>
      </div>
    `;
