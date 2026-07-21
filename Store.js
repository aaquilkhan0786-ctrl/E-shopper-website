
// // import { configureStore } from "@reduxjs/toolkit"
// // import {RootReducer} from "./Reducers/RootReducer";
// // import  RootSaga from './Saga/RootSaga'; //


// // import createSagaMiddleware from "redux-saga";
// // const saga = createSagaMiddleware()

// // const Store =configureStore({
// //     reducer:RootReducer,
// //     middleware:()=>[saga]
// // })

// // export default Store
// // saga.run(RootSaga)


// import { configureStore } from "@reduxjs/toolkit";
// import RootReducer from "./Reducers/RootReducer";  
// import createSagaMiddleware from "redux-saga";
// import RootSaga from './Saga/RootSaga';  

// const saga = createSagaMiddleware();

// const Store = configureStore({
//     reducer: RootReducer,
//     middleware: () => [saga],
// });

// saga.run(RootSaga);

// export default Store;


import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import RootReducer from "./Reducers/RootReducer";
import RootSaga from "./Saga/RootSaga"

const saga = createSagaMiddleware()

const Store  = configureStore({
    reducer:RootReducer,
    middleware : ()=>[saga]
})

export default Store

saga.run(RootSaga)