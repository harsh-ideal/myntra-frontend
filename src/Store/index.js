import {configureStore} from "@reduxjs/toolkit";
import itemsSlice from "./IteamsSlice";
import fetchStatusSlice from "./fetchStatusSlice";
import bagSlice from "./bagSlice";


const myntraStor= configureStore({
    reducer:{
        items:itemsSlice.reducer,
        fetchStatus:fetchStatusSlice.reducer,
        bag:bagSlice.reducer,
    }
});

export default myntraStor;