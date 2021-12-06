import React from 'react';
import { Empty } from './components/Empty';
import { Products } from './components/Products';
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
// let counter:any;
interface User{
  name:string;
}
let user:User|null ={name:'pippo'};
// <user=null;>
// let print : number = 3;
function getName(prop:any ="not defined"){
return `your name is ${prop}`;
}
    // <> alternativa a React.Fragment
    //per avere div wrapper ma non renderizzato
function App() {

  console.log('ciao');
  const counter:number= 10;
  const bool:boolean=false;
  // const WrapperClass:string = bool ==false ? 'red' : 'blue';
  // const styles:React.CSSProperties = bool ==false ? {} : {};
  const renderMessage = () =>{
    return counter === 0 ? <h1>empty</h1> : <h2>{counter}</h2>
  }
  const url ="https://via.placeholder.com/90";
  return (
    <> 
    <img src={url} alt="" />
    {/* <h1 style={styles}></h1> */}
    {/* <h1 className={WrapperClass}></h1> */}
      <h1 className={bool ? 'red' : 'blue'}>{counter}</h1>
      <h2 style={!bool ? {color: "gold"} : {}}>ciao</h2>
      {/* {counter === 0 ? <h1>empty</h1> :
      <h2>{counter}</h2>} */}
      {renderMessage()}
      <button className="btn btn-primary">
        <i className="fa fa-times" />
        click here</button>
      <h2>{user?.name}</h2>
      <h2>{user ? user.name : null}</h2>
      <h2>{user && user.name}</h2>
      <h5>{counter === 0 ? <Empty/> : <Products value={counter} data="prodotti" />}</h5>
    </>
  );
}
console.log(getName());

export default App;

// export const Products2: React.FC<ProductsProps> = (props:ProductsProps) => <h3>Prova componente pieno : {props.value} {props.data}</h3>