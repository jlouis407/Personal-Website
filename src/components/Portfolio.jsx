import React from "react";

function Portfolio(){
    return(
        <div className="portfolio-div">
            <h1 className="portfolio-h1">Portfolio</h1>
            
            <div className="portfolio-row">
                <div className="portfolio-column">
                    <h2>Phantomopolis</h2>
                    <a href="https://infinite-dawn-62356.herokuapp.com">
                        <img className="portfolio-img" src="/images/phantomopolis-app.png" alt="phantomopolis"/>
                    </a>
                    <a className="github-repo" href="https://github.com/jlouis407/Phantomopolis-App">Github Repo</a>
                </div>
                <div className="portfolio-column">
                    <h2>Hip-Hop Trivia</h2>
                    <a href="https://stormy-fjord-45872.herokuapp.com">
                        <img className="portfolio-img" src="/images/hip-hop-trivia.png" alt="hip-hop-trivia"/>
                    </a>
                    <a className="github-repo" href="https://github.com/jlouis407/Hip-Hop-Trivia">Github Repo</a>
                </div>
            </div>


        </div>
    )
}

export default Portfolio;