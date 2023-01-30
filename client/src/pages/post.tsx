import { useState } from "react"

const Post = () => {
    const [isCheck, setIsCheck] = useState(true)
    return(
        <div className="bg-blue-200 h-screen">
            <div className="p-8">
            <label>タイトル</label><input className="px-4 py-2 m-5"/>
            <button className="bg-gradient-to-br from-blue-300 to-blue-800 hover:bg-gradient-to-tl text-white rounded px-4 py-2">投稿</button>
            </div>
            <label>
                <>
                    <input
                    type="checkbox"
                    className="peer sr-only"
                    checked={isCheck}
                    onClick={()=>setIsCheck(!isCheck)}
                    />
                    <span
                    className="block w-[2em] cursor-pointer bg-gray-500 rounded-full 
                    p-[1px] after:block after:h-[1em] after:w-[1em] after:rounded-full 
                    after:bg-white after:transition peer-checked:bg-blue-500 
                    peer-checked:after:translate-x-[calc(100%-2px)]"
                    >
                    </span>
                    { isCheck ? 'public' : 'private' }
                </>
            </label>
        </div>
    )
}

export default Post