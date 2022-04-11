import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Nav } from "reactstrap"
import {  useState } from 'react';
import { Link } from "react-router-dom";
import useLoggedUser from "../../hooks/useLoggedUser";

export const LoggedLayout = ({children, currentPage}) => {
    const [dropdownOpen, setDropDownOpen] = useState(false);
    const loggedUser = useLoggedUser();

    const toggle = () => {
        setDropDownOpen(!dropdownOpen);
    }

    return(
        <div className="min-vh-100">
            <header className="d-flex justify-content-end">
                <Nav>
                    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                        <DropdownToggle nav caret>
                            {loggedUser?.name}
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem disabled={currentPage === 'users'}>
                                <Link className={`text-decoration-none ${currentPage === 'users' ? 'text-dark' : ''}`} to="/users">Users</Link>
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem disabled={currentPage === 'logout'}>
                                <Link className={`text-decoration-none ${currentPage === 'logout' ? 'text-dark' : ''}`} to="/logout">Logout</Link>
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </Nav>
            </header>
            
            {children}
        </div>
    )
}