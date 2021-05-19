import React from "react";
import Header from "./Header";
import About from "./About";
import Skills from "./Skills";
import Portfolio from "./Portfolio";
import Bottom from "./Bottom";

function App(){
    return(
        <div>
            <Header/>
                <div className="introduction">
                    <div className="epcot">
                        <img 
                            className="epcot-img" 
                            src="/images/brian-mcgowan-MIdLSFHYuMk-unsplash.jpg" 
                            alt="epcot-img"  
                        />
                        <h2 className="epcot-sub-caption">Aspiring Web Developer from Orlando.</h2>
                    </div>
                </div>
            <About/>
            <Skills/>
            <Portfolio/>
            <Bottom/>
        </div>
    );
}

export default App;