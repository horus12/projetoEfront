import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { cartAction} from '../_actions';
import '../index.css'
import {isEmppty} from "../_helpers";


class Home extends React.Component {
    componentDidMount() {
         this.props.updateCart();

    }

    handleClick (id){
        console.log(id)
       return (e) => this.props.addToCart(id);
    }

    render(){
        let itemList = this.props.items.length ?
            (
         this.props.items.map(item=>{
            return(
                <div className="card" key={item.id}>
                    <div className="card-image">
                        <div>
                        <img src={item.img} alt={item.title}/>
                        </div>
                        <span className="card-title">{item.title}</span>
                        <span to="/" className="btn-floating halfway-fab waves-effect waves-light red" onClick={this.handleClick(item.id)}><i className="material-icons">add</i></span>
                    </div>

                    <div className="card-content">
                        <p><b>Descrição: </b>{item.desc}</p>
                        <p><b>Preço: R${item.price}</b></p>
                        <p><b>Quantidade: {item.qtd} unidades</b></p>
                        <p><b>Vendedor:</b> {item.name} </p>
                    </div>
                </div>

            )
        })
            ):

            (
                <p><h2>Não há produtos disponiveis</h2></p>
            )

        return(
            <div className="container">
                <h3 className="center">Produtos Disponiveis</h3>
                <div className="box">
                    {itemList}
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    console.log(state)
    return {
        items: state.cartReducer.items
    }
}

const actionCreators = {
        addToCart: cartAction.addToCart,
        updateCart: cartAction.updateCart
}

const connectedHome = connect(mapStateToProps, actionCreators)(Home);
export { connectedHome as Home };