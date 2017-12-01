import {FETCH_WEATHER} from '../actions/index';

//state will be an array here, so we use [] as the init value
export default function(state =[], action){
    console.log('show action: ' , action);
    switch (action.type){
        case FETCH_WEATHER:
            //return state.push([action.payload.data]);
            //mutate the state array, including the new and existing data
            return state.concat([action.payload.data]);
            //return [action.payload.data, ...state]; //another es6 syntax
    }
    return state;
}