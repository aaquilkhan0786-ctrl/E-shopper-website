// import { create } from "json-server"
// import {takeEvery,put} from "redux-saga/effects"
// import { createMaincategoryAPI, daleteMaincategoryAPI, getMaincategoryAPI } from "../Service"
// import { ADD_MAINCATEGORY, ADD_MAINCATEGORY_RED, DELETE_MAINCATEGORY, DELETE_MAINCATEGORY_RED, GET_MAINCATEGORY, GET_MAINCATEGORY_RED } from "../Constants"
// function * createMaincategorySaga(action)
// {
// let response = yield createMaincategoryAPI(action.payload)
// yield put({type:ADD_MAINCATEGORY_RED,data:response})
// }

// function * getMaincategorySaga(action)
// {
// let response = yield getMaincategoryAPI(action.payload)
// yield put({type:GET_MAINCATEGORY_RED,data:response})
// }

// function * deleteMaincategorySaga(action)
// {
// let response = yield daleteMaincategoryAPI(action.payload)
// yield put({type:DELETE_MAINCATEGORY_RED,data:response})
// }


// export function * maincategorySaga()//watched
// {
//     yield takeEvery(ADD_MAINCATEGORY,createMaincategorySaga)
//     yield takeEvery(GET_MAINCATEGORY,getMaincategorySaga)
//     yield takeEvery(DELETE_MAINCATEGORY,deleteMaincategorySaga)
// }

import {takeEvery,put} from "redux-saga/effects"
import { createMaincategoryAPI, deleteMaincategoryAPI, getMaincategoryAPI } from "../Service"
import {ADD_MAINCATEGORY_RED,GET_MAINCATEGORY_RED,DELETE_MAINCATEGORY_RED, ADD_MAINCATEGORY, GET_MAINCATEGORY, DELETE_MAINCATEGORY} from "../Constants"
function * createMaincategorySaga(action)
{
let response = yield createMaincategoryAPI(action.payload)
yield put({type:ADD_MAINCATEGORY_RED,data:response})
}

function * getMaincategorySaga()
{
let response = yield getMaincategoryAPI()
yield put({type:GET_MAINCATEGORY_RED,data:response})
}


function * deleteMaincategorySaga(action)
{
let response = yield deleteMaincategoryAPI(action.payload)
yield put({type:DELETE_MAINCATEGORY_RED,data:response})
}


export function * maincategorySaga()//watcher
{
    yield takeEvery(ADD_MAINCATEGORY,createMaincategorySaga)
    yield takeEvery(GET_MAINCATEGORY,getMaincategorySaga)
    yield takeEvery(DELETE_MAINCATEGORY,deleteMaincategorySaga)

}

