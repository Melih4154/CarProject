import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"; 
import demageService from "../services/demage.service";
import { setMessage } from "./message";


const initialState = {
    data : [],
    status: "idle", 
};

export const fetchDemage = createAsyncThunk(
    "fetchDemage",
    async (thunkAPI) => {
      try {
        const data = await demageService.getAll();
        return data;
      } catch (error) {
        const message =
          (error.response && error.response.data && error.response.data.error) ||
          error.message ||
          error.toString();
        thunkAPI.dispatch(setMessage(message));
        return thunkAPI.rejectWithValue();
      }
    }
  );
 

const demageSlice = createSlice({
    name: "demage",
    initialState,
    reducers: {},
    extraReducers: (builder)=>{
        builder.addCase(fetchDemage.pending, (state, action)=> {
            state.status = "loading"; 
        });
        builder.addCase(fetchDemage.fulfilled, (state,action)=> {
            state.data= action.payload; 
            state.status = "succeeded"
        });

        builder.addCase(fetchDemage.rejected,(state, action)=>{
            state.status ="failed"; 
        })
    }
});

export default demageSlice.reducer;
export const selectAllDemage = (state) => state.data