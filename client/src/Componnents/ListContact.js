import { getcontacts } from "../Redux/Actions/ContactActions"
import {useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
const ListContact =()=>{
const dispatch = useDispatch()
   useEffect(()=>{
   dispatch(getcontacts())
   },[])
   const Contacts = useSelector(state=>state.ContactReducer.Contacts)
    return(
        <div>
            {
                Contacts.map(Contact => <h2>{Contact.name}</h2>)
            }
        </div>
    )
}
export default ListContact