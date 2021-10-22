import React from 'react'

const GitLabPages = () => {
    return (
        <div>
             <div>
        <h2 id="10gitlabpages">4. GitLab Pages</h2>
        <p>You can also use <a href="https://docs.gitlab.com/ee/user/project/pages/" target="_blank" rel="noopener noreferrer">GitLab pages</a> to publish static sites directly from the
          repository in
          GitLab. With GitLab pages, you can easily connect your custom domains and TLS certificates.</p>
        <p>Create a <a href="https://gitlab.com/users/sign_up" target="_blank" rel="noopener noreferrer">GitLab</a>
          account if you haven’t already.</p>
        <p>After creating an account, you will see the following options to add your React app.</p>
        <p><img src="./docs/gitlab-pages.png" alt="GitLab Pages" width={720} height={323} sizes="(max-width: 720px) 100vw, 720px" /></p>
        <p>If your project is already present on GitHub, then select <strong>Import project</strong> and
          import the
          project. Otherwise, select&nbsp;<strong>Create blank project</strong>&nbsp;and create an empty project.
        </p>
        <p>Give your project a name and click <strong>Create project</strong>.</p>
        <p><img src="./docs/github-pages-create-project.png" alt="Creating a Project in GitLab Pages" width={720} height={453} sizes="(max-width: 720px) 100vw, 720px" /></p>
        <p>On the next page, you’ll see various commands to add your React project, configured
          according to
          your credentials.</p>
        <p>In your terminal, initialize the local directory as a Git repository, commit all the changes, and
          push it
          to remote by running the following command in the project root.</p>
        <pre>git init{"\n"}{"  "}git remote add origin <a href="#/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="4d2a24390d2a2439212c2f632e2220">[email&nbsp;protected]</a>:&lt;username/project-name&gt;.git{"\n"}{"  "}git add .{"\n"}{"  "}git commit -m "Initial commit"{"\n"}{"  "}git push -u origin master{"\n"}{"  "}</pre>
        <p>Be sure to replace <code>&lt;username/project-name&gt;</code> with your username and project
          name. For
          example:</p>
        <pre>git remote add origin <a href="#/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="4d2a24390d2a2439212c2f632e2220">[email&nbsp;protected]</a>:lelouchB/react-material-ui.git{"\n"}{"  "}</pre>
        <p>In your project’s <code>package.json</code>, add a <code>homepage</code> field.</p>
        <pre>"homepage": "https://myusername.gitlab.io/my-app"{"\n"}{"  "}</pre>
        <p><code>myusername</code> is your username and <code>my-app</code> is the name of your project. For
          example:</p>
        <pre>"homepage":"https://lelouchB.gitlab.io/react-material-ui/"{"\n"}{"  "}</pre>
        <p>Create a new file named <code>.gitlab-ci.yml</code> and add the following code to it.</p>
        <pre>image: node:10 # change to match your node version{"\n"}{"  "}{"\n"}{"  "}cache:{"\n"}{"    "}paths:{"\n"}{"      "}- node_modules/{"\n"}{"  "}{"\n"}{"  "}before_script:{"\n"}{"    "}- rm -rf build{"\n"}{"    "}- npm install{"\n"}{"  "}{"\n"}{"  "}pages:{"\n"}{"    "}stage: deploy{"\n"}{"    "}script:{"\n"}{"      "}- npm run build{"\n"}{"      "}- rm -rf public{"\n"}{"      "}- mv build public{"\n"}{"    "}artifacts:{"\n"}{"      "}paths:{"\n"}{"        "}- public{"\n"}{"    "}only:{"\n"}{"      "}- master{"\n"}{"  "}</pre>
        <p>After committing this file, a pipeline will start. This will deploy your React app to GitLab
          pages. You
          can see this pipeline under <code>CI/CD</code> tab.</p>
        <p><img  width={500} height={631} src="./docs/gitlab-pages-pipelines-1.png" alt="GitLab Pages Pipelines" sizes="(max-width: 500px) 100vw, 500px" /></p>
        <p>After the pipeline has passed successfully, it may take up to 30 minutes before the site is
          available
          after the first deployment, so be patient.</p>
        <p>
          <img width={720} height={202} src="./docs/gitlab-pages-pipeline-passed.png" alt="GitLab Pages Pipeline Passed" sizes="(max-width: 720px) 100vw, 720px" />
        </p>
        <p>You can manage your React app under the <code>Settings/Pages</code> tab.</p>
        <p><img src="./docs/gitlab-pages-manage-react-app.png" sizes="(max-width: 720px) 100vw, 720px" /></p>
        <p>Your app will be deployed to the same URL, as mentioned in the <code>homepage</code> field in
          <code>package.json</code>.
        </p>
      </div>
        </div>
    )
}

export default GitLabPages
