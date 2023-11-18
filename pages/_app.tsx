// 모든 페이지에 적용되는 공통 설정
// import '@/styles/globals.css'
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client"
import { AppProps } from "next/app"

export default function App({ Component }: AppProps) {

  // 그래프큐엘 세팅
  const client = new ApolloClient({
    uri: "http://backend-practice.codebootcamp.co.kr/graphql/",
    cache: new InMemoryCache() // 컴퓨터의 메모리에다가 백엔드에서 받아온 데이터 임시로 저장해 놓기 => 나중에 더 자세히 알아보기
  })

  return (
    <ApolloProvider client={client}>
      <Component />
    </ApolloProvider>
  )
}
