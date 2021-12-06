import React from 'react';
type ProductsProps={
      value:number;
      data?:string;
    }
    export const Products = (props:ProductsProps) => <h3>Prova componente pieno : {props.value} {props.data}</h3>