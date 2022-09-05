import { Link } from "react-router-dom";
import styled from "styled-components";

const Navigation = ({ className }) => (
    <nav className={className}>
        <div className="nav-logo">
            <Link to="/">TRIBUTE</Link>
        </div>
        <div className="nav-list">
            <Link to="/tributes">Tributes</Link>
            <Link to="/events">Events</Link>
            <Link to="/maps">Maps</Link>
            <Link to="/items">Items</Link>
            <Link to="/games">Games</Link>
        </div>
        {/* <ul className="nav-list">
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
        </ul> */}
    </nav>
);

export default styled(Navigation)`
    min-width: 10rem;
    height: 100vh;
    background-color: #202226;
    font-size: 1.5rem;
    text-align: center;

    .nav-logo a {
        text-decoration: none;
        color: whitesmoke;
    }

    .nav-logo {
        padding: 2rem;
        font-family: "Roboto Slab", sans-serif;
        font-weight: 700;
        letter-spacing: 1rem;
    }

    .nav-list {
        display: flex;
        flex-direction: column;
    }

    .nav-list a {
        padding: 1rem;
        text-decoration: none;
        color: whitesmoke;
    }

    .nav-list a:hover {
        background-color: #333;
    }
`;
