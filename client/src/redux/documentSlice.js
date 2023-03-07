import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import documentService from "../services/document.service";
import { setMessage } from "./message";

const initialState = {
  data: [],
  status: "idle",
  query: "dosya-bilgileri",
};

export const fetchDocument = createAsyncThunk(
  "fetchDocument",
  async ({ status, demage_id }, thunkAPI) => {
    try {
      const data = await documentService.getAll(status, demage_id);
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

export const addDocument = createAsyncThunk(
  "addDocument",
  async ({ document, title, status, demage_id }, thunkAPI) => {
    try { 
      const data = await documentService.create(document, title, status, demage_id);
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
  reducers: {
    changeQuery: (state, action) => {
      state.status = "idle"
      state.query = action.payload; 
    }
  },
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

    builder.addCase(addDocument.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(addDocument.fulfilled, (state, action) => {
      state.data.push(action.payload);
      state.status = "succeeded";
    });

    builder.addCase(addDocument.rejected, (state, action) => {
      state.status = "failed";
    });
  },
});

export const { changeQuery } = documentSlice.actions;

const { reducer } = documentSlice;
export default reducer;
