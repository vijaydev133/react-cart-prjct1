export const initialState = {
    CartArr : [],
    FavArr : [],
    qty : 1
}

export const reducerFunc = (state,action)=>{

    switch(action?.type){
        case "addToCart" : 
        return{
            ...state,
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
        default : 
        return{
            state
        }
    }
}
//addToFav