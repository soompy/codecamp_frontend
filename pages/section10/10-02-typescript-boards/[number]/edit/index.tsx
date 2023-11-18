import BoardWrite from "../../../../../src/components/units/board/10-write/BoardWrite.container"
import { useQuery, gql } from "@apollo/client"
import { useRouter } from 'next/router'

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


export default function graphqlMutationPage() {
    const router = useRouter()

    const { data } = useQuery(FETCH_BOARD, {
        variables: { number: Number(router.query.number) }
    })
    
    // 한 줄일때는 괄호() 필요 없음
    return (
        <div>
            <div>### 여기는 페이지입니다. ###</div>
            <BoardWrite isEdit={true} data={data} />
            <div>### 여기는 페이지입니다. ###</div>
        </div>
    )
}