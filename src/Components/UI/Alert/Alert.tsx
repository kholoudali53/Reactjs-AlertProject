//import { icons } from 'lucide-react';
import "./index.scss";
import { X } from 'lucide-react';
import type { ReactNode } from 'react';
import type { AlertTypes } from "../../../Types";

interface IProps {
    type: AlertTypes;
    icon: ReactNode;
    title: string;
    desc?: string;
    children?: ReactNode;
}

const Alert = ({type = "alert-error", icon, title, desc, children}: IProps) => {
    return (
        <div className= {type}>
            <div className= "alert-header">
                <div className= "title">
                    <span> {icon} </span>
                    <h4>{title}</h4>
                </div>
                
                 <X className= "close" size={20}/> 
            </div>
            {children ? children : <p>{desc}</p>}
            
        </div>
    );
};

export default Alert