import Item1 from '../images/item1.jpg'

import { productConst } from '../_constants';


const productReducer = (state ={},action)=>{

    if(action.type === productConst.CREATE_PRODUCT_SUCCESS){
        return{
            registration: true,

        }
    }

    else{
        return state
    }

}

export default productReducer
