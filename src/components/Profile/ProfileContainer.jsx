
import React from "react"
import { connect } from "react-redux";
import Profile from "./Profile"
import { getUserProfile, getUserStatus, updateStatus, savePhoto, saveProfile } from "../../redux/profile-reducer";
import {
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";


class ProfileContainer extends React.Component {

    reFreshProfile() {
        let userId = this.props.router.params.userId;

        if (!userId) {
            userId = this.props.authorizedUserId
        }
        this.props.getUserProfile(userId)
        this.props.getUserStatus(userId)
    }

    componentDidMount() {
        this.reFreshProfile()
    }

    componentDidUpdate(prevProps) {
        if (this.props.router.params.userId !== prevProps.router.params.userId)
            this.reFreshProfile()
    }

    render() {
        return (
            <Profile {...this.props}
                isOwner={!this.props.router.params.userId}
                profile={this.props.profile}
                status={this.props.status}
                updateStatus={this.props.updateStatus}
                savePhoto={this.props.savePhoto}
                saveProfile={this.props.saveProfile} />
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.id
})

export function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}



export default compose(
    connect(mapStateToProps, { getUserProfile, getUserStatus, updateStatus, savePhoto, saveProfile }),
    withRouter,
    withAuthRedirect,
)(ProfileContainer)