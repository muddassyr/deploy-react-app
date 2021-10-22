import React from 'react'

const Netlify = () => {
    return (
        <div>
            <div>
                <h2 id="netlifyhttpswwwnetlifycom">1. Netlify</h2>
                <p><a href="https://www.netlify.com/" target="_blank" rel="noopener noreferrer">Netlify</a> is one
                    of the
                    most popular services out there for web deployment. It easily imports projects from GitHub,
                    GitLab, and
                    Bitbucket and is widely used with <a href="#/why-you-should-be-using-jamstack/" target="_blank" rel="noopener noreferrer">JAMstack</a>. One cool feature is that it creates a random
                    name for every project, and the names are quite catchy.</p>
                <p>To get started, create a <a href="#/why-you-should-be-using-jamstack/" target="_blank" rel="noopener noreferrer">Netlify account</a>&nbsp;if you haven’t already.</p>
                <p><img width={720} height={336} src="./docs/netlify-create-account-1.png" alt="Create Netlify Account" sizes="(max-width: 720px) 100vw, 720px" /></p>
                <p>Like Vercel, you can choose to deploy your app either through Netlify Dashboard or Netlify CLI.
                </p>
                <h3 id="netlifydragndrop">Netlify drag-and-drop</h3>
                <p>One of the coolest features that Netlify offers is the ability to drag and drop your site folder
                    and
                    deploy your app like magic.</p>
                <p>For your React app, you’ll have to drag and drop the <code>build</code>&nbsp;folder on Netlify
                    Dashboard. Run <code>npm run build</code> beforehand to deploy the latest build.</p>
                <p><img src="./docs/netlify-drag-and-1-1.gif" alt="Netlify Drag-and-Drop" width={720} height={406} /></p>
                <p>You can also connect GitHub, GitLab, or Bitbucket, depending on where your project is stored.</p>
                <p><img width={720} height={314} src="./docs/netlify-create-new-site-1.png" alt="Create New Site in Netlify" sizes="(max-width: 720px) 100vw, 720px" /></p>
                <p>Choose the project repository that you need to deploy.</p>
                <p><img src="./docs/netlify-project-repo-1.png" alt="Netlify Project Repo" width={720} height={550} sizes="(max-width: 720px) 100vw, 720px" /></p>
                <p>Once you’ve selected the project, the final step is the configuration, which Netlify will
                    autodetect if the project is initialized with <code>create-react-app</code>.</p>
                <p><img width={720} height={717} src="./docs/netlify-configurations-1.png" alt="Configurations in Netlify" sizes="(max-width: 720px) 100vw, 720px" /></p>
                <p>Click “Deploy site” and your app will be deployed.</p>
                <h3 id="netlifycli">Netlify CLI</h3>
                <p>If you prefer deploying apps through the terminal, here are the steps to do so with Netlify CLI.
                </p>
                <p>To deploy the latest build, run <code>npm run build</code> beforehand.</p>
                <p>Next, install <code>netlify-cli</code> globally.</p>
                <pre>npm install netlify-cli -g</pre>
                <p>In your project root directory, run the following command.</p>
                <pre>netlify deploy</pre>
                <p>You might be prompted to grant access to Netlify CLI. Click “Authorize.”</p>
                <p><img src="./docs/netlify-cli-authorize-app-1.png" alt="Netlify CLI — Authorize App" width={720} height={254} sizes="(max-width: 720px) 100vw, 720px" /></p>
                <p>After successful authorization, you’ll see a successful login message in the terminal.</p>
                <pre>You are now logged into your Netlify account!</pre>
                <p>The following steps will guide you through the prompts that you’ll encounter in the
                    terminal.</p>
                <p>First, you’ll be asked to link this project to a site, since this is the first time
                    you’re
                    deploying this app. Select <code>Create configure a new site</code>.</p>
                <pre>This folder isn't linked to a site yet{"\n"}{"  "}? What would you like to do?</pre>
                <blockquote>
                    <pre>Link this directory to an existing site{"\n"}{"  "}Create configure a new site</pre>
                </blockquote>
                <p>Then you’ll be asked for the <code>Team</code>. Unless you’re already using Netlify
                    in your
                    local machine, chances are you will see only one option with your name, select it.</p>
                <pre>? Team:</pre>
                <blockquote>
                    <pre>ASHUTOSH KUMAR SINGH's team</pre>
                </blockquote>
                <p>The next prompt is <code>Site name</code>. This is an optional field, as you can see below. If
                    you
                    already have a name in mind, type that and hit enter. If you leave this blank, Netlify will give
                    this site
                    a random name that you can change later.</p>
                <pre>Choose a unique site name (e.g. netlify-thinks-lelouchB-is-great.netlify.app) or leave it blank for a random name. You can update the site name later.{"\n"}{"  "}? Site name (optional):</pre>
                <p>After this step, your site will be created and you’l be asked for a
                    <code>Publish directory</code>.
                    Type <code>build</code> here.
                </p>
                <pre>Please provide a publish directory{"\n"}{"  "}{"\n"}{"  "}? Publish directory build</pre>
                <p>With this, your site will be published and you will be provided a draft URL.</p>
                <pre>Deploying to draft URL...{"\n"}{"  "}✔ Finished hashing 19 files{"\n"}{"  "}✔ CDN requesting 10 files{"\n"}{"  "}✔ Finished uploading 10 assets{"\n"}{"  "}✔ Draft deploy is live!{"\n"}{"  "}{"\n"}{"  "}Logs:https://app.netlify.com/sites/serene-fermi-6d50a8/deploys/5f1194c3b903cadb238eabb4 {"\n"}{"  "}Website Draft URL: https://5f1194c3b903cadb238eabb4--serene-fermi-6d50a8.netlify.app{"\n"}{"  "}{"\n"}{"  "}If everything looks good on your draft URL, deploy it to your main site URL with the --prod flag.{"\n"}{"  "}netlify deploy --prod</pre>
                <p>Go to this draft URL. If everything checks out, you can deploy the website to the main site URL.
                </p>
                <p>Run the following command to deploy to production.</p>
                <pre>netlify deploy --prod</pre>
                <p>It will ask for the <code>Publish directory</code> one final time. Type <code>build</code> and
                    hit enter.
                    You’ll be provided with two URLs.</p>
                <pre>Unique Deploy URL: https://5f11977085ef8fafe7535ff9--serene-fermi-6d50a8.netlify.app{"\n"}{"  "}Website URL:{"       "}https://serene-fermi-6d50a8.netlify.app{"\n"}{"  "}</pre>
                <p>The difference between these two URLs is that <code>Unique Deploy URL</code> points to a specific
                    version
                    of your application. For example, if you make a change in your application and deploy again,
                    you’ll
                    get another <code>Unique Deploy URL</code> that is specific for that change. Your
                    <code>Website URL</code>
                    is the main URL, which corresponds to the latest version of your application.
                </p>
                <p>You might encounter a 404 error if your application uses a router, such as React Router.</p>
                <p>In your <code>build</code> folder, create a new file called <code>_redirects</code> and add the
                    following
                    to it.</p>
                <pre>/*{"    "}/index.html{"  "}200{"\n"}{"  "}</pre>
        <p>You’llneed to redeploy your application. This <a href="https://community.netlify.com/t/404-error-when-submitting-form/6554" target="_blank" rel="noopener noreferrer">question posted to the Netlify community</a> might help.</p>
      </div>
        </div>
    )
}

export default Netlify
