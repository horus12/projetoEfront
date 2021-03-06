import React from 'react';
import { Link } from 'react-router-dom'
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import {getRole, isAuthenticated, logout} from "../_helpers";
 const Navbar = ()=>{

     let state;
     state = { auth:false}


     if(isAuthenticated()){
         state.auth = true

         let role = JSON.parse(getRole())
         if(role.role==="USER")
         return(
             <nav className="nav-wrapper">
                 <div className="container">
                     <Link to="/" className="brand-logo">E-Commerce</Link>

                     <ul className="right">
                         <li><Link to="/">Loja</Link></li>
                         <li><Link to="/cart"><ShoppingCart/></Link></li>

                         <li><Link to="/login">Sair</Link></li>

                     </ul>
                 </div>
             </nav>
         )
         else
             return(
                 <nav className="nav-wrapper">
                     <div className="container">
                         <Link to="/" className="brand-logo">E-Commerce</Link>

                         <ul className="right">
                             <li><Link to="/product">Cadastro de produtos</Link></li>
                             <li><Link to="/">Loja</Link></li>
                             <li><Link to="/cart"><ShoppingCart/></Link></li>

                             <li><Link to="/login">Sair</Link></li>


                         </ul>
                     </div>
                 </nav>
             )
     }
     else{
         console.log(getRole()+"--------------------------------------------")
         return(
             <nav className="nav-wrapper">
                 <div className="container">
                     <Link to="/" className="brand-logo">E-Commerce</Link>

                     <ul className="right">
                         <li><Link to="/">Loja</Link></li>
                         <li><Link to="/cart"><ShoppingCart/></Link></li>

                         <li><Link to="/register">Registrar</Link></li>
                         <li><Link to="/login">Entrar</Link></li>

                     </ul>
                 </div>
             </nav>


         )
     }

}

export default Navbar;