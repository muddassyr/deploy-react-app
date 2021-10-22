import React from 'react'

const Vercel = () => {
    return (
        <div>
            <div>
                <h2 id="vercelhttpsvercelcom">10. Vercel</h2>
                <p><a href="https://vercel.com/docs" target="_blank" rel="noopener noreferrer">Vercel</a>, formerly
                    known as
                    ZEIT, is a revolutionary serverless deployment service designed for React, Angular, Vue, etc.
                    You can
                    easily import projects from GitLab or Bitbucket with Vercel. Automatic SSL is one of the many
                    cool
                    features it offers.</p>
                <p>To deploy Vercel, <a href="https://vercel.com/signup" target="_blank" rel="noopener noreferrer">create a
                    new account</a>. You can quickly login using OAuth.</p>
                <p><img src="./docs/Vercel-login-1.png" alt="Vercel Login" width={720} height={307} sizes="(max-width: 720px) 100vw, 720px" /></p>
                <p>After a successful login, the dashboard screen will appear. You can use either this dashboard or
                    Vercel
                    CLI and deploy it from the terminal. We’ll discuss both methods in more detail.</p>
                <h3 id="dashboard">Dashboard</h3>
                <p>To deploy using the Vercel dashboard, integrate GitHub, GitLab, or Bitbucket, wherever your React
                    application is stored. Click “Import Project” on your panel.</p>
                <p><img src="./docs/vercel-dashboard-1.png" alt="Vercel Dashboard" width={720} height={303} sizes="(max-width: 720px) 100vw, 720px" /></p>
                <p>You can opt either to import the project from the Git repository or use a template, which is
                    another
                    excellent feature of Vercel.</p>
                <div className="code-block code-block-28" style={{ margin: '8px 0', clear: 'both' }}>
                    <a id="blog-personalized-demo-link" href="#">
                        <div className="inline-demo">
                            <h2 style={{ color: '#ffffff' }}>We made a custom demo for <span id="personalized-company-account-name" />.<br />No really. <span style={{ textDecoration: 'underline' }}>Click here to check it out</span>.</h2>
                            <img id="blog-personalized-demo-thumbnail" src="./docs/vercel-import-project-1.png" width={720} height={291} alt="Import Project in Vercel" />
                            <button className="personalize-button">Click here to see the full demo with network
                                requests</button>
                        </div>
                    </a>
                </div>
                <p>Click “Continue” under “From Git Repository.”</p>
                <p><img src="./docs/vercel-import-project-1.png" width={720} height={291} sizes="(max-width: 720px) 100vw, 720px" /></p>
                <p>You may have integrated GitHub, GitLab, or Bitbucket; for the purpose of this tutorial,
                    we’ll
                    assume you used GitHub. At any rate, you’ll have the option to import projects from
                    GitHub, GitLab,
                    or Bitbucket.</p>
                <p>Click “Import Project from GitHub.” If this is your first time using Vercel,
                    you’ll see
                    a screen like this.</p>
                <p><img src="./docs/vercel-import-project-from-github-1.png" alt="Import Project From GitHub" width={720} height={384} sizes="(max-width: 720px) 100vw, 720px" />Click
                    “Install Now For
                    GitHub.”
                    You’ll be prompted to install Vercel for GitHub. Save the setting for GitHub, navigate
                    back to the
                    <a href="https://vercel.com/import/git">import Git page</a>, and you’ll see that your
                    GitHub is now
                    connected. Click “Import Project from GitHub.”
                </p>
                <p><img src="./docs/vercel-import-project-from-github-repo-1.png" alt="Import Project From GitHub" width={720} height={337} sizes="(max-width: 720px) 100vw, 720px" /></p>
                <p>You’ll be prompted to choose which project you want to deploy. Choose the React project and
                    click
                    “Import.” Next, you’ll be prompted to write a project name. Leave it as the
                    default and
                    click “Continue.” When asked for the root directory, choose accordingly and click
                    “Continue.”</p>
                <p>This step is important. If you’ve initialized your React project using
                    <code>create-react-app</code>, Vercel will autodetect it and choose a suitable configuration on
                    its own.
                    Leave the default configuration and click “Deploy.”
                </p>
                <p>If your React app was not initialized using <code>create-react-app</code>, you’l be asked
                    for the
                    configuration. Using the above configuration as an example, fill all the configuration fields
                    and click
                    “Deploy.”</p>
                <p><img src="./docs/vercel-deploy-todo-app-1-e1596675551303.png" width={375} height={492} /></p>
                <p>Your React application will now be deployed within a matter of seconds with two to three preview
                    links.
                </p>
                <h3 id="vercelcli">Vercel CLI</h3>
                <p>The first step is to install vercel globally.</p>
                <pre>npm i -g vercel{"\n"}{"  "}// or{"\n"}{"  "}yarn global add vercel</pre>
                <p>Once vercel is installed, run the following command.</p>
                <pre>vercel login</pre>
                <p>You’ll be prompted to enter the email with which you registered on Vercel. After submitting
                    that,
                    you’ll receive an email to verify your login.</p>
                <p>Next, go to your project root directory and run the following command.</p>
                <pre>vercel</pre>
                <p>You’ll be prompted to answer a few questions. First, confirm that this is the project you
                    want to
                    deploy.</p>
                <pre>? Set up and deploy “path to your project”? [Y/n] y</pre>
                <p>Next, you’ll be asked in which account to deploy this app. It’ll give you a default
                    option;
                    just hit enter.</p>
                <p>After this, you’ll be asked whether to link this to the existing project. Answer
                    <code>N.</code>
                </p>
                <pre>? Which scope do you want to deploy to? Your Vercel Account{"\n"}{"  "}? Link to existing project? [y/N] n</pre>
                <p>The next step is to name your project and specify the path. Since we’re already in the
                    project
                    directory, it’ll be same as the default option, <code>./</code>.</p>
                <pre>? What’s your project’s name? project-name{"\n"}{"  "}? In which directory is your code located? ./</pre>
                <p>It will autodetect whether your project was initialized using <code>create-react-app</code> and
                    configure
                    the settings accordingly. Otherwise, it will ask you to set them. Answer <code>No</code> if
                    asked to
                    override the settings.</p>
                <pre>Auto-detected Project Settings (Create React App):{"\n"}{"  "}- Build Command: `npm run build` or `react-scripts build`{"\n"}{"  "}- Output Directory: build{"\n"}{"  "}- Development Command: react-scripts start{"\n"}{"  "}? Want to override the settings? [y/N] n{"\n"}{"  "}</pre>
                <p>Your project will be deployed.</p>
                <pre>�{"  "}Deployed to production. Run `vercel --prod` to overwrite later (https://vercel.link/2F).{"\n"}{"  "}</pre>
            </div>
        </div>
    )
}

export default Vercel
