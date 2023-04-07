import { NavLink } from "react-router-dom"
import classes from "./Header.module.css"


const Header = (props) => {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>
                <img src="https://kartinkof.club/uploads/posts/2022-09/1662227267_1-kartinkof-club-p-novie-i-krasivie-kartinki-lyubie-1.jpg" />
            </div>
            <div className={classes.login}>
                {props.isAuth
                    ? <div> {props.login} - <button onClick={props.logout}>Log out</button> </div>
                    : <NavLink to={"/login"}>Login</NavLink>}

            </div>
        </header>
    )
}
export default Header