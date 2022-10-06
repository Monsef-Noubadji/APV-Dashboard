import { Link } from "react-router-dom";
import '../css/not-found.css'
const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2 className="nf">404 Not Found :(</h2>
            <p className="nf-p">We couldn't find the page you are looking for</p>
            <Link to="/" className="nf-l">Back to Homepage</Link>
            </div>
     );
}
 
export default NotFound;