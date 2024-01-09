import UsersData from "../data/UsersData";
import {useState} from "react";
import AddUser from "./AddUser";
import UsersList from "./UsersList";
function User() {
    const [users,setUsers] = useState(UsersData)
    const [editAbleUser,setEditableUser] = useState(null);
    function addUsers(user) {
        setUsers(prevUsers => [
            ...prevUsers,
            { ...user, id: prevUsers.length + 1 }
        ]);
    }

    function deleteUser(userId){
        console.log(userId)
        setUsers(users.filter(user=>user.id!==userId))
    }

    function editUser(userId){
        console.log(users.find(user=>user.id === userId))
        console.log(userId)
        setEditableUser(users.find(user=>user.id === userId))
    }

    function updateUser(user){
        console.log("changed info")
        const index = users.findIndex(usr=>usr.id===user.id)
        const newUsersData = [...users]
        newUsersData.splice(index,1,user);
        setUsers(newUsersData);
        console.log(newUsersData);
    }

    return (<>
        <div>
            <div>
                <AddUser newUser={addUsers} editAbleUser={editAbleUser} updateUser={updateUser}></AddUser>
            </div>
            <UsersList deleteUser={deleteUser}  users={users} editUser={editUser}></UsersList>
        </div>
    </>)
}

export default User;