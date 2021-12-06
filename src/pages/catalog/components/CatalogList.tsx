import React from "react";
import { CatalogItem } from "../catalog-item";
import { CatalogListItem } from "./CatalogListItem";


interface catalogListProps{
    items:CatalogItem[]
}
export const CatalogList: React.FC<catalogListProps> = (props) =>{
    return (
        <div className="row">
            <h1>Catalog</h1>
        {props.items.map((item)=>{
     return(    
      <CatalogListItem item={item} key={item.id} />
     )
     
        })
        }
        </div>
        )
};
