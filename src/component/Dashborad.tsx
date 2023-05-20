import { useNavigate } from "react-location"


const Dashborad = () => {
    const navigate = useNavigate();

    return (
        <div className=" flex justify-around relative top-40 flex-wrap  transition-all">
            <button onClick={()=>{navigate({to:"/log"})}}><Log /></button>
            <button onClick={()=>{navigate({to:"/reg"})}}><Reg /></button>
        </div>
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

export default Dashborad;