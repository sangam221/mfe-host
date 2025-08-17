import React, {lazy, Suspense} from "react";
import { useSelector } from "react-redux";

const AIMHubLazy = lazy(() => import("aimhub/AIMHubApp"));

const AIMHubApp = () => {
    const { name } = useSelector((state) => state.user);

    return (
        <div style={{ padding: "20px" }}>
            <Suspense fallback={<div>Loading AIMHub...</div>}>
                <AIMHubLazy userName={name} />
            </Suspense>
        </div>
    );
};

export default AIMHubApp;