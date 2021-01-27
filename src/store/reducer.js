const initialState={
arr:[]

};


function reducer(state=initialState,action){
  switch(action.type){
    case "PUBLISH":
    console.log("here",action);
    return{

      ...state,
      arr:[...state.arr,action.payload]

    }
    case "WITHDRAW":return{
      balance:state.balance-action.payload

    }
    default:return state
  }


}

export default reducer
