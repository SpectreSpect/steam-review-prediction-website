import { ReactComponent as GithubLogo } from './svg/github-mark-white.svg'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="header-content">
          {/* <div className="github-logo">
          </div> */}
          <a href="https://github.com/SpectreSpect/steam-review-vote-prediction" className="github-logg">
            <GithubLogo width="60" height="60" viewBox="0 0 100 100"
                    fill="none"/>
          </a>
          
          <div className="header-text">
            Steam review prediction
          </div>
        </div>
      </header>
      <div className="content">
        <div className="prediction-panel-container">
          <div className="prediction-result">
            Positive
          </div>
          <form className="prediction-form">
            <textarea className="prompt-textarea"></textarea>
            <button className="predict-button">Predict</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
