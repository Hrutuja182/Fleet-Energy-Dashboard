import {useState} from "react";
import mockData from "../data/mockData";
import KPIcards from "../components/KPIcards";
import AllInsights from "../components/AllInsights";    
import DataTable from "../components/DataTable";
import FilterPanel from "../components/FilterPanel";
import Charts from "../components/charts";


export default function Dashboard(){
     const [selectedShip, setSelectedShip] = useState("All");

     const filteredData= selectedShip === "All" ? mockData : mockData.filter(d=> d.ship.trim().toLowerCase() === selectedShip.trim().toLowerCase());

     return(
        <div className="p-6 grid gap-6">
            <h1 className="text-2xl folt-bold"> Fleet Energy Dashboard</h1>

            <FilterPanel selectedShip={selectedShip} setSelectedShip={setSelectedShip} />
            <KPIcards data={filteredData} />
            <AllInsights data={filteredData} />
            <Charts data={filteredData} />
            <DataTable data={filteredData} />

        </div>
     );
}