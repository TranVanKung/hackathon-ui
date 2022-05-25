import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { DailyPNLChartWrapper } from "./style";

const listDay = [
  "2022-05-18",
  "2022-05-19",
  "2022-05-20",
  "2022-05-21",
  "2022-05-22",
  "2022-05-23",
];

const DailyPNLChart = () => {
  const chartData = [
    {
      name: "",
      type: "column",
      data: [
        { y: 3000, color: "#0ecb81" },
        { y: 1000, color: "#0ecb81" },
        { y: -400, color: "#d841419e" },
        { y: 800, color: "#0ecb81" },
        { y: 2000, color: "#0ecb81" },
        { y: -1500, color: "#d841419e" },
      ],
      yAxis: 0,
    },
  ];

  const chartOptions =
    typeof window !== "undefined"
      ? {
          chart: {
            backgroundColor: {
              linearGradient: [0, 0, 500, 500],
              stops: [
                [0, "rgb(255, 255, 255)"],
                [1, "rgb(255, 255, 255)"],
              ],
            },
          },
          title: {
            text: "Daily P&L",
          },
          xAxis: {
            categories: listDay,
            labels: {
              style: {
                color: "rgb(56, 60, 64)",
              },
            },
          },
          yAxis: [
            {
              labels: {
                style: {
                  color: "rgb(56, 60, 64)",
                },
              },
              title: {
                text: "",
                style: {
                  color: "rgb(56, 60, 64)",
                },
              },
              gridLineWidth: 0.5,
            },
          ],
          legend: {
            itemStyle: {
              color: "rgb(56, 60, 64)",
            },
          },
          plotOptions: {
            series: {
              borderColor: "transparent",
              stacking: "normal",
            },
          },
          series: chartData,
          // hide hightchart.com text
          credits: {
            enabled: false,
          },
        }
      : {};

  return (
    <DailyPNLChartWrapper>
      <HighchartsReact highcharts={Highcharts} options={chartOptions} />
    </DailyPNLChartWrapper>
  );
};

export default DailyPNLChart;
