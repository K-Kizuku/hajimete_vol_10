import { IList } from "@/data/listmock";

const ListCard = (props:IList[]) => {
    return(
        <div className=" flex items-center justify-center h-screen flex-col">
            {props.map((e, i)=>{
                return(
                    <div key={i} className="bg-indigo-50 w-4/6  font-bold rounded-lg border shadow-lg  m-5">
                        <h4 className="text-3xl font-bold underline ">{e.title}</h4>
                        <div>{e.name}</div>
                        <div>{e.content}</div>
                    </div>
                )
            })}
        </div>
    )
}

export default ListCard