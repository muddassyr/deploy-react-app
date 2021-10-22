import React from 'react'

const Roast = () => {
    return (
        <div>
            <div>
        <h2 id="roasthttpswwwroastio">7. Roast</h2>
        <p><a href="https://www.roast.io/" target="_blank" rel="noopener noreferrer">Roast</a> is another
          web
          hosting platform that you can use to deploy single-page applications (SPAs).</p>
        <p>It’s very simple to configure and use. The <a href="https://www.roast.io/docs" target="_blank" rel="noopener noreferrer">Roast docs</a> are clear and concise.</p>
        <p>Start by creating a Roast account.</p>
        <p><img src="./docs/roast-sign-up-1-e1596725872934.png" alt="Roast Sign-Up" width={400} height={563} /></p>
        <p>Install Roast CLI globally.</p>
        <pre>npm install -g roast</pre>
        <p>To deploy the latest build, run the following command in your project directory.</p>
        <pre>npm run build</pre>
        <p>Run the following command to deploy with Roast.</p>
        <pre>roast deploy</pre>
        <p>After this, you’ll be authenticated.</p>
        <p><img src="./docs/roast-authentication-1.png" alt="Roast Authentication" width={720} height={202} sizes="(max-width: 720px) 100vw, 720px" /></p>
        <p>In the terminal, you’ll be asked to create a new site. Answer <code>Yes</code>. Then,
          you’ll
          be asked for <code>Path to deploy</code>, which will be the <code>build</code> folder.</p>
        <pre>? No site ID specified, create a new site Yes ? Path to deploy? build</pre>
        <p>Your application is now deployed.</p>
        <pre>� Roasting deploy from folder D:\code\react-example-deploy\build{"\n"}{"  "}{"\n"}{"  "}☕ Deploy roasted!{"\n"}{"  "}{"\n"}{"  "}✨ https://witty-surprise-3068.roast.io</pre>
        <p>To return <code>index.html</code> instead of a 404, create a <code>_redirects</code> file inside
          <code>build</code> with the following code.
        </p>
        <pre>/* /index.html 200{"\n"}{"  "}</pre>
        <p>Once you’ve added this file, you’ll need to redeploy your app with
          <code>roast deploy</code>.
        </p>
        <p>You can now see this <a href="https://www.roast.io/docs/config/redirects" target="_blank" rel="noopener noreferrer">redirect</a> in your Roast dashboard.</p>
        <p><img in  width={720} height={142} src="./docs/roast-deploy-redirects-1.png" alt="Deploy Redirects in Roast" sizes="(max-width: 720px) 100vw, 720px" /></p>
      </div>
        </div>
    )
}

export default Roast
