import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { cartAction} from '../_actions';
import '../index.css'

class Cart extends React.Component {
    componentDidMount() {

    }

    handleRemove (id){
        return (e) => this.props.removeItem(id);
    }
    handleAddQuantity (id){
        return (e) => this.props.addQuantity(id);
    }

    handleSubtractQuantity (id){
        return (e) => this.props.subtractQuantity(id);
    }

    render(){
        console.log(JSON.stringify(this.props) + "cart2")
        let addedItems = this.props.items.length ?
            (
                this.props.items.map(item=>{
                    return(

                        <li className="collection-item avatar" key={item.id}>
                            <div className="item-img">
                                <img src={item.img} alt={item.img} className=""/>
                            </div>

                            <div className="item-desc">
                                <span className="title">{item.title}</span>
                                <p>{item.desc}</p>
                                <p><b>Price: {item.price}$</b></p>
                                <p>
                                    <b>Quantity: {item.quantity}</b>
                                </p>
                                <div className="add-remove">
                                    <Link to="/cart"><i className="material-icons" onClick={this.handleAddQuantity(item.id)}>arrow_drop_up</i></Link>
                                    <Link to="/cart"><i className="material-icons" onClick={this.handleSubtractQuantity(item.id)}>arrow_drop_down</i></Link>
                                </div>
                                <button className="waves-effect waves-light btn pink remove" onClick={this.handleRemove(item.id)}>Remove</button>
                            </div>

                        </li>

                    )
                })
            ):

            (
                <p>Nothing.</p>
            )
        return(
            <div className="container">
                <div className="cart">
                    <h5>You have ordered:</h5>
                    <ul className="collection">
                        {addedItems}
                    </ul>
                </div>
                <div className="container">
                    <div className="collection">

                        <li className="collection-item"><b>Total: {this.props.total} $</b></li>
                    </div>
                    <div className="checkout">
                        <button className="waves-effect waves-light btn">Checkout</button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    console.log(JSON.stringify(state.cartReducer) + "cart")
    return {
        items: state.cartReducer.addedItems,
        total: state.cartReducer.total

    }
}

const actionCreators = {
    addQuantity: cartAction.addQuantity,
    updateCart: cartAction.updateCart,
    removeItem: cartAction.removeItem,
    subtractQuantity: cartAction.subtractQuantity
}

const connectedCart = connect(mapStateToProps, actionCreators)(Cart);
export { connectedCart as Cart };