import React from "react";
import Header from "./Header";
import About from "./About";
import Skills from "./Skills";

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
        </div>
    );
}

export default App;