import { Suspense } from "react";
import Loader from "../components/loader/Loader";

const Loadable = (Component: any) =>
(
    <Suspense fallback={<Loader />}>
        <Component />
    </Suspense>
);

export default Loadable;