import SHOP_DATA from './fakeData';
const INITIAL_STATE ={

    collections:SHOP_DATA
}

const shopReducer =(state=INITIAL_STATE,action)=>{
    switch (action.type) {
       
        default:
            return state
            break;
    }

}

export default shopReducer