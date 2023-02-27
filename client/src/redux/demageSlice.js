import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    data : [],
    loading: false,
    error: "",
};

export const fetchDemage = createAsyncThunk('fetchDemage', async ()=>{
  const response =   await axios.get("http://localhost:3000/v1/demage");

  return response.data;
});

const demageSlice = createSlice({
    name: "demage",
    initialState,
    reducers: {},
    extraReducers: (builder)=>{
        builder.addCase(fetchDemage.pending, (state, action)=> {
            state.loading = true;
            state.error= "";
        });
        builder.addCase(fetchDemage.fulfilled, (state,action)=> {
            state.data= action.payload;
            state.loading = false;
        });

        builder.addCase(fetchDemage.rejected,(state, action)=>{
            state.loading =false;
            state.error = "Bir Hata Oluştu";
        })
    }
});

export default demageSlice.reducer;