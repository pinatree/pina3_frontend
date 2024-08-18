import React from "react";
import './ClientsStatistic.css'; // Import the CSS file
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

class ClientsStatistic extends React.Component {

    constructor(props){
        super(props)
        this.loadVisitsStatistics();
    }

    render() {
        let data = this._visitsStatistic;
        return(
            <div>
                <p className="userStatusCaption">Статистика посещений</p>
                    <BarChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                        >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="count" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
                        <Bar dataKey="uniqueCount" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
                    </BarChart>
                
                
            </div>
        );
    }

    loadVisitsStatistics() {
        this._visitsStatistic = this.getVisitsStatisticByDays();
    }

    getVisitsStatisticByDays() {
        
        let moqData = [
            {
                date: "01.01.2020",
                count: 5,
                uniqueCount: 2
            },
            {
                date: "02.01.2020",
                count: 7,
                uniqueCount: 1
            },
            {
                date: "12.01.2020",
                count: 12,
                uniqueCount: 3
            },
            {
                date: "01.02.2020",
                count: 4,
                uniqueCount: 1
            },
            {
                date: "02.02.2020",
                count: 51,
                uniqueCount: 9
            },
            {
                date: "05.05.2020",
                count: 12,
                uniqueCount: 5
            }
        ];

        return moqData;
    }
}

export default ClientsStatistic;