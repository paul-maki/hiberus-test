import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";
import { useIsMounted } from "../../hooks/useIsMounted";
import useLoggedUser from "../../hooks/useLoggedUser";
import styles from './logout-page.module.scss';



export const LogoutPage = () => {
    const loggedUser = useLoggedUser();
    const isMounted = useIsMounted();
    const navigate = useNavigate();

    const handleClick = () => {
        localStorage.removeItem('user');
        navigate('/');
    }

    useEffect(() => {
        if (!loggedUser && isMounted) {
            navigate('/');
        }
    }, [loggedUser, isMounted, navigate])

    return (
        <div className={styles['logout-wrapper']}>
            <div className={styles.logout}>
                <div className={styles['logout-div']}>
                    {loggedUser && <p>{`Hello, ${loggedUser.name}, do you want to logout?`}</p>}
                    <Button onClick={handleClick} color="danger">Logout</Button>
                </div>
            </div>
        </div>
    )
}