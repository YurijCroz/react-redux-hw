// import {getUserRequest, getUserError, getUserSuccess} from '../actions/';
// import {put} from 'redux-saga/effects'
// import getRandomUser from '../api';

// export function *userDataSaga(action){
//     yield put(getUserRequest())
//     try{
//         const data = yield getRandomUser();
//         yield put(getUserSuccess(data.results))
//     } catch(error){
//         yield put(getUserError(error))
//     }
// }