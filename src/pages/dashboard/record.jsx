import React, { useEffect, useMemo, useState } from 'react';
import axios from '../../http/axios';
import MaterialReactTable from 'material-react-table';


function Record() {
    const [data, setData] = useState();

    useEffect(()=>{
        axios.get('/record/view',{
            withCredentials: true,
        }).then(function(response){
            setData(response.data);
            console.log(response.data);
        })
    },[]);

    const columns = useMemo(
        ()=>[
            {
                accessorKey: 'id',
                header: 'ID',
            },
            {
                accessorKey: 'admin_id',
                header: 'Admin ID',
            },
            {
                accessorKey: 'role',
                header: 'Role',
            },
            {
                accessorKey: 'activity',
                header: 'Activity',
            },
           

        ]
    );
    return (
        <div className='min-h-screen flex flex-col gap-1'>
            <div className='text-3xl flex flex-col gap-3'>
                <h1 className='font-bold text-4xl text-blue-700'>Records</h1>
                <hr className='w-1/3 border  text-blue-700 border-red-800' />
            </div>
           {
           data && 
           <div>
                <MaterialReactTable
                    columns={columns}
                    data={data}
                    enableColumnActions={false}
                    enableColumnFilters={false}
                    enablePagination={false}
                    enableSorting={false}
                    enableBottomToolbar={false}
                    enableTopToolbar={false}
                    muiTableBodyRowProps={{ hover: true }}
                />
            </div>}
        </div>
    );
}

export default Record;