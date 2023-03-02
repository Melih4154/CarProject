import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import documentService from "../services/document.service";
import { setMessage } from "./message";

const initialState = {
  data: [],
  status: "idle",
};

export const fetchDocument = createAsyncThunk(
  "fetchDocument",
  async (thunkAPI) => {
    try {
      const data = await documentService.getAll();
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

const documentSlice = createSlice({
  name: "document",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchDocument.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(fetchDocument.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = "succeeded";
    });

    builder.addCase(fetchDocument.rejected, (state, action) => {
      state.status = "failed";
    });
  },
});

const { reducer } = documentSlice;
export default reducer;
