// 모든 페이지에 적용되는 공통 설정
// import '@/styles/globals.css'
import { Global } from "@emotion/react";
import { AppProps } from "next/app";
import Layout from "../src/components/commons/layout";
import ApolloSetting from "../src/components/commons/apollo";
import { globalStyles } from "../src/commons/styles/globalStyles";

export default function App({ Component }: AppProps): JSX.Element {
  return (
    <div>
      <div>==== 여기는 _app.js 컴포넌트 시작 부분 입니다. ====</div>
        <ApolloSetting>
          <>
          <Global styles={globalStyles} />
          <Layout>
            <Component />
          </Layout>
          </>
        </ApolloSetting>
        <div>==== 여기는 _app.js 컴포넌트 마지막 부분 입니다. ====</div>
    </div>
  );
}