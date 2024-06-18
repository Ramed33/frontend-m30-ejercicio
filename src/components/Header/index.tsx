import { Link } from "react-router-dom";
import "./styles.css";

const Header = () => {
    return (
        <header >
            <h1>On Line Store</h1>
                <nav>
                    <Link to="/login">Login</Link>
                </nav>
        </header>
    );
}

export default Header;