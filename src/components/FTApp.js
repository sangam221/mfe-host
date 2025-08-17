import React, {lazy, Suspense} from "react";
import { useSelector } from "react-redux";

const FTLazy = lazy(() => import("ft/FTApp"));

const FTApp = () => {
    const { name } = useSelector((state) => state.user);

    return (
        <div style={{ padding: "20px" }}>
            <Suspense fallback={<div>Loading AIMHub...</div>}>
                <FTLazy userName={name} />
            </Suspense>
        </div>
    );
};

export default FTApp;