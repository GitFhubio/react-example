import classNames from 'classnames';
// import classes from './AnimatedHamburger.module.css';
import React, { useState } from 'react';
interface AnimatedHamburgerProps{
    items: Item[];
    onIconClick:(url:string) =>void;
}
export interface Item{
    icon:string,
    url:string
  }

export const AnimatedHamburger: React.FC<AnimatedHamburgerProps> = (props) => {
    const[opened, setOpened] = useState<boolean>(false); //always returns array with 2 elements
    const iconClickHandler = (url: string): void  =>{
        //ricevo come prop la proprietà onIconClick che è una funzione che "prende" un dato in ingresso
        //che è l'url e lo mette a disposizione del padre
        props.onIconClick(url);
        setOpened(false);
        // window.open(url);
        // setOpened(false);
      }
return   (
 <div className="wrapper"> 
    <nav className="menu">
    <div className={classNames('menu-open',{'opened':opened})} ></div>
    {/* <label className="menu-open-button" onClick={toggle}> non devo eseguire la funzione qui quindi no toggle() che la eseguirebbe subito, prima della renderizzazione del componente*/}
    {/* MA A DIFFERENZA DI SOPRA nel metodo sottostante inline posso passare l'event */}
    <label className="menu-open-button" onClick={() => setOpened(!opened) }>
        <span className="hamburger hamburger-1"></span>
        <span className="hamburger hamburger-2"></span>
        <span className="hamburger hamburger-3"></span>
    </label>
    {/* <div className="menu-item"> <i className="fa fa-bar-chart"/> </div>
    <div  className="menu-item"> <i className="fa fa-plus"/> </div>
    <div className="menu-item"> <i className="fa fa-heart"/> </div>
    <div  className="menu-item"> <i className="fa fa-envelope"/> </div>
    <div className="menu-item"> <i className="fa fa-cog"/> </div>
    <div className="menu-item"> <i className="fa fa-ellipsis-h"/> </div> */}
    {props.items.map((item,ind)=>{
        return (
        <div className="menu-item" key={ind} onClick={()=> iconClickHandler(item.url)}>
        <i className={item.icon} /> 
        </div>
        )
    })
    }
    </nav>
    {/* <h1 className={classes.test}>elleh</h1> */}
</div> 
)
}