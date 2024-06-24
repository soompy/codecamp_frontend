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


    
    const onClickPage = (event: MouseEvent<HTMLSpanElement>): void => {
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

            {[1, 2, 3].map((el) => (
                <span key={el} id={String(el)} onClick={onClickPage}>
                    {el}
                </span>
            ))}
        </div>
    );
}