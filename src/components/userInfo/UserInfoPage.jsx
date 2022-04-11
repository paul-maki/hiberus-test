import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getUserById } from "../../services/users";
import { UserInfo } from "./UserInfo";

export const UserInfoPage = () => {
    const { id } = useParams();
    const [user, setUser] = useState();

    useEffect(() => {
        getUserById(id).then(response => {
            setUser(response.data[0]);
        })
    },[id])
    
    return (
        user && <UserInfo disabled user={user} />
    )
}