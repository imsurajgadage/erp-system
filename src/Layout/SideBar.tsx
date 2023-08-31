import { NavLink } from "react-router-dom";
import { routeList } from '../routes';

const SideBar = ({ expand }: boolean): JSX.Element => {
    return (
        <div className='mt-20'>
            {
                routeList?.map((route, index: number) => (
                    <NavLink
                        to={route?.path}
                        key={index}
                        className={" flex items-baseline hover:bg-slate-300"}
                    >
                        <div className="flex justify-between">
                            <route.icon className="w-10 h-10" />
                            <span className="mt-1.5 ml-5 text-lg font-medium">
                                {expand ? route?.displayName : null}
                            </span>
                        </div>
                    </NavLink>
                ))
            }

        </div>
    )
}

export default SideBar

