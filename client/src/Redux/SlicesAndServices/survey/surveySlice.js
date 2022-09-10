import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import serveyServiece from './surveyService'


//========================|| Create New Survey Action ||========================
export const createSurveyAction = createAsyncThunk('survey/create',
    async (data, { rejectWithValue, getState, dispatch }) => {
        try {
            
            return await serveyServiece.createSurvey(data)
            
        } catch (error) {
            
            if (!error?.response) throw error
            let message = (error?.response?.data?.message) ? (error?.response?.data?.message) :(error?.response?.data)
            return rejectWithValue(message)
        }
    })
//========================|| Fetch All Survey  Action ||========================
export const fetchAllSurvey = createAsyncThunk('survey/all',
    async (_, { rejectWithValue, getState, dispatch }) => {
        
        try {
            return await serveyServiece.fetchAll()
        } catch (error) {
            if (!error?.response) throw error
            let message = (error?.response?.data?.message) ? (error?.response?.data?.message) :(error?.response?.data)
            return rejectWithValue(message)
        }
    })
    //========================|| Fetch All Survey  Action ||========================
export const fetchSurvey = createAsyncThunk('survey/single',
async (id, { rejectWithValue, getState, dispatch }) => {
    
    try {
        return await serveyServiece.fetch(id)
    } catch (error) {
        if (!error?.response) throw error
        let message = (error?.response?.data?.message) ? (error?.response?.data?.message) :(error?.response?.data)
            return rejectWithValue(message)
    }
})
//========================|| create Survey slices ||============================
const initialState = {
    surveys: [],
    survey:null,
    appErr: false,
    isSuccess: false,
    loading: false,
    serverErr: false,
}
const surveySlice = createSlice({
    name: 'surveys',
    initialState,
    reducers: {
        reset: (state) => initialState,
    },
    extraReducers: (builder) => {
        builder
            //create a new question 
            .addCase(createSurveyAction.pending, (state) => {
                state.loading = true
                state.appErr = undefined
                state.serverErr = undefined
            })
            .addCase(createSurveyAction.fulfilled, (state, action) => {
                state.loading = false
                state.isSuccess = true
                state.surveys.push(action.payload)
                state.appErr = undefined
                state.serverErr = undefined
            })
            .addCase(createSurveyAction.rejected, (state, action) => {
                state.loading = false
                state.isSuccess = false
                state.appErr = action.payload
                state.serverErr = action.error.message
            })
            // fetch all Survey
            .addCase(fetchAllSurvey.pending, (state) => {
                state.loading = true
                state.appErr = undefined
                state.serverErr = undefined
            })
            .addCase(fetchAllSurvey.fulfilled, (state, action) => {
                state.loading = false
                state.isSuccess = true
                state.surveys = action.payload
                state.appErr = undefined
                state.serverErr = undefined
            })
            .addCase(fetchAllSurvey.rejected, (state, action) => {
                state.loading = false
                state.isSuccess = false
                state.appErr = action.payload
                state.serverErr = action.error.message
            })
            //fetch
            .addCase(fetchSurvey.pending, (state) => {
                state.loading = true
                state.appErr = undefined
                state.serverErr = undefined
            })
            .addCase(fetchSurvey.fulfilled, (state, action) => {
                state.loading = false
                state.isSuccess = true
                state.survey = action.payload
                state.appErr = undefined
                state.serverErr = undefined
            })
            .addCase(fetchSurvey.rejected, (state, action) => {
                state.loading = false
                state.isSuccess = false
                state.appErr = action.payload
                state.serverErr = action.error.message
            })

    },

})
export const { reset } = surveySlice.actions
export default surveySlice.reducer