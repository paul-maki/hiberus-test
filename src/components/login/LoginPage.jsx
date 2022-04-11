import { useEffect, useState } from "react";
import { login } from "../../services/login";
import { Link, useNavigate } from "react-router-dom";
import { FormContainer } from "../form/FormContainer";
import { Input, Button, Alert } from "reactstrap";
import setItemExpiration from "../../tools/setTimeExpiration";
import { CenteredLayout } from "../layout/CenteredLayout";
import { getUsers } from "../../services/users";
import { useIsMounted } from "../../hooks/useIsMounted";
import useLoggedUser from "../../hooks/useLoggedUser";



export const LoginPage = () => {
    const [error, setError] = useState(null);
    const [user, setUser] = useState(null);
    const loggedUser = useLoggedUser();
    const isMounted = useIsMounted();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        login({email, password, id: email})
            .then(data => {
                if (data && data.length > 0) {
                    setUser(data[0]);
                    setError('');
                    localStorage.setItem('user', JSON.stringify(data[0]));
                    getUsers()
                    .then(response => {
                        setItemExpiration('userList', [...response.data, data[0]], 1);
                    })                                
                    navigate('/users');
                } else {
                    setError('Login error')
                }
            })  
    }

    useEffect(() => {
        if (loggedUser && isMounted) {
            navigate('/users')
        }
    }, [loggedUser, isMounted, navigate])

    return(
        <div>
            <CenteredLayout>
                <FormContainer handleSubmit={handleSubmit} headerClassName={'bg-primary'} headerText={'Login'}>
                    <Input required type="email" name="email" placeholder="Email" />
                    <Input required type="password" name="password" placeholder="Password" />
                    <Link className="text-decoration-none" to="/signup">Do you want to sign up?</Link>
                    <Button color="primary">Login</Button>                        
                    {user && <Alert color="primary">Login successful!</Alert>}
                    {error && <Alert color="danger">{error}</Alert>}                            
                </FormContainer>
            </CenteredLayout>            
        </div>
    )
}