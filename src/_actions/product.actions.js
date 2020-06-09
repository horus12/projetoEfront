import {productConst, userConstants} from "../_constants";
import {userService} from "../_services";
import {history} from "../_helpers";
import {alertActions} from "./alert.actions";

export const productAction = {
    createProduct,


};

function createProduct(product) {
        return dispatch => {
            dispatch(request(product));

            userService.createProduct(product)
                .then(
                    product => {
                        dispatch(success());
                        dispatch(alertActions.success('Cadastro feito com sucesso'));
                    },
                    error => {
                        dispatch(failure(error.toString()));
                        dispatch(alertActions.error(error.toString()));
                    }
                );
        };

        function request(user) { return { type: productConst.CREATE_PRODUCT_REQUEST, user } }
        function success(user) { return { type: productConst.CREATE_PRODUCT_SUCCESS, user } }
        function failure(error) { return { type: productConst.CREATE_PRODUCT_FAILURE, error } }

}