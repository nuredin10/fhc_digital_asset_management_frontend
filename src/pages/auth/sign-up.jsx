import React, { useState, useEffect } from 'react';
import axios from '../../http/axios';
import { Link } from "react-router-dom";
import {
  Alert,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Checkbox,
  Button,
  Typography,
  Select,
  Option,
  Radio
} from "@material-tailwind/react";


export function SignUp() {
  const [role, setRole] = useState();

  const [fname, setFname] = useState();
  const [lname, setLname] = useState();
  const [uname, setUname] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [nrole, setNrole] = useState();
  const [password, setPassword] = useState();


  const handleSignIn = () => {
    axios.post('/signup', {
      fname: fname,
      lname: lname,
      uname: uname,
      email: email,
      phone_number: phone,
      role: nrole,
      gender: 'M',
      password: password,
    })
      .then(function (response) {
        if (response.data.msg === 'success') {
          <Alert>Account Successfully created</Alert>
          console.log('Account Creation Success')
        }
      }).catch(function (error) {
        <Alert color="red">THere was an error creating the Account</Alert>
      })

  }

  return (
    <>
      <img
        src="https://images.unsplash.com/photo-1497294815431-9365093b7331?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80"
        className="absolute inset-0 z-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 z-0 h-full w-full bg-black/50" />
      <div className="container mx-auto p-4">
        <Card className="absolute top-2/4 left-2/4 w-full max-w-[24rem] -translate-y-2/4 -translate-x-2/4">
          <CardHeader
            variant="gradient"
            color="blue"
            className="mb-4 grid h-28 place-items-center"
          >
            <Typography variant="h3" color="white">
              Sign Up
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <Input onChange={(e) => setFname(e.target.value)} label="Firts Name" size="md" />
            <Input onChange={(e) => setLname(e.target.value)} label="Last Name" size="md" />
            <Input onChange={(e) => setUname(e.target.value)} label="Username" size="md" />
            <Input onChange={(e) => setEmail(e.target.value)} type="email" label="Email" size="md" />
            <Input onChange={(e) => setPhone(e.target.value)} label="Phone Number" size="md" />
            <Select onChange={(e) => setNrole(e)} label="Select Role">
              <Option value="SA">Super Admin</Option>
              <Option value="TL">Team Leader</Option>
              <Option value="S">Senior</Option>
              <Option value="BM">Branch Manager</Option>
              <Option value="A">Admin</Option>
              <Option value="V">Viewer</Option>
            </Select>
            <div className="flex flex-row items-center gap-5">
              <p>Gender: </p>
              <div className="flex flex-row items-center">
                Male <Radio id="Male" name="gender" />
                Female<Radio id="Female" name="gender" />
              </div>
            </div>
            <Input onChange={(e) => setPassword(e.target.value)} type="password" label="Password" size="md" />
          </CardBody>
          <CardFooter className="pt-0">
            <Button
              sx={{
                cursor: "pointer"
              }}
              className='cursor-pointer'
              onClick={handleSignIn}
              variant="gradient" fullWidth>
              Sign Up
            </Button>

          </CardFooter>
        </Card>
      </div>
    </>
  );
}

export default SignUp;
