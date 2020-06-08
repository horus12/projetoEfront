import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { cartAction} from '../_actions';
import '../index.css'

class Home extends React.Component {
    componentDidMount() {

    }

    handleClick (id){
        console.log(id)
       return (e) => this.props.addToCart(id);
    }

    render(){
        let itemList = this.props.items.map(item=>{
            return(
                <div className="card" key={item.id}>
                    <div className="card-image">
                        <img src={item.img} alt={item.title}/>
                        <span className="card-title">{item.title}</span>
                        <span to="/" className="btn-floating halfway-fab waves-effect waves-light red" onClick={this.handleClick(item.id)}><i className="material-icons">add</i></span>
                    </div>

                    <div className="card-content">
                        <p>{item.desc}</p>
                        <p><b>Price: {item.price}$</b></p>
                    </div>
                </div>

            )
        })

        return(
            <div className="container">
                <h3 className="center">Our items</h3>
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