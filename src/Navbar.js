import React from 'react'

export default function Navbar(props) {
  return (
    <div className='navbarContainer pt-4'>

        <h2><i class="fa-solid fa-vest"></i>Outlook</h2>

        <div className='searchDiv'>

          <input type="text" id="searchBox" placeholder='Search' />     
          <i class="fa-solid fa-magnifying-glass px-2 searchBtn"></i>
        
        </div>

        <div className='navButtonsDiv'>

          <i class="fa-solid fa-house-user fa-1x mx-2"></i>

          <i class="fa-solid fa-cart-arrow-down fa-1x mx-2"><sup>{props.cartArray.length}</sup></i>

          <i class="fa-solid fa-user fa-1x mx-2"></i>


        </div>

    </div>
  )
}
