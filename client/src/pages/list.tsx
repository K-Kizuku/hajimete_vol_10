import ListCard from "@/components/ListCard"
import { IList, listData } from "@/data/listmock"

const List = () => {
    return (
        <>
            <div>投稿一覧</div>
            {ListCard(listData)}
        </>
    )

}
export default List