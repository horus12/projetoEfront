import {cartCONST} from "../_constants";

export const cartAction = {
    addToCart,
    removeItem,
    subtractQuantity,
    addQuantity,
    updateCart

};

function addToCart(id) {
    return { type: cartCONST.ADD_TO_CART, id };
}

function removeItem(id) {
    return { type: cartCONST.REMOVE_ITEM, id };
}

function subtractQuantity(id) {
    return { type: cartCONST.SUB_QUANTITY, id };
}

function addQuantity(id) {
    return { type: cartCONST.ADD_QUANTITY, id };
}

function updateCart() {
    return { type: cartCONST.UPDATE_CART };
}


