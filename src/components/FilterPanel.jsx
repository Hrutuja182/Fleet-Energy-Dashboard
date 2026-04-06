
const ships=["All","ship 1","ship 2"];

export default function FilterPanel({selectedShip,setSelectedShip}){
    return(
      <select className="p-2 border rounded" 
      value={selectedShip} 
      onChange={(e)=>setSelectedShip(e.target.value)}>
        {ships.map(ship=>(<option key={ship} value={ship}>{ship}</option>))}

      </select>
    );
}