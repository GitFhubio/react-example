import axios from "axios";
import { useEffect, useState } from "react";
import { CatalogItem } from "../catalog-item";

export function useCatalog(){
    const[catalog, setCatalog] = useState<CatalogItem[]>([]);
    useEffect(()=>{
  axios.get<CatalogItem[]>('http://127.0.0.1:8000/api/catalog')
  .then(res=>setCatalog(res.data))
    },[])
    
    return  catalog
    ;
}