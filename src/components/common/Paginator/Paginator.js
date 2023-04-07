
import classes from "./Paginator.module.css"


let Paginator = (props) => {
    let pagesCount = Math.ceil(props.totalCount / props.pageSize)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    let curP = props.currentPage;
    let curPF = ((curP - 5) < 0) ? 0 : curP - 5;
    let curPL = curP + 5;
    let slicedPages = pages.slice(curPF, curPL);
    return (
        <div className={classes.pagination}>
            {slicedPages.map((p) => {
                return <span key={p}
                    onClick={(e) => { props.onChangePage(p) }}
                    className={props.currentPage === p
                        ? classes.selectedPage
                        : ""}>{p}</span>
            })}

        </div>)
}
export default Paginator