import { IList } from "@/data/listmock";

const ListCard = (props:IList[]) => {
    return(
        <>
            {props.map((e, i)=>{
                return(
                    <div key={i}>
                        <h4>{e.title}</h4>
                        <div>{e.name}</div>
                        <div>{e.content}</div>
                    </div>
                )
            })}
        </>
    )
}

export default ListCard