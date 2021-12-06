import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import "./MyApp.css"
import { AnimatedHamburger, Item } from './components/AnimatedHamburger';
import axios from 'axios';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/home/HomePage';
import { CatalogPage } from './pages/catalog/CatalogPage';
import { ContactsPage } from './pages/contacts/ContactsPage';

function MyApp() {
  const [items,setItems]= useState<Item[]>([]);
  useEffect(
    ()=>{
      axios.get<Item[]>('http://127.0.0.1:8000/api/items')
      .then(res =>
        {setItems(res.data)})
    },[])
    // questo use effect con array vuoto funge come on init in angular
  // const items = [
  //   {icon : 'fa fa-instagram', url:"http://www.google.com"},
  //   {icon : 'fa fa-facebook', url:"http://www.google.com"},
  //   {icon : 'fa fa-linkedin', url:"http://www.google.com"},
  //   {icon : 'fa fa-github', url:"http://www.google.com"},
  //   {icon : 'fa fa-twitter', url:"http://www.google.com"},
  //   {icon : 'fa fa-pinterest', url:"http://www.google.com"} ]

   const goto = (url: string): void  =>{
    //  window.open(url); per url esterni
    window.location.href = url;
    //  setOpened(false);
   }
  // usestate è un hook una funziona che restituisce un array
  // const[opened, setOpened] = useState<boolean>(false); //lo inizializzo a false dopo averlo tipizzato booleano
  // opened serve a leggere lo stato setopened a scriverlo
  // ogni volta che chiamo setOpened il componente si ricompila
  // let opened = true; NON FUNZIONA PERCHE NON SA CHE DEVE RICOMPILARE
  // const toggle=()=>{
  //   setOpened(!opened);
  //   // opened=!opened; NON FUNZIONA PERCHE NON SA CHE DEVE RICOMPILARE
  // }
 //const cls= opened ?  "menu-open opened" : "menu-open"
//  const cls=classNames('menu-open',{'opened':opened})
//  qui uso limport di classNames, menu-open è statico opened è variabile e viene aggiunta se opened è true
  return (
    <>
    <AnimatedHamburger items={items}  onIconClick={goto} />
    <BrowserRouter>
    <Routes>
     <Route path="/home" element={<HomePage />}>
     </Route>
     <Route path="/catalog" element={<CatalogPage />}>
     </Route>
     <Route path="/contacts" element={<ContactsPage />}>
     </Route>
    </Routes>
    </BrowserRouter>
    
    </>
  //   <div className="wrapper"> 
  //    <nav className="menu">
  //       <div className={classNames('menu-open',{'opened':opened})} ></div>
  //       {/* <label className="menu-open-button" onClick={toggle}> */}
  //       {/* MA A DIFFERENZA DI SOPRA nel metodo sottostante inline posso passare l'event */}
  //       <label className="menu-open-button" onClick={() => setOpened(!opened) }>
  //         <span className="hamburger hamburger-1"></span>
  //         <span className="hamburger hamburger-2"></span>
  //         <span className="hamburger hamburger-3"></span>
  //       </label>
  //       {/* <div className="menu-item"> <i className="fa fa-bar-chart"/> </div>
  //       <div  className="menu-item"> <i className="fa fa-plus"/> </div>
  //       <div className="menu-item"> <i className="fa fa-heart"/> </div>
  //       <div  className="menu-item"> <i className="fa fa-envelope"/> </div>
  //       <div className="menu-item"> <i className="fa fa-cog"/> </div>
  //       <div className="menu-item"> <i className="fa fa-ellipsis-h"/> </div> */}
  //       {items.map((item,ind)=>{
  //         return (
  //         <div className="menu-item" key={ind} onClick={()=> goto(item.url)}>
  //          <i className={item.icon} /> 
  //         </div>
  //         )
  //       })
  //       }
  //    </nav>
  //  </div>
  );
}

export default MyApp;
