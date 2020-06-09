
import {cartService} from '../_services';


import {cartCONST} from "../_constants";

export const cartAction = {
    addToCart,
    removeItem,
    subtractQuantity,
    addQuantity,
    updateCart

};

function addToCart(id) {
    return {type: cartCONST.ADD_TO_CART, id};
}

function removeItem(id) {
    return {type: cartCONST.REMOVE_ITEM, id};
}

function subtractQuantity(id) {
    return {type: cartCONST.SUB_QUANTITY, id};
}

function addQuantity(id) {
    return {type: cartCONST.ADD_QUANTITY, id};
}

function updateCart() {
    return dispatch => {
        dispatch(request());

        cartService.getAll()
            .then(
                products => dispatch(success(products)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() {
        return {type: cartCONST.GETALL_REQUEST}
    }

    function success(products) {
        return {type: cartCONST.GETALL_SUCCESS, products}
    }

    function failure(error) {
        return {type: cartCONST.GETALL_ERROR, error}
    }

}


