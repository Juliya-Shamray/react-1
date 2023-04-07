import React from "react"
import classes from "./ProfileInfo.module.css"

class ProfileStatus extends React.Component {

    state = {
        editStatus: false,
        status: this.props.status
    }

    activateEditStatus = () => {
        this.setState({
            editStatus: true
        })
    }
    deactivateEditStatus = () => {
        this.setState({
            editStatus: false
        })
        this.props.updateStatus(this.state.status)

    }

    onChangeStatus = (e) => {
        this.setState({
            status: e.currentTarget.value
        })

    }

    // componentDidUpdate(prevProps, prevState) {

    //     if (prevProps.status !== this.props.status) {
    //         this.setState({
    //             status: this.props.status
    //         })
    //     }
    // }

    render() {

        return (
            <div>
                {!this.state.editStatus &&
                    <p onDoubleClick={this.activateEditStatus}>{this.props.status || "Status empty("}</p>}
                {this.state.editStatus &&
                    <input onChange={this.onChangeStatus} autoFocus={true} onBlur={this.deactivateEditStatus} value={this.state.status} />}
            </div>
        )
    }
}
export default ProfileStatus