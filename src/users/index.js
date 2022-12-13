import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {findAllUsersThunk} from "./users-thunk";
import {Link} from "react-router-dom";

const Users = () => {
    const {users, loading} = useSelector((state) => state.users)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(findAllUsersThunk())
    }, [])
    return(
        <>
            <h1>Users {users.length}</h1>
            <div className="list-group">
                {
                    users.map((user) =>
                    <Link to={`/profile/${user._id}`} key={user._id} className="list-group-item">
                        {user.username}
                    </Link>
                    )
                }
            </div>
        </>
    )
}

export default Users