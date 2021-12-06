import React from 'react';
interface MapQuestProps{
    city:string;
    height?:number,
    width?:number,
    onClickHandler?:()=>void
    }
    export const MapQuest:React.FC<MapQuestProps & React.ImgHTMLAttributes<HTMLImageElement>> 
    = ({city,width=300,height=200,onClickHandler,alt,...rest}) => {
        // const {address,width,height} =props;
        //con React.ImgAttributes .. estendo le proprietà che accetta il componente,che quindi avra anche quelle di base di un immagine
        //devo usare lo spread operator sia nel destruct che nel render
        //per cui se vado in contacts page, al component posso assegnare alt,onclick e width nativi
        //in questo caso alt "lho tirato fuori" da rest degli attributi img
        const url= `https://open.mapquestapi.com/staticmap/v4/getplacemap?key=t5Q3mIphExGPVG8arKD4Nxt8iBFwANYH&location=${city}&size=${width},${height}&zoom=9&showicon=red_1-1`
    return (
    <div {...rest}>
     <img src={url} alt={alt} onClick={onClickHandler}/>
    </div>
    )
    }
