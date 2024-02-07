import { ReactComponent as GithubLogo } from './svg/github-mark-white.svg'

function PageHeader() {
    return (
        <header className="App-header">
            <div className="header-content">
                <a href="https://github.com/SpectreSpect/steam-reviews-prediction-website" className="github-logo">
                    <GithubLogo width="60" height="60" viewBox="0 0 100 100"
                            fill="none"/>
                </a>
                
                <div className="header-text">
                    Steam review prediction
                </div>
            </div>
        </header>
    );
}

export default PageHeader;