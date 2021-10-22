import React from 'react'

const Surge = () => {
    return (
        <div>
            <div>
                <h2 id="surgehttpssurgesh">5. Surge</h2>
                <p><a href="https://surge.sh/" target="_blank" rel="noopener noreferrer">Surge</a> is one of the
                    fastest
                    ways to deploy frontend projects. Compared to other CLIs, it requires much less configuration,
                    and you can
                    create a Surge account directly from the terminal when using it for the first time.</p>
                <p>To deploy the latest build of the project, run the following command in the project root
                    directory.</p>
                <pre>npm run build</pre>
                <p>To install Surge CLI globally:</p>
                <pre>npm install -g surge</pre>
                <p>Run <code>surge</code> inside the <code>build</code> folder.</p>
                <pre>cd build{"\n"}{"  "}surge</pre>
                <p>Follow the prompts. First, you’ll be asked for an email and password.</p>
                <pre>Welcome to surge! (surge.sh){"\n"}{"  "}Login (or create surge account) by entering email &amp; password.</pre>
                <pre>{"      "}email: <a href="#/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="93f2f7fefafdd3f2e0fbe6e0fafdf4fbbdfef6">[email&nbsp;protected]</a>{"\n"}{"        "}password:{"\n"}{"  "}</pre>
                <p>Before filling in any other prompts, it’s a good idea to confirm your Surge account.</p>
                <p><img  width={720} height={225} src="./docs/surge-email-verification-1.png" alt="Surge Email Verification" sizes="(max-width: 720px) 100vw, 720px" /></p>
                <p>In the terminal, you’ll be asked to confirm your project directory. Hit enter.</p>
                <p>You’ll see the domain of your project. Again, hit enter.</p>
                <pre>{"    "}project: D:\code\react-example-deploy\build\{"\n"}{"      "}domain: tremendous-person.surge.sh {"\n"}{"  "}</pre>
                <p>This will publish your application.</p>
                <pre>{"   "}Success! - Published to outstanding-scent.surge.sh{"\n"}{"  "}</pre>
                <p>You might want to rename <code>index.html</code> to <code>200.html</code> in your
                    <code>build</code>
                    folder before surging to support the HTML5 <a href="https://surge.sh/help/adding-a-200-page-for-client-side-routing" target="_blank" rel="noopener noreferrer"><code>pushState API</code></a>.
                </p>
                <p>If you run into an aborted error, try to <a href="https://github.com/sintaxi/surge/issues/55" target="_blank" rel="noopener noreferrer">run the <code>surge</code> command again</a>.</p>
            </div>
        </div>
    )
}

export default Surge
