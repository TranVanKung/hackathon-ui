import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { APYChartWrapper } from "./style";

const listAPY = [15, 15.5, 14.4, 14.7, 14.5];
const listIL = [80, 50, 60, 75, 55];
const listDate = [
  "2022-05-18",
  "2022-05-19",
  "2022-05-20",
  "2022-05-21",
  "2022-05-22",
  "2022-05-23",
];

const APYChart = () => {
  const chartOptions =
    typeof window !== "undefined"
      ? {
          chart: {
            type: "areaspline",
            // height: "100%",
            backgroundColor: {
              linearGradient: [0, 0, 500, 500],
              stops: [
                [0, "rgb(255, 255, 255)"],
                [1, "rgb(255, 255, 255)"],
              ],
            },
          },
          title: {
            text: "",
          },
          xAxis: {
            categories: listDate,
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
          },
          yAxis: [
            {
              title: {
                text: "",
                style: {
                  color: "rgb(56, 60, 64)",
                },
              },
              labels: {
                style: {
                  color: "rgb(56, 60, 64)",
                },
              },
              gridLineWidth: 0.1,
              min: 0,
              max: 100,
            },
            {
              // Secondary yAxis
              title: {
                text: "",
                style: {
                  color: "rgb(56, 60, 64)",
                },
              },
              labels: {
                style: {
                  color: "rgb(56, 60, 64)",
                },
              },
              opposite: true,
              gridLineWidth: 0,
            },
          ],
          legend: {
            layout: "vertical",
            align: "center",
            verticalAlign: "top",
            itemStyle: {
              color: "rgb(56, 60, 64)",
            },
          },
          plotOptions: {
            line: {
              dataLabels: {
                enabled: true,
              },
              enableMouseTracking: false,
            },
          },
          series: [
            {
              name: "APR",
              data: listAPY,
              type: "spline",
              lineColor: "#4f46e5",
              max: 70,
              yAxis: 0,
              fillColor: {
                linearGradient: [0, 0, 0, 300],
                stops: [
                  [0, Highcharts?.getOptions()?.colors[4]],
                  [
                    1,
                    Highcharts?.color(Highcharts?.getOptions()?.colors[4])
                      .setOpacity(0)
                      .get("rgba"),
                  ],
                ],
              },
            },
            {
              name: "Impermanent Loss",
              type: "spline",
              data: listIL,
              yAxis: 1,
              lineColor: "#ff7600",
              color: "#ff7600",
            },
          ],
          // hide hightchart.com text
          credits: {
            enabled: false,
          },
        }
      : {};

  return (
    <APYChartWrapper>
      <HighchartsReact highcharts={Highcharts} options={chartOptions} />
    </APYChartWrapper>
  );
};

export default APYChart;
