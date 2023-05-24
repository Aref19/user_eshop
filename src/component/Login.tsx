import userImage from '../assest/user.png'
import { useForm } from "react-hook-form";
import { AuthType } from '../context/AuthContext';
import { useContextHook } from '../hook/UserContext';
import { intiaxio } from "../api/produckt"
import { useNavigate } from 'react-location';


interface Login {
    email: string,
    password: string
}

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<Login>();
    const { setAuth } = useContextHook() as AuthType;
    const navigate=useNavigate();
    const submeit = (data: Login) => {
        const params = new URLSearchParams(); // wen send application/x-www-form-urlencoded
        params.append('client_id', 'eshop_backend');
        params.append('client_secret', 'ZfxTLX7ZaYgR2bt6cNpZ9LE2BnHoQEjj');
        params.append('username', data.email);
        params.append('grant_type', 'password');
        params.append('password', data.password);
        const userLogIn = async () => {
            try {
                const response = await intiaxio.post("auth/token", params)
                const accessToken = response?.data?.access_token
                const refresh_token = response?.data?.refresh_token
                setAuth({ access_Token: accessToken, username: data.email, password: data.password, refresh_token: refresh_token })
                navigate({to:"/about"})
            } catch (err) {
                console.log(err);

            }

        }
        userLogIn();

    }

    return (
        <div className=" flex  h-96   justify-center relative top-80 w-auto    rounded-sm ">
            <img className=' max-w-10 max-h-10  rounded-full  top-1 left-52 relative  border-neutral-700 bg-white p-1 z-10  ' src={userImage} />
            <form onSubmit={handleSubmit(submeit)} className="bg-black w-100 flex-col  relative flex justify-center rounded-lg z-0 shadow-2xl">
                <div className="flex justify-around mr-10 ">
                    <label className="text-white w-40">email</label>
                    <input typeof='text' className={`rounded-md     ${errors.email ? 'border-2 border-rose-600' : ""}`}   {...register("email", { required: { value: true, message: "email ist requierd" } })} />
                </div>

                <div className="flex   mt-2 justify-around mr-10">
                    <label className="text-white w-40">password</label>
                    <input typeof='password' className={`rounded-md outline-2     ${errors.password ? 'border-2 border-rose-600' : ""} `} {...register("password", { required: { value: true, message: "password ist requierd" } })} />
                </div>

                <button className="absolute top-80 right-40 text-white  rounded-md border outline-white p-1">Login</button>
            </form>
        </div>

    )
}

export default Login;