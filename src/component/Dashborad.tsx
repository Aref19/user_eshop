import { useNavigate } from "react-location"
import { useContextHook } from "../hook/UserContext"
import { AuthType } from "../context/AuthContext";

const Dashborad = () => {
    const navigate = useNavigate();
    const { auth } = useContextHook() as AuthType
    console.log(auth?.access_Token);


    return (
        <>


            {auth ?
                <>
                    <div className=" flex justify-around relative top-40 flex-wrap  transition-all">
                        <button onClick={() => { navigate({ to: "/account" }) }}><Account /></button>
                        <button onClick={() => { navigate({ to: "/wareCorp" }) }}><Ware /></button>
                    </div>  :
                </>
                :
                <>
                    <div className=" flex justify-around relative top-40 flex-wrap  transition-all">
                        <button onClick={() => { navigate({ to: "/log" }) }}><Log /></button>
                        <button onClick={() => { navigate({ to: "/reg" }) }}><Reg /></button>
                    </div>
                </>
            }


        </>
    )
}


const Reg = () => {
    return (
        <div className="bg-black flex flex-col  h-24 w-24 justify-center cursor-pointer shadow-xl rounded-sm text-white">
            <h1>Registeren</h1>

        </div>
    )
}

const Log = () => {
    return (
        <div className="bg-black flex flex-col  h-24 w-24 justify-center  cursor-pointer shadow-xl rounded-sm text-white">
            <h1 className="color">Login</h1>
        </div>
    )
}


const Account = () => {
    return (
        <div className="bg-black flex flex-col  h-24 w-24 justify-center  cursor-pointer shadow-xl rounded-sm text-white">
            <h1 className="color">Account</h1>
        </div>
    )
}


const Ware = () => {
    return (
        <div className="bg-black flex flex-col  h-24 w-24 justify-center cursor-pointer shadow-xl rounded-sm text-white">
            <h1 className="color">WareCorp</h1>
        </div>
    )
}
export default Dashborad;