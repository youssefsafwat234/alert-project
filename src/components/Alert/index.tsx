import { X } from 'lucide-react'
import type { ReactNode } from 'react'

interface IProps {
    backround : string,
    color : string,
    icon  : ReactNode,
    title : string,
    description : string 
}
const Alert = ({backround , color , icon, title , description} : IProps) => {
    return (
        <div>
            <div className={`flex flex-col p-5 gap-7 ${backround} ${color} rounded-3xl border-2 border-dotted border-${color} mb-5`}>
                <div className='flex justify-between items-center'>
                    <div className='flex items-center gap-4'>
                        {icon}
                        <div className='font-bold'>{title}</div>
                    </div>
                    <X />
                </div>
                <p>
                    {description}
                </p>
            </div>
        </div>
    )
}



export default Alert