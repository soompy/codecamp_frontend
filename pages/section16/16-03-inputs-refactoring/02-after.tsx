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
    

  

    const onChangeInputs = (event) => {
        setInputs((prev) => {            
            return {
                ...prev,
                [event.target.id]: event.target.value,
            }
        })
    }

    // 한줄일 때 괄호() 필요 없음
    return (
        <div>
            작성자: <input type="text" id="writer" onChange={onChangeInputs} />
            제목: <input type="text" id="title" onChange={onChangeInputs} />
            내용: <input type="text" id="contents" onChange={onChangeInputs} />
            
        </div>        
    ) 
}