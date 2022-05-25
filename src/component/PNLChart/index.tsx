import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { PNLChartWrapper } from "./style";

const listPNL = [3000, 4000, 6000, 7500, 5500];
const listDate = [
  "2022-05-21",
  "2022-05-22",
  "2022-05-23",
  "2022-05-24",
  "2022-05-25",
  "2022-05-26",
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
              name: "Cummulative P&L",
              data: listPNL,
              color: "#eeeef0",
              lineColor: "#4f46e5",
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
          ],
          // hide hightchart.com text
          credits: {
            enabled: false,
          },
        }
      : {};

  return (
    <PNLChartWrapper>
      <HighchartsReact highcharts={Highcharts} options={chartOptions} />
    </PNLChartWrapper>
  );
};

export default APYChart;
