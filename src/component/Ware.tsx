
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from '../hook/toolkit'
import { producktFeatch } from '../slice/Produckt'
import { produckts } from '../slice/Produckt'
import Card from "./Card";
import Load from '../component/Load'


const Ware = () => {

    const dispatch = useAppDispatch();
    const ProductData = useAppSelector((state) => state.produckt);

    useEffect(() => {
        dispatch(producktFeatch());


    }, [dispatch]);


    return (
        <>
            {ProductData.length === 0 ? (
                <Load />
            ) : (
                <div>
                      
                    <div className="flex relative top-10 flex-wrap  mt-10 transition-all">
                        {ProductData.map((item) => {
                            return <Card producktData={item} />;
                        })}
                    </div>
                </div>
            )}
        </>


    );
}

export default Ware;


/*
import {producktFeatch} from '../slice/Produckt'


We use curly braces {} in named imports in JavaScript to selectively تحديد import specific values from a module.
 When we import a named export from a module using curly braces,
 we are telling the JavaScript module system to only import the specific values we have specified.
*/