import React from "react";
import Css from "./Parent.css";
import logo from './1.jpg';


function Parent(props){


    return <>

    <div className="container">
        
        <div className="div1">
            <img className ='Pic' src={logo}alt="nord" />
            <h1 className='first'>{props.Name1}</h1>
            <button className='btn'>Brand New</button>
            <button className='btn2'>Free shipping</button>
            <button className="btn3">100% Off</button>
            

            
        
        </div>
        < div className="div1-child">
             <h3>E.M.L.A Music</h3>
            <h6 className="le">Le Havre, France</h6>
            <span className="star"> &#11088;&#11088;&#11088;&#11088;&#11088;
            (31)
            </span>
          
            <h6 className='fst'>$6500.00</h6>
            <h2 className="paisa" >{props.price1}</h2>
            <h6 className="konsa">AUD </h6>
            <p className="extra">+195 Shopping</p>
            <button className="cart">Add to cart</button>
            <button className="offer">Make offer</button>
            
            
            </div>
    </div>

    <div className="container">
        
        <div className="div1">
            <img className ='Pic' src={logo}alt="nord" />
            <h1 className='first'>{props.Name2}</h1>
            <div className="bttn"><button className='btn'>Brand New</button>
            <button className='btn2'>Free shipping</button>
            <button className="btn3">100% Off</button></div>
           
            

            
        
        </div>
        <div className="div1-child">
        <div></div>
            <h3>ProMusic tool</h3>
            <h6 className="le">Munchen Germany</h6>
            <span className="star"> &#11088;&#11088;&#11088;&#11088;&#11088;
            (31)
            </span>
            <h6 className='fst'>$6500.00</h6>
            <h2 className="paisa" >{props.price2}</h2>
            <h6 className="konsa">AUD </h6>
            <p className="extra">+195 Shopping</p>
            <button className="cart">Add to cart</button>
            <button className="offer">Make offer</button>
            
            
            </div>
    </div>

    </>
}

export default Parent;