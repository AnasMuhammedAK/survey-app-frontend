import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import usersServiece from './usersService'

//========================|| Register Action ||========================
export const registerUserAction = createAsyncThunk('users/register',
    async (user, { rejectWithValue, getState, dispatch }) => {
        try {
            return await usersServiece.register(user)
        } catch (error) {
            if (!error?.response) throw error
            let message = (error?.response?.data?.message) ? (error?.response?.data?.message) :(error?.response?.data)
            return rejectWithValue(message)
        }
    })
//========================|| Login Action ||========================
export const loginUserAction = createAsyncThunk('users/login',
    async (user, { rejectWithValue, getState, dispatch }) => {
        try {
            return await usersServiece.login(user)
        } catch (error) {
            if (!error?.response) throw error
            let message = (error?.response?.data?.message) ? (error?.response?.data?.message) :(error?.response?.data)
            return rejectWithValue(message)
        }
    })
    //========================|| Fetch all users Action ||========================
export const fetchUsersAction = createAsyncThunk('users/all',
async (_, { rejectWithValue, getState, dispatch }) => {
    try {
        return await usersServiece.fetchAll()
    } catch (error) {
        if (!error?.response) throw error
        let message = (error?.response?.data?.message) ? (error?.response?.data?.message) :(error?.response?.data)
        return rejectWithValue(message)
    }
})
//========================|| Logout Action ||========================
export const logoutUserAction = createAsyncThunk('users/logout',
    async (payload, { rejectWithValue, getState, dispatch }) => {
        try {

            const { refreshToken } = JSON.parse(localStorage.getItem('tokens'))
            return await usersServiece.logout(refreshToken)
        } catch (error) {
            if (!error?.response) throw error
            let message = (error?.response?.data?.message) ? (error?.response?.data?.message) :(error?.response?.data)
            return rejectWithValue(message)
        }
    })


//get user from localStorage to store
const userFromLocalStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null

//========================|| create user slices ||========================
const initialState = {}
const usersSlice = createSlice({
    name: 'users',
    initialState: {
        userAuth: userFromLocalStorage,
    },
    reducers: {
        reset: (state) => initialState,
    },
    extraReducers: (builder) => {
        builder
            //register
            .addCase(registerUserAction.pending, (state) => {
                state.loading = true
                state.appErr = undefined
                state.serverErr = undefined
            })
            .addCase(registerUserAction.fulfilled, (state, action) => {
                state.loading = false
                state.userAuth = action.payload
                state.appErr = undefined
                state.serverErr = undefined
            })
            .addCase(registerUserAction.rejected, (state, action) => {
                state.loading = false
                state.appErr = action.payload
                state.serverErr = action.error.message
                state.userAuth = null
            })
            //login
            .addCase(loginUserAction.pending, (state) => {
                state.loading = true
                state.appErr = undefined
                state.serverErr = undefined
            })
            .addCase(loginUserAction.fulfilled, (state, action) => {
                state.loading = false
                state.userAuth = action.payload
                state.appErr = undefined
                state.serverErr = undefined
            })
            .addCase(loginUserAction.rejected, (state, action) => {
                state.loading = false
                state.appErr = action.payload
                state.serverErr = action.error.message
                state.userAuth = null
            })
            //fetch all
            .addCase(fetchUsersAction.pending, (state) => {
                state.loading = true
                state.appErr = undefined
                state.serverErr = undefined
            })
            .addCase(fetchUsersAction.fulfilled, (state, action) => {
                state.loading = false
                state.users = action.payload
                state.appErr = undefined
                state.serverErr = undefined
            })
            .addCase(fetchUsersAction.rejected, (state, action) => {
                state.loading = false
                state.appErr = action.payload
                state.serverErr = action.error.message
                state.userAuth = null
            })
            //logout
            .addCase(logoutUserAction.fulfilled, (state) => {
                state.loading = false
                state.userAuth = null
                state.appErr = undefined
                state.serverErr = undefined
            })
    },

})

export default usersSlice.reducer