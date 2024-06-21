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
            <div>
                {props.children}
            </div>
            <LayoutFooter />                   
        </>
    );
}