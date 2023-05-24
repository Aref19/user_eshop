import axios from "axios";


const url = "http://localhost:8182"


export const intiaxio = axios.create({ baseURL: url })