import React, { useEffect } from 'react'
import toast from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllQuestions } from '../../Redux/SlicesAndServices/questions/questionsSlice'
import { createSurveyAction, reset } from '../../Redux/SlicesAndServices/survey/surveySlice'
import Spinner from '../spinner/Spinner'
import { useNavigate } from "react-router-dom";


function Survey() {
  //data from store
  const { loading, appErr, serverErr, questions } = useSelector(store => store.questions)
  const res = useSelector(store => store.surveys)
  const isSuccess = res?.isSuccess
  const isError = res?.appErr
  if (appErr) toast.error(appErr)
  if (serverErr) toast.error(serverErr)
  if (isError) toast.error(isError)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  if (isSuccess) navigate('/')
  let data = []
  const handleChange = (e, id, question) => {
    let value = {
      id,
      question,
      option: e.target.value
    }
    data.push(value)
    console.log(data)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (questions.length == data.length) {
      dispatch(createSurveyAction(data))
    } else {
      toast.error("Fill All Fields")
    }


  }
  const fetchQuestions = async () => {
    dispatch(fetchAllQuestions())
  }

  useEffect(() => {
    fetchQuestions()
    return () => {
      dispatch(reset())
    }
  }, [navigate])

  return (
    <>
      {loading ? <Spinner /> : <div className="h-full w-full mt-32 flex items-center justify-center">
        <div className='w-[400px] md:w-full md:mx-20 bg-slate-300 rounded-xl'>
          <h1 className="text-center text-4xl mt-10">Survey Questions</h1>
          <p className="text-center text-md mt-3">Answer All the Questions .</p>
          <div className='m-20'>
            <form onSubmit={handleSubmit}>
              {questions?.map((row, index) => {
                return (
                  <>
                    <label for="countries" className="block mb-1 text-md font-medium text-gray-900 dark:text-gray-400 pl-3"><span>{index + 1})</span>  {row.question}</label>
                    <select id="countries" name={row._id} onChange={(e) => handleChange(e, row._id, row.question)} className="bg-gray-50 mb-4 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                      <option >Choose a Option</option>
                      <option value={row.options[0]}>{row.options[0]}</option>
                      <option value={row.options[1]}>{row.options[1]}</option>
                      <option value={row.options[2]}>{row.options[2]}</option>
                    </select></>
                )
              })}
              <div className="flex items-center justify-center ">
                <button type="submit" class="group relative flex mt-3 w-[200px] justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                  <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                  </span>
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>}
    </>
  )
}

export default Survey