import React from "react"
import { Field, reduxForm } from "redux-form"
import { maxlengthCreator, required } from "../../../utils/validator/validator"
import { Textarea } from "../../common/FormControls/FormControls"
import classes from "./MyPosts.module.css"
import Post from "./Post/Post"


const MyPosts = (props) => {


    let postsElements = props.posts.map((post) => <Post message={post.message} key={post.id} likesCount={post.likesCount} />)

    let onAddPost = (values) => {
        props.addNewPost(values.addNewPostText)

    }

    return (
        <div className={classes.posts}>
            <h3> My posts</h3>
            <AddNewPostFormRedux onSubmit={onAddPost} />
            <div className={classes.item}>
                {postsElements}
            </div>
        </div>

    )
}

const maxlength30 = maxlengthCreator(30)

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field validate={[required, maxlength30]} name="addNewPostText" component={Textarea} placeholder="Create your new post" />
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddNewPostFormRedux = reduxForm({ form: "AddNewPostForm" })(AddNewPostForm)


export default MyPosts