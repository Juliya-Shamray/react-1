import Preloader from "../../common/Preloader/Preloader"
import classes from "./ProfileInfo.module.css"
import ProfileStatusWithHook from "./ProfileStatuswithHook"
import userPhoto from "../../../assets/image/photoDefault.png"
import { useState } from "react"
import ProfileDataForm from "./ProfileDataForm"

const ProfileInfo = (props) => {

    const [editProfile, setEditProfile] = useState(false)

    if (!props.profile) {
        return <Preloader />
    }

    const onChangePhoto = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    const onEditProfile = () => {
        setEditProfile(true)
    }

    const onCloseProfile = () => {
        setEditProfile(false)
    }
    return (
        <div>
            <div className={classes.description}>

                <img src={props.profile.photos.large || userPhoto} className={classes.img} />
                <div>
                    {props.isOwner && <input type={"file"} onChange={onChangePhoto} />}
                </div>

                {editProfile ? <ProfileDataForm onCloseProfile={onCloseProfile} profile={props.profile} saveProfile={props.saveProfile} /> : <ProfileData profile={props.profile} isOwner={props.isOwner} onEditProfile={onEditProfile} />}

                <ProfileStatusWithHook updateStatus={props.updateStatus} status={props.status} />
            </div>
        </div>
    )
}

const ProfileData = (props) => {
    return <div>
        {props.isOwner && <button onClick={props.onEditProfile}>Edit</button>}
        <div><b>Full name:</b> {props.profile.fullName}</div>

        <div><b>Looking for a job:</b>{props.profile.lookingForAJob ? "yes" : " no "}</div>
        {props.profile.lookingForAJob &&
            <div><b>My professional skills:</b>{props.profile.lookingForAJobDescription}</div>}

        <div><b>About me:</b>{props.profile.aboutMe}</div>

        <div><b>Contacts:</b>{Object.keys(props.profile.contacts).map(key => {
            return <Contact key={key} contactTitle={key} contactValue={props.profile.contacts.key} />
        })}
        </div>
    </div>
}


const Contact = ({ contactTitle, contactValue }) => {
    return <div className={classes.contact}><b>{contactTitle}:</b> {contactValue}</div>
}

export default ProfileInfo