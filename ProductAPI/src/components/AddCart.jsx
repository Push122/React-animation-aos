import React, { useEffect, useState } from "react";
import cookie from "js-cookie";
import { useNavigate } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Cookies from "js-cookie"; // Correct import convention



const AddCart = () => {
    const navigate = useNavigate();

  const [cartItems, setCartItems] = useState([]);


  useEffect(() => {
    const cart = cookie.get("cart");
    if (cart) {
      setCartItems(JSON.parse(cart));
    }
  }, []);

  const getTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
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
  return (
    <>
 
    <div className="mb-4 flex items-center gap-2 cursor-pointer text-violet-700 hover:text-violet-900" >
  <AiOutlineArrowLeft size={24}  onClick={() => navigate(-1)} />
  <span className="text-lg font-medium">Back</span>
</div>

    <div className="min-h-screen bg-violet-50 p-6">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-xl">
        <h1 className="text-3xl font-bold text-violet-800 mb-6">🛒 Your Cart</h1>

        {cartItems.length === 0 ? (
          <p className="text-violet-600">Your cart is empty.</p>
        ) : (
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b border-violet-200 pb-4"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-20 h-20 object-cover rounded-lg border border-violet-300"
                  />
                  <div>
                    <h2 className="text-xl text-violet-900 font-semibold">{item.title}</h2>
                    <p className="text-violet-600">${item.price.toFixed(2)}</p>
                  </div>
                </div>
                <p className="text-violet-700">Qty: {item.quantity}</p>
              </div>
            ))}
            <div className="text-right mt-6">
              <p className="text-2xl font-bold text-violet-800">Total: ${getTotal()}</p>
            </div>
          </div>
        )}
      </div>
    </div> 
      </>
  );
};

export default AddCart;
