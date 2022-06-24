import Searchbar from "./Searchbar"

const Navbar = () => {
    return (
        <div className="nav_wrap">
            <Searchbar />
            <ul className="menu_list">
                <i className="ri-home-4-fill"></i>
                <i className="ri-notification-2-fill"></i>
                <i className="ri-account-circle-fill"></i>
            </ul>
        </div>
    )
}

export default Navbar
