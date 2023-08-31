import CatalogIcon from "../assets/icons/CatalogIcon";
import PurchaseIcon from "../assets/icons/PurchaseIcon";
import * as LazyLoadedElements from "./LazyLoadedComponents";
interface routeListTypes {
    displayName?: string;
    icon?: JSX.Element | React.ReactNode | React.ReactElement;
    path: string;
    element: React.ReactNode
}


export const routeList: Array<routeListTypes> = [
    {
        displayName: "Catalog",
        icon: CatalogIcon,
        path: "/catalogCreate",
        element: LazyLoadedElements.CatalogCreate
    },
    {
        displayName: "Purchase",
        icon: PurchaseIcon,
        path: "/purchase",
        element: LazyLoadedElements.PurchaseCreate
    },

]
