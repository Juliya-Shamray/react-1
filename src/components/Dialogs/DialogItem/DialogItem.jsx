import classes from "./../Dialogs.module.css"
import { NavLink } from "react-router-dom"

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id
    return (
        < div className={classes.dialog + " " + classes.active} >
            <div className={classes.img}>
                <img src="https://klike.net/uploads/posts/2020-01/1580117133_4.jpg" />
            </div>
            <NavLink to={path}>{props.name}</NavLink>
        </div >
    )
}


export default DialogItem