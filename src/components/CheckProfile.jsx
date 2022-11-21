import React from 'react'
import { ProfileInfoCard } from '@/widgets/cards'
import {
    Tooltip
} from '@material-tailwind/react';
import {
    PencilIcon
} from '@heroicons/react/24/solid';

const roleCheck = (role) => {
    switch (role) {
        case "SA":
            return 'Super Admin';
        default:
            return 'None';
    }
}

const checkDesc = (desc) => {
    switch (desc) {
        case "SA":
            return "Super Admin Can Add, Delete, Edit and Read Datas on the platform";
    }
}

export default function CheckProfile({ data }) {
    console.log(data)
    return (
        <ProfileInfoCard
            title="Profile Information"
            description={checkDesc(data.role)}
            details={{
                "full name": data.fname + " " + data.lname,
                mobile: data.phone_number,
                email: data.email,
                role: roleCheck(data.role),
                username: data.uname,

            }}
            action={
                <Tooltip content="Edit Profile">
                    <PencilIcon className="h-4 w-4 cursor-pointer text-blue-gray-500" />
                </Tooltip>
            }
        />
    )
}
