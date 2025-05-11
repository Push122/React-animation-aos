// import React, { useEffect, useState } from "react";
// import axios from "axios";
// const SearchProduct = () => {
//   const [query, setQuery] = useState("iphone");
//   const [products, setProducts] = useState([]);

//   const handleSearch = () => {
//     axios
//       .get(`https://dummyjson.com/products/search?q=${query}`)
//       .then((response) => {
//         setProducts(response.data.products);
//       });
//   };

//   useEffect(() => {
//     handleSearch();
//   }, []);

//   return (
//     <div className="p-8 bg-gray-100 min-h-screen">
//       <h2 className=" p-8 text-3xl font-bold mb-6 text-center text-gray-800">
//      <p className=" bg-gradient-to-br from-blue-500 to-red-700  inline-block bg-transparent text-transparent bg-clip-text">    Search Products </p> 
//       </h2>

//       <div className="flex justify-center mb-8">
//         <input
//           type="text"
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//           placeholder="Search for products..."
//           className="p-3 border border-gray-300 rounded-l-md w-80 focus:outline-none focus:border-blue-500"
//         />
//         <button
//           onClick={handleSearch}
//           className="bg-blue-600 text-white px-6 py-3 rounded-r-md hover:bg-blue-700"
//         >
//           Search
//         </button>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {products.length > 0 ? (
//           products.map((product) => (
//             <div key={product.id} className="bg-white rounded-lg shadow-md p-5">
//               <p>
//                 <strong>Id</strong> {product.id}
//               </p>
//               <img
//                 data-aos="fade-down-right"
//                 src={product.thumbnail}
//                 alt={product.title}
//                 className="w-full h-48 object-cover border border-black hover:transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-105 duration-150 rounded-md mb-4"
//               />
//               <h3  className="text-xl font-semibold text-gray-800 mb-2">
                
//                 {product.title}
//               </h3>
//               <p className="text-gray-600 mb-4">{product.description}</p>

//               <div className="text-sm text-gray-500 mb-3">
//                 <p>
//                   <strong>Brand:</strong> {product.brand}
//                 </p>
//                 <p>
//                   <strong>Category:</strong> {product.category}
//                 </p>
//                 <p>
//                   <strong>Rating:</strong> {product.rating}
//                 </p>
//               </div>

//               <div className="flex items-center justify-between mt-4">
//                 <p className="text-lg font-bold text-gray-800">
//                   Price: ${product.price}
//                 </p>
//                 <span
//                   className={`px-3 py-1 text-sm font-semibold rounded-full ${
//                     product.stock > 0
//                       ? "bg-green-100 text-green-700"
//                       : "bg-red-100 text-red-700"
//                   }`}
//                 >
//                   {product.stock > 0 ? "In Stock" : "Unavailable"}
//                 </span>
//               </div>
//               <div className="mt-4">
//                 <h4 className="text-lg font-bold text-gray-800 mb-2">
//                   Reviews
//                 </h4>
//                 {product.reviews && product.reviews.length > 0 ? (
//                   product.reviews.map((review, index) => (
//                     <div
//                       key={index}
//                       className="mb-2 p-2 border-b border-gray-200"
//                     >
//                       <p>
//                         <strong>Reviewer Name:</strong> {review.reviewerName}
//                       </p>
//                       <p>
//                         <strong>Reviewer Email:</strong> {review.reviewerEmail}
//                       </p>
//                       {review.date && (
//                         <p>
//                           <strong>Date:</strong> {review.date}
//                         </p>
//                       )}
//                       <p className="text-gray-600">{review.comment}</p>
//                     </div>
//                   ))
//                 ) : (
//                   <p className="text-gray-500">No reviews available.</p>
//                 )}
//               </div>
//             </div>
//           ))
//         ) : (
//           <p className="text-center text-gray-500 col-span-full">
//             No products found.
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default SearchProduct;











import React, { useEffect, useState } from "react";
import axios from "axios";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie"; // Correct import convention


const SearchProduct = () => {
  const navigate=useNavigate()
  const [query, setQuery] = useState("iphone");
  const [products, setProducts] = useState([]);

  const handleSearch = () => {
    axios
      .get(`https://dummyjson.com/products/search?q=${query}`)
      .then((response) => {
        setProducts(response.data.products);
      });
  };

  useEffect(() => {
    handleSearch();
  }, []);
   useEffect(()=>{
  
    const data =   Cookies.get("isverified"); // Cookie expires in 7 days
    const notstr = JSON.parse(data)
    console.log(typeof(notstr))
    if(notstr == false)
      {
       navigate(`/`)
      }
    
  
    },[])

  return (
  <>
  <div className="mb-4 flex items-center gap-2 cursor-pointer text-violet-700 hover:text-violet-900" >
  <AiOutlineArrowLeft size={24}  onClick={() => navigate(-1)} />
  <span className="text-lg font-medium">Back</span>
</div>

  <div className="min-h-screen bg-violet-100 p-4 sm:p-6 md:p-10">
  <h2 className="text-3xl font-bold mb-6 text-center">
    <span className="bg-gradient-to-br from-violet-700 to-violet-900 bg-clip-text text-transparent">
      Search Products
    </span>
  </h2>

  {/* Search Bar */}
  <div className="flex flex-col sm:flex-row justify-center items-center mb-8 gap-3">
    <input
      type="text"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="Search for products..."
      className="p-3 border border-violet-300 rounded-lg w-full sm:w-80 focus:outline-none focus:ring-1 focus:ring-violet-400 shadow-md"
    />
    <button
      onClick={handleSearch}
      className="bg-violet-700 text-white px-6 py-3 rounded-lg hover:bg-violet-800 transition duration-300 shadow-md"
    >
      Search
    </button>
  </div>

  {/* Product Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {products.length > 0 ? (
      products.map((product) => (
        <div
          key={product.id}
          className="bg-white rounded-xl shadow-2xl border border-violet-200 p-5 hover:shadow-violet-400 transition duration-300"
        >
          <p className="text-sm text-gray-600 mb-2">
            <strong>ID:</strong> {product.id}
          </p>

       
  <img
  data-aos="fade-down-right"
  src={product.thumbnail}
  alt={product.title}
  className="w-full h-48 object-contain border border-violet-300 rounded-md mb-4 transition-transform duration-150 hover:-translate-y-1 hover:scale-105 bg-white"
/>




          <h3 className="text-xl font-semibold text-violet-800 mb-2 truncate">
            {product.title}
          </h3>
          <p className="text-gray-600 mb-4 line-clamp-2">
            {product.description}
          </p>

          <div className="text-sm text-gray-500 space-y-1 mb-3">
            <p><strong>Brand:</strong> {product.brand}</p>
            <p><strong>Category:</strong> {product.category}</p>
            <p><strong>Rating:</strong> {product.rating}</p>
          </div>

          <div className="flex justify-between items-center mt-4">
            <p className="text-lg font-bold text-violet-900">
              ${product.price}
            </p>
            <span
              className={`px-3 py-1 text-sm font-semibold rounded-full ${
                product.stock > 0
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {product.stock > 0 ? "In Stock" : "Unavailable"}
            </span>
          </div>

          {/* Reviews */}
          <div className="mt-4">
            <h4 className="text-lg font-bold text-violet-800 mb-2">Reviews</h4>
            {product.reviews && product.reviews.length > 0 ? (
              product.reviews.map((review, index) => (
                <div
                  key={index}
                  className="mb-2 p-2 border border-violet-100 rounded-md bg-violet-50"
                >
                  <p><strong>Name:</strong> {review.reviewerName}</p>
                  <p><strong>Email:</strong> {review.reviewerEmail}</p>
                  {review.date && (
                    <p><strong>Date:</strong> {review.date}</p>
                  )}
                  <p className="text-gray-600 mt-1">{review.comment}</p>
                </div>
              ))
            ) : (
              <p className="text-gray-500">No reviews available.</p>
            )}
          </div>
        </div>
      ))
    ) : (
      <p className="text-center text-gray-500 col-span-full">
        No products found.
      </p>
    )}
  </div>
</div>

  </>
  );
};

export default SearchProduct;
