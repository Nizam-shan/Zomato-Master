import React from "react";
import OrderSlider from "react-slick";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const DinningCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
      
        speed: 500,
        slidesToShow: 1,
        
        slidesToScroll: 1
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
            nav:"https://b.zmtcdn.com/data/collections/013ec5a6916eca9567f4169b687b819a_1669618512.jpg?output-format=webp",
            des: "11 Romatic Dining place",
            plc: "20 Places >"
        },
        
        {
            nav:"https://b.zmtcdn.com/data/collections/013ec5a6916eca9567f4169b687b819a_1669618512.jpg?output-format=webp",
            des: "11 Romatic Dining place",
            plc: "20 Places >"
        },
        
        {
            nav:"https://b.zmtcdn.com/data/collections/013ec5a6916eca9567f4169b687b819a_1669618512.jpg?output-format=webp",
            des: "11 Romatic Dining place",
            plc: "20 Places >"
        },
        
        {
            nav:"https://b.zmtcdn.com/data/collections/013ec5a6916eca9567f4169b687b819a_1669618512.jpg?output-format=webp",
            des: "11 Romatic Dining place",
            plc: "20 Places >"
        },
        {
            nav:"https://b.zmtcdn.com/data/collections/013ec5a6916eca9567f4169b687b819a_1669618512.jpg?output-format=webp",
            des: "11 Romatic Dining place",
            plc: "20 Places >"
        },
        
        {
            nav:"https://b.zmtcdn.com/data/collections/013ec5a6916eca9567f4169b687b819a_1669618512.jpg?output-format=webp",
            des: "11 Romatic Dining place",
            plc: "20 Places >"
        },


       
      ]
      return (
        <>
         
           <div className="lg:hidden p-4">
            <h1 className="text-xl font-semibold py-3 px-1 text-gray-500">Collections</h1>
            <p className="py-2 text-gray-400 px-1">Explore curated lists of top restaurants, cafes, pubs, and bars in Bengaluru, based on trends</p>
            
          
           <OrderSlider {...settings}>
            {
                images.map((image)=>(
                    <div className="items-center p-1 relative">
                      
                      <img 
                       src={image.nav}
                       alt="dineimg"
                       className="h-76 rounded-md shadow-lg"
                       
                       />
                      
                     <div className="absolute top-64 p-3 text-white left-0 right-0">
                     <p className="text-2xl ">{image.des}</p>
                       <p className="text-xl ">{image.plc}</p>
                     
                     </div>
                    
                      
                       
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
                       src={image.nav}
                       alt="dineimg"
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

export default DinningCarousel;