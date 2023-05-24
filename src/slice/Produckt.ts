import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { intiaxio } from "../api/produckt";



export const producktFeatch = createAsyncThunk("producktsSlice/fetchProduckt", async () => {

    const res = await intiaxio.get("endUser/getAllItem", { params: { page: 0, size: 6 } }) 
    const data = res.data.content;
    return data;
})


interface Image{
    url:string
}


export interface produckt {
    name: string,
    amount: number,
    price: string,
    spicalPrice: string,
    title:string,
    des:string
    image:Image[]
}

export interface produckts {
    content: produckt[]
}

const initProduct: produckt[] =[{amount:2,name:"dsa",price:"das",spicalPrice:"sd",title:"dsa",des:"dsa",image:[]}]

export const producktS = createSlice({
    name: "produckt",
    initialState: initProduct,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(producktFeatch.fulfilled, (state, actions) => {
            console.log(actions.payload);
            
            return actions.payload

        })
    }

})

export const { } = producktS.actions;
export default producktS.reducer;