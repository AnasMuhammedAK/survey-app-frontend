import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createQuestionAction } from '../../Redux/SlicesAndServices/questions/questionsSlice'

function AddQuestion() {
  const dispatch = useDispatch()
  const [question, setQuestion] = useState(null)
  const [option1, setOption1] = useState(null)
  const [option2, setOption2] = useState(null)
  const [option3, setOption3] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = {
      question,
      options: [option1, option2, option3]
    }
    dispatch(createQuestionAction(data))
  }
  return (
    <div className="h-f w-f mt-40 flex items-center justify-center ">
      <div className="w-[450px] max-w-[600px] bg-slate-300 rounded-xl" >
        <div class="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div class="w-full max-w-md space-y-8">
            <div>
              <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Add New Question</h2>
            </div>
            <form class="mt-8 space-y-6" onSubmit={handleSubmit}>
              <input type="hidden" name="remember" value="true" />
              <div class="-space-y-px rounded-md shadow-sm">
                <p className="p-1">Question</p>
                <div>
                  <label for="Question" class="sr-only">Question</label>
                  <input onChange={(e) => setQuestion(e.target.value)} id="email-address" name="question" type="text" autocomplete="" required class="relative block h-24 w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Enter Question" />
                </div>
                <br />
                <p className="pl-1" >Options</p>
                <div className="py-1">
                  <label for="password" class="sr-only">Option 1</label>
                  <input onChange={(e) => setOption1(e.target.value)} id="password" name="option1" type="text" autocomplete="" required class="relative  block w-full appearance-none  rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Option 1" />
                </div>
                <div className="py-1">
                  <label for="password" class="sr-only">Option 2</label>
                  <input onChange={(e) => setOption2(e.target.value)} id="password" name="option2" type="text" autocomplete="" required class="relative block w-full appearance-none  rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Option 2" />
                </div>
                <div className="py-1">
                  <label for="password" class="sr-only">Option 3</label>
                  <input onChange={(e) => setOption3(e.target.value)} id="password" name="option3" type="text" autocomplete="" required class="relative block w-full appearance-none  rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Option 3" />
                </div>
              </div>
              <div>
                <button type="submit" class="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                  <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                  </span>
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddQuestion