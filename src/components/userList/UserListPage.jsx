import { useEffect, useState } from "react"
import { deleteUserById, getUsers, updateUser } from "../../services/users";
import { UserList } from "./UserList";
import { useNavigate } from "react-router-dom";
import setItemExpiration from '../../tools/setTimeExpiration';
import { useIsMounted } from "../../hooks/useIsMounted";
import localGetItem from "../../tools/localGetItem";
import useLoggedUser from "../../hooks/useLoggedUser";

export const UserListPage = () => {
    const [users, setUsers] = useState();
    const user = useLoggedUser();
    const isMounted = useIsMounted();
    const navigate = useNavigate();
    
    const handleClickDelete = (user) => {
        deleteUserById(user.id)
        .then(() => {
            const newUserList = users.filter(prevUser => prevUser.id !== user.id);
            setUsers(newUserList);
            setItemExpiration('userList', newUserList, 0.5)
        })
    }

    const handleSubmit = (event, user) => {
        event.preventDefault();
        const updatedUser = {
            ...user,
            name: event.target.name.value,
            surname: event.target.surname.value,
            email: event.target.email.value
        }

        updateUser(updatedUser)
        .then(() => {
            const newUserList = [...users.filter(oldUser => oldUser.id !== updatedUser.id), updatedUser];
            setUsers(newUserList);
            setItemExpiration('userList', newUserList, 0.5);
        })
    }    

    useEffect(() => {
        //We will request again the user list after 30 secs. from the last "GET"
        if (user){
            const userList = localGetItem('userList');
            const now = new Date();
            if (!userList || (now.getTime() > userList.expiry)) {
                getUsers()
                .then( response => {
                    setUsers(response.data);
                    setItemExpiration('userList', response.data, 0.5)              
                });
            } else {
                setUsers(userList.data);
                setItemExpiration('userList', userList.data, 0.5) 
            }
        }

        if (!user && isMounted) {
            navigate('/')
        }
    }, [isMounted, navigate])

    if (!user) {
        return null;
    }

    return (
        users ? <UserList users={users} handleClickDelete={handleClickDelete} handleSubmit={handleSubmit} /> : null
    )
}