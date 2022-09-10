import React from 'react'
import { PacmanLoader } from 'react-spinners'
function Spinner() {
    return (
        <div className='flex items-center justify-center  h-screen w-full '>
            <PacmanLoader
                color="#30BCBD"
                size={30}
                speedMultiplier={1}
            />
        </div>
    )
}

export default Spinner