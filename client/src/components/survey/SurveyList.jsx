import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import { fetchAllSurvey } from '../../Redux/SlicesAndServices/survey/surveySlice';
import Spinner from '../spinner/Spinner';
import { fetchAllQuestions } from '../../Redux/SlicesAndServices/questions/questionsSlice';
import { fetchUsersAction } from '../../Redux/SlicesAndServices/user/usersSlice';

function SurveyList() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { surveys, loading } = useSelector(store => store.surveys)
    const { questions } = useSelector(store => store.questions)
    const { users } = useSelector(store => store.users)
    
    const fetchData = () => {
        dispatch(fetchAllSurvey())
        dispatch(fetchAllQuestions())
        dispatch(fetchUsersAction())
    }
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <>
            {loading ? <Spinner /> : 
           <>
            <div className="w-full flex items-center justify-center mt-32">
                <div className="py-4 sm:py-6 md:py-8 bg-white shadow rounded-lg">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-6 xl:px-10 gap-y-8 gap-x-12 2xl:gap-x-28">
                        <div className="w-full">
                            <p className="text-xs md:text-sm font-medium leading-none text-gray-500 uppercase">Total Survey</p>
                            <p className="text-lg text-center sm:text-xl md:text-2xl lg:text-3xl font-bold leading-3 text-gray-800 mt-3 md:mt-5">{surveys?.length}</p>
                           
                        </div>
                        <div className="w-full">
                            <p className="text-xs md:text-sm font-medium leading-none text-gray-500 uppercase">Total Questions</p>
                            <p className="text-lg text-center sm:text-xl md:text-2xl lg:text-3xl font-bold leading-3 text-gray-800 mt-3 md:mt-5">{questions?.length}</p>

                        </div>
                        <div className="w-full">
                            <p className="text-xs md:text-sm font-medium leading-none text-gray-500 uppercase">Total Users</p>
                            <p className="text-lg text-center sm:text-xl md:text-2xl lg:text-3xl font-bold leading-3 text-gray-800 mt-3 md:mt-5">{users?.length}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-8 w-full ">
                {surveys?.map((row, index) => {
                    return (
                        <div key={index} className=" lg:flex items-center justify-center w-full p-10">
                            <div className="min-w-[1000px]  lg:mb-0 mb-7 bg-white p-6 shadow rounded">
                                <div className="flex items-center border-b border-gray-200 pb-6">
                                    <img src={row?.user?.profilePhoto} alt className="w-12 h-12 rounded-full" />
                                    <div className="flex items-start justify-between w-full">
                                        <div className="pl-3 w-full">
                                            <p className="text-xl font-medium leading-5 text-gray-800">{row?.user?.fullName}</p>
                                        </div>

                                    </div>
                                </div>
                                <div className="px-2">
                                    <p className='mt-4'>Question</p>
                                    <p className="text-sm leading-5 py-4 text-gray-600">{index + 1}- {row?.survey[0]?.question}</p>
                                    <p className='mt-2  mb-1 text-green-500'>Answer</p>
                                    <div className="flex">
                                        <div className="py-2 px-4 text-xs leading-3 text-indigo-700 rounded-full bg-indigo-100">{row.survey[0].option}</div>
                                    </div>
                                    <Button onClick={() => navigate(`/survey-data/${row._id}`)} className="float-right mt-3">View All Questions</Button>
                                </div>
                            </div>
                        </div>
                    )
                })}

            </div>
           </>
            }
        </>
    )
}

export default SurveyList