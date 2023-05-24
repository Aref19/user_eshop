import { useEffect } from "react";
import { useContextHook } from "./UserContext";
import { AuthType } from "../context/AuthContext";
import useRefresh from "./useRefresh";
import { intiaxio } from '../api/produckt';

const usePrivateAxio = () => {
    const { auth } = useContextHook() as AuthType;
    const refersh = useRefresh();

    useEffect(() => {
        const requestIntercept = intiaxio.interceptors.request.use(config => {
            if (!config.headers['Authorization']) {
                config.headers['Authorization'] = `Bearer ${auth?.access_Token}`
                console.log("here1", auth?.access_Token);

            }
            return config
        }, (error) => Promise.reject(error)
        )

        const responseIntercepter = intiaxio.interceptors.response.use(
            response => response,
            async (error) => {
                const prevreqezuest = error?.config
                if (error?.response?.status == 403 && !prevreqezuest?.sent) {
                    prevreqezuest.sent = true;
                    const access_Token = await refersh();
                    prevreqezuest.headers['Authorization'] = `Bearer  ${access_Token}`
                    return intiaxio(prevreqezuest);

                }
                return Promise.reject(error)
            }




        );
        return () => {
            intiaxio.interceptors.request.eject(requestIntercept);
            intiaxio.interceptors.response.eject(responseIntercepter);
        }

    }, [auth])

}
export default usePrivateAxio;