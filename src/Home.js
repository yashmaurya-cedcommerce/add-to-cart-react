import React from 'react';




export default function Home() {
  return (
    <>
      <div className='homeContainer mt-3'>

        {/* grid container that displays multiple images in multiple divs */}

        <div className='gridContainer'>

        <div className="row"> 

          {/* column one of the grid  */}

          <div className="column" id="colOne">
            
            <img src="../grid11.jpeg" style={{width: "100%"}}  alt=""/>

          </div>

          {/* column two of the grid  */}

          <div className="column" id="colTwo">

            <div className='offerOne'>
          
              <img src="../whiteBG3.png" style={{width: "100%"}}  alt=""/> 
              <h4 className='btn btn-dark'><i class="fa-solid fa-bag-shopping mx-1"></i>Shop Now and get 50% OFF!</h4>
          
            </div>
            
            <img src="../grid8.webp" style={{width: "100%"}}  alt=""/>
            
          </div>  

          {/* column three of the grid  */}

          <div className="column" id="colThree">
          
            <img src="../grid9.webp" style={{width: "100%"}}  alt=""/>
          
          </div>

          {/* column four of the grid  */}

          <div className="column" id="colFour">

            <img src="../grid12.webp" style={{width: "100%"}}  alt=""/>
            
            <div className='offerOne'>
              
              <img src="../whiteBG3.png" style={{width: "100%"}}  alt=""/>
              <h4 className='btn btn-dark'>Amazing offers at your Fingertips!</h4>
            
            </div>

          </div>

        </div>

      </div>
    </div>

    

  </>
  )
}


