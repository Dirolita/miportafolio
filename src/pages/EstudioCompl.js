import {useParams}  from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import {getEt} from "../Estudios/estudios";
import "../components/contestu/contenest.css";

function EstudioCompl(){
const useparm=useParams();
const  est=getEt(parseInt(useparm.id));
return(
<div>
    <Navbar/>
    <div className="detalles-est">
    <h2>Detalles</h2>
    <h3>Nombre de la Institución academica: </h3>
    <p>{est.Inst}</p>
    <h3>Titulo recibido: </h3>
    <p>{est.Titulo}</p>
    <h3>Año de finalización: </h3>
    <p>{est.anio}</p>
    <h3>Detalles: </h3>
    <p>{est.compl}</p>
    </div>
</div>
);
}
export default EstudioCompl;

