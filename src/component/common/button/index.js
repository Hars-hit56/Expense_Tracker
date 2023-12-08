import React from "react";
import { colors } from "../../../utils/colors";
import './style.css';

const CommonButton = ({ title, className, fontSize, borderRadius, padding, isSecodary ,onClickvalue,margin,textAlign,rightComponent,display}) => {
    return (
        <div className={`${className}`}  onClick={onClickvalue} style={{
            backgroundColor: isSecodary ? 'transparent' :colors.theme,
            padding: padding || '0.8rem 2rem',
            borderRadius: borderRadius || '0.4rem',
            fontSize: fontSize || '1.3rem',
            border : `2px solid ${colors.theme}`,
            color: isSecodary ? colors.theme :'white',
            margin: margin || ".5rem .5rem",
            textAlign: textAlign||'center',
            cursor:"pointer",
            display: display ||"flex",
            alignItems:'center'
        }}   >
            {title} 
            {
                rightComponent?rightComponent:null
            }
        </div>
        
    )
}
// truthy- {}
// falsy- 0 false undefiend null document.all()

export default CommonButton