// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'

// const CategoryOfDetail = () => {
//     const [detail,showdetail]=useState([])
//     const {id}=useParams()
// const ProductDetail=async()=>{
//     const ProductofDetail=await axios.get(`https://dummyjson.com/products/categories/${id}`)
//     console.log(ProductofDetail);
//     showdetail(ProductofDetail.data)
    
// }
// useEffect(()=>{
// ProductDetail()
// },[])
//   return (
//     <>
//     <div>ProductOfDetail</div>
//     {
//   detail.map(()=>{
//     return(
//         <>
//         <div className=' text-black font-semibold '>
//             <p>{detail.id}</p>
//             <p>{detail.name}</p>

//         </div>
//         </>
//     )
//   })
//     }
//     </>
    
//   )
// }

// export default CategoryOfDetail





import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { AiOutlineArrowLeft } from "react-icons/ai";
import { motion } from "framer-motion";
import Cookies from "js-cookie";

const Comment = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [detail, setDetail] = useState(null);

  // Fetch comment details
  const fetchComment = async () => {
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/comments/${id}`);
      setDetail(response.data);
    } catch (error) {
      console.error("Error fetching comment:", error);
    }
  };

  useEffect(() => {
    fetchComment();
  }, [id]);

  // Redirect if not verified
  useEffect(() => {
    const data = Cookies.get("isverified");
    const isVerified = data ? JSON.parse(data) : false;

    if (!isVerified) {
      navigate(`/`);
    }
  }, []);

  if (!detail) {
    return (
      <div className="flex justify-center items-center h-screen bg-violet-100">
        <p className="text-lg text-violet-500">Wait comment is coming...</p>
      </div>
    );
  }

  return (
    <>
      <div
        className="mb-4 flex items-center gap-2 cursor-pointer text-violet-700 hover:text-violet-900"
       
      >
        <AiOutlineArrowLeft size={24}  onClick={() => navigate(-1)} />
        <span className="text-lg font-medium">Back</span>
      </div>

      <div className="min-h-screen bg-violet-100 p-4 sm:p-6 md:p-10">
        <motion.div
          className="bg-white border border-violet-300 shadow-lg shadow-violet-500/30 rounded-lg p-4 sm:p-6 mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Header Row */}
          <div className="flex flex-col sm:flex-row justify-between gap-2 sm:gap-4 mb-4">
            <div className="flex flex-wrap items-center text-violet-700 font-semibold text-base sm:text-lg gap-2">
              <span>Comment ID</span>
              <span>{detail.id}.</span>
              <span className="truncate max-w-full sm:max-w-xs">{detail.name}</span>
            </div>

            <p className="text-sm text-gray-500 break-words max-w-full sm:max-w-xs">
              {detail.email}
            </p>
          </div>

          {/* Body */}
          <p className="mt-2 text-gray-800 text-base leading-relaxed font-mono break-words">
            {detail.body}
          </p>

          {/* Date (Fake) */}
          <p className="mt-4 text-gray-500 text-sm font-mono">
            {new Date().toLocaleDateString()}
          </p>
        </motion.div>
      </div>
    </>
  );
};

export default Comment;
