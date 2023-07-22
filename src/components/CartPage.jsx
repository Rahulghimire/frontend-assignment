import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { getCartTotal } from '../features/cartSlice';
const CartPage = () => {
  const dispatch=useDispatch();
  const {carts,totalQuantity,totalPrice}=useSelector((state)=>state.cart);
  dispatch(getCartTotal());
  
  return (
    <div>
      <section className="h-100"  style={{backgroundColor:'#eee'}}>
    <div className="container h-100 py-5">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-10">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h3 className="fw-normal mb-0 text-black">Shopping Cart</h3>
            <div>
              <p className="mb-0"><span className="text-muted">Sort by:</span> <a href="#" className="text-body">price <i
                    className="fas fa-angle-down mt-1"></i></a></p>
            </div>
          </div>
  {carts&&carts.map((data)=>(
     <div className="card rounded-3 mb-4" key={data.id}>
     <div className="card-body p-4">
       <div className="row d-flex justify-content-between align-items-center">
         <div className="col-md-2 col-lg-2 col-xl-2">
           <img
             src={data.image}
             className="img-fluid rounded-3" alt="product-photo"/>
         </div>
         <div className="col-md-3 col-lg-3 col-xl-3">
           <p className="lead fw-normal mb-2">{data.title}</p>
           <span className="text-muted text-capitalize">{data.category}</span>
           <div>
           <div className='py-1'> 
            <span className='fw-bold text-muted'>Rating: {data.rating.rate}</span>
          </div>
           </div>
         </div>
         <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
           <button className="btn px-2"
             >
             -
           </button>

           <input id="form1" min="0" name="quantity" type="number" value={data.quantity}
           onChange={()=>{}}
             className="form-control form-control-sm" />
           <button className="btn px-2">
             +
           </button>
         </div>
         <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
           <h5 className="mb-0">${data.price}</h5>
         </div>
         <div className="col-md-1 col-lg-1 col-xl-1 text-end">
           <a href="#!" className="text-danger text-decoration-none text-danger fw-bolder">Delete</a>
         </div>
       </div>
     </div>
   </div>
  ))}

  {carts?<div className="card">
            <div className="card-body">
              <button type="button" className="btn btn-warning btn-block btn-lg">Proceed to Pay</button>
            </div>
          </div>: <></>}
        </div>
      </div>
    </div>
  </section>
      
    </div>
  )
}

export default CartPage