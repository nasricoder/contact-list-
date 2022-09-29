import axios from 'axios'
import { GETCONTACT } from '../Types/ContactTypes'


export const getcontacts=()=>async (dispatch)=>{
   try {
     const res = await axios.get('/api/Contact/GetContact')
     dispatch({
        type: GETCONTACT,
        payload: res.data

   })
   } catch (error) {
      console.log(error);
   }
} 