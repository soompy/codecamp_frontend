import { useQuery, gql } from "@apollo/client"
import type { IQuery, IQueryFetchBoardArgs } from "../../../commons/types/generated/types";

const FETCH_BOARDS = gql`
    query fetchBoards {
        fetchBoards {
            _id     
            writer          
        }
    }
`

export default function FecthPolicyExample(): JSX.Element {
    const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardArgs> ( 
        FETCH_BOARDS,
        {
            fetchPolicy: "network-only",
        }
    );
    

    return (
        <div>
            {data?.fetchBoards.map((el) => ( 
                <div key={el._id}>
                    <span style={{margin: "10px"}}>{el.title}</span>
                    <span style={{margin: "10px"}}>{el.writer}</span>                    
                </div>                
            ))}
        </div>
    );
}