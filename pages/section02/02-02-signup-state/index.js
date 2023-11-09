import { useState } from "react"

export default function SignupStatePage() {
    
    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")
    const [ emailError, setEmailError ] = useState("아직은 에러가 없습니다.")

    // 이벤트 핸들러 함수
    function onChangeEmail(event) {
        console.log(event) // 나의 행동
        console.log(event.target) // 작동된 태크
        console.log(event.target.value) // 작동된 태크의 입력된 값
        setEmail(event.target.value)
    }

    function onChangePassword(event) {
        setPassword(event.target.value)
    }

    function onClickSignup(event) {


        console.log(email) // 진짜 포장이 잘 됐는지 확인하기
        console.log(password) // 진짜 포장이 잘 됐는지 확인하기

        // 1. 검증하기
        if(email.includes("@") === false) {
            // alert("이메일이 올바르지 않습니다.")
            // 옛날 방식 document.getElementById("myerror").innerText = "이메일이 올바르지 않습니다."
            
            // ** myerror를 state로 만들어서 써보기
            setEmailError("이메일이 올바르지 않습니다.")
        } else {
            // 2. 백엔드 컴퓨터에 보내주기(백엔드 개발자가 만든 함수. 즉 API)
            // => 나중에
    
            // 3. 성공알람 보여주기
            alert("회원가입을 축하합니다!!")
        }
        
    }
    
    return (
        <div>
            이메일: <input type="text" onChange={onChangeEmail} />
            {/*  옛날 방식 <div id="myerror"></div> */}
            <div>{emailError}</div>
            비밀번호: <input type="password" onChange={onChangePassword} />
            <button onClick={onClickSignup}>회원가입</button>
        </div>
    )
}