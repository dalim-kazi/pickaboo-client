import { Button, Input, Textarea } from "@material-tailwind/react";
import axios from "axios";
import { useForm } from "react-hook-form";
import UseAxiosSecure from "../../../component/AxiosInterceptors/UseAxiosSecure";
import Swal from "sweetalert2";
import { useState } from "react";

const AddItem = () => {
  const [axiosSecure] = UseAxiosSecure()
  const [loading,setLoading]=useState(false)
  const { register, handleSubmit,reset} = useForm();
  const imageApi = import.meta.env.VITE_image_Api;

  const onSubmit = async (data) => {
    setLoading(true)
    try {
      const image1 = data.image1[0];
      const image2 = data.image2[0];
      const image3 = data.image3[0];
      const image4 = data.image4[0];
      // formData
      const formData1 = new FormData();
      const formData2 = new FormData();
      const formData3 = new FormData();
      const formData4 = new FormData();
      // key
      formData1.append('key', imageApi);
      formData2.append('key', imageApi);
      formData3.append('key', imageApi);
      formData4.append('key', imageApi);
      // image
      formData1.append('image', image1);
      formData2.append('image', image2);
      formData3.append('image', image3);
      formData4.append('image', image4);
      const response1 = await axios.post(`https://api.imgbb.com/1/upload`, formData1);
      const img1=response1.data.data.url
      const response2 = await axios.post(`https://api.imgbb.com/1/upload`, formData2);
      const img2=response2.data.data.url
      const response3 = await axios.post(`https://api.imgbb.com/1/upload`, formData3);
      const img3=response3.data.data.url
      const response4 = await axios.post(`https://api.imgbb.com/1/upload`, formData4);
      const img4=response4.data.data.url
      const productsInfo = {
        gender:data.gender,
        brand:data.brand,
        category:data.category,
        subCategory:data.subCategory,
        color:data.color,
        Size:[
          data.size1,
          data.size2,
          data.size3,
          data.size4
        ],
        image:[
          img1,
          img2,
          img3,
          img4
        ],
         tittle:data.tittle,
         details:data.details,
         price: parseFloat(data.price),
      }
      
      axiosSecure.post('/Products', productsInfo)
        .then(data => {
          if (data.data.insertedId) { 
            setLoading(false)
            reset()
            Swal.fire({
              position: 'top-center',
              icon: 'success',
              title: 'successful add your products',
              showConfirmButton: false,
              timer: 1500
            })
        }
      })
    
    } catch (error) {
      console.error('Error uploading image:', error);
    }
    setLoading(false)
  };
  
    return (
        <div className="mb-10">
        <p className="text-xl text-center text-blue-600 border-b-2 mt-5 mb-2">ADMIN  ADDITEM</p>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="bg-gray-100 p-10 mt-10 rounded-lg mx-auto">
            <div className="grid grid-cols-2 gap-5 mb-5">
                   <Input {...register("gender", { required: true })} type="text"placeholder="gender"className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                    labelProps={{
                   className: "hidden",
                   }}
                    containerProps={{ className: "min-w-[100px]" }}
                    />
                    <Input
                        {...register("brand", { required: true })}
                  type="text"
                  placeholder="brand"
                  className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                 labelProps={{
                  className: "hidden",
                }}
                 containerProps={{ className: "min-w-[100px]" }}
                    />
                    <Input
                        {...register("category", { required: true })}
            type="text"
            placeholder="category"
           className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
            labelProps={{
             className: "hidden",
            }}
              containerProps={{ className: "min-w-[100px]" }}
                    />
                    <Input
                         {...register("subCategory", { required: true })}
               type="text"
            placeholder="subCategory"
              className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
             labelProps={{
            className: "hidden",
             }}
              containerProps={{ className: "min-w-[100px]" }}
                    />
                    <Input
                         {...register("color", { required: true })}
               type="text"
             placeholder="color"
             className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
             labelProps={{
              className: "hidden",
            }}
             containerProps={{ className: "min-w-[100px]" }}
                    />
                    <Input
                         {...register("tittle", { required: true })}
            type="text"
            placeholder="tittle"
             className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
           labelProps={{
          className: "hidden",
        }}
        containerProps={{ className: "min-w-[100px]" }}
                    />
                     
                    <Input
                        {...register("price", { required: true })} 
                    type="text"
               placeholder="price"
             className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
           labelProps={{
          className: "hidden",
            }}
             containerProps={{ className: "min-w-[100px]" }}
                    />
                     
              <Input type="file"  {...register("image1", { required: true })} 
              placeholder="image1"
              className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
             labelProps={{
                className: "hidden",
            }}
             containerProps={{ className: "min-w-[100px]" }}
              
              />
              <Input
                    {...register("image2" , { required: true })}  
         type="file"
         placeholder="image2"
          className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
         labelProps={{
            className: "hidden",
        }}
         containerProps={{ className: "min-w-[100px]" }}
                 /> <Input
                 {...register("image3" , { required: true })}  
          type="file"
           placeholder="image3"
            className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
         labelProps={{
         className: "hidden",
          }}
          containerProps={{ className: "min-w-[100px]" }}
                 /> <Input
              {...register("image4" , { required: true })}  
             type="file"
            placeholder="image4"
                 className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
             labelProps={{
                className: "hidden",
                  }}
               containerProps={{ className: "min-w-[100px]" }}
            />
            </div>
            <div className="grid grid-cols-4 gap-3 mb-5">
              <Input
                        {...register("size1", { required: true })}  
            type="text"
             placeholder="size1"
              className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
              labelProps={{
                  className: "hidden",
             }}
              containerProps={{ className: "min-w-[100px]" }}
                />
                 <Input
                        {...register("size2",{ required: true })}  
             type="text"
             placeholder="size2"
              className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
              labelProps={{
                  className: "hidden",
             }}
              containerProps={{ className: "min-w-[100px]" }}
                />
                 <Input
                        {...register("size3",{ required: true })}  
            type="text"
             placeholder="size3"
              className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
              labelProps={{
                  className: "hidden",
             }}
              containerProps={{ className: "min-w-[100px]" }}
                    /> <Input
                    {...register("size4",{ required: true })}  
        type="text"
         placeholder="size4"
          className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
          labelProps={{
              className: "hidden",
         }}
          containerProps={{ className: "min-w-[100px]" }}
                />
                   </div>
            <Textarea  {...register("details", { required: true })} label="details"
             className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
             labelProps={{
                className: "hidden",
                  }}
               containerProps={{ className: "min-w-[100px]" }}
            />
             <Button type="submit" disabled={loading} className="bg-blue-600 mt-10">Submit</Button> 
                  </div>
                </form>
             
        </div>
    );
};

export default AddItem;