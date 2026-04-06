
export default function KPIcards({data}){
    const totalfuel=data.reduce((sum, d)=> sum + d.fuel, 0);
    const totalemissions=data.reduce((sum, d)=> sum + d.emissions, 0);

    return(
        <div className="grid grid-cols-2 gap-4">
            <div className="p-4 shadow rounded bg-white">
                <h2>Total Fuel</h2>
                <p className="text-xl">{totalfuel}</p>
            </div>
            <div className="p-4 shadow rounded bg-white">
                <h2>Total Emissions</h2>
                <p className="text-xl">{totalemissions}</p>
            </div>
        </div>
    );
}