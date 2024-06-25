import { useMutation, gql } from "@apollo/client"
import { useState } from 'react'

const 나의그래프큐엘셋팅 = gql`
    mutation createBoard($writer: String, $title: String, $contents: String) {
        createBoard(writer: $writer, title: $title, contents: $contents) {
            _id
            number
            message
        }
    }
`


export default function graphqlMutationPage() {
    const [inputs, setInputs] = useState({
        writer: "",
        title: "",
        contents: ""
    })
    
    const [나의함수] = useMutation(나의그래프큐엘셋팅)

    const onClickSubmit = async () => {
        const result = await 나의함수({
            variables: {    // variables 이게 $ 역할을 함
                writer: writer,
                title: title,
                contents: contents
            }
        })
        console.log(result)
    }

    const onChangeWriter = (event) => {
        setInputs({
            writer: event.target.value,
            title: inputs.title,
            contents: inputs.contents,
        })
    }

    const onChangeTitle = (event) => {
        setInputs({
            writer: inputs.writer,
            title: event.target.value,
            contents: inputs.contents,
        })
    }

    const onChangeContents = (event) => {
        setInputs({
            writer: inputs.writer,
            title: inputs.title,
            contents: event.target.value,
        })
    }

    // 한줄일 때 괄호() 필요 없음
    return (
        <div>
            작성자: <input type="text" id="writer" onChange={onChangeWriter} />
            제목: <input type="text" id="title" onChange={onChangeTitle} />
            내용: <input type="text" id="contents" onChange={onChangeContents} />
            <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>
        </div>        
    ) 
}