import { useQuery, gql } from "@apollo/client"
import type {
    IQuery,
    IQueryFetchBoardsArgs,
} from "../../../src/commons/types/generated/types";

const FETCH_BOARDS = gql`
    query fetchBoards($page: Int) {
        fetchBoards(page: $page) {       
            _id     
            writer
            title
            contents
        }
    }
`

export default function StaticRoutingMovedPage():JSX.Element {
    const { data, refetch } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs> ( 
        FETCH_BOARDS
    );
    
    console.log(data?.fetchBoards)


    // refetch하기
    const onClickPage1 = (): void => {
        void refetch({ page: 1 });
    };
    
    const onClickPage2 = (): void => {
        void refetch({ page: 2 });
    };

    const onClickPage3 = (): void => {
        void refetch({ page: 3 });
    };

    return (
        <div>
            {data?.fetchBoards.map((el) => ( 
                <div key={el._id}>
                    <span style={{margin: "10px"}}>{el.title}</span>
                    <span style={{margin: "10px"}}>{el.writer}</span>                    
                </div>                
            ))}

            <span onClick={onClickPage1}>1</span>
            <span onClick={onClickPage2}>2</span>
            <span onClick={onClickPage3}>3</span>
        </div>
    );
}