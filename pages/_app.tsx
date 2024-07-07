import { Global } from "@emotion/react";
import { AppProps } from "next/app";
import Layout from "../src/components/commons/layout";
import { globalStyles } from "../src/commons/styles/globalStyles";
import createUploadLink from "apollo-upload-client/createUploadLink.mjs";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  ApolloLink,
} from "@apollo/client";
import { RecoilRoot } from "recoil";

const GLOBAL_STATE = new InMemoryCache();

const uploadLink = createUploadLink({
  uri: "http://backend-practice.codebootcamp.co.kr/graphql",
});

const client = new ApolloClient({
  link: ApolloLink.from([uploadLink]),
  cache: GLOBAL_STATE, // 컴퓨터의 메모리에다가 백엔드에서 받아온 데이터 임시로 저장
});

function ApolloSetting({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}

export default function App({ Component }: AppProps): JSX.Element {
  return (
    <div>
      <div>==== 여기는 _app.js 컴포넌트 시작 부분 입니다. ====</div>
      <RecoilRoot>
        <ApolloSetting>
          <>
            <Global styles={globalStyles} />
            <Layout>
              <Component />
            </Layout>
          </>
        </ApolloSetting>
      </RecoilRoot>
      <div>==== 여기는 _app.js 컴포넌트 마지막 부분 입니다. ====</div>
    </div>
  );
}
