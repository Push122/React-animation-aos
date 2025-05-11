// import React, { useEffect, useState } from "react";
// import axiox from "axios";
// import P from "../../public/P.logo.jpg";
// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";

// const ProductApi = () => {
//   const Navigate=useNavigate()
//   const [date, setdata] = useState([]);
//   console.log(date);

//   const DummyProductApi = async () => {
//     const ApisProduct = await axiox.get("https://dummyjson.com/products");
//     const Data1 = ApisProduct.data;
//     console.log(ApisProduct.data);
//     setdata(Data1.products);
//   };
//   useEffect(() => {
//     DummyProductApi();
//   }, []);
//   return (
//     <>
//       <div>
//         {date.map((item) => {
//           return (
//             <>
//               <div
//                 data-aos="fade-up-right"
//                 className=" flex justify-center items-center w-screen   py-5"
//               >
//                 <div className=" h-auto w-auto bg-white border border-gray-300 rounded-lg">
//                   <div className=" flex bg-gray-700 rounded-md text-white transition duration-500 hover:scale-105 p-10 shadow-lg shadow-blue-200 hover:shadow-blue-800">
//                     <div className=" h-36 w-36   rounded-lg">
//                       <img
//                         data-aos="fade-right"
//                         className=" border border-gray-300 bg-cover rounded-lg   cursor-pointer" onClick={() => Navigate(`/products/${item.id}`)}

//                         src={item.thumbnail}
//                         alt=""
//                       />
//                     </div>
//                     <div className=" ml-11">
//                       <p>{item.title}</p>
//                       <div className=" flex space-x-4">
//                         <div className=" text-2xl">
//                           <p className=" font-semibold text-pink-900 text-center">
//                             *****
//                           </p>
//                         </div>
//                         <div>
//                           <p>{item.rating}</p>
//                         </div>
//                       </div>
//                       <div className=" mt-2 flex space-x-4">
//                         <p>{item.category}</p>
//                         <p className=" font-semibold -mt-1 text-blue-700">.</p>
//                         <p>{item.warrantyInformation}</p>
//                         <p className=" font-semibold -mt-1 text-blue-700">.</p>
//                         <p>{item.brand}</p>
//                       </div>
//                       <div className=" mt-8 flex space-x-4">
//                         <p>{item.shippingInformation}</p>
//                         <p className=" font-semibold -mt-1 text-blue-700">.</p>
//                         <p>{item.availabilityStatus}</p>
//                         <p className=" font-semibold -mt-1 text-blue-700">.</p>
//                         <img
//                           className=" h-12 w-12 hover:animate-ping"
//                           src={item.meta.qrCode}
//                           alt=""
//                         />
//                       </div>
//                       <div>
//                         <p className=" mt-4 w-64"> {item.description} </p>
//                       </div>
//                     </div>
//                     <div className=" ml-10 border border-gray-100 "></div>
//                     <div className=" ml-5">
//                       <div className=" flex space-x-3">
//                         <p>{item.discountPercentage}</p>
//                         <p className=" line-through">{item.price}</p>
//                       </div>
//                       <p className=" mt-1 font-semibold text-green-500">
//                         Free shipping
//                       </p>
//                       <div>
//                         <button className=" mt-5 w-36 h-9 rounded-md bg-blue-700  hover:bg-gradient-to-tr from-sky-800 to-blue-900 ">
//                           <div className=" flex justify-center">
//                             {"DETAILS".split("").map((data, i) => (
//                               <p data-aos-delay={i * 100} data-aos="fade-left">
//                                 {data}
//                               </p>
//                             ))}
//                           </div>
//                         </button>
//                       </div>
//                       <div>
//                         <button
//                           data-aos="flip-up"
//                           className=" mt-5 w-36 h-9 border  rounded-md hover:bg-gradient-to-tr from-sky-800 to-blue-900 "
//                         >
//                           ADD TO WISHLIST
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                   <div></div>
//                 </div>
//               </div>
//             </>
//           );
//         })}

//         {/* { 
//    ( date.map((data)=>{
//       return(
//         <>
//         <p>{data.id}</p>
//         </>
//       )
//     }))
//   }
//   */}
//       </div>
//     </>
//   );
// };

// export default ProductApi;













import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Banner from "./Banner";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Cookies from "js-cookie"; // Correct import convention

const ProductApi = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/products");
      setProducts(response.data.products);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  };

  useEffect(()=>{

  const data =   Cookies.get("isverified"); // Cookie expires in 7 days
  const notstr = JSON.parse(data)
  console.log(typeof(notstr))
  if(notstr == false)
    {
     navigate(`/`)
    }
  

  },[])

 

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
   <div className="mb-4 flex items-center justify-between px-4">
  <div className="flex items-center gap-2 cursor-pointer text-violet-700 hover:text-violet-900" onClick={() => navigate(-1)}>
    <AiOutlineArrowLeft size={24} />
    <span className="text-lg font-medium">Back</span>
  </div>
  <div
    className="cursor-pointer text-violet-700 hover:text-violet-900"
    onClick={() => navigate('/addcart')}
  >
    <AiOutlineShoppingCart size={24} />
  </div>
</div>


    <Banner/>
    
  
    <div className="bg-violet-100 min-h-screen w-screen py-5">
      {products.map((item) => (
        <div
          key={item.id}
          data-aos="fade-up-right"
          className="flex justify-center items-center px-4 py-5"
        >
          <div className="w-full max-w-5xl bg-white border border-violet-300 rounded-xl shadow-md overflow-hidden">
            <div className="flex flex-col md:flex-row items-start md:items-center bg-violet-700 text-white p-6 gap-6  shadow-lg shadow-violet-300 hover:shadow-violet-800">
              <div className="h-36 w-36 flex-shrink-0 rounded-lg overflow-hidden">
                <img
                  data-aos="fade-right"
                  className="object-cover w-full h-full cursor-pointer border border-violet-200 rounded-lg transition duration-500 hover:scale-105"
                  src={item.thumbnail}
                  alt={item.title}
                  onClick={() => navigate(`/products/${item.id}`)}
                />
              </div>

              <div className="flex-1 space-y-2">
                <p className="text-lg font-semibold">{item.title}</p>
                <div className="flex items-center space-x-2">
                  <p className="text-xl font-semibold text-violet-300">★★★★★</p>
                  <p>{item.rating}</p>
                </div>
                <div className="flex flex-wrap gap-2 text-sm">
                  <p>{item.category}</p>
                  <span className="text-violet-300">|</span>
                  <p>{item.warrantyInformation || "1-year warranty"}</p>
                  <span className="text-violet-300">|</span>
                  <p>{item.brand}</p>
                </div>
                <div className="flex flex-wrap gap-2 text-sm">
                  <p>{item.shippingInformation || "Ships worldwide"}</p>
                  <span className="text-violet-300">|</span>
                  <p>{item.availabilityStatus || "In Stock"}</p>
                  {item.meta?.qrCode && (
                    <>
                      <span className="text-violet-300">|</span>
                      <img
                        className="h-10 w-10 hover:animate-ping"
                        src={item.meta.qrCode}
                        alt="QR Code"
                      />
                    </>
                  )}
                </div>
                <p className="mt-2 text-sm text-white/80">{item.description}</p>
              </div>

              <div className="mt-4 md:mt-0 md:ml-6 flex-shrink-0 space-y-4 text-sm">
                <div className="flex items-center gap-2">
                  <p>{item.discountPercentage}% off</p>
                  <p className="line-through text-white/50">${item.price}</p>
                </div>
                <p className="text-green-200 font-semibold">Free shipping</p>

                <button className="w-36 h-10 bg-violet-900 text-white rounded-md hover:bg-violet-800"  onClick={() => navigate(`/products/${item.id}`)}>
                  { "DETAILS".split("").map((char, i) => (
                    <span key={i} data-aos-delay={i * 100} data-aos="fade-left">{char}</span>
                  ))}
                </button>

                <button className="w-36 h-10 border border-white rounded-md hover:bg-violet-800 ml-3 cursor-default">
                  ADD TO WISHLIST
                </button>
              </div>
            
            </div>
          </div>
        </div>
      
      ))}
   
  
      <div className="fixed bottom-5 right-5 z-50">
        <button  className="px-4 py-2 bg-violet-800 text-white rounded-full shadow-lg hover:bg-violet-900 transition duration-300" onClick={()=>navigate('/search')}>
               Search Product
        </button>
      </div>
      
          </div>
          

    </>
  );
};

export default ProductApi;
