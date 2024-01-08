import UsersData from "../data/UsersData";
import {useState} from "react";
import AddUser from "./AddUser";
import UsersList from "./UsersList";
function User() {
    const [users,setUsers] = useState(UsersData)
    function addUsers(user) {
        setUsers(prevUsers => [
            ...prevUsers,
            { ...user, id: prevUsers.length + 1 }
        ]);
    }
    return (<>
        <div>
            <div>
                <AddUser newUser={addUsers}></AddUser>
            </div>
            <UsersList users={users}></UsersList>
        </div>
    </>)
}

export default User;