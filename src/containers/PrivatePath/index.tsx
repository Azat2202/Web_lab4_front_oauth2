import { useAuth } from "react-oidc-context"
import {ReactNode} from "react";
import LoadingSpinner from "../../components/LoadingSpinner";

function PrivateRoute({ children } : {children: ReactNode}) {
    const auth = useAuth()

    const textAlignStyle = { textAlign: "center" }
    const subh1Style = { color: 'grey' }

    if (auth.isLoading) {
        return (
            <div>
                <h1>Keycloak is loading</h1>
                <h1 >or running authorization code flow with PKCE</h1>
                <LoadingSpinner/>
            </div>
        )
    }

    if (auth.error) {
        return (
            <div>
                <h1>Oops ...</h1>
                <h1>{auth.error.message}</h1>
            </div>
        )
    }

    if (!auth.isAuthenticated) {
        auth.signinRedirect()
        return null
    }

    return <>
        {children}
        </>
}

export default PrivateRoute