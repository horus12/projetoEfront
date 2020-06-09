import React from 'react';
import {connect} from 'react-redux';
import '../index.css'
import Checkout from "../_components/Checkout";


class CheckoutPage extends React.Component {
    componentDidMount() {


    }


    render() {


        return (
            <div className="container">
                <Checkout/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {

    return {
        state: state
    }
}

const actionCreators = {}

const connectedCheckoutPage = connect(mapStateToProps, actionCreators)(CheckoutPage);
export {connectedCheckoutPage as CheckoutPage};