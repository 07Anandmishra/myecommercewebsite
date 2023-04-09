export const ADD=(item)=>{
    return{
        type:'ADD_TO_CART',
        payload:item
    }
}

export const DELET=(id)=>{
    console.log(id)
    return{
        
        type:'REMOVE_TO_CART',
        payload:id
    }
}


