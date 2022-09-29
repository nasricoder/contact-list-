import { GETCONTACT } from "../Types/ContactTypes"

const initialState = {
    Contacts : []
}

const ContactReducer=(state = initialState, action)=>{
    switch (action.type) {
        case GETCONTACT : return{...state,Contacts : action.payload.Contacts}
      default: return state
        
    }
 }
 export default ContactReducer