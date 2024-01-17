import { useQuery, gql } from "@apollo/client"
import Checkbox from "./checkbox"

const FETCH_BOARDS = gql`
    query{
        fetchBoards {            
            writer
            title
            contents
        }
    }
`

export default function StaticRoutingMovedPage() {
    const { data } = useQuery(FETCH_BOARDS)
    
    const qqq1 = () => {
        alert("클릭 1번")
    }
    
    const qqq4 = (event) => {
        event.stopPropagation()
        alert("클릭 4번")
    }
    
    return (
        <div>
            {data?.fetchBoards.map((el: any) => ( 
                <div id={el.writer} onClick={qqq1}>
                    <Checkbox />
                    <span style={{margin: "10px"}} onClick={qqq4}>{el.writer}</span>
                    <span style={{margin: "10px"}}>{el.title}</span>
                    <span style={{margin: "10px"}}>{el.contents}</span>                    
                </div>                
            ))}
            {/* <div>1번 게시물로 이동이 완료되었습니다.</div>
            <div>작성자: { data?.fetchBoards.writer }</div>
            <div>제목: { data?.fetchBoards.title }</div>
            <div>내용: { data ? data.fetchBoards.contents : "로딩중" }</div>             */}
        </div>
    )
}