import React, { useEffect } from 'react'
import toast from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllQuestions } from '../../Redux/SlicesAndServices/questions/questionsSlice'
import Spinner from '../spinner/Spinner'

function QuetionsList() {
    //data from store
    const { loading, appErr, serverErr, questions } = useSelector(store => store.questions)

    if (appErr) toast.error(appErr)
    if (serverErr) toast.error(serverErr)

    const dispatch = useDispatch()

    const fetchQuestions = async () => {
        dispatch(fetchAllQuestions())
    }

    useEffect(() => {
        fetchQuestions()
    }, [])

    return (
        <>
            {loading ? <Spinner /> : <div class="overflow-x-auto relative p-20 mt-24 ">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="py-3 px-6">
                                Questions
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Option-1
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Option-2
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Option-3
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {questions.map((row, index) => {
                            return (
                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {index + 1} - {row.question}
                                    </th>
                                    <td class="py-4 px-6">
                                        {row.options[0]}
                                    </td>
                                    <td class="py-4 px-6">
                                        {row.options[1]}
                                    </td>
                                    <td class="py-4 px-6">
                                        {row.options[2]}
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>}
        </>
    )
}

export default QuetionsList