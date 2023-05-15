
import { produckt } from "../slice/Produckt";


type ProducktProps = {
    producktData: produckt;
}

const Card = ({ producktData }: ProducktProps) => {


    return (
        <div className={"bg-slate-100 w-80 h-80 flex flex-col shadow-xl ml-2 rounded-sm"}>
            <img className=" h-48 ml-8 mr-8" src={producktData.image[0].url}></img>
            <div className="m-3"> 
                <h1>title: {producktData.title}</h1>
                <p> description: {producktData.des}</p>
                <p>${producktData.price}</p>
                <h1>amount: {producktData.amount}</h1>
            </div>

        </div>
    )
}

export default Card;