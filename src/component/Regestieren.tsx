import { useForm } from "react-hook-form";
import { intiaxio } from "../api/produckt"

interface User {
    userName: string,
    emailId: string;
    password: string;
    role: String;
    addressReqs: Address[]
}

interface Address {
    id: number;
    plz: String;
    str: String,
    number: string;
}

const Registieren = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<User>();



    console.log(register("userName", { required: { value: true, message: "should not be null" } }));

    console.log("errores", errors.userName);
    const submit = (data: User) => {
        const register = async () => {
            try {
                const response = intiaxio.post("endUser/createUserAccount", data)
            } catch (er) {
                console.log(er);
                
            }


        }

        register()

    }



    return (

        <div className="relative top-40  bg-black flex justify-center">

            <form onSubmit={handleSubmit(submit)} className="flex flex-col justify-around h-80 ">
                <p className="text-red-600">{errors.userName?.message ? errors.userName.message : ""}</p>
                <div className="flex justify-center flex-wrap ">
                    <label className="text-white w-16" >username</label>
                    <input type='text' className={`relative left-2  w-80 pl-2 ${errors.userName ? 'border-2 border-rose-600' : ''}`} placeholder="First name" {...register("userName", { required: { value: true, message: "should not be null" } })} ></input>
                </div>

                <div className="flex justify-center flex-wrap " >
                    <label className="text-white w-16" >emai</label>
                    <input type='text' className={`relative left-2 w-80 pl-2 ${errors.emailId ? 'border-2 border-rose-600' : ''}`} placeholder="Email" {...register("emailId", { required: true })} ></input>
                </div>
                <div className="flex justify-center flex-wrap" >
                    <label className="text-white w-16" >password</label>
                    <input type='password' className="relative left-2 w-80 pl-2" placeholder="password" {...register("password", { required: true })} ></input>
                </div>
                <div className="flex justify-center flex-wrap" >
                    <label className="text-white w-16" >plz</label>
                    <input type='text' className="relative left-2  w-80 pl-2" placeholder="plz" {...register(`addressReqs.${0}.plz`, { required: true })} ></input>
                </div>
                <div className="flex justify-center flex-wrap" >
                    <label className="text-white w-16" >str</label>
                    <input type='text' className="relative left-2  w-80 pl-2" placeholder="str" {...register(`addressReqs.${0}.str`, { required: true })} ></input>
                </div>

                <div className="flex justify-center flex-wrap" >
                    <label className="text-white w-16" >number</label>
                    <input type='text' className="relative left-2  w-80 pl-2" placeholder="nummber" {...register(`addressReqs.${0}.number`, { required: true })} ></input>
                </div>

                <button type="submit">Edit</button>


            </form>

        </div>
    )
}

export default Registieren;