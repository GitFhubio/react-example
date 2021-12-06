import React from "react";
import { MapQuest } from "../../../components/MapQuest";
import { CatalogItem } from "../catalog-item";

interface CatalogListItemProps{
 item:CatalogItem;
}
//sotto ho destrutturato {item} da props
export const CatalogListItem: React.FC<CatalogListItemProps> = ({item}) =>{
const openMap=()=>{
window.open(`https://www.google.com/maps/place/${item.city}`)
}

    return (
        <div className="col-sm-12 col-md-6 col-lg-4">
        <MapQuest city={item.city} onClick={openMap} />
        <h4>{item.title}</h4>
        <h4>{item.address} - {item.city}</h4>
       </div>
        )
};
