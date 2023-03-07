import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import demageService from "../services/demage.service";
import { setMessage } from "./message";

const initialState = {
  demages: [],
  status: "idle",
  
  demageStatus: "idle",
  demage:{}
};

export const fetchDemage = createAsyncThunk("fetchDemage", async (thunkAPI) => {
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
});

export const fetchDemageById = createAsyncThunk("fetchDemageById", async (id,thunkAPI) => {
  try {
    const data = await demageService.findOne(id);  
    return data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.error) ||
      error.message ||
      error.toString();
    thunkAPI.dispatch(setMessage(message));
    return thunkAPI.rejectWithValue();
  }
});

const demageSlice = createSlice({
  name: "demage",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //getDemage
    builder.addCase(fetchDemage.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(fetchDemage.fulfilled, (state, action) => {
      state.demages = action.payload;
      state.status = "succeeded";
    });
    builder.addCase(fetchDemage.rejected, (state, action) => {
      state.status = "failed";
    });

    //getDemageById
    builder.addCase(fetchDemageById.pending, (state, action) => { 
      state.demageStatus = "loading";
    });
    builder.addCase(fetchDemageById.fulfilled, (state, action) => {  
      state.demage = action.payload;
      state.demageStatus = "succeeded";
    });
    builder.addCase(fetchDemageById.rejected, (state, action) => {
      state.demageStatus = "failed";
    });
  },
});

const { reducer } = demageSlice;
export default reducer;
