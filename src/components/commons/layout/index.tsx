interface ILayoutProps {
    children: JSX.Element;
}

export default function Layout(props: ILayoutProps): JSX.Element {
    return (
        <>
            <div>여기는 헤더입니다</div>
            <div>여기는 헤더입니다</div>
            <div>여기는 네비게이션입니다</div>
            <div>
                {props.children}
            </div>
            <div>여기는 푸터입니다</div>        
        </>
    );
}