import LayoutBanner from "./banner";
import LayoutFooter from "./footer";
import LayoutHeader from "./header";
import LayoutNavigation from "./navigation";

interface ILayoutProps {
    children: JSX.Element;
}

export default function Layout(props: ILayoutProps): JSX.Element {
    return (
        <>
            <LayoutHeader />
            <LayoutBanner />
            <LayoutNavigation />
            <div style={{ height: "500px", display: "flex " }}>
                <div style={{ width: "30%", backgroundColor: "orange" }}>
                    사이드바
                </div>
                <div style={{ width: "70%" }}>
                    {props.children}
                </div>
            </div>            
            <LayoutFooter />                   
        </>
    );
}