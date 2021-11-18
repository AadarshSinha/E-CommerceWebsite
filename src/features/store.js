import { createStore } from "redux";
import {combineReducers } from "redux";
export const addCart = (product) => {
    return{
        type : "ADDITEM",
        payload : product
    }
}
export const delCart = (product) => {
    return{
        type : "DELITEM",
        payload : product
    }
}
const cart=[]
const handleCart = (state = cart,action) => {
    const product = action.payload;
    switch(action.type){
        case "ADDITEM":
            const exist = state.find((x)=> x.id===product.id);
            if(exist)
            {
                return state.map((x)=>
                    x.id===product.id ? {...x,qty:x.qty+1} : x
                )
            }
            else
            {
               const product = action.payload;
               return[
                   ...state,
                   {
                       ...product,
                       qty:1
                   }
               ]
            }
            break;

        case "DELITEM":
            const exist1 = state.find((x)=>x.id==product.id)
            if(exist1.qty===1)
            {
                return state.filter((x)=>x.id!==exist1.id)
            }
            else
            {
                return state.map((x)=>
                   x.id ===product.id ? {...x,qty:x.qty-1} : x
                )
            }
            break;

        default:
            return state;
            break;
    }
}
const rootReducers=combineReducers({
    handleCart,
})
const store =createStore(rootReducers)
export default store;