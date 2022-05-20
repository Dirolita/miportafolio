import Navbar from "../components/navbar/Navbar";
import '../components/contestu/contenest.css';
import {Link}  from "react-router-dom";
import {getAllEstudies} from '../Estudios/estudios';
function Estudies(){
    const estudies= getAllEstudies();
    return(
        <div>
        <Navbar/>
        <ul>
            {estudies.map(estudie=>
                <li Key={estudie.id}>
                   <div className="estu-titulo">{estudie.Inst}</div>   <br/>
                    {estudie.Titulo}<br/>
                    <br/>
                    <Link to= {`${estudie.id}`}className="btn-est">Ver mas</Link>
                </li>
                )}
                 
        </ul>
        </div>
    );
    
    }
    export default Estudies;