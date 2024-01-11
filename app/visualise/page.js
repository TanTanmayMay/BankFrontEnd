'use client'

import * as React from "react"
import { ScrollArea } from "@/components/ui/scroll-area"

// import dynamic from 'next/dynamic'
// // import OpenStreetMap from '../component/OpenStreetMap'
// const OpenStreetMap = dynamic(() => import('../visualise/OpenStreetMap'), {
//   ssr: false,
// })



import TableDemo from "../getusers/page"
import { Bar } from "react-chartjs-2";
    import Chart from "chart.js/auto";
    const VulnChart = () => {
      return (
        <div >
            <div className="flex">
                <div className="w-1/2 h-[50vh] flex-shrink-0">
                    <h3>Analytics</h3>
                    <Bar
                        data={{
                        labels: ["Nishant", "Tanmay", "Om"],
                        datasets: [
                            {
                            label: "Contribution",
                            data: [99, 12, 6],
                            backgroundColor: ["red", "yellow", "blue"],
                            borderColor: "black",
                            borderWidth: 5
                            },
                            {
                                label: "Commits",
                                data: [23, 50, 12],
                                backgroundColor: ["red", "yellow", "blue"],
                                borderColor: "black",
                                borderWidth: 5
                            },
                        ]
                        }}
                        height={300}
                        width={500}
                        options={{
                        maintainAspectRatio: false
                        }}
                    />
                </div>
                <div> 
                    <ScrollArea className="h-[50vh] w-1/2 rounded-md border flex-shrink-0">
                        <TableDemo />
                    </ScrollArea>
                </div>
            </div>
            
            
        </div>
      );
    };
    export default VulnChart;
