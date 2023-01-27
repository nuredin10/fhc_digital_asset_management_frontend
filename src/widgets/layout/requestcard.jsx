import React, { useEffect, useState } from 'react'
import axios from '../../http/axios';

export default function RequestCard(props) {
    // console.log(props);
    const [admin, setAdmin] = useState();
    const [reqData, setReqData] = useState();

    useEffect(() => {
        setReqData(JSON.parse(props.req_data));

        axios.get('/profile', {
            params: {
                id: props.name
            },
            withCredentials: true,
        }).then(function (response) {
            // console.log(response.data);
            setAdmin(response.data);
        })
    }, []);
    console.log(reqData);
    return (
        <div className='w-full grid grid-cols-3 h-44 rounded-2xl shadow-lg normshad hover:shadow-2xl overflow-hidden'>
            <div className='boor col-span-1'>
                <div className='flex flex-row gap-1 pl-2'>
                    <h1 className='font-bold'>Admin Name: </h1>
                    <p>{admin && admin.fname + " " + admin.lname} </p>
                </div>
                <div className='flex flex-row gap-1 pl-2'>
                    <h1 className='font-bold'>Request Type: </h1>
                    <p>{props.req_type}</p>
                </div>
            </div>
            <div className='boor col-span-2'>
                {   reqData && 
                    reqData.map((items)=>(
                        <>

                        </>
                    ))
                }
            </div>
        </div>
    )
}