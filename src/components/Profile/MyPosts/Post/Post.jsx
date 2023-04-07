import classes from "./Post.module.css"

const Post = (props) => {

    return (

        <div className={classes.item}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3zKezNprQdJJtZYak4YT6fxSX2x2gz5MAkw&usqp=CAU" />
            {props.message}
            <div>
                <span> {props.likesCount} Likes</span>
            </div>
        </div>


    )
}
export default Post