import React, { useState } from 'react'
import { Data } from './Data'

export default function Products(props) {

  const [productTotal, setProductTotal] = useState(0);
  var tempTotal = 0;
  return (

    <>

      <div className='productsHeader pt-5'>

        <h2>Catalogue</h2>

      </div>


      <div className='productsContainer py-3' id="productContainerID">

        {/* div that displays the entire cart array  */}

        <div className='cartDiv mt-2' id="cartDivID">

          <h3 className='pt-3 pb-3 text-light bg-dark'>My Cart</h3>

          <div className='mainCart px-2'>

            <table className='cartTable'>
              <thead>
                <tr><th>Image</th><th>Name</th><th>Price</th><th>Quantity</th></tr>
              </thead>
              <tbody>
                {props.cartArray.map((item, index) => {
                  {tempTotal = tempTotal+item.productTotal}
                  return (
                    <tr>
                      
                      <td className='cartImage'><img src={item.photograph} className="img-fluid my-2" alt="" /></td>
                      <td>{item.name}</td>
                      <td>{item.price}</td>
                      <td><i className="fa-solid fa-plus quantBtn" onClick={(event) => props.incrementQuant(event)} id={index}></i>{item.quant}<i className="fa-solid fa-minus quantBtn" onClick={(event) => props.decrementQuant(event)} id={index}></i></td>
                    </tr>
                  );
                })}
                
                <tr className='totalTr bg-dark text-light'>
                  <td>
                  </td>
                  <td>
                  </td>
                  <td><b>Total: </b></td>
                  <td className='py-2'><b>{tempTotal}</b></td>
                </tr>
              </tbody>
            </table>
            <button className='emptyCart btn btn-dark fw-bold mt-3' onClick={(event) => props.emptyCart(event)}>Empty Cart</button>
          </div>

        </div>

        {/* div thast displays the entire catalogue of products  */}

        <div className='productsDiv' id="productsDivID">

          {Data.clothing.map((item) => {
            return (
              <div className='productDiv' id="productDivID">

                <div className='productImage'>

                  <img src={item.photograph} className='productImage img-fluid' alt="noCloth" />

                </div>


                <div className='productDetails py-3 px-2'>

                  <p>{item.name}</p>
                  <p>{item.price}</p>

                </div>

                <div className='cartButtonDiv pb-3'>

                  <button className='btn btn-dark' id={item.id} onClick={(event) => props.addToCart(event)}>Add To Cart</button>

                </div>

              </div>
            )
          })}

        </div>





      </div>

    </>
  )
}
