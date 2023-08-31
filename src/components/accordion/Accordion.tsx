import { useEffect, useState } from 'react'
import AngleUpIcon from '../../assets/icons/AngleUpIcon'
interface AccordionProps {
    label: string
    children: JSX.Element | JSX.Element[];
    isDefaultOpen?: boolean | undefined
}
const Accordion = ({ label, children, isDefaultOpen }: AccordionProps) => {
    const [open, setOpen] = useState(false)
    useEffect(() => {
        isDefaultOpen ? setOpen(true) : null
    }, [isDefaultOpen])
    return (
        <div className='h-auto mx-5 my-5 bg-white rounded-xl'>
            <div className='flex items-center justify-between h-16 cursor-pointer' onClick={() => setOpen(!open)}>
                <span className='ml-5 text-lg font-medium text-slate-400'>
                    {label}
                </span>
                <span className={`${!open ? "transition-all rotate-180" : "transition-all"} mr-2`}>
                    <AngleUpIcon />
                </span>
            </div>
            {open ? <div className='py-5 mx-5 transition-all'>{children}</div> : null}
        </div>
    )
}

export default Accordion