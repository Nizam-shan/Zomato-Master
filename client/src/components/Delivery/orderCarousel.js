import React from "react";
import OrderSlider from "react-slick";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const OrderCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        rows: 2,
        slidesToScroll: 3
      };

      const settingsLg = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        
        slidesToScroll: 2
      }

      const images = [
        {
            pic :"https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png?fit=around|120:120&crop=120:120;*,*",
            name : "Pizza"
        },
        {
            pic :  "https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png?fit=around|120:120&crop=120:120;*,*",
            name : "Biriyani"
          },
          {
            pic :  "https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png?fit=around|120:120&crop=120:120;*,*",
            name : "Biriyani"
          },
          {
            pic :"https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png?fit=around|120:120&crop=120:120;*,*",
            name : "Pizza"
        },
          {
            pic :  "https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png?fit=around|120:120&crop=120:120;*,*",
            name : "Biriyani"
          },
          {
            pic :  "https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png?fit=around|120:120&crop=120:120;*,*",
            name : "Biriyani"
          },
          {
            pic :"https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png?fit=around|120:120&crop=120:120;*,*",
            name : "Pizza"
        },
          {
            pic :  "https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png?fit=around|120:120&crop=120:120;*,*",
            name : "Biriyani"
          },
          
      ]
      return (
        <>
         
           <div className="lg:hidden">
          
           <OrderSlider {...settings}>
            {
                images.map((image)=>(
                    <div className="items-center p-2">
                      
                        <img 
                       src={image.pic} 
                       alt="orderimage"
                       className="rounded-full"
                        />
                        <h1>{image.name}</h1>
                    </div>
                ))
            }
            </OrderSlider>
           </div>


           <div className="hidden lg:inline bg-gray-200">
          
           <OrderSlider {...settingsLg}>
           
            {
              
                images.map((image)=>(
                    <div className="items-center p-2">
                      
                        <img 
                       src={image.pic} 
                       alt="orderimage"
                       className="rounded-full w-40"
                        />
                        <h1 className="ml-10">{image.name}</h1>
                    </div>
                ))
            }
            </OrderSlider>
           </div>
        </>
      )
}

export default OrderCarousel;