
import { produckt } from "../slice/Produckt";
import ButtonApp from "./Button";

type ProducktProps = {
    producktData: produckt;
}

const Card = ({ producktData }: ProducktProps) => {


    return (
        <div className={"bg-slate-100 w-80 h-80 flex flex-col shadow-xl ml-2 rounded-sm  md:mt-0 transition-all mt-2 items-center"}>
            <img className=" h-32 w-32 ml-8 mr-8 mt-6" src={producktData.image[0]?.url} alt="image"></img>
            <div className="m-3">
                <h1>title: {producktData.title}</h1>
                <p> description: {producktData.des}</p>
                <p>${producktData.price}</p>
                <h1>amount: {producktData.amount}</h1>
                <ButtonApp  text="Your Button Text"/>
            </div>

        </div>
    )
}

export default Card;