import { Link } from 'react-router';
import useStore from '../state/cart';
import "./Navbar.css";

function Navbar(){
    const { user, cart } = useStore();

    function getTotalItems(){
        let sum = 0

        for(let i=0; i<cart.length; i++)
            sum = sum + cart[i].quantity

        return sum
    }

    return(
        <nav className="navbar navbar-expand-lg bg-dark bg-gradient" data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Coles super</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/catalog">Catalog</Link>
                        </li>

                        <li>
                            <Link className="nav-link" to="/admin">Admin</Link>
                        </li>
                    </ul>
                </div>

                <div className='text-white mx-2'>{user.name} {user.cohort}</div>
                <div classname="ms-4 text-white"><Link to="/cart">🛒 {getTotalItems()} </Link></div>
                
            </div>
        </nav>
    );
}

export default Navbar;


