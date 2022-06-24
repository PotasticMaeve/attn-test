import Searchbar from "./Searchbar"

const Navbar = () => {
    return (
        <div className="nav_wrap">
            <h2 className="title">Media App</h2>
            <div className="right_menu">
                <Searchbar />
                <ul className="menu_list" data-testid="menu_list">
                    <i className="ri-home-4-fill"></i>
                    <i className="ri-notification-2-fill"></i>
                    <i className="ri-account-circle-fill"></i>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
