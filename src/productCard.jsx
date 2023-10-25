import { useState } from "react"

function ProductCard(props){
    const [show,setShow] = useState(true)
  
    const handleAdd = ()=>{
      setShow(!show)
    }
  
    const handleRemove = ()=>{
      setShow(!show)
    }
    return(
      <div className="card">
           <div className="image">
            <img src={props.image}  alt="image of product"/>
           </div>
          <div className="details">
            <h3 className="name">{props.name}</h3>
            <h3 className="cost">{props.cost}</h3>
          </div>
          <div className="buttons">
            {show===true 
            ?
            <button onClick={handleAdd}>ADD TO CART</button>
            :
            <button onClick={handleRemove}>REMOVE FROM CART</button>
            }
          </div>
      </div>
    )
  }

export default ProductCard;  