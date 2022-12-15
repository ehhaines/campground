import {useEffect} from "react";
import {profileThunk} from "./users-thunks";
import {useDispatch} from "react-redux";

const CurrentUser = ({children}) => {
    // const {currentUser} = useSelector((state) => state.users)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(profileThunk())
    }, [dispatch])
    return(children)
}

export default CurrentUser