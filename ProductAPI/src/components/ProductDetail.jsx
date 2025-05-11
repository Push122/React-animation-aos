// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// const ProductDetail = () => {
//   const { id } = useParams()
//   const [product, setProduct] = useState(null);

//   const fetchProductDetail = async () => {
//     try {
//       const response = await axios.get(`https://dummyjson.com/products/${id}`);
//       setProduct(response.data);
//     } catch (error) {
//       console.error("Error fetching product details:", error);
//     }
//   };

//   useEffect(() => {
//     fetchProductDetail();
//   }, [id]);

  
//   if (!product) {
//     return <p className="text-center text-gray-500 text-lg mt-10">wait Load product details...</p>;
//   }

//   const {
//     title,
//     description,
//     category,
//     price,
//     discountPercentage,
//     rating,
//     stock,
//     tags,
//     brand,
//     sku,
//     weight,
//     dimensions,
//     warrantyInformation,
//     shippingInformation,
//     availabilityStatus,
//     reviews,
//     returnPolicy,
//     meta,
//     images,
//     thumbnail,
//   } = product;

//   return (
//     <div className="p-6 max-w-5xl mx-auto font-sans">
//       {/* Product Header */}
//       <div className="flex items-center gap-6 mb-6">
//         <img
//           src={thumbnail}
//           alt={title}
//           className="w-40 h-40 rounded-lg object-cover shadow-md"
//         />
//         <div>
//           <h1 className="text-2xl font-bold">{title}</h1>
//           <p className="text-gray-500 text-sm">{category}</p>
//           <p className="text-xl font-semibold text-red-500">
//             ${price.toFixed(2)}{" "}
//             <span className="text-sm text-gray-500 ml-2">(-{discountPercentage}%)</span>
//           </p>
//           <p className="text-yellow-400 text-sm">⭐ {rating}</p>
//         </div>
//       </div>

//       {/* Description */}
//       <div className="mb-6">
//         <h2 className="text-xl font-semibold mb-2">Description</h2>
//         <p className="text-gray-700">{description}</p>
//       </div>

//       {/* Product Details */}
//       <div className="mb-6">
//         <h2 className="text-xl font-semibold mb-2">Details</h2>
//         <ul className="space-y-1 text-gray-700">
//           <li>
//             <span className="font-semibold">Brand:</span> {brand}
//           </li>
//           <li>
//             <span className="font-semibold">SKU:</span> {sku}
//           </li>
//           <li>
//             <span className="font-semibold">Weight:</span> {weight}g
//           </li>
//           <li>
//             <span className="font-semibold">Dimensions:</span> {dimensions.width} x{" "}
//             {dimensions.height} x {dimensions.depth} cm
//           </li>
//           <li>
//             <span className="font-semibold">Warranty:</span> {warrantyInformation}
//           </li>
//           <li>
//             <span className="font-semibold">Shipping:</span> {shippingInformation}
//           </li>
//           <li>
//             <span className="font-semibold">Availability:</span> {availabilityStatus}
//           </li>
//           <li>
//             <span className="font-semibold">Return Policy:</span> {returnPolicy}
//           </li>
//           <li>
//             <span className="font-semibold">Tags:</span> {tags.join(", ")}
//           </li>
//         </ul>
//       </div>

//       {/* Reviews */}
//       <div className="mb-6">
//         <h2 className="text-xl font-semibold mb-2">Customer Reviews</h2>
//         {reviews.length > 0 ? (
//           reviews.map((review, index) => (
//             <div
//               key={index}
//               className="p-4 border rounded-lg shadow-sm mb-4 bg-gray-50"
//             >
//               <p className="text-sm font-semibold">
//                 {review.reviewerName}{" "}
//                 <span className="text-gray-400 text-xs">({new Date(review.date).toLocaleDateString()})</span>
//               </p>
//               <p className="text-yellow-400 text-sm">⭐ {review.rating}</p>
//               <p className="text-gray-700 mt-1">{review.comment}</p>
//             </div>
//           ))
//         ) : (
//           <p className="text-gray-500">No reviews available.</p>
//         )}
//       </div>

//       {/* QR Code */}
//       <div className="text-center mb-6">
//         <h2 className="text-xl font-semibold">Scan for More Info</h2>
//         <img
//           src={meta.qrCode}
//           alt="QR Code"
//           className="w-40 h-40 mx-auto mt-4"
//         />
//       </div>

//       {/* Gallery */}
//       <div>
//         <h2 className="text-xl font-semibold mb-4">Gallery</h2>
//         <div className="flex gap-4">
//           {images.map((image, index) => (
//             <img
//               key={index}
//               src={image}
//               alt={`Product Image ${index + 1}`}
//               className="w-24 h-24 rounded-lg object-cover shadow-md"
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetail;





















import React, { useState, useEffect } from "react";
import axios from "axios";
import { AiFillStar, AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate, useParams } from "react-router-dom";
import Cookies from "js-cookie";
import { motion } from "framer-motion";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  // Fetch product details
  const fetchProductDetail = async () => {
    try {
      const response = await axios.get(`https://dummyjson.com/products/${id}`);
      setProduct(response.data);
    } catch (error) {
      console.error("Error fetching product details:", error);
    }
  };

  // Redirect if not verified
  useEffect(() => {
    const isVerified = JSON.parse(Cookies.get("isverified") || "false");
    if (!isVerified) {
      navigate(`/`);
    }
  }, []);

  // Fetch on mount or when ID changes
  useEffect(() => {
    fetchProductDetail();
  }, [id]);

  // Early loading UI
  if (!product) {
    return (
      <div className="flex justify-center items-center h-screen bg-violet-100">
        <p className="text-lg text-violet-500">Loading product details...</p>
      </div>
    );
  }

  // Destructure with safe fallback
  const {
    title,
    description,
    category,
    price,
    discountPercentage,
    rating,
    brand,
    images,
    thumbnail,
  } = product;

  // Add to cart logic
  const AddToCart = () => {
    const cart = Cookies.get("cart");
    let cartItems = cart ? JSON.parse(cart) : [];

    const exists = cartItems.find((item) => item.id === product.id);
    if (!exists) {
      cartItems.push({
        id: product.id,
        title: product.title,
        price: product.price,
        thumbnail: product.thumbnail,
        quantity: 1,
      });
      Cookies.set("cart", JSON.stringify(cartItems), { expires: 7 });
      alert("Added to cart!");
    } else {
      alert("Product already in cart.");
    }
  };

  return (
    <>
      <div
        className="mb-4 flex items-center gap-2 cursor-pointer text-violet-700 hover:text-violet-900"
        
      >
        <AiOutlineArrowLeft size={24}  onClick={() => navigate(-1)}/>
        <span className="text-lg font-medium">Back</span>
      </div>

      <motion.div
        className="bg-violet-300 min-h-screen flex justify-center items-start py-10 px-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="w-full max-w-5xl bg-white rounded-xl shadow-2xl p-6 md:p-10 space-y-10">

          {/* Product Header */}
          <motion.div
            className="flex flex-col md:flex-row gap-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <div className="md:w-1/3 w-full">
              <img
                src={thumbnail}
                alt={title}
                className="w-full h-64 md:h-full rounded-xl object-cover shadow-md border border-violet-300"
              />
            </div>
            <div className="md:w-2/3 w-full space-y-4">
              <h1 className="text-3xl font-bold text-violet-900">{title}</h1>
              <p className="text-md text-violet-600 font-medium">{category}</p>
              <div className="flex items-center">
                <AiFillStar className="text-yellow-400 text-xl" />
                <span className="ml-2 text-lg text-violet-800">{rating}</span>
              </div>
              <p className="text-2xl font-bold text-red-500">
                ${price.toFixed(2)}{" "}
                <span className="text-sm text-violet-600 ml-2">
                  (-{discountPercentage}%)
                </span>
              </p>
              <p className="text-violet-700">{description}</p>
            </div>
          </motion.div>

          {/* Product Details (Only brand shown as others don’t exist) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <h2 className="text-2xl font-semibold text-violet-800 mb-4">Product Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-violet-700">
              <div>
                <p><span className="font-semibold">Brand:</span> {brand || "N/A"}</p>
                <p><span className="font-semibold">SKU:</span> N/A</p>
                <p><span className="font-semibold">Weight:</span> N/A</p>
                <p><span className="font-semibold">Dimensions:</span> N/A</p>
              </div>
              <div>
                <p><span className="font-semibold">Warranty:</span> 1-year warranty</p>
                <p><span className="font-semibold">Shipping Info:</span> Ships in 3-5 days</p>
                <p><span className="font-semibold">Return Policy:</span> 30-day return policy</p>
              </div>
            </div>
          </motion.div>

          {/* Image Gallery */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <h2 className="text-2xl font-semibold text-violet-800 mb-4 cursor-pointer">Image Gallery</h2>
            <div className="flex gap-4 overflow-x-auto pb-2">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Product Image ${index + 1}`}
                  className="w-36 h-36 rounded-lg object-cover border border-violet-300 shadow-sm hover:scale-105 transition"
                />
              ))}
            </div>
          </motion.div>

          {/* Comment Info */}
          <motion.div
            className="text-right text-violet-700 font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.4 }}
          >
            <p>NOTE :- You can check the comment for this product 👇</p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <button className="w-full sm:w-1/3 py-3 bg-gradient-to-r from-violet-600 to-violet-800 text-white rounded-lg cursor-default">
              Add to Wishlist
            </button>
            <button
              className="w-full sm:w-1/3 py-3 border border-violet-700 text-violet-700 rounded-lg hover:bg-violet-700 hover:text-white transition"
              onClick={() => {
                AddToCart();
                navigate("/addcart");
              }}
            >
              Add Cart
            </button>
            <button
              className="w-full sm:w-1/3 py-3 border border-violet-700 text-violet-700 rounded-lg hover:bg-violet-700 hover:text-white transition"
              onClick={() => navigate(`/comment/${id}`)}
            >
              Comment
            </button>
          </motion.div>

        </div>
      </motion.div>
    </>
  );
};

export default ProductDetail;
