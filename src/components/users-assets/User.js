import Thumb from "./Thumb";
import UsersData from "../data/UsersData";
import PlayButton from "../atoms/PlayButton";
import {useState} from "react";
function User() {
    const [users,setUsers] = useState(UsersData)
    return (<>
        <div>
            <div>
                <button className='btn' onClick={(e)=>{
                    e.stopPropagation();
                    const newUserRecord = [...users,{
                        id: users.length+1,
                        name: "xyz singh",
                        mobile: 8283089269,
                        imageLink: "https://picsum.photos/200/300?random="+users.length+1,
                        age: 28,
                        verified: false
                    }]
                setUsers(newUserRecord)
                }}>Add Videos</button>
            </div>
            <div className="d-flex flex-wrap justify-content-space-between">
                {
                    users.map(user =>
                        <Thumb
                            key={user.id}
                            name={user.name}
                            imageLink={user.imageLink}
                            mobile={user.mobile}
                            age={user.age}
                            verified={user.verified}
                            id={user.id}
                        >
                            <PlayButton msg="Song Playing" onPlay={() => { console.log('Playing 1') }} onPause={() => { console.log('Pause 1') }}>Play</PlayButton>
                        </Thumb>
                    )
                }
            </div>

        </div>
    </>)
}

export default User;