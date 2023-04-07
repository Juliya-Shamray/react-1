

import { NavLink } from "react-router-dom"
import classes from "./Navbar.module.css"

const active = navLink => navLink.isActive ? classes.active : classes.item
const Navbar = (props) => {
    return (
        <nav className={classes.nav}>
            <ul className={classes.list}>
                <li className={classes.item}>
                    <NavLink to="/profile" className={active}>Profile</NavLink>
                </li>
                <li className={classes.item}>
                    <NavLink to="/dialogs" className={active}>Messages</NavLink>
                </li>
                <li className={classes.item}>
                    <NavLink to="/users" className={active}>Users</NavLink>
                </li>
                <li className={classes.item}>
                    <NavLink to="/news" className={active}>News</NavLink>
                </li>
                <li className={classes.item}>
                    <NavLink to="/music" className={active}>Music</NavLink>
                </li>
                <li className={classes.item}>
                    <NavLink to="/settings" className={active}>Settings</NavLink>
                </li>
            </ul>
            <div className={classes.friends}>
                <h3>Friends</h3>
                {/* <ul className={classes.friendsList}>
                    <li>{props.state[0].name}</li>
                    <li>{props.state[1].name}</li>
                    <li>{props.state[2].name}</li>
                </ul> */}
            </div>
        </nav>
    )
}
export default Navbar