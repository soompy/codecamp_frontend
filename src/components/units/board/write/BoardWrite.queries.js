import { gql } from "@apollo/client"

export const 나의그래프큐엘셋팅 = gql`
    mutation createBoard($createBoardInput: CreateBoardInput!){
            createBoard(createBoardInput: $createBoardInput){
            _id
        }
    }
`