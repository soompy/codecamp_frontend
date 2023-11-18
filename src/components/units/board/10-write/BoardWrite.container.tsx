import { useMutation } from "@apollo/client"
import { useState, ChangeEvent } from 'react'
import {나의그래프큐엘셋팅, UPDATE_BOARD} from "./BoardWrite.queries" // export는 골라서 가져오기 가능
import BoardWriteUI from "./BoardWrite.presenter" // export default로 한개만 가져오기
import { useRouter } from "next/router"
import { IBoardWriteProps, IMyvariables } from "./BoardWrite.types"
/*
    import ChangeName from "./BoardWrite.presenter" // export default로 이름 바꿔서 가져오기 
    import ChangeName, { apple } from "./BoardWrite.presenter" // export default와 export 함께 가져오기

    import * as S from "./BoardWrite.styles" // export 한방에 다 가져오기
    S.BlueButton // export 한방에 다 가져오기
    S.RedInput // export 한방에 다 가져오기
*/

export default function BoardWrite(props: IBoardWriteProps) {
    const router = useRouter()

    const [writer, setWriter] = useState("")
    const [title, setTitle] = useState("")
    const [contents, setContents] = useState("")

    const [나의함수] = useMutation(나의그래프큐엘셋팅)
    const [updateBoard] = useMutation(UPDATE_BOARD)

    const onClickSubmit = async () => {
        // 등록하기
        const result = await 나의함수({
            variables: {    // variables 이게 $ 역할을 함
                writer: writer,
                title: title,
                contents: contents
            }
        })
        console.log(result)
        router.push(`/section10/10-02-typescript-boards/${result.data.createBoard.number}`)        
    }

    const onClickUpdate = async () => {        
        const myvariables: IMyvariables = { 
            number: Number(router.query.number)
        }        

        if(writer) myvariables.writer = writer // 거짓을 의미함 writer !== ""과 동일
        if(title !== "") {
            myvariables.title = title
        }
        if(contents !== "") {
            myvariables.contents = contents
        }

        // 수정하기 
        const result = await updateBoard({
            variables: {
                number: Number(router.query.number),
                writer: writer,
                title: title,
                contents: contents
            }
        })
        console.log(result)
        router.push(`/section10/10-02-typescript-boards/${result.data.updateBoard.number}`)
    }

    const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
        setWriter(event.target.value)
    }

    const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value)
    }

    const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
        setContents(event.target.value)
    }

    return (
        <div>
            <div>$$$$$ 여기는 컨테이너입니다. $$$$$</div>
            <BoardWriteUI 
                onClickSubmit={onClickSubmit}
                onClickUpdate={onClickUpdate}
                onChangeWriter={onChangeWriter}
                onChangeTitle={onChangeTitle}
                onChangeContents={onChangeContents}
                isEdit={props.isEdit}
                data={props.data} // undefined이거나, data 이거나 둘중 하나!
            />
            {/* <ChangeName /> */}
            <div>$$$$$ 여기는 컨테이너입니다. $$$$$</div>
        </div>        
    )
}