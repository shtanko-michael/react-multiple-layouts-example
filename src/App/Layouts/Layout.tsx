import React from "react";
import { useAuth } from 'components';

type LayoutProps = {
    layout: any;
    isPublic?: boolean;
}
const Layout: React.FC<LayoutProps> = ({ layout: Layout, isPublic, children }) => {
    const auth = useAuth();

    if (isPublic == true || auth.isAuthenticated)
        return <Layout>{children}</Layout>;
    return <>{children}</>;
}
export default Layout;