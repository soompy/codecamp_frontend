import { useMutation, gql } from "@apollo/client"

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
    const [나의함수] = useMutation(나의그래프큐엘셋팅)

    const onClickSubmit = async () => {
        const result = await 나의함수({
            variables: {    // variables 이게 $ 역할을 함
                writer: "훈이",
                title: "안녕하쎄요!!",
                contents: "반가워요~~!!"
            }
        })
        console.log(result)
    }

    // 한줄일 때 괄호() 필요 없음
    return <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>
}