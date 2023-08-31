import React from 'react'
import Loadable from '../Layout/Lodable'
export const HomeComponent = Loadable(React.lazy(() => import("../Layout/Layout")))
export const CatalogCreate = Loadable(React.lazy(() => import("../pages/Catalog/CatalogCreate")))
export const PurchaseCreate = Loadable(React.lazy(() => import("../pages/Purchase/PurchaseCreate")))
