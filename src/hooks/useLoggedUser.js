import { useEffect, useState } from "react";
import localGetItem from "../tools/localGetItem";

const useLoggedUser = () => {
    const [loggedUser, setLoggedUser] = useState(null);
    
    useEffect(() => {
        setLoggedUser(localGetItem('user'));
    }, [])

    return loggedUser;
}

export default useLoggedUser;