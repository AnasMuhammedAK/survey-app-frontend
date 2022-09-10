import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchSurvey,reset } from '../../Redux/SlicesAndServices/survey/surveySlice'
import Spinner from '../spinner/Spinner'
function SurveyData() {
    const params = useParams()
    const id = params.surveyId
    const dispatch = useDispatch()

    const { survey, loading } = useSelector(store => store.surveys)
    useEffect(() => {
        dispatch(fetchSurvey(id))
        
return(()=> {
    dispatch(reset())
})
    },[])
    return (
       <>
       {loading ? <Spinner /> : <div className="py-8 w-full mt-32">
            <div className="lg:flex items-center justify-center w-full p-10">
                <div className=" min-w-[1000px]   lg:mb-0 mb-7 bg-white p-6 shadow rounded">
                    <div className="flex items-center border-b border-gray-200 pb-6">
                        <img src={survey?.user?.profilePhoto} alt className="w-12 h-12 rounded-full" />
                        <div className="flex items-start justify-between w-full">
                            <div className="pl-3 w-full">
                                <p className="text-xl font-medium leading-5 text-gray-800">{survey?.user?.fullName}</p>

                            </div>
                        </div>
                    </div>
                    <div className="px-2">

                        {survey?.survey?.map((row, index) => {
                            return (
                                <>
                                <p className='mt-4'>Question</p>
                                    <p className="text-sm leading-5 py-4 text-gray-600">{index+1} - {row.question}</p>
                                    <p className='mt-2  mb-1 text-green-500'>Answer</p>
                                    <div className="flex mb-3">
                                        <div className="py-2 px-4 text-xs leading-3 text-indigo-700 rounded-full bg-indigo-100">
                                        {row.option}
                                        </div>
                                    </div>
                                    <hr />
                                </>
                            )
                        })}
                    </div>
                </div>

            </div>

        </div>}
       </>
    )
}

export default SurveyData