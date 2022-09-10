import {  configureStore } from '@reduxjs/toolkit'
import usersReducer from '../SlicesAndServices/user/usersSlice'
import questionSlice from '../SlicesAndServices/questions/questionsSlice'
import surveySlice from '../SlicesAndServices/survey/surveySlice'

const store = configureStore ({
    reducer : {
        users : usersReducer,
        questions:questionSlice,
        surveys:surveySlice,
    }
})
export default store