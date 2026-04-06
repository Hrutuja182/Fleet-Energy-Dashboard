
export default function AllInsights({data}){
    const totalfuel= data.reduce((sum, d)=> sum+d.fuel,0);
    const insight= totalfuel> 400 ? "High fuel consumption detected" : "Fuel consumption within normal range";

    return(
        <div className="p-4 bg-yellow-100 rounded shadow">
            <h2>AI Insights</h2>
            <p>{insight}</p>
        </div>
    );
}