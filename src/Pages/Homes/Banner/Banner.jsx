import { Carousel } from "@material-tailwind/react";
import banner1 from '../../../assets/banner/Accessories-web-banner-Flat-25_1_f81759e3-cf82-4fde-acaa-bd20092a039a.webp'
import banner2 from '../../../assets/banner/Bata-club-web-banner.webp'
import banner3 from '../../../assets/banner/Floatz-web-banner.webp'
import banner4 from '../../../assets/banner/Step-up-your-game-web-banner.webp'
 
const Banner = () => {
    return (
       
         <div>
            <Carousel
                autoplay={true}
                autoplayDelay={2000}
                loop={true}
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      <img
        src={banner1}
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src={banner2}
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src={banner3}
        alt="image 3"
        className="h-full w-full object-cover"
                />
                <img
        src={banner4}
        alt="image 3"
        className="h-full w-full object-cover"
          />
          <img
        src='https://cdn.shopify.com/s/files/1/2287/9679/files/Sneakerfest_23_web_banner.jpg?v=1675139418'
        alt="image 3"
        className="h-full w-full object-cover"
          />
    </Carousel>
        </div>
    
    );
};

export default Banner;