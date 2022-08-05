import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Products from './Products';
import { Data } from './Data';
import { useState } from 'react';



function App() {

  const [cartArray, setCartArray] = useState([]);


  // add to cart function that adds products into our cart 

  var addToCart = (event) => {

    var flag = 0;
    var productID = event.target.id;

    // fetching the details of the clicked product from our data file 

    Data.clothing.map((item) => {
      if (item.id == productID) {

        // checking if the product is already present inside the array 

        cartArray.map((item2, index) => {
          if (item2.id == productID) {
            var tempArray = cartArray;
            tempArray[index].quant++;
            tempArray[index].productTotal = tempArray[index].quant*tempArray[index].price;

            setCartArray([...tempArray]);
            flag = 1;
          }
        })

        // pushing the product into array if it is not present there 

        if (flag == 0) {
          setCartArray(prevArray => [...prevArray, {
            id: item.id,
            name: item.name,
            photograph: item.photograph,
            price: item.price,
            material: item.material,
            quant: 1,
            productTotal: 1*item.price
          }]);
        }
      }
    })
  }

  // increases the quantity of the product in our cart table 

  var incrementQuant = (event) => {
    var cartID = event.target.id;
    var tempArray = cartArray;
    tempArray[cartID].quant++;
    tempArray[cartID].productTotal = tempArray[cartID].quant*tempArray[cartID].price;
    setCartArray([...tempArray]);
  }

  var decrementQuant = (event) => {
    var cartID = event.target.id;

    // removing the product if the quantity is decremented to zero 

    if (cartArray[cartID].quant === 1) {
      var filteredArray = cartArray;
      filteredArray.splice(cartID, 1);
      setCartArray([...filteredArray]);
    }

    // removing one quantity at a time on decrement click 

    else {
      var tempArray = cartArray;
      tempArray[cartID].quant--;
      tempArray[cartID].productTotal = tempArray[cartID].quant*tempArray[cartID].price;
      setCartArray([...tempArray]);
    }

  }

  // empty the cart array on button click 

  var emptyCart = () => {
    setCartArray([]);
  }




  return (
    <div className="App">

      <Navbar cartArray={cartArray} />

      <Home />

      <Products addToCart={addToCart} cartArray={cartArray} incrementQuant={incrementQuant} decrementQuant={decrementQuant} emptyCart={emptyCart} />

    </div>
  );
}

export default App;
