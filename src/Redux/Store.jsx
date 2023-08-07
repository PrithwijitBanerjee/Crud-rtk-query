import {configureStore,getDefaultMiddleware} from '@reduxjs/toolkit'
import studentApi from '../Services/api'




export const store=configureStore({
    reducer:{
        [studentApi.reducerPath]:studentApi.reducer,
    },
    middleware:getDefaultMiddleware=>{
        return getDefaultMiddleware().concat(studentApi.middleware)
    },
});


