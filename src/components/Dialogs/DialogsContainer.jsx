
import { connect } from "react-redux"
import { compose } from "redux"

import { withAuthRedirect } from "../../hoc/withAuthRedirect"
import { sendMessageCreator } from "../../redux/dialogs-reducer"

import Dialogs from "./Dialogs"

const mapStateToProps = (state) => {
    return {
        dialogPage: state.dialogPage,
    }
}



const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMessageText) => {
            dispatch(sendMessageCreator(newMessageText))
        }
    }
}


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)
