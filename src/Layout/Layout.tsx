import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from './SideBar'
const Layout = () => {
  const [expand, setExpand] = useState<boolean>(false)
  return (
    <div className='flex'>
      <div className='absolute top-0 left-0 z-50 w-16 h-screen transition-all bg-white shadow-2xl cursor-pointer xl:w-20 hover:w-60' onMouseOver={() =>
        setExpand(true)} onMouseLeave={() =>
          setExpand(false)}>
        <SideBar expand={expand} />
      </div>
      <div className="w-full h-screen ml-16 w- xl:ml-20 bg-slate-100">
        <Outlet />
      </div>
    </div>
  )
}

export default Layout