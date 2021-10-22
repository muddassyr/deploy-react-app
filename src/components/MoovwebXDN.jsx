import React from 'react'

const MoovwebXDN = () => {
    return (
        <div>
            <div>
                <h2 id="9moovwebxdn">9. Moovweb XDN</h2>
                <p><a href="https://developer.moovweb.com/guides/overview" target="_blank" rel="noopener noreferrer">Moovweb
                    XDN</a>&nbsp;is an all-in-one platform to develop, deploy, preview, experiment on, monitor, and
                    run your
                    application.</p>
                <p><a href="https://www.moovweb.com/pricing">Moovweb’s free tier</a> should be more than sufficient
                    for your
                    side projects.</p>
                <p>Start by creating a <a href="https://moovweb.app/signup">Moovweb XDN account</a>.</p>
                data-lazy-sizes="(max-width: 720px) 100vw, 720px"
                data-lazy-src="#/wp-content/uploads/2020/08/moovweb-xdn.png?is-pending-load=1"
                sizes="(max-width: 720px) 100vw, 720px" /&gt;<p />
                <p>XDN only supports Node.js version 12 and higher.</p>
                <p>Check your Node version by running the following command.</p>
                <pre>node --version{"\n"}{"  "}</pre>
                <p>Install XDN CLI globally.</p>
                <pre>npm i -g @xdn/cli{"\n"}{"  "}</pre>
                <p>After installing the XDN CLI, run the following command to authenticate yourself.</p>
                <pre>xdn login{"\n"}{"  "}</pre>
                <p>You’ll see the following output in the terminal.</p>
                <pre>Authenticating user!{"\n"}{"  "}</pre>
                <p>After this, You will be redirected to the Moovweb page and see the following message.</p>
                <p><img src="./docs/moovweb-sign-in.png" alt="Moovweb Sign In" width={720} height={300} sizes="(max-width: 720px) 100vw, 720px" /></p>
                <p>To deploy the latest build, run the following command in your project directory.</p>
                <pre>npm run build{"\n"}{"  "}</pre>
                <p>In your project’s root directory, run the following command in the terminal.</p>
                <pre>xdn init{"\n"}{"  "}</pre>
                <p>This command will install all the dependencies and files required by XDN in your project. After a
                    few
                    minutes, you will see the following message in your terminal.</p>
                <pre>✔ installing @xdn/core, @xdn/cli, @xdn/prefetch, @xdn/devtools... done.{"\n"}{"  "}&gt; routes.js not found, creating...{"\n"}{"  "}&gt; xdn.config.js not found, creating...{"\n"}{"  "}{"\n"}{"  "}Added the following scripts:{"\n"}{"  "}{"\n"}{"  "}xdn - Run xdn commands using the local version of the XDN CLI.{"\n"}{"  "}xdn:start - Simulate your app on the XDN locally.{"\n"}{"  "}xdn:build - Build your app for deployment on the XDN.{"\n"}{"  "}xdn:deploy - Build and deploy your app on the XDN.{"\n"}{"  "}{"\n"}{"  "}🎉 Your app is now ready to deploy on the MOOVWEB XDN!{"\n"}{"  "}</pre>
                <p>You’ll notice some new files will be created after the <code>xdn init</code> command.
                    Modify
                    <code>routes.js</code> in the root like this to serve the <code>build</code> directory.
                </p>
                <pre>// routes.js{"\n"}{"  "}const {"{"} Router {"}"} = require('@xdn/core/router'){"\n"}{"  "}const ONE_HOUR = 60 * 60{"\n"}{"  "}const ONE_DAY = 24 * ONE_HOUR{"\n"}{"  "}const ONE_YEAR = 365 * ONE_DAY{"\n"}{"  "}const edgeOnly = {"{"}{"\n"}{"    "}browser: false,{"\n"}{"    "}edge: {"{"} maxAgeSeconds: ONE_YEAR {"}"},{"\n"}{"  "}{"}"}{"\n"}{"  "}const edgeAndBrowser = {"{"}{"\n"}{"    "}browser: {"{"} maxAgeSeconds: ONE_YEAR {"}"},{"\n"}{"    "}edge: {"{"} maxAgeSeconds: ONE_YEAR {"}"},{"\n"}{"  "}{"}"}{"\n"}{"  "}module.exports = new Router(){"\n"}{"    "}.prerender([{"{"} path: '/' {"}"}]){"\n"}{"    "}// js and css assets are hashed and can be far-future cached in the browser{"\n"}{"    "}.get('/static/:path*', ({"{"} cache, serveStatic {"}"}) =&gt; {"{"}{"\n"}{"      "}cache(edgeAndBrowser){"\n"}{"      "}serveStatic('build/static/:path*'){"\n"}{"    "}{"}"}){"\n"}{"    "}// all paths that do not have a "." as well as "/"" should serve the app shell (index.html){"\n"}{"    "}.get('/:path*/:file([^\\.]+|)', ({"{"} cache, appShell {"}"}) =&gt; {"{"}{"\n"}{"      "}cache(edgeOnly){"\n"}{"      "}appShell('build/index.html'){"\n"}{"    "}{"}"}){"\n"}{"    "}// all other paths should be served from the build directory{"\n"}{"    "}.get('/:path*', ({"{"} cache, serveStatic {"}"}) =&gt; {"{"}{"\n"}{"      "}cache(edgeOnly){"\n"}{"      "}serveStatic('build/:path*'){"\n"}{"    "}{"}"}){"\n"}{"  "}</pre>
                <p>To <a href="https://developer.moovweb.com/guides/react#section_create_react_app_example" target="_blank" rel="noopener noreferrer">deploy your React app</a>, run the following
                    command.</p>
                <pre>xdn deploy{"\n"}{"  "}</pre>
                <p>After a few minutes, your site will be deployed.</p>
                <p>You can read more about <a href="https://developer.moovweb.com/guides/react" target="_blank" rel="noopener noreferrer">deploying a React app with Moovweb XDN</a>.</p>
            </div>
        </div>
    )
}

export default MoovwebXDN
