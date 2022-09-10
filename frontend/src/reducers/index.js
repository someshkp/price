import productReducer from './product.reducer';
import categoryReducer from './category.reducer';

import { combineReducers } from "redux";

const rootReducer = combineReducers({
    product: productReducer,
    category: categoryReducer
})

export default rootReducer;