import { useQuery, gql } from "@apollo/client"
import { useRouter } from 'next/router'
import { IQuery, IQueryFetchBoardArgs } from "../../../src/commons/types/generated/types";

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
    const router = useRouter()
    console.log(router)

    const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(FETCH_BOARD, {
        variables: { number: Number(router.query.qqq) }
    })
    // data?.fetchBoard?.number
    console.log(data)

    return (
        <div>
            <div>{ router.query.qqq }번 게시물로 이동이 완료되었습니다.</div>
            <div>작성자: { data?.fetchBoard?.writer }</div>
            <div>제목: { data?.fetchBoard?.title }</div>
            <div>내용: { data?.fetchBoard?.contents }</div>            
        </div>
    )
}