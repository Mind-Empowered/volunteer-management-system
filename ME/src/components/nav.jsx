import '../styles/nav.css'

function Nav(){
    return ( <div>
        <nav class="vertical-navbar">
        <div class="logo">
            <img src="https://mind-empowered.org/logo192.png" alt="Logo"/>
        </div>
        <ul class="nav-links">
            <li><a href="#"><span class="ic--round-dashboard"></span> Dashboard</a></li>    
            <li><a href="#"><span class="iconoir--people-tag"></span> Members</a></li>
            <li><a href="#"><span class="mdi--events"></span> Events</a></li>
            <li><a href="#"><span class="iconamoon--profile-fill"></span> Profile</a></li>
            <li><a href="#"><span class="mdi--rate-review"></span> Feedback</a></li>
            <div class="logout-link">
                <a href="#"><span class="material-symbols--logout-rounded"></span> Logout</a>
            </div>
        </ul>
        </nav>
    </div>
    )
}

export default Nav;