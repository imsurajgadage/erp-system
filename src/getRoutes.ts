import {
    useRoutes
} from 'react-router-dom';
import { routeList } from "./routes";
import { HomeComponent } from './routes/LazyLoadedComponents'
export const getRoutes = () => {
    let element = useRoutes([
        {
            path: '/', element: HomeComponent,
            children: [
                ...routeList
            ]
        }
    ]);
    return element;
}