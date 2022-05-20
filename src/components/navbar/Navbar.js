import {Link} from 'react-router-dom'; 
import "../navbar/Navbar.css";
function Navbar(){

    return(
        <nav>
                <h1>Diana Carolina Serrano</h1>
            <Link to="/home" className="item">Home</Link>

            <Link to="/about-me" className='item'>About me</Link>
              
            
            <Link to="/jobs" className='item'>Jobs</Link>

            <Link to="/skills" className='item'>Skills</Link>

            <Link to ="/Studies" className='item'>Studies</Link>
        </nav>
    );
}
export default Navbar;