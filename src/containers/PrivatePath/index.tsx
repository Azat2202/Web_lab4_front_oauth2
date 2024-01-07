import { useKeycloak } from "@react-keycloak/web";
import {ReactNode} from "react";
import ErrorPage from "../../views/ErrorPage";

const PrivateRoute = ({ children }: {children: ReactNode}) => {
    const { keycloak } = useKeycloak();

    const isLoggedIn = keycloak.authenticated;

    return isLoggedIn ? <>{children}</> : <ErrorPage/>;
};

export default PrivateRoute;