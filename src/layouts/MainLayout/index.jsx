import { Fragment } from "react";
import { Header, MenuBar } from "../../components";
import Home from "../../views/Home";


function MainLayout() {
    return (
        <Fragment>
            <MenuBar />
            <Header />
            <Home />
        </Fragment>
    );
}

export default MainLayout