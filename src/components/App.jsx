import React from "react";
import Header from "./Header";

function App(){
    return(
        <div>
            <Header/>
            <div className="introduction">
                <img 
                    className="epcot-img" 
                    src="/images/brian-mcgowan-MIdLSFHYuMk-unsplash.jpg" 
                    alt="epcot-img"  
                />
            </div>
        </div>
    );
}

export default App;