import React, { useEffect, useState } from 'react';
import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Avatar,
  Typography,
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Switch,
  Tooltip,
  Button,
} from "@material-tailwind/react";
import {
  UserCircleIcon,
  HomeIcon,
  ChatBubbleLeftEllipsisIcon,
  Cog6ToothIcon,
  PencilIcon,
} from "@heroicons/react/24/solid";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from "react-router-dom";
import axios from '../../http/axios';
import { ProfileInfoCard, MessageCard } from "@/widgets/cards";
import { platformSettingsData, conversationsData, projectsData } from "@/data";
import { LoginContext } from "@/context/LoginContext";
import CheckProfile from '@/components/CheckProfile';

const roleCheck = (role) => {
  switch (role) {
    case "SA":
      return 'Super Admin';
    case "TL":
      return 'Team Leader';
    case "S":
      return 'Senrior';
    case "BM":
      return 'Branch Manager';
    case "A":
      return 'Admin';
    case "V":
      return 'Viewer';
    default:
      return 'None';
  }
}

export function Profile() {
  const [pdata, setPdata] = useState();
  let id = JSON.parse(localStorage.getItem('decoded'));

  useEffect(() => {
    axios.get('/profile', {
      params: {
        id: id.adminId
      },
      withCredentials: true,
    })
      .then(function (response) {
        setPdata(response.data);
        console.log(response.data)
      })
  }, []);

  const resetInventory = () =>{
     
  }

  return (
    <>
      <div className="relative mt-8 h-72 w-full overflow-hidden rounded-xl bg-[url(https://images.unsplash.com/photo-1531512073830-ba890ca4eba2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80)] bg-cover	bg-center">
        <div className="absolute inset-0 h-full w-full bg-blue-500/50" />
      </div>
      <Card className="mx-3 -mt-16 mb-6 lg:mx-4">
        <CardBody className="p-4">
          <div className="mb-10 flex items-start justify-between gap-6">
            <div className="flex items-center gap-6">
              <UserCircleIcon
                className='w-20 rouned-lg box-shadow-lg shadow-blue-gray-500/40'
              />
              <div>
                {
                  pdata && <>
                    <Typography variant="h5" color="blue-gray" className="mb-1">
                      {pdata.fname} {pdata.lname}
                    </Typography>
                    <Typography
                      variant="small"
                      className="font-normal text-blue-gray-600"
                    >
                      {roleCheck(pdata.role)}
                    </Typography>
                  </>
                }
              </div>
            </div>
            <div className="w-full">
              <Tabs value="app">
                <TabsHeader>
                  <Tab value="app">
                    <HomeIcon className="-mt-1 mr-2 inline-block h-5 w-5" />
                    App
                  </Tab>
                  <Tab value="request">
                    <ChatBubbleLeftEllipsisIcon className="-mt-0.5 mr-2 inline-block h-5 w-5" />
                    Requests
                  </Tab>
                  <Tab value="settings">
                    <Cog6ToothIcon className="-mt-1 mr-2 inline-block h-5 w-5" />
                    Settings
                  </Tab>
                </TabsHeader>
                <TabsBody>
                  <TabPanel value="app">
                    <div className=" gird-cols-1 mb-12 grid gap-12 px-4 lg:grid-cols-2 xl:grid-cols-3">

                      {/* Profile Setting */}
                      <div>
                        <Typography variant="h6" color="blue-gray" className="mb-3">
                          Platform Settings
                        </Typography>
                        <div className="flex flex-col gap-12">
                          <div>
                            <Typography className='mb-4 block text-xs font-semibold uppercase text-blue-gray-500"'>Inventory</Typography>
                            <div className='flex flex-col gap-6'>
                              <div className='flex flex-row gap-3 items-center'>
                                <Typography className='block text-xs font-bold uppercase'>Reset Inventory</Typography>
                                <Button 
                                onClick={resetInventory}
                                color='red' >Reset</Button>
                              </div>

                            </div>
                          </div>
                        
                          {/* {platformSettingsData.map(({ title, options }) => (
                            <div key={title}>
                              <Typography className="mb-4 block text-xs font-semibold uppercase text-blue-gray-500">
                                {title}
                              </Typography>
                              <div className="flex flex-col gap-6">
                                {options.map(({ checked, label }) => (
                                  <Switch
                                    key={label}
                                    id={label}
                                    label={label}
                                    defaultChecked={checked}
                                    labelProps={{
                                      className: "text-sm font-normal text-blue-gray-500",
                                    }}
                                  />
                                ))}
                              </div>
                            </div>
                          ))} */}
                        </div>
                      </div>

                      {/* Profile Infromation */}
                      {pdata &&
                        <CheckProfile data={pdata} />}
                    </div>
                  </TabPanel>
                  <TabPanel value="request">
                    <div className='min-h-screen'>

                    </div>
                  </TabPanel>
                </TabsBody>
              </Tabs>
            </div>
          </div>


        </CardBody>
      </Card>
    </>
  );
}

export default Profile;
