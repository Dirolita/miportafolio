import Navbar from "../components/navbar/Navbar";
import {getAllJobs} from '../jobs.js/jobs';
import "../components/contestu/contenest.css";
function Jobs(){
    const jobs= getAllJobs();
    return(
        <div>
        <Navbar/>
        <ul>
            {jobs.map(job=>
                <li Key={job.id}>
                   <div className="estu-titulo"> {job.empresa}</div>  <br/>
                    {job.nombre}  <br/>
                    {job.cargo}   <br/>
                    {job.email}   <br/>
                    {job.anio}
                </li>
                )}
               
        </ul>
        </div>
    );
    
    }
    export default Jobs;