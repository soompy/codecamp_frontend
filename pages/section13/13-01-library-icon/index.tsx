import { UpCircleOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

const MyIcon = styled(UpCircleOutlined)`
    color: red;
    font-size: 50px;
`;

export default function LibraryIconPage(): JSX.Element {
    return <MyIcon />;
}