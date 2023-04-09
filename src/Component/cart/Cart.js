import React, {  useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import "./cartpage.css";
import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Contact from "../Contact/Contact";
import { DELET ,ADD} from "../../redux/actions/action";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Cart = () => {
  const [price,setPrice]=useState(0)
  // const totalAmount = useSelector(state => state.cartreducer.totalAmount);
 
  // const [quty, setQuty] = useState(0);
  const state = useSelector((state) => state.cartreducer);

 
  const dispatch= useDispatch()

  // const decQuntity=()=>{
  //   if(quntity > 1){
  //     setQuntity(quntity-1)
  //   }
  // }

  const  delt=(item)=>{
    // toast.warning("item deleted",{
    //     position:'top-center',
    //     autoClose:'100'
    //    });
    console.log(item)
      dispatch(DELET(item))
  }




   const total=()=>{
    let price=0

    state.map((ele,i)=>{
      price=ele.quantity+price
    })
    setPrice(price)
   }

   useEffect(()=>{
   total()
   },[total])


  const ele=(ele)=>{
   return(
    <div key={ele.id}>
    <div className="row d-flex justify-content-between align-items-center">
      <div className="col-lg-3 col-md-3 col-6 cartimage">
        
        <img src={ele.image} alt="product_image" />
      </div>
      <div className="col-lg-4 col-md-4 col-6 ">
        <h5>{ele.title.slice(0, 12)}</h5>
        <p>{ele.description.slice(0, 25)}</p>
      </div>
      <div className="col-lg-2 col-md-2 col-4 ">
        <div className="quntity">
          <AddIcon className="plus" onClick={()=>dispatch(ADD(ele,ele.quantity))} />
          <p>{ele.qty}</p>
          <RemoveIcon className="minus" onClick={()=>dispatch(DELET(ele,ele.quantity))}/>
        </div>
      </div>
      <div className="col-lg-2 col-md-2 col-4">
        <p>$ {ele.price*ele.qty}</p>
      </div>
      <div className="col-lg-1 col-md-1 col-4">
        <DeleteForeverIcon onClick={()=>dispatch(delt(ele))} className="delet" />
      </div>
    </div>
    <hr></hr>
  </div>
   )
  }

  return (
    <>
      <div className="cartpagemain">
        <div className="container mt-5" >
          {state.length > 0 ? (
            <div>
              <div className="container">
                <div className="row p-2">
                  <div className="col-lg-9 border p-3 main-section bg-white mb-3">
                    <h5 className="row hedding m-0 pl-3 pt-0 ">
                      Product Details
                    </h5>
                    <div>
                      <p className="my-2">
                        You have {state.length} items in your cart
                      </p>
                    </div>
                    {state.map(ele) }
                  </div>
                  <div className="col-lg-3 checkout">
                    <div className="card text-white rounded-3 ">
                      <div className="card-body">
                        <div className="d-flex justify-content-between align-items-center mb-4">
                          <h5 className="mb-0">Summary</h5>
                        </div>

                        <hr className="my-4" />

                        <div className="d-flex justify-content-between">
                          <p className="mb-2">Subtotal</p>
                          <p className="mb-2">{0}</p>
                        </div>

                        <div className="d-flex justify-content-between">
                          <p className="mb-2">Shipping</p>
                          <p className="mb-2">$20.00</p>
                        </div>

                        <div className="d-flex justify-content-between mb-4">
                          <p className="mb-2">Total(Incl. taxes)</p>
                          <p className="mb-2">$4818.00</p>
                        </div>

                        <div className="pb-3">
                          <span className="btn1">Checkout </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
               <div className="d-flex justify-content-between py-3" >
                <button className="btn btn-danger " >Clear All items</button>
                <Link to='/' className="text-black">Shooping Continue  <ArrowForwardIcon /></Link>
                </div>
              </div>
            </div>
            
          ) : (
            `Your Cart is empty    
             
            `
          
          )}
          <Link to='/' className="btn  btn-primary mx-3 "  >shop now</Link>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Cart;
