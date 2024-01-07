import Thumb from "./Thumb";
import UsersData from "../data/UsersData";
import PlayButton from "../atoms/PlayButton";
function User() {

    return (<>
        <div>
            <div className="d-flex flex-wrap justify-content-space-between">
                {
                    UsersData.map(user =>
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