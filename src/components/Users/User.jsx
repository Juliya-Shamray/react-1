
import classes from "./users.module.css"
import userPhoto from "./../../assets/image/photoDefault.png"
import { NavLink } from "react-router-dom";



let User = ({ user, ...props }) => {

    return (

        <div >
            <div >
                <NavLink to={"/profile/" + user.id}>
                    <img src={user.photos.small !== null ? user.photos.small : userPhoto} className={classes.avatar} />
                </NavLink>
            </div>
            <div>
                {user.followed ? <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                    props.unfollow(user.id)


                }}>UNFOLLOW</button>

                    : <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                        props.follow(user.id)
                    }}>FOLLOW</button>}
            </div>

            <div>
                <div>
                    <div>
                        {user.name}
                    </div>
                    <div>
                        {user.status}
                    </div>
                </div>
                <div>
                    <div>
                        {/* {user.location.country} */}
                    </div>
                    <div>
                        {/* {user.location.city} */}
                    </div>
                </div>
            </div>
        </div>

    )
}
export default User