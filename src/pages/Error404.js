import "../components/error/error.css"
import Navbar from "../components/navbar/Navbar";
function Error404(){
    return(
        <div>
            <Navbar/>
            <div className="error">Lo sentimos, esta pagina no esta disponible</div>
        </div>
        
    );
    }
    export default Error404;