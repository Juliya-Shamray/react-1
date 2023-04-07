import React, { useState } from "react"
import classes from "./ProfileInfo.module.css"

const ProfileStatusWithHook = (props) => {

    const [editStatus, setEditStatus] = useState(false)
    const [status, setStatus] = useState(props.status)
    const activateEditStatus = () => {
        setEditStatus(true)
    }

    const deactivateEditStatus = () => {
        setEditStatus(false);
        props.updateStatus(status)
    }

    const onChangeStatus = (e) => {
        setStatus(e.currentTarget.value)
    }


    return (
        <div>
            {!editStatus &&
                < p onDoubleClick={activateEditStatus}>{props.status || "Status empty("}</p>}
            {editStatus &&
                < input onChange={onChangeStatus} autoFocus={true} onBlur={deactivateEditStatus} value={status} />
            }
        </div >
    )
}

export default ProfileStatusWithHook