import '../contenthome/Contenth.css';
import Foto from './images/foto.PNG' 
function Contenth(){

    return(
        <section className="Cont-h">
            <div className='cont-h-1'>
                <div className='img-fon-cont'>
                </div>
                <div className='cont-h-prr'>
                    <p><strong>Hola</strong></p>
                    <p>Soy Diseñadora Front-end, Analista y Desarrolladora de sistemas, realice mis estudios en Kuepa Tech power y en 
                        el Servico Nacional de Aprendizaje, tengo experiencia en manejo de bases de datos en MYSQL Y SQL SERVER, 
                        me estoy capcitando en los servicios de AZURE  y AWS, me encanta aprender, aportar y trabajar en equipo.
                    </p>
                </div>
                <div className="cont-foto">
                    <img src={Foto}/>
                </div>
            </div>
        </section>
    );
}
export default Contenth;