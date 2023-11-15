import { useQuery, gql } from "@apollo/client"

export const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
      createdAt
    }
  }
`;


export default function StaticRoutingMovedPage() {
    const { data } = useQuery(FETCH_BOARD)
    
    console.log(data)

    return (
        <div>
            <div>2번 게시물로 이동이 완료되었습니다.</div>
            <div>작성자: { data?.fetchBoard.writer }</div>
            <div>제목: { data?.fetchBoard.title }</div>
            <div>내용: { data ? data.fetchBoard.contents : "로딩중" }</div>            
        </div>
    )
}