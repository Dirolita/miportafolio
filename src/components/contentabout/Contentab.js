import '../contentabout/contentab.css';
import Git from './images/github.png';
import Fbk from './images/facebook-square-logo-36.png';
import Inst from './images/instagram-alt-logo-36.png';

function Contentab(){
    return(
            <section class="cont-about">
                <div>
                    <h2>DATOS PERSONALES</h2>
                    <h3>Nombre:</h3>
                    <p>Diana Carolina Serrano Tovar</p>

                    <h3>Nacionalidad:</h3>
                    <p>Colombiana</p>

                    <h3>Recidencia</h3>
                    <p>Bogota/Puente Aranda</p>
                </div>
                <div>
                    <h2>CONTACTO</h2>

                    <h3>Celular:</h3>
                    <p>305-767-6063</p>

                    <h3>Telefono Fijo:</h3>
                    <p>601-403-9892</p>

                    <h3>Correo:</h3>
                    <p>dianacaroserranot@gmail.com</p>
                </div>
                <div>
                    <h2>REDES</h2>
                    <a target="blank" href="https://github.com/Dirolita"><img src={Git}/></a>
                    <a target="blank" href="https://www.facebook.com/dianacarolina.serrano.12/"><img src={Fbk}/></a>
                   <a target="blank" href="https://www.instagram.com/diana_carolina544/" ><img src={Inst}/></a> 
                </div>
            </section>

    );
}
export default Contentab;