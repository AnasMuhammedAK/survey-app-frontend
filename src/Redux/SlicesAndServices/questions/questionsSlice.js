import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import questionsServiece from './questionService'

//========================|| Create New Question  Action ||========================
export const createQuestionAction = createAsyncThunk('question/create',
    async (data, { rejectWithValue, getState, dispatch }) => {
        try {
            return await questionsServiece.create(data)
        } catch (error) {
            if (!error?.response) throw error
            let message = (error?.response?.data?.message) ? (error?.response?.data?.message) :(error?.response?.data)
            return rejectWithValue(message)
        }
    })
//========================|| Fetch All Question  Action ||========================
export const fetchAllQuestions = createAsyncThunk('questions/all',
    async (_, { rejectWithValue, getState, dispatch }) => {
        try {
            return await questionsServiece.fetchAll()
        } catch (error) {
            if (!error?.response) throw error
            let message = (error?.response?.data?.message) ? (error?.response?.data?.message) :(error?.response?.data)
            return rejectWithValue(message)
        }
    })
//========================|| create Question slices ||============================
const initialState = {
    questions: [],
    appErr: false,
    isSuccess: false,
    loading: false,
    serverErr: false,
}
const questionSlice = createSlice({
    name: 'Questions',
    initialState,
    reducers: {
        reset: (state) => initialState,
    },
    extraReducers: (builder) => {
        builder
            //create a new question 
            .addCase(createQuestionAction.pending, (state) => {
                state.loading = true
                state.appErr = undefined
                state.serverErr = undefined
            })
            .addCase(createQuestionAction.fulfilled, (state, action) => {
                state.loading = false
                state.isSuccess = true
                state.questions.push(action.payload)
                state.appErr = undefined
                state.serverErr = undefined
            })
            .addCase(createQuestionAction.rejected, (state, action) => {
                state.loading = false
                state.isSuccess = false
                state.appErr = action.payload
                state.serverErr = action.error.message
            })
            //fetch all questions
            .addCase(fetchAllQuestions.pending, (state) => {
                state.loading = true
                state.appErr = undefined
                state.serverErr = undefined
            })
            .addCase(fetchAllQuestions.fulfilled, (state, action) => {
                state.loading = false
                state.isSuccess = true
                state.questions = action.payload
                state.appErr = undefined
                state.serverErr = undefined
            })
            .addCase(fetchAllQuestions.rejected, (state, action) => {
                state.loading = false
                state.isSuccess = false
                state.appErr = action.payload
                state.serverErr = action.error.message
            })

    },

})

export default questionSlice.reducer