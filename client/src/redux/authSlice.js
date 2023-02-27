import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";

const userToken = localStorage.getItem('userToken')
  ? localStorage.getItem('userToken')
  : null

const initialState = {
  loading: false,
  userInfo: null,
  userToken,
  error: null,
  success: false,
}
export const userLogin = createAsyncThunk(
    'auth',
    async ({  email, password }, { rejectWithValue }) => {
      try {
        const {data}  = await axios.post(
          `http://localhost:3000/v1/auth`,
          { email, password }, 
        )
        localStorage.setItem('userToken', data.userToken)
        return data
      } catch (error) { 
        if (error.response && error.response.data.message) {
          return rejectWithValue(error.response.data.message)
        } else {
          return rejectWithValue(error.message)
        }
      }
    }
  )

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logOut: (state, action) => {
        state.user = null
        state.token = null
    }
  },
  extraReducers: { 
    [userLogin.pending]: (state) => {
      state.loading = true
      state.error = null
    },
    [userLogin.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.userInfo = payload
      state.userToken = payload.userToken
    },
    [userLogin.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    }, 
  },
})
export default authSlice.reducer
export const {  logOut } = authSlice.actions


// import { createSlice } from "@reduxjs/toolkit"

// const authSlice = createSlice({
//     name: 'auth',
//     initialState: { user: null, token: null },
//     reducers: {
//         setCredentials: (state, action) => {
//             const { user, accessToken } = action.payload
//             state.user = user
//             state.token = accessToken
//         },
//         logOut: (state, action) => {
//             state.user = null
//             state.token = null
//         }
//     },
// })

// export const { setCredentials, logOut } = authSlice.actions

// export default authSlice.reducer

// export const selectCurrentUser = (state) => state.auth.user
// export const selectCurrentToken = (state) => state.auth.token