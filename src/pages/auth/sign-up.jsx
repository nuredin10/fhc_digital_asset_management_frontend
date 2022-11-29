import React, { useState, useEffect } from 'react';
import axios from '../../http/axios';
import { Link } from "react-router-dom";
import { useSnackbar } from 'notistack';
import * as Yup from 'yup';
import { useFormik } from 'formik';

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
  const [formValues, setFormValues] = useState([]);
  const [allforms, setAllforms] = useState([]);

  const { enqueueSnackbar } = useSnackbar();

  // const Form = () => {
  //   const initialValues = {
  //     fname: "",
  //     lname: "",
  //     uname: "",
  //     email: "",
  //     phone: "",
  //     nrole: "",
  //     password: ""
  //   };
  //   const [formValues, setFormValues] = useState(initialValues);
  //   const [formErrors, setFormErrors] = useState({});
  //   const [isSubmitting, setIsSubmitting] = useState(false);

  //   const submitForm = () => {
  //     console.log(formValues);
  //   };

  //   const handleChange = (e) => {
  //     e.preventDefault();
  //     setFormErrors(validate(formValues));
  //     setIsSubmitting(true);
  //   };

  //   const validate = (values) => {
  //     let errors = {};
  //     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  //     if (!values.email) {

  //     }
  //   }

  // }

  // const initialValues = {
  //   fname: "",
  //   lname: "",
  //   uname: "",
  //   email: "",
  //   phone: "",
  //   nrole: "",
  //   password: ""
  // };
  // const SignUpSchema = Yup.object().shape({
  //   fname: Yup.string()
  //     .min(3, "Name Short!")
  //     .required("First Name is required"),
  //   lname: Yup.string()
  //     .min(3, "Name Short!")
  //     .required("First Name is required"),
  //   uname: Yup.string()
  //     .required("Username is required"),
  //   email: Yup.string()
  //     .email()
  //     .required("Email is required"),
  //   phone: Yup.string()
  //     .min(3, "Phone Number must be longer"),
  //   nrole: Yup.required("Role is Required"),
  //   password: Yup.string()
  //     .min(8, "Password must be greater than 8 characters"),

  // })

  // const formik = useFormik({
  //   initialValues: {
  //     fname: "",
  //     lname: "",
  //     uname: "",
  //     email: "",
  //     phone: "",
  //     nrole: "",
  //     password: ""
  //   },
  //   validationSchema: Yup.object({
  //     fname: Yup.string().min(3, "Name Short!").required("First Name is required"),
  //     lname: Yup.string().min(3, "Name Short!").required("First Name is required"),
  //     uname: Yup.string().required("Username is required"),
  //     email: Yup.string().email().required("Email is required"),
  //     phone: Yup.string().min(3, "Phone Number must be longer"),
  //     // nrole: Yup.required("Role is Required"),
  //     password: Yup.string().min(8, "Password must be greater than 8 characters"),
  //   }),

  //   onSubmit: () => {
  //     console.log('clicked');
  //     // axios.post('/signup', data, {
  //     //   withCredentials: true
  //     // })
  //     //   .then(function (response) {
  //     //     if (response.data.msg === 'success') {
  //     //       // <Alert>Account Successfully created</Alert>
  //     //       // console.log('Account Creation Success');
  //     //       enqueueSnackbar('AccountSuccessfullt Created', { variant: 'success' });

  //     //     }
  //     //   }).catch(function (error) {
  //     //     <Alert color="red">THere was an error creating the Account</Alert>
  //     //   });
  //   }
  // });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });

  };

  const handleSignIn = () => {
    formValues && setAllforms({ ...formValues, 'role': role });
    console.log(allforms);

    axios.post('/signup', {
      formValues
    })
    axios.post('/signup', { formValues })
      .then(function (response) {
        if (response.data.msg === 'success') {
          enqueueSnackbar('AccountSuccessfullt Created', { variant: 'success' });

        }
      }).catch(function (error) {
        enqueueSnackbar("Unable to Create Account", { variant: 'error' });
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
            {/* <form className='flex flex-col gap-3' onSubmit={formik.handleSubmit}> */}
            <Input onChange={(e) => handleChange(e)} name='fname' label="Firts Name" size="md" />
            <Input onChange={(e) => handleChange(e)} name='lname' label="Last Name" size="md" />
            <Input onChange={(e) => handleChange(e)} name='uname' label="Username" size="md" />
            <Input onChange={(e) => handleChange(e)} name='email' type="email" label="Email" size="md" />
            <Input onChange={(e) => handleChange(e)} name='phone_number' label="Phone Number" size="md" />
            <Select onChange={(e) => setRole(e)} value={role} label="Select Role">
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
            <Input onChange={(e) => handleChange(e)} name='password' type="password" label="Password" size="md" />
            {/* </form> */}
          </CardBody>
          <CardFooter className="pt-0">
            <Button
              sx={{
                cursor: "pointer"
              }}
              className='cursor-pointer'
              onClick={handleSignIn}
              // type='submit'
              // onClick={handleSigni}
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
