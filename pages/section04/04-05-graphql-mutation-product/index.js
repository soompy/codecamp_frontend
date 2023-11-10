import { useMutation, gql } from "@apollo/client"

const CREATE_PRODUCT = gql`
    mutation createProduct($seller: String, $createProductInput: CreateProductInput!) { #변수의 타입 적는 곳
        createProduct(seller: $seller, createProductInput: $createProductInput) { # 실제 우리가 전달할 변수 적는 곳
            _id
            number
            message
        }
    }
`


export default function graphqlMutationPage() {
    const [createProduct] = useMutation(CREATE_PRODUCT)

    const onClickSubmit = async () => {
        const result = await createProduct({
            variables: {
                seller: "훈이",
                createProductInput: {
                    name: "마우스",
                    detail: "버티컬마우스",
                    price: 30000
                }
            }
        })
        console.log(result)
    }

    // 한줄일 때 괄호() 필요 없음
    return <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>
}