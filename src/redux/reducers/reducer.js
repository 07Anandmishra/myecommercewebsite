// const Init_state={   
//      carts:[]
// }
//  export const cartreducer=(state=Init_state,action)=>{
//     switch(action.type){
//             case 'ADD_TO_CART':
//                 const alreadyexist=state.carts.find((item)=>
//                  item.id===action.payload.id
//                 )
//                 if(alreadyexist){
//                      return{
//                         ...state,
//                         carts:state.carts.map(item=>item.id===action.payload.id ? action.payload:item)
//                      }
//                 }else{
//                 return{
//                     ...state,
//                     carts:[...state.carts,action.payload]
//                 }
//                 }
               
//                 case 'REMOVE_TO_CART':
//                 const data=state.carts.filter((ele)=>ele.id!==action.payload)
//                 return{
//                     ...state,
//                     carts:data
//                 }              
//                 default: 
//                 return state ;       
//              }
// }

const cart=[]

export const cartreducer=(state=cart,action)=>{
    const product=action.payload
    switch(action.type){
        case 'ADD_TO_CART':
            const exist=state.find((item)=>
                             item.id===product.id
                            )
            if(exist){
                return state.map((x)=>
                x.id===product.id ? {...x,qty:x.qty + 1}:x
                )
            }else{
                const product=action.payload;
                return[
                    ...state,{
                        ...product,qty:1
                    }
                ]
            }
            
            
            case "REMOVE_TO_CART":
                 
                const exist1=state.find((ele)=>ele.id===product.id)
                console.log(exist1)
                if(exist1.qty===1){
                    return state.filter((x)=> x.id !== exist1.id);
                }else{
                    return state.map((x)=>x.id === product.id ? {...x, qty:x.qty-1}:x
                    )
                }
            
            default:
                return state
                
    }
}  



