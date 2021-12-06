import React from "react";
import { OverlayCard } from "../../components/layout/OverlayCard";
import { MapQuest } from "../../components/MapQuest";

export const ContactsPage: React.FC = () =>{
    return (
        <OverlayCard>
         <h1>Contacts</h1>
         <MapQuest city="Roma" width={600} height={400} onClickHandler={()=>console.log('ciao')}>
         </MapQuest>
        </OverlayCard>
        )
};

//qui se usavo solo onClick funzionava cmq grazie al ...rest