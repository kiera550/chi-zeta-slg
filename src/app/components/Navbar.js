import 'bootstrap/dist/css/bootstrap.min.css';


export default function MyNavbar() {
    return (
        <nav class = "navbar navbar-expand-lg bg-body-tertiary">
            <div class = "container-fluid">
                <a class = "navbar-brand" href = "#">Chi Zeta</a>
                <button class = "navbar-toggler" type = "button" data-toggle = "collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Home</a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" href="/dashboard/values">Our Values</a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" href="/dashboard/ourEvents">Events</a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" href="/dashboard/ourMembers">Members</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}