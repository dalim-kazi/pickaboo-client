
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {CardHeader,CardBody,CardFooter,Typography,Button,Card, Spinner,} from "@material-tailwind/react";
import { Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
 
import { useState } from 'react';
import { FaRegHeart } from 'react-icons/fa';
 
const SwiperCard = ({details,isLoading}) => {
   
    const [swiperRef, setSwiperRef] = useState(null);

    let appendNumber = 4;
    let prependNumber = 1;
  
    const prepend2 = () => {
      swiperRef.prependSlide([
        '<div class="swiper-slide">Slide ' + --prependNumber + '</div>',
        '<div class="swiper-slide">Slide ' + --prependNumber + '</div>',
      ]);
    };
  
    const prepend = () => {
      swiperRef.prependSlide(
        '<div class="swiper-slide">Slide ' + --prependNumber + '</div>'
      );
    };
  
    const append = () => {
      swiperRef.appendSlide(
        '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>'
      );
    };
  
    const append2 = () => {
      swiperRef.appendSlide([
        '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>',
        '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>',
      ]);
  };
  if (isLoading) {
    return <Spinner className="h-16 w-16 text-blue-600 mx-auto mt-20 mb-20" />
  }
    return (
        <>
          <Swiper
          onSwiper={setSwiperRef}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
        spaceBetween={10}
       
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
       
        >
          
          {
            details?.map(items => <SwiperSlide key={items._id}>
             
             <Card className="shadow-none hover:shadow-lg hover:border-2 w-full h-[26rem] group relative cursor-pointer">
        <p className="absolute top-0 right-0 mx-3 mt-2 mb-2 cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300"><FaRegHeart className="text-lg"></FaRegHeart></p>
          <CardHeader shadow={false} floated={false} className="mt-8 rounded-sm"> 
        <img
          src={items.image[0]}
          className="w-full h-full object-cover transform transition-transform duration-300 delay-300 hover:scale-150 ease-in"
            />
      </CardHeader>
          <CardBody>
        <div className="items-center justify-between -mt-2">
          <Typography color="blue-gray" className="font-medium">
          {items.tittle.slice(0,20)}....
          </Typography>
          <Typography color="blue-gray" className="font-medium">
                            {
                            items.price2? <strike>TK. {items.price2}</strike>:<></>
                            } <span className="text-orange-600 font-bold">TK.  {items.price}</span>
          </Typography>
        </div>
      </CardBody>
      <CardFooter className="pt-0 -mt-2">
        <Button
          ripple={false}
              fullWidth={true}
          className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-red-500 rounded-none"
        >
          <Link to={`/productsOverView/${items._id}`}> SHOP NOW</Link>
        </Button>
      </CardFooter>
    </Card>
            </SwiperSlide>)
          }
           
         
      </Swiper>

      <p className="append-buttons">
        <button onClick={() => prepend2()} className="prepend-2-slides">
          
        </button>
        <button onClick={() => prepend()} className="prepend-slide">
         
        </button>
        <button onClick={() => append()} className="append-slide">
         
        </button>
        <button  onClick={() => append2()} className="append-2-slides">
           
        </button>
      </p>  
        </>
    );
};
export default SwiperCard;