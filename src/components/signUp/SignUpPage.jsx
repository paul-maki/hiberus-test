import { Link, useNavigate } from "react-router-dom";
import { Button, Input } from "reactstrap"
import { signUp } from "../../services/signup";
import { getUsers } from "../../services/users";
import setItemExpiration from "../../tools/setTimeExpiration";
import { FormContainer } from "../form/FormContainer"
import { CenteredLayout } from "../layout/CenteredLayout";

export const SignUpPage = () => {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const user = {
            name: event.target.name.value,
            surname: event.target.surname.value,
            email: event.target.email.value,
            password: event.target.password.value
        }
        
        signUp(user)
        .then(response => {
            localStorage.setItem('user', JSON.stringify(response.data));
            //We save the user list after login
            getUsers()
                .then(getUserResponse => {
                    setItemExpiration('userList', [...getUserResponse.data, response.data], 0.5);
                })            
            navigate('/users');
        })
    }

    return (
        <CenteredLayout>
            <FormContainer handleSubmit={handleSubmit} headerClassName="bg-success" headerText='Sign up'>
                <Input required type="text" pattern="[A-Za-z]+" name="name" placeholder="Name" />
                <Input required type="text" pattern="[A-Za-z]+" name="surname" placeholder="Surname" />
                <Input required type="email" name="email" placeholder="Email" />
                <Input required minLength={6} type="password" name="password" placeholder="Password" />
                <Link className="text-decoration-none" to='/'>Do you want to login?</Link>
                <Button color="success">Register</Button>                                    
            </FormContainer>
        </CenteredLayout>
    )
}