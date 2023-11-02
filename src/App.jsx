import "./App.css"
import { useState } from "react"

function App() {

  const data = [
    {
      productName: "sketchers",
      productCost: "$40",
      productImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrH_RxbYQ1jd7gYVeZE6C_tQRoMASjS4g7Rw&usqp=CAU"
    },
    {
      productName: "sketchers",
      productCost: "⭐⭐⭐⭐⭐ 120",
      productImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrH_RxbYQ1jd7gYVeZE6C_tQRoMASjS4g7Rw&usqp=CAU",
      salesprop : "true",
    },
    {
      productName: "sketchers",
      productCost: "⭐⭐⭐⭐ $20",
      productImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrH_RxbYQ1jd7gYVeZE6C_tQRoMASjS4g7Rw&usqp=CAU"
    },
    {
      productName: "sketchers",
      productCost: "$70-$80",
      productImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrH_RxbYQ1jd7gYVeZE6C_tQRoMASjS4g7Rw&usqp=CAU",
      salesProp: "true",
    },
    {
      productName: "sketchers",
      productCost: "⭐⭐⭐ $200",
      productImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrH_RxbYQ1jd7gYVeZE6C_tQRoMASjS4g7Rw&usqp=CAU"
    },
    {
      productName: "sketchers",
      productCost: "$320",
      productImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrH_RxbYQ1jd7gYVeZE6C_tQRoMASjS4g7Rw&usqp=CAU"
    },
  ];
  const [inCart,setInCart] = useState(0);

  return (
    <div className="shopping-portal">

      <div className="nav-header">

        <div className="navbar bg-base-100">
          <div className="flex-1">
            <a className="btn btn-ghost normal-case text-xl">Start Bootstrap</a>
            <a className="btn btn-ghost normal-case text-xl">Home</a>
            <a className="btn btn-ghost normal-case text-xl">About</a>
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn m-1">Shop</label>
              <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                <li><a>All products</a></li>
                <li><a>Popular items</a></li>
                <li><a>New arrivals</a></li>
              </ul>
            </div>
          </div>
          <button className="btn">Cart {inCart}</button>
        </div>
      </div>

      {/* -------------------------------------------------------------------------------------------------------------- */}
      <div className="banner">
        <h1>SHOP IN STYLE</h1>
      </div>

      {/* -------------------------------------------------------------------------------------------------------------- */}
      <div className="cards">
       {
        data.map((prod,idx)=>(
          <CardTemplates
           key={idx}
           name={prod.productName}   
           cost={prod.productCost}
           image={prod.productImage}
           inCart = {inCart}
           setInCart = {setInCart}
           salesProp = {prod.salesProp}
          />
        ))
       }
           
      </div>

      {/* -------------------------------------------------------------------------------------------------------------- */}
      <div className="footer">
           <h1>Copyright © Your Website 2023</h1>
      </div>

      {/* -------------------------------------------------------------------------------------------------------------- */}
    </div>
  )
}

export default App

function CardTemplates(props) {

  const [show, setShow] = useState(true)

  const handleAdd = () => {
    setShow(!show);
    props.setInCart(props.inCart + 1);
  }

  const handleRemove = () => {
    setShow(!show);
    props.setInCart(props.inCart - 1);
  }

  return (
    <div>
      <div className="card w-60 bg-base-100 shadow-xl ">
        <figure className="px-10 pt-10">
          <img src={props.image} alt="Shoes" className="rounded-xl w-100" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{props.name}</h2>
          <p>{props.cost}</p>
          <div className="card-actions">
            {
              show === true
              ?
              <button className="cartNo" onClick={handleAdd}>ADD TO CART</button>
              :
              <button className="cartNo" onClick={handleRemove}>REMOVE FROM CART</button>
            }
          </div>
        </div>
      </div>
    </div>
  )
}