import { Outlet } from "react-location";
import { useState, useEffect } from "react";
import useRefresh from "../hook/useRefresh";
import { useContextHook } from "../hook/UserContext";
import { AuthType } from "../context/AuthContext";



const PersisttLogin = () => {
    const [isLoading, setIsLoading] = useState(true);
    const refrech = useRefresh();
    const { auth } = useContextHook() as AuthType;


    useEffect(() => {
        const verfiyRefreshToken = async () => {
            try {
                await refrech();



            } catch (err) {
                console.log("err :" + err);  
            }
            finally {
                setIsLoading(false);
            }

        }

        !auth?.access_Token ? verfiyRefreshToken() : setIsLoading(false);
    }, [])

    useEffect(() => {
        console.log("isLoading :" + isLoading);

    }, [isLoading])


    return (
        <>
            {isLoading ?
                <p>...loading</p>
                : <Outlet />
            }
        </>
    )
}

export default PersisttLogin;