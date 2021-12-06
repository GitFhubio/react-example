
import { OverlayCard } from "../../components/layout/OverlayCard";

import { CatalogList } from "./components/CatalogList";
import { useCatalog } from "./hooks/useCatalog";

export const CatalogPage: React.FC = () =>{
const catalog= useCatalog();
  return (
        <OverlayCard>
          <CatalogList items={catalog}>
            
          </CatalogList>
        </OverlayCard>
    )
};