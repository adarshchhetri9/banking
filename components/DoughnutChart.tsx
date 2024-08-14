"use client";

import { Chart as Chartjs, ArcElement, Tooltip, Legend } from "chart.js";
import { usePathname } from "next/navigation";
import { Doughnut } from "react-chartjs-2";

Chartjs.register(ArcElement, Legend, Tooltip);

const DoughnutChart = ({ accounts }: DoughnutChartProps) => {
  const data = {
    datasets: [
      {
        label: "Banks",
        data: [1250, 3000, 5000],
        backgroundColor: ["#0747b6", "#2265d8", "#2f91fa"],
      },
    ],
    labels: ["Bank 1", "Bank 2", "Bank 3"],
  };

  const pathname = usePathname();

  console.log(pathname);
  return (
    <Doughnut
      data={data}
      options={{
        cutout: "70%",
        plugins: {
          legend: {
            display: false,
          },
        },
      }}
    />
  );
};

export default DoughnutChart;
