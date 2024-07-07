export default function BoardWriteUI(props: any): JSX.Element {
  return <div>{props.isEdit === true ? "수정하기" : "등록하기"}</div>;
}
