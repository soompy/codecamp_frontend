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
    const onClickPage1 = (event: MouseEvent<HTMLSpanElement>): void => {
        void refetch({ page: Number(event.currentTarget.id) });
    };
    
    const onClickPage2 = (event: MouseEvent<HTMLSpanElement>): void => {
        void refetch({ page: Number(event.currentTarget.id) });
    };

    const onClickPage3 = (event: MouseEvent<HTMLSpanElement>): void => {
        void refetch({ page: Number(event.currentTarget.id) });
    };

    return (
        <div>
            {data?.fetchBoards.map((el) => ( 
                <div key={el._id}>
                    <span style={{margin: "10px"}}>{el.title}</span>
                    <span style={{margin: "10px"}}>{el.writer}</span>                    
                </div>                
            ))}

            <span id="1" onClick={onClickPage1}>1</span>
            <span id="2" onClick={onClickPage2}>2</span>
            <span id="3" onClick={onClickPage3}>3</span>
        </div>
    );
}