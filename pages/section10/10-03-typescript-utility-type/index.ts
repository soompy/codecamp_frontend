export interface IProfile {
    name: string
    age: number
    school: string
    hobby?: string
}

interface IProfile2 {
    name: string
    age: number
}

// utility 타입들 

// 1. Partial 타입
type aaa = Partial<IProfile>

// 2. Require 타입
type bbb = Required<IProfile>

// 3. Pick 타입
type ccc = Pick<IProfile, "name" | "age">

// 4. Omit 타입
type ddd = Omit<IProfile, "school">

//5. Record 타입
type eee = "철수" | "영희" | "훈이" // Union 타입
let child: eee = "철수" // 철수, 영희, 훈이만 됨
let child2: string = "사과" // 철수, 영희, 훈이, 사과, 바나나 등 다 됨

type fff = Record<eee, IProfile> // Record 타입

// 6. 객체의 key들로 union타입 만들기
type ggg = keyof IProfile // "name" | "age" | "school" | "hobby" keyof 키를 뽑아온다
let myprofile: ggg = "hobby"

// 7. type과 interface 차이 => 선언병합
export interface IProfile {
    candy: number // 선언병합으로 추가됨 (interface만 선언병합이 가능)
}

// 배운것 응용
let profile: Partial<IProfile> = {
    candy: 10
}