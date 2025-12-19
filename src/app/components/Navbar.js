import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';

export default function MyNavbar() {
    return (
        <nav className = "navbar navbar-expand-lg navbar-custom">
            <div className = "container-fluid">
                <a className = "navbar-brand" href = "#">Chi Zeta</a>
                <button className = "navbar-toggler" type = "button" data-toggle = "collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="/dashboard/values">Our Values</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="/dashboard/ourEvents">Events</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="/dashboard/ourMembers">Members</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="/dashboard/donate">Donate</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}