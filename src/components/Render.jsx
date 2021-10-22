import React from 'react'

const Render = () => {
    return (
        <div>
             <div>
        <h2 id="renderhttpsrendercom">6. Render</h2>
        <p><a href="https://render.com/" target="_blank" rel="noopener noreferrer">Render</a>, the winner of
          Startup
          Battlefield at <a href="https://github.com/sintaxi/surge/issues/55" target="_blank" rel="noopener noreferrer">Disrupt SF 2019</a>, founded in 2018, is a new and rising cloud
          platform.</p>
        <p>While hosting sites on Render is free, you need to <a href="https://render.com/pricing" target="_blank" rel="noopener noreferrer">pay for other services</a> such as databases, cron
          jobs, Docker containers,
          etc. Both Heroku and Render classify as platform-as-a-service.</p>
        <p>Before you deploy, make sure your project is stored in a GitHub repository.</p>
        <p>Create an account on <a href="https://dashboard.render.com/" target="_blank" rel="noopener noreferrer">Render</a>.</p>
        <p>Next, click “New Web Service” on the dashboard.</p>
        <p><img src="./docs/render-new-web-service-1.png" alt="Create New Web Service in Render" width={720} height={449} sizes="(max-width: 720px) 100vw, 720px" /></p>
        <p>If this is your first time using Render, you’ll need to connect your GitHub or GitLab,
          wherever
          your repository is stored.</p>
        <p><img src="./docs/render-new-web-service-prompt-1.png" alt="Create New Web Service in Render" width={720} height={46} sizes="(max-width: 720px) 100vw, 720px" /></p>
        <p>Once connected, search for your project repository and select it. After this, you’ll need
          to give
          your web service a unique name. Render will auto-detect if your application is bootstrapped with
          <code>create-react-app</code> and fill the configuration accordingly.
        </p>
        <p><img service details in  width={720} height={475} src="./docs/render-web-service-details-1.png" alt="Web Service Details in Render" sizes="(max-width: 720px) 100vw, 720px" /></p>
        <p>Click “Create Web Service,” after which your project will be deployed.</p>
        <p><img src="./docs/render-deployment-1.png" alt="Render Deployment" width={720} height={432} sizes="(max-width: 720px) 100vw, 720px" /></p>
        <h3>Client-side routing</h3>
        <p>If your project uses something like React router, you’ll need to redirect all routing
          requests to
          <code>index.html</code>. Go to the “Redirects/Rewrites” tab for your service, add a
          rule, and
          save the changes.
        </p>
        <p><img  routing in  width={720} height={237} src="./docs/render-client-side-routing-1.png" alt="Client-Side Routing in Render" sizes="(max-width: 720px) 100vw, 720px" /></p>
      </div>
        </div>
    )
}

export default Render
