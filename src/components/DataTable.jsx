
export default function DataTable({data}){
    return(
        <table className="w-full bg-white shadow rounded">
            <thead>
                <tr>
                    <th className="p-2">Ship</th>
                    <th className="p-2">Fuel</th>
                    <th className="p-2">Emissions</th>
                </tr>
            </thead>
            <tbody>
                {data.map((d,i)=>(
                    <tr key={i} className={d.fuel > 150 ? "bg-red-100" : ""}>
                            <td className="p-2">{d.ship}</td>
                            <td className="p-2">{d.fuel}</td>
                            <td className="p-2">{d.emissions}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}