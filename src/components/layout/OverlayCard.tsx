import React from "react";
import { NavLink } from "react-router-dom";

export const OverlayCard: React.FC = (props) =>{
    return (
        <div className="up">
         <div className="content">
          {props.children}
         </div>
         <NavLink className="closure" to="/" >
             <i className="fa fa-times"></i>
         </NavLink>
        </div>
        )
};