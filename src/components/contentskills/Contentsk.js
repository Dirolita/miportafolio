import React from "react";
import "../contentskills/Contentsk.css";
import Html from "../contentskills/images/html.png"; 
import css from "../contentskills/images/css_origina.png";
import Js from "../contentskills/images/javascript.png";
import Fg from "../contentskills/images/figma_logo.png";
import Sql from "../contentskills/images/mysql.png";
import Cuatro from "../contentskills/images/cuatrostr.png";
import Tres from "../contentskills/images/tresstar.png";
import Cinco from "../contentskills/images/cincostar.png";


function Contentsk(){
    return(
        <section>
            <div className="skll">
            <div class="card">
            <img src={Html} class="card-img-top" alt="..."/>
            <div class="card-body">
            <img src={Cuatro} class="card-text"/>
            </div>
            </div>
            
            <div class="card">
            <img src={css} class="card-img-top" alt="..."/>
            <div class="card-body">
            <img src={Cuatro} class="card-text"/>
            </div>
            </div>

            <div class="card">
            <img src={Js} class="card-img-top" alt="..."/>
            <div class="card-body">
            <img src={Tres} class="card-text"/>
            </div>
            </div>

            <div class="card">
            <img src={Fg} class="card-img-top" alt="..."/>
            <div class="card-body">
            <img src={Cuatro} class="card-text"/>
            </div>
            </div>
            </div>



        </section>
    );

}
export default Contentsk;