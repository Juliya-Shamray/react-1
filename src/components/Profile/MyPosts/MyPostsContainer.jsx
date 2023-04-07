
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profile-reducer"
import MyPosts from "./MyPosts"

import { connect } from "react-redux"


const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addNewPost: (addNewPostText) => { dispatch(addPostActionCreator(addNewPostText)); }
    }

}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
export default MyPostsContainer