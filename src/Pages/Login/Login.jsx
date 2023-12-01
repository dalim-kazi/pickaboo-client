import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Checkbox,
    
} from "@material-tailwind/react";
import { BsFacebook } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { useForm } from "react-hook-form"
import login from '../../assets/login/Vecteezy-Newnormalactivity-WFH_BK1120.jpg'
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
const Login = () => {
  const { singInAccountWithEmailAndPassword, googleSinUp ,logOut, passwordForget} = useContext(AuthContext)
  const [blurEmail, setBlurEmail] = useState('')
  console.log(blurEmail)
  const {register,handleSubmit,formState: { errors },} = useForm()
  const Navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
   
  const onSubmit = (data) => {
    console.log(data)
    singInAccountWithEmailAndPassword(data.email, data.password)
    .then((result) => {
      const user = result.user 
      Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: 'successful login your account',
        showConfirmButton: false,
        timer: 1500
      })
      if (user.emailVerified) {
        Navigate(from, { replace: true })
        const userInfo = {
          name: user.displayName,
          email:user.email,
          image:user.photoURL 
        }
        axios.post('https://bata-server.vercel.app/users', userInfo)
          .then(() => {})
      }
      else {
        logOut()
        Swal.fire({
          position: 'top-center',
          icon: 'success',
          title: 'please verify your email address',
          showConfirmButton: false,
          timer: 2500
        })
        }
  })
     
  }
  const handleBlur = (event) => {
    const email = event.target.value 
    setBlurEmail(email)
  }

  const resetPassword = () => {
    passwordForget(blurEmail)
      .then((() => {
        Swal.fire({
          position: 'top-center',
          icon: 'success',
          title: 'successful. please cheek your email',
          showConfirmButton: false,
          timer: 1500
        })
    }))
 }

  const handleGoogleSingIn = () => {
    googleSinUp()
      .then((data) => {
        Swal.fire({
          position: 'top-center',
          icon: 'success',
          title: 'successful create your account',
          showConfirmButton: false,
          timer: 1500
        })
        Navigate(from, { replace: true })
        console.log(data.user)
        const userInfo = {
          name: data.user.displayName,
          email: data.user.email,
          image:data.user.photoURL
        }
        axios.post('https://bata-server.vercel.app/users', userInfo)
              .then(() => {})
    })
  }
  
 
    return (
      <div className="md:flex items-center md:w-full lg:w-5/6  mx-auto mt-20 lg:gap-20">
        <div className="md:w-1/2 lg:w-3/5 m-10 md:m-0">
          <img className="" src={login} alt="" />
        </div>
        <Card className="md:w-1/2 lg:w-5/12 mt-20 mb-20 border-2 shadow-none m-10 md:m-5">
        <form onSubmit={handleSubmit(onSubmit)}>
        <CardBody className="flex flex-col gap-4">
          <h1 className="text-2xl text-center ">Sing In</h1>
              <Input onBlurCapture={handleBlur} label="Email" type="email" size="lg" {...register("email", { required: true })} />
              {errors.email && <span className="text-red-600">This field is required</span>}
              <Input label="Password" type="password" size="lg" {...register("password", { required: true })} />
              {errors.password && <span className="text-red-600">This field is required</span>}
           <div className="flex justify-between -ml-2.5">
                <div>
                <Checkbox label="Remember Me" {...register("checkbox", { required: true })} />
                {errors.checkbox && <span className="text-red-600 block mx-5">This field is required</span>}
                </div>
                <Link className=" underline underline-offset-1 text-blue-600"><button onClick={resetPassword}>Forget Password</button></Link>
        </div>
      </CardBody>
      <CardFooter className="pt-0">
      <Input  variant="outlined" type="submit"  value={"Login"}  className="!border !border-blue-300 cursor-pointer !bg-blue-600 text-white shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"  labelProps={{
          className: "hidden",
        }}/>
        <Typography variant="small" className="mt-6 flex justify-center">
          Don&apos;t have an account?
          <Typography
            as="a"
            href="#signup"
            variant="small"
            color="blue"
            className="ml-1 font-bold"
          >
           <Link to={"/register"}>Sign up</Link>
          </Typography>
        </Typography>
            </CardFooter>
            <hr />
            <div className="flex justify-center gap-5 mt-5 mb-5">
                <BsFacebook className="text-blue-600 text-xl cursor-pointer"></BsFacebook>
                <FcGoogle onClick={handleGoogleSingIn} className="text-xl cursor-pointer"></FcGoogle>
               </div>
          </form>
          
    </Card>
        </div>
    );
};

export default Login;