import React from 'react';
import './Style.css';

function SVGComponent() {
    return (
        <div><p className="SVGtitle" ><strong>SVG (componente)</strong></p>
        <svg width="600" height="600" className="SVG">
            
            <foreignObject  className="foreignObject">
                <div className="DIV" >
                    <p id="topleft"><strong><center>DIV interior</center></strong></p>
                    <p id="topright">topright</p>
                    <p id="middle">middle</p>
                    <p id="bottomleft">bottomleft</p>
                    <p id="bottomright">bottomright</p>
                <button>click</button>
                </div>                
            </foreignObject>             
        </svg>  
        </div>
    );
  }
  
  
  export default SVGComponent;