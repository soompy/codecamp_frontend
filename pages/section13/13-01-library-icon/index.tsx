import { UpCircleOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

const MyIcon = styled(UpCircleOutlined)`
    color: red;
    font-size: 50px;
`;

export default function LibraryIconPage(): JSX.Element {
    const onClickDelete = (event): void => {
        console.log(event.target.id)
    };

    return <MyIcon id="삭제할게시글ID" onClick={onClickDelete} />;
}