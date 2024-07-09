import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import type { ChangeEvent } from "react";
import { useState } from "react";
import { accessTokenState } from "../../../src/commons/stores";
import type {
  IMutation,
  IMutationLoginUserArgs,
} from "../../../src/commons/types/generated/types";

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

export default function LoginPage(): JSX.Element {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN_USER);

  const [, setAccessToken] = useRecoilState(accessTokenState);

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>): void => {
    setEmail(event.currentTarget.value);
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>): void => {
    setPassword(event.currentTarget.value);
  };

  const onClickLogin = async (): Promise<void> => {
    try {
      // 1. 로그인 뮤테이션 날려서 accessToken 받아오기
      const result = await loginUser({
        variables: { email, password },
      });
      const accessToken = result.data?.loginUser.accessToken;
      console.log(accessToken);

      // 2. 받아온 accessToken을 globalState에 저장하기
      if (accessToken === undefined) {
        alert("로그인에 실패했습니다! 다시 시도해 주세요!");
        return;
      }
      setAccessToken(accessToken);

      // 3. 로그인 성공 페이지로 이동
      void router.push("/section23/23-01-login-success");
    } catch (error) {
      if (error instanceof Error) alert(error.message);

      // 예)
      //   const date = new Date()
      //   date instanceof Date
    }
  };
  return (
    <>
      {/* 

    # Write your query or mutation here
mutation {
  createUser(createUserInput: {
    email: "jih@a.com",
    password: "12345",
    name: "루이"
  }) {
    _id
    email
    name
  }
}


mutation {
  loginUser(email: "jih@a.com", password: "12345") {
    accessToken
  }
}

query {
  fetchUserLoggedIn {
    email
    name
  }
}


**HTTP Headers

{
  "Authorization": "Bearer eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjhjZTBiMTVkNmVhYTAwMjlmN2ZjYWUiLCJwZXJtaXNzaW9uIjowLCJpYXQiOjE3MjA1MDkwNjAsImV4cCI6MTcyMDUxMjY2MCwic3ViIjoiYWNjZXNzVG9rZW4ifQ.VMpFffgLk-tIV2akswCdHBjOqdpjOo9EAO2-4d-92QxeV0mAgk40ThyrKTDGb8G2Gda35VEFRmhovnKv2Kx6Ng"
}
        이메일 : 
        비번 : 12345
    */}
      이메일: <input type="text" onChange={onChangeEmail} />
      비밀번호 : <input type="password" onChange={onChangePassword} />
      <button onClick={onClickLogin}>로그인</button>
    </>
  );
}
