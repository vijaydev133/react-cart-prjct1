export const initialState = {
    CartArr : [],
    FavArr : [],
    qty : [0,1,1,1,1,1,1],
    isAuthenticated : JSON.parse(localStorage.getItem("isLoggedIn")) || false
}

export const reducerFunc = (state,action)=>{

    switch(action?.type){
        case "login" :
            return{
                ...state,
                ...action.payLoad
            }
        case "logout": 
            return{
                 ...state,
                 ...action.payLoad
      }
        case "addToCart" : 
        return{
            ...state,
            qty : [0,1,1,1,1,1,1],
            CartArr: [...state.CartArr,...action.payLoad]
        }
        case "rmvItem" : 
        return{
            ...state,
            CartArr: [...action.payLoad]
        }
        case "addToFav":
            return {
                ...state,
                FavArr : [...state.FavArr, ...action.payLoad]
            }
        case "rmvBtn": 
        return{
            ...state,
            FavArr : [...action.payLoad]
        }
        case "qtyIncmt": 
        return{
            ...state,
            qty : [...action.payLoad]
        }
        case "qtyDecmt": 
        return{
            ...state,
            qty : [...action.payLoad]
        }
        default : 
        return{
            state
        }
    }
}
//addToFav