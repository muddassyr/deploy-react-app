import './App.css';
import Vercel from './components/Vercel';
import Netlify from './components/Netlify';
import GitHubPages from './components/GitHubPages';
import GitLabPages from './components/GitLabPages';
import Heroku from './components/Heroku';
import Surge from './components/Surge';
import Render from './components/Render';
import Roast from './components/Roast';
import Firebase from './components/Firebase';
import MoovwebXDN from './components/MoovwebXDN';
import Extra from './components/Extra';

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 mx-auto" id="post-22942">
        <div className="mainheading">
          <h1 className="posttitle">10 ways to deploy a React app for free</h1>
          <h2 className="post-subtitle" />
          <p>
            <span className="post-date"><time className="post-date">
                October 21, 2021 </time></span>
            <span className="dot" />
            <span className="readingtime">14 min read</span>
          </p>
        </div>
        <img width={730} height={487} src="./docs/8-ways-to-deploy-react-apps.png" />

        <article className="article-post my-3">
          <Netlify />
          <GitHubPages />
          <Heroku />
          <GitLabPages />
          <Surge />
          <Render />
          <Roast />
          <Firebase />
          <MoovwebXDN />
          <Vercel />
          <Extra />
        </article>
        </div>
      </div>
    </div>
  );
}

export default App;
