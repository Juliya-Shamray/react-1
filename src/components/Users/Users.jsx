
import Paginator from "../common/Paginator/Paginator";
import User from "./User";


let Users = (props) => {

    return (<div>
        <Paginator totalCount={props.totalCount} pageSize={props.pageSize} currentPage={props.currentPage} onChangePage={props.onChangePage} />
        {
            props.users.map((user) =>
                <User key={user.id} user={user} followingInProgress={props.followingInProgress} unfollow={props.unfollow} follow={props.follow} />
            )
        }
    </div >)
}
export default Users