import {
    Card,
    Input,
    Checkbox,
    Typography,
    CardBody,
    CardFooter,
} from "@material-tailwind/react";

import login from '../../assets/login/Vecteezy-Newnormalactivity-WFH_BK1120.jpg'
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { useContext } from "react";
 
const Register = () => {
  const {createAccountEmailAndPassword,updateYourProfile,emailVerify,logOut}=useContext(AuthContext)
  const { register, handleSubmit,reset, formState: { errors } } = useForm()
  const image_Api = import.meta.env.VITE_image_Api 
  const Navigate = useNavigate();
  const onSubmit = (data) => {
    const image = data.file[0]
    const imageForm = new FormData() 
    imageForm.append('image', image)
    const url = `https://api.imgbb.com/1/upload?key=${image_Api}`
    fetch(url, {
      method: "POST",
      body:imageForm
    })
      .then(res => res.json())
      .then(imgData => {
        const URL = imgData.data.url 
        createAccountEmailAndPassword(data.email, data.password)
          .then((result) => {
            const user = result.user 
            console.log(user)
          updateYourProfile(data.name,URL)
            .then(() => {
              emailVerify()
                .then(() => {
                reset()
                logOut()
               .then(() => {
               Navigate('/login')
             })
                })
            })
      })
    })
    
  }
    return (
        <>
         <div className="md:flex items-center md:w-full lg:w-5/6  mx-auto mt-20 lg:gap-20">
        <div className="md:w-1/2 lg:w-3/5 m-10 md:m-0">
          <img className="" src={login} alt="" />
        </div>
        <Card className="md:w-1/2 lg:w-5/12 mt-20 mb-20 border-2 shadow-none m-10 md:m-5">
        <form onSubmit={handleSubmit(onSubmit)}>
        <CardBody className="flex flex-col gap-4">
          <h1 className="text-2xl text-center ">Sing Up</h1>
              <Input label="name" type="text" size="lg" {...register("name", { required: true })} />
                {errors.name && <span className="text-red-600">This field is required</span>}
                <Input label="Email" type="email" size="lg" {...register("email", { required: true })} />
              {errors.email && <span className="text-red-600">This field is required</span>}
                <Input label="Password" type="password" size="lg" {...register("password", {
                  required: true,
                  minLength:8,
                  pattern:  /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z])/ 
              
                })} />
       {errors.password && <span className="text-red-600">8 characters,2 Upper Case,1 Special Character,2 numerals,3 Lower Case</span>}
                <Input type="file"  {...register("file", { required: true })} />
                {errors.file && <span className="text-red-600">This field is required</span>}
        <div className="-ml-2.5">
                <Checkbox label="Remember Me" {...register("checkbox", { required: true })} />
                {errors.checkbox && <span className="text-red-600 block mx-5">This field is required</span>}
        </div>
      </CardBody>
      <CardFooter className="pt-0">
      <Input  variant="outlined" type="submit"  value={"Registration"}  className="!border !border-blue-300 cursor-pointer !bg-blue-600 text-white shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"  labelProps={{
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
            <Link to={"/login"}>Login</Link>
          </Typography>
                </Typography>
                
      </CardFooter>
        </form>
    </Card>
        </div>
        </>
    );
};

export default Register;