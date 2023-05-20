import userImage from '../assest/user.png'



const Login = () => {


    return (
        <div className=" flex  h-96   justify-center relative top-80 w-auto  cursor-pointer  rounded-sm text-white">
            <img  className=' max-w-10 max-h-10  rounded-full  top-1 left-52 relative  border-neutral-700 bg-white p-1 z-10  ' src={userImage}/>
            <form className="bg-red-500 w-100 flex-col  relative flex justify-center rounded-lg z-0 shadow-2xl">
                <div className="flex justify-around mr-10 ">
                    <label className="text-white w-40">email</label>
                    <input className='rounded-md'></input>
                </div>

                <div className="flex   mt-2 justify-around mr-10">
                    <label className="text-white w-40">password</label>
                    <input className='rounded-md outline-2'></input>
                </div>

                <button className="absolute top-80 right-40">Login</button>
            </form>
        </div>

    )
}

export default Login;