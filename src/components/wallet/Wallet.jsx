import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Button,
    Typography,
  } from "@material-tailwind/react";
  import walletImg  from "../../assets/images/wallet.jpg"
function Wallet() {
    const { userAuth } = useSelector(store => store.users)
    const navigate = useNavigate()
    return (
        <div className='mt-48 flex items-center justify-center'>
            <Card className="w-96">
                <CardHeader color="blue" className="relative flex-col ">
                    <img
                        src={walletImg}
                        alt="img-blur-shadow"
                        className="h-full w-full"
                    />
                </CardHeader>
                <CardBody className="text-center mb-6">
                    <Typography variant="h5" className="mb-2 mt-6">
                        Wallet Total =  ₹{userAuth.wallet}
                    </Typography>
                    <Typography className="p-3">
                        {userAuth.wallet == 0 ? "You can earn rs 50 through your first survey" : `Congradulations, your earned RS ${userAuth.wallet} throgh your first survey.`}
                    </Typography>
                </CardBody>
               {userAuth.wallet == 0 &&  <CardFooter className='flex items-center justify-center mb-10' >
                    <Button onClick={()=> navigate("/survey")}>Go To Survey</Button>
                </CardFooter>}
                
            </Card>
        </div>
    )
}

export default Wallet