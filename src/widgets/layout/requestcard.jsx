import React, { useEffect, useState } from 'react'
import axios from '../../http/axios';

import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle
} from '@mui/material';

export default function RequestCard(props) {

    const [reqData, setReqData] = useState([]);
    const [name, setName] = useState();

    // Dialog Open / Close
    const [acceptOpen, setAcceptOpen] = useState(false);
    const [declineOpen, setDeclineOpen] = useState(false);

    // Delete Item
    const [deleteItem, setDeleteItem] = useState();
    const [item, setItem] = useState();

    const acceptRequest = (id) => {

    }

    const declineRequest = (id) => {

    }

    const data = JSON.parse(props.req_data);

    useEffect(() => {
        axios.get('/profile', {
            params: {
                id: props.name,
            },
            withCredentials: true,
        }).then(function (response) {
            setName(response.data);
        })
    }, []);

    return (
        <>
            {/* Accept Request Dialog Box */}
            <Dialog
                open={acceptOpen}
                onClose={(e) => setAcceptOpen(false)}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description">
                <DialogTitle id="alert-dialog-title">
                    {"Accept Request"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <div className=''>
                            <h1>
                                Are you sure you want to accept the changes
                            </h1>
                        </div>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <button
                        onClick={() => setAcceptOpen(false)}
                        className='py-2 px-4 normshad rounded-xl text-white bg-red-500 hover:bg-red-700'>Disagree</button>
                    <button
                        onClick={() => {
                            acceptRequest(item)
                        }}
                        className='py-2 px-4 normshad rounded-xl text-white bg-green-500 hover:bg-green-700'>Agree</button>
                </DialogActions>
            </Dialog>

            {/* Decline Request Dialog Box */}
            <Dialog
                open={declineOpen}
                onClose={(e) => setDeclineOpen(false)}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description">
                <DialogTitle id="alert-dialog-title">
                    {"Decline Request"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <div className=''>
                            <h1>
                                Are you sure you want to decline the changes
                            </h1>
                        </div>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <button
                        onClick={() => setDeclineOpen(false)}
                        className='py-2 px-4 normshad rounded-xl text-white bg-red-500 hover:bg-red-700'>Disagree</button>
                    <button
                        onClick={() => declineRequest(item)}
                        className='py-2 px-4 normshad rounded-xl text-white bg-green-500 hover:bg-green-700'>Agree</button>
                </DialogActions>
            </Dialog>

            <div className='w-full grid grid-cols-3 h-auto rounded-2xl shadow-lg normshad hover:shadow-xl overflow-hidden'>
                <div className=' col-span-1 py-2'>
                    <div className='flex flex-row gap-1 pl-2'>
                        <h1 className='font-bold'>Admin Name: </h1>
                        <p>{name && name.fname + " " + name.lname} </p>
                    </div>
                    <div className='flex flex-row gap-1 pl-2'>
                        <h1 className='font-bold'>Request Type: </h1>
                        <p>{props.req_type}</p>
                    </div>
                </div>
                <div className='border-l border-gray-200 col-span-2 py-2'>
                    <div className="flex flex-col gap-1 px-2">
                        <div className='flex flex-row gap-1'>
                            <p className='font-bold'>Asset Name:</p>
                            <p>{data.name}</p>
                        </div>
                        <div className='flex flex-row gap-1'>
                            <p className='font-bold'>Asset Owner:</p>
                            <p>{data.owner}</p>
                        </div>
                        <div className='flex flex-row gap-1'>
                            <p className='font-bold'>Entrusted ID:</p>
                            <p>{data.entrusted_id}</p>
                        </div>
                        <div className='flex flex-row gap-1'>
                            <p className='font-bold'>Sub Code:</p>
                            <p>{data.sub_code}</p>
                        </div>
                        <div className='flex flex-row gap-1'>
                            <p className='font-bold'>Location Code:</p>
                            <p>{data.location_code}</p>
                        </div>
                        <div className='flex flex-row gap-1'>
                            <p className='font-bold'>Asset Status:</p>
                            <p>{data.asset_status}</p>
                        </div>
                        <div className='flex flex-row gap-1'>
                            <p className='font-bold'>Class Code:</p>
                            <p>{data.class_code}</p>
                        </div>
                        <div className='flex flex-row gap-1'>
                            <p className='font-bold'>Posting Group:</p>
                            <p>{data.posting_group}</p>
                        </div>
                        <div className='flex flex-row gap-1'>
                            <p className='font-bold'>Price:</p>
                            <p>{data.price}</p>
                        </div>
                        <div>
                            <hr />
                            <div className='flex flex-row justify-end gap-4 py-2'>
                                <button
                                    onClick={() => {
                                        setAcceptOpen(true)
                                        setItem(data.id)
                                    }}
                                    className='py-2 px-4 normshad rounded-xl text-white bg-green-500 hover:bg-green-700 '>Accept</button>
                                <button
                                    onClick={() => {
                                        setDeclineOpen(true)
                                        setItem(data.id)
                                    }}
                                    className='py-2 px-4 normshad rounded-xl text-white bg-red-500  hover:bg-red-700'>Decline</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}