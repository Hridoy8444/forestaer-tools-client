import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

const useUserdata = () => {
    const [user] = useAuthState(auth);
    const [userdata, setUserdata] = useState([]);


    useEffect(() => {
        fetch(`http://localhost:5000/user/${user.email}`)
            .then(res => res.json())
            .then(data => setUserdata(data))
    }, [user.email])
    return [userdata]
}
export default useUserdata;