import React from "react";
import AppSkeleton from "@/components/AppSkeleton";

const AppShellLayout = ({children}: {
    children: React.ReactNode,
}) => {
    return (
        <AppSkeleton>
            {children}
        </AppSkeleton>
    )

}

export default AppShellLayout