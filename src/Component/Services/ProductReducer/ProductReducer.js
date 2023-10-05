const initiale = {
    products:[],
    product: null
}

const productReducer = (state = initiale, action) =>{


    switch(action.type){

        case 'ADD_PRODUCT':

            return{
                ...state,
                products:[...state.products, action.payload]
            }

        case 'SINGLE_PRODUCT':
            return{
                ...state,
                product: action.payload
                
            }

        case 'DELETE_PRODUCT':

            let Allproduct = state.products 
            let singleProduct = Allproduct.filter((val, id) =>{
                return val.id != action.payload
            })
            return{

                ...state,
                product: singleProduct
            }

        case 'ALL_PRODUCT':
            return{
                ...state,
                products: action.payload
            }

            

        default:
            return state;

    }

}

export default productReducer