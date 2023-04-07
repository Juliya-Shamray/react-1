import React from "react"
import { Field, reduxForm } from "redux-form"
import { maxlengthCreator, required } from "../../utils/validator/validator"
import { Textarea } from "../common/FormControls/FormControls"


import DialogItem from "./DialogItem/DialogItem"
import classes from "./Dialogs.module.css"
import Message from "./Message/Message"

const Dialogs = (props) => {

    let state = props.dialogPage
    let dialogsElements = state.dialogs.map((d) => <DialogItem name={d.name} key={d.id} id={d.id} />)

    let messagesElements = state.messages.map((m) => <Message message={m.message} key={m.id} />)


    const onNewMessageBody = (dataForm) => {
        props.sendMessage(dataForm.newMessageText)
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={classes.messages}>
                {messagesElements}
                <AddMessageReduxForm onSubmit={onNewMessageBody} />
            </div>
        </div>
    )
}
const maxlength50 = maxlengthCreator(50)

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="newMessageText" placeholder="Enter your message" component={Textarea} validate={[required, maxlength50]} />
            </div>
            <div>
                <button>Add message</button>
            </div>
        </form>
    )
}
const AddMessageReduxForm = reduxForm({ form: "dialogAddMessageForm" })(AddMessageForm)

export default Dialogs