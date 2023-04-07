import { useFormik } from 'formik';
import classes from "./ProfileInfo.module.css"

const ProfileDataForm = (props) => {

    const formik = useFormik({
        initialValues: {
            fullName: props.profile.fullName,
            lookingForAJob: props.profile.lookingForAJob,
            lookingForAJobDescription: props.profile.lookingForAJobDescription,
            aboutMe: props.profile.aboutMe,
            contacts: " "

        },
        onSubmit: values => {
            props.saveProfile(values)
            props.onCloseProfile()
        }
    });
    return (
        <form onSubmit={formik.handleSubmit}>
            <div><b>Full name:</b></div>
            <div><input
                id="fullName"
                name="fullName"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.fullName}
            /></div>
            <div><b>Looking for a job:</b></div>
            <div><input
                id="lookingForAJob"
                name="lookingForAJob"
                type="checkbox"
                onChange={formik.handleChange}
                value={formik.values.lookingForAJob}
            /></div>
            <div><b>My professional skills:</b></div>
            <div><input
                id="lookingForAJobDescription"
                name="lookingForAJobDescription"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.lookingForAJobDescription}
            /></div>
            <div><b>About me :</b></div>
            <div><input
                id="aboutMe"
                name="aboutMe"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.aboutMe}
            /></div>

            <div><b>Contacts:</b>{Object.keys(props.profile.contacts).map(key => {
                return <div key={key} className={classes.contact}>
                    <div><b>{key}</b></div>
                    <input
                        id="contacts"
                        name={"contact." + key}
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.contacts[key]}
                    />
                </div>
            })}
            </div>

            < button type="submit">Save</button>
        </form>
    );
}


export default ProfileDataForm

{/* <div>
{props.isOwner && <button onClick={props.onEditProfile}>Edit</button>}
<div><b>Full name:</b> {props.profile.fullName}</div>

<div><b>Looking for a job:</b>{props.profile.lookingForAJob ? "yes" : " no "}</div>
{props.profile.lookingForAJob &&
    <div><b>My professional skills:</b>{props.profile.lookingForAJobDescription}</div>}

<div><b>About me:</b>{props.profile.aboutMe}</div>

<div><b>Contacts:</b>{Object.keys(props.profile.contacts).map(key => {
    return <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]} />
})}
</div>
</div> */}