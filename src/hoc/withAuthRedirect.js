import { Navigate } from "react-router-dom"
import React from "react"
import { connect } from "react-redux"

let mapStateToPropsforRedirect = (state) => ({
    isAuth: state.auth.isAuth

})

export const withAuthRedirect = (Component) => {

    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) {
                return <Navigate to="/login" />
            }
            return <Component {...this.props} />
        }
    }

    let ConnectAuthRedirectComponent = connect(mapStateToPropsforRedirect)(RedirectComponent)
    return ConnectAuthRedirectComponent
} 