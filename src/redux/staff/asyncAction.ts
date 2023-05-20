import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchStaff = createAsyncThunk(
    'staff/fetchStaffStatus',
    async (category: string) =>{
        const {data} = await axios.get('https://dummyjson.com/products?limit=30')
        return data
    }
)