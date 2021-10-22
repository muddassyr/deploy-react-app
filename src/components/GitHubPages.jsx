import React from 'react'

const GitHubPages = () => {
    return (
        <div>
            <div>
                <h2 id="githubpageshttpspagesgithubcom">2. GitHub Pages</h2>
                <p>GitHub Pages is one of the fastest and most widely used methods for beginners to deploy websites.
                    It’s easier to maintain than many other tools described in this guide. With <a href="https://github.com/marketplace?type=actions" target="_blank" rel="noopener noreferrer">GitHub
                        actions</a>, you can trigger automatic deployments, configure CI/CD, and much more.</p>
                <p>Create a GitHub account if you haven’t already, then create a repository for your application.
                </p>
                <p>In your terminal, initialize the local directory as a Git repository, commit all the changes, and
                    push it
                    to remote by running the following command in the project root.</p>
                <pre>git init{"\n"}{"  "}git add .{"\n"}{"  "}git commit -m "initial commit"{"\n"}{"  "}git remote add origin .git{"\n"}{"  "}git push -u origin master</pre>
                <p>You’ll get this repository URL when you create a new repository.</p>
                <p><img src="./docs/github-repo-url-1.png" alt="GitHub Repo URL" width={720} height={81} sizes="(max-width: 720px) 100vw, 720px" /></p>
                <p>With this, your project will be pushed to GitHub.</p>
                <p>In your project’s <code>package.json</code> add a <code>homepage</code> field, like this:</p>
                <pre>"homepage": "https://myusername.github.io/my-app"</pre>
                <p><code>myusername</code> is your GitHub username and <code>my-app</code> is your repository’s
                    name.</p>
                <p>Next, install <code>gh-pages</code> in your project.</p>
                <pre>npm install --save gh-pages</pre>
                <p>In your <code>package.json</code>, add the following scripts.</p>
                <pre>"scripts": {"{"}{"\n"}{"  "}+{"   "}"predeploy": "npm run build",{"\n"}{"  "}+{"   "}"deploy": "gh-pages -d build",{"\n"}{"      "}"start": "react-scripts start",{"\n"}{"      "}"build": "react-scripts build",{"\n"}{"      "}"test": "react-scripts test",{"\n"}{"      "}"eject": "react-scripts eject"{"\n"}{"  "}{"}"}</pre>
                <p><code>predeploy</code> and <code>deploy</code> are the only additions to the scrips.
                    <code>predeploy</code> will automatically run before <code>deploy</code> and make sure the
                    latest build of
                    the application is deployed.
                </p>
                <p>Run the following command to deploy the application.</p>
                <pre>npm run deploy</pre>
                <p>This command will create a new branch named <code>gh-pages</code> in your project’s GitHub
                    repository.
                    You may need to set a source under the GitHub Pages option in your repository’s settings to
                    <code>gh-pages branch</code>.
                </p>
                <p><img src="./docs/github-gh-pages-branch-1.png" alt="gh-pages Branch" width={720} height={386} sizes="(max-width: 720px) 100vw, 720px" /></p>
            </div>
        </div>
    )
}

export default GitHubPages
