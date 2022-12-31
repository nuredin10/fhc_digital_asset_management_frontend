import React, { useState, useEffect, useContext } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import jwt_decode from 'jwt-decode'
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
} from "@material-tailwind/react";
import axios from '../../http/axios';
import { LoginContext } from "@/context/LoginContext";

// Images
import background from '../../assets/images/background.jpg';

export function SignIn() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const state = useContext(LoginContext);
  const navigate = useNavigate();


  const handleSignin = () => {
    axios.post('/login', {
      email: email,
      password: password,
    }, {
      withCredentials: true,
    })
      .then(function (response) {
        if (response.data.msg === 'email') {
          // <Alert color="red">Unknown Email</Alert>
          console.log("Email Unknown");
        }
        if (response.data.msg === 'password') {
          // <Alert color="red">Password Incorrect</Alert>
        }
        if (response.data.msg === 'success') {
          // <Alert color="green">Login Success</Alert>
          state.setDecoded(jwt_decode(response.data.accessToken));
          state.setLog(true);

          localStorage.setItem('decoded', JSON.stringify(jwt_decode(response.data.accessToken)));
          localStorage.setItem('log', true);

          navigate('/dashboard/home');
        }
      })


    useEffect(() => {

    })
    console.log(email);
  }
  return (
    <>
      <img
        src={background}
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
              Sign In
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <Input onChange={(e) => setEmail(e.target.value)} type="email" label="Email" size="lg" />
            <Input onChange={(e) => setPassword(e.target.value)} type="password" label="Password" size="lg" />
          </CardBody>
          <CardFooter className="pt-0">
            <Button
              onClick={handleSignin}
              variant="gradient" fullWidth>
              Sign In
            </Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}

export default SignIn;
