import { connect } from "react-redux";

import React from "react"
import { follow, setCurrentPage, unfollow, getPage, requestUsers } from "./../../redux/users-reducer"
import Users from "./Users";

import Preloader from "../common/Preloader/Preloader";
import { compose } from "redux";
import { getCurrentPage, getFollowingInProgress, getIsFetching, getPageSize, getTotalCount, getUsers } from "../../redux/users-selectors";



class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize)
    }
    onChangePage = (pageNumber) => {
        this.props.getPage(pageNumber, this.props.pageSize)
    }



    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users totalCount={this.props.totalCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                users={this.props.users}
                unfollow={this.props.unfollow}
                follow={this.props.follow}
                onChangePage={this.onChangePage}
                followingInProgress={this.props.followingInProgress} />
        </>
    }
}

// let mapStateToProps = (state) => {

//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalCount: state.usersPage.totalCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         followingInProgress: state.usersPage.followingInProgress
//     }
// }

let mapStateToProps = (state) => {

    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalCount: getTotalCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
}


export default compose
    (connect(mapStateToProps, {
        follow, unfollow,
        setCurrentPage,
        requestUsers, getPage
    }),

    )(UsersContainer)