import React from 'react'

const Heroku = () => {
    return (
        <div>
            <div>
                <h2 id="herokuhttpswwwgooglecomurlsatrctjqesrcssourcewebcdcadrjauact8ved2ahukewj_sdwttbqahwfibcahdwjbo4qfjaaegqiaracurlhttps3a2f2fwwwherokucom2fusgaovvaw1v4lhsv6mb_lzj6uucuxps">
                    3. Heroku</h2>
                <p><a href="https://www.heroku.com/" target="_blank" rel="noopener noreferrer">Heroku</a> is a cloud
                    application platform that has attracted a large number of developers since its launch in 2007.
                    One reason
                    for this is that it supports most programming languages, including the likes of Go, Node.js,
                    Clojure, and
                    more.</p>
                <h3 id="herokucli">Heroku CLI</h3>
                <p>Like most of the other services we’ve discussed thus far, start by creating a free account
                    on <a href="https://signup.heroku.com/">Heroku</a>.</p>
                <p>Install <code>heroku-cli</code> globally by running the following command.</p>
                <pre>npm install -g heroku</pre>
                <p>You can read about other installation methods in the <a href="https://devcenter.heroku.com/articles/heroku-cli" target="_blank" rel="noopener noreferrer">official docs</a>.</p>
                <p>Log into <code>heroku-cli</code>.</p>
                <pre>heroku login</pre>
                <p>You’ll be prompted to log into your account in the browser. Click “Log In.”</p>
                <p><img src="./docs/heroku-cli-login-1-e1596674941616.png" alt="Heroku CLI Login" width={400} height={330} /></p>
                <p>We’ll use <a href="https://github.com/mars/create-react-app-buildpack#user-content-create-the-heroku-app" target="_blank" rel="noopener noreferrer">Heroku Buildpack for create-react-app</a> for
                    quick
                    deployment. Below is all the code you’ll need; you can copy/paste and deploy in one step.
                </p>
                <pre>git init{"\n"}{"  "}heroku create -b https://github.com/mars/create-react-app-buildpack.git{"\n"}{"  "}git add .{"\n"}{"  "}git commit -m "react-create-app on Heroku"{"\n"}{"  "}git push heroku master{"\n"}{"  "}heroku open</pre>
                <p>This might be the <a href="https://blog.heroku.com/deploying-react-with-zero-configuration" target="_blank" rel="noopener noreferrer">fastest way to deploy via terminal</a> because
                    yiuy don’t have
                    to answer any prompts as with other CLIs.</p>
                <h3 id="herokudashboard">Heroku dashboard</h3>
                <p>You can aso deploy with Heroku via the dashboard.</p>
                <p>Make sure your project is stored in a GitHub repository.</p>
                <p>Go to your <a href="https://blog.heroku.com/deploying-react-with-zero-configuration" target="_blank" rel="noopener noreferrer">Heroku dashboard</a>, click “New,” and
                    then click “Create
                    new app.”</p>
                <p><img src="./docs/heroku-dashboard-create-new-app-1.png" alt="Heroku Dashboard — Create New App" width={720} height={85} sizes="(max-width: 720px) 100vw, 720px" /></p>
                <p>You’ll be prompted to give your project a name. Type your application name and click
                    “Create
                    app.”</p>
                <p><img src="./docs/heroku-cli-app-name-1.png" alt="Heroku CLI — Name App" width={720} height={354} sizes="(max-width: 720px) 100vw, 720px" /></p>
                <p>After creating an app, sync your GitHub repository. You’ll see something like this on your
                    app
                    dashboard.</p>
                <p><img width={720} height={76} src="./docs/heroku-deployment-method-1.png" alt="Heroku Deployment Method" sizes="(max-width: 720px) 100vw, 720px" /></p>
                <p>Once you’ve successfully connected your GitHub to Heroku, you can search for the project
                    repository
                    and deploy it.</p>
                <p>Select your project from the list of repositories.</p>
                <p><img width={720} height={155} src="./docs/heroku-connect-to-github-1.png" alt="Heroku — Connect to GitHub" sizes="(max-width: 720px) 100vw, 720px" /></p>
                <p>You’ll have two choices: manual deploy or automatic deploy. For the purpose of this
                    tutorial,
                    we’ll go with manual deploy.</p>
                <p>Click “Deploy Branch” under “Manual Deploy” and your application will be
                    deployed
                    once the build process completes.</p>
                <p><img src="./docs/heroku-manual-deploy-1.png" alt="Heroku Manual Deploy" width={720} height={133} sizes="(max-width: 720px) 100vw, 720px" /></p>
            </div>
        </div>
    )
}

export default Heroku
