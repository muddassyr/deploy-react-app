import React from 'react'

const Firebase = () => {
    return (
        <div>
            <div>
        <h2 id="firebasehttpswwwgooglecomurlsatrctjqesrcssourcewebcdcadrjauact8ved2ahukewilbymy87qahxkjoykhzkpap0qfjaaegqiaracurlhttps3a2f2ffirebasegooglecom2fusgaovvaw3fzcjfkgyyxdupcds8vwfg">
          8. Firebase</h2>
        <p><a href="https://firebase.google.com/" target="_blank" rel="noopener noreferrer">Firebase</a> is
          an
          entire platform that you can use to develop and scale your application. Along with hosting, it
          offers <a href="https://firebase.google.com/products" target="_blank" rel="noopener noreferrer">myriad other
            services</a>, including authentication, Cloud Firestore, cloud functions, and more.</p>
        <p>If you haven’t already, create an account on <a href="https://firebase.google.com/products" target="_blank" rel="noopener noreferrer">Firebase</a> and then create a new project.</p>
        <p><img width={720} height={336} src="./docs/firebase-create-new-project-1.png" alt="Create New Project in Firebase" sizes="(max-width: 720px) 100vw, 720px" /></p>
        <p>Install Firebase CLI globally. Having it installed globally makes it easier to use in different
          projects.
        </p>
        <pre>npm install -g firebase-tools</pre>
        <p>Login with your Firebase/Google account.</p>
        <pre>firebase login</pre>
        <p>You’ll be prompted with a URL in the terminal that will open in the browser to verify.
          After giving
          the necessary permissions, you’ll see a successful login message.</p>
        <p>
          <img src="./docs/firebase-cli-login-successful-1-e1596675731380.png" width={400} height={187} alt="" />
          </p>
        <p>Next, go to your project root directory and run the following command to initialize a Firebase
          project.
        </p>
        <pre>firebase init</pre>
        <p>You’ll be asked to confirm. Reply <code>Yes</code>.</p>
        <pre> ? Are you ready to proceed? Yes{"\n"}{"  "}</pre>
        <p>Choose the hosting option.</p>
        <pre>? Which Firebase CLI features do you want to setup for this folder? Press Space to select features, then Enter to confirm your choices.{"\n"}{"   "}◯ Database: Deploy Firebase Realtime Database Rules{"\n"}{"   "}◯ Firestore: Deploy rules and create indexes for Firestore{"\n"}{"   "}◯ Functions: Configure and deploy Cloud Functions{"\n"}{"  "}❯◯ Hosting: Configure and deploy Firebase Hosting sites{"\n"}{"   "}◯ Storage: Deploy Cloud Storage security rules{"\n"}{"  "}</pre>
        <p>When asked to choose the Firebase project associated with your application, since you already
          created a
          project in the first step, choose <code>Use an existing project</code>. Otherwise, you can
          select
          <code>Create a new project</code>.
        </p>
        <pre>=== Project Setup{"\n"}{"  "}{"\n"}{"  "}First, let's associate this project directory with a Firebase project.{"\n"}{"  "}You can create multiple project aliases by running firebase use --add,{"\n"}{"  "}but for now we'll just set up a default project.{"\n"}{"  "}{"\n"}{"  "}? Please select an option: (Use arrow keys){"\n"}{"  "}&gt; Use an existing project{"\n"}{"    "}Create a new project{"\n"}{"    "}Add Firebase to an existing Google Cloud Platform project{"\n"}{"    "}Don't set up a default project{"\n"}{"  "}</pre>
        <p>If you choose to <code>Create a new project</code>, you’ll be asked to provide a unique
          project ID.
        </p>
        <p>Lastly, change the default <code>public</code> folder to <code>build</code> for your
          <code>create-react-app</code> project. If you’ve not initialized the project with
          <code>create-react-app</code>, choose the appropriate build folder.
        </p>
        <pre>=== Hosting Setup{"\n"}{"  "}{"\n"}{"  "}Your public directory is the folder (relative to your project directory) that{"\n"}{"  "}will contain Hosting assets to be uploaded with firebase deploy. If you{"\n"}{"  "}have a build process for your assets, use your build's output directory.{"\n"}{"  "}{"\n"}{"  "}? What do you want to use as your public directory? build{"\n"}{"  "}? Configure as a single-page app (rewrite all urls to /index.html)? Yes{"\n"}{"  "}</pre>
        <p>If you’ve already built the project, you’ll be asked whether to overwrite or not.
          Answer
          <code>No</code>.
        </p>
        <pre>? File public/index.html already exists. Overwrite? No{"\n"}{"  "}</pre>
        <p>With this, <code>firebase init</code> is complete.</p>
        <p>Before proceeding to the next step, build your React project.</p>
        <pre> npm run build{"\n"}{"  "}</pre>
        <p>The next and final step is to deploy the project. Run the following command.</p>
        <pre>firebase deploy</pre>
        <p>Once the process completes, you’ll see the deployed links in the terminal.</p>
        <pre>+{"  "}Deploy complete!{"\n"}{"  "}{"\n"}{"  "}Project Console: https://console.firebase.google.com/project/react-project/overview{"\n"}{"  "}Hosting URL: https://react-project.web.app{"\n"}{"  "}</pre>
      </div>
        </div>
    )
}

export default Firebase
