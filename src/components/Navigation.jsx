import { Link } from "react-router-dom";

const Navigation = () => (
    <nav>
        <div>
            <Link to="/">TRIBUTE</Link>
        </div>
        <ul>
            <li>
                <Link to="/tributes">Tributes</Link>
            </li>
            <li>
                <Link to="/events">Events</Link>
            </li>
            <li>
                <Link to="/maps">Maps</Link>
            </li>
            <li>
                <Link to="/items">Items</Link>
            </li>
            <li>
                <Link to="/games">Games</Link>
            </li>
        </ul>
    </nav>
);

export default Navigation;
