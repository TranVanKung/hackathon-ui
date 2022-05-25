import { APYChart, PNLChart, DailyPNLChart } from "@/component";
import { ChartPageWrapper } from "./style";

const ChartPage = () => {
  return (
    <ChartPageWrapper>
      <div className="row">
        <div className="chart">
          <PNLChart />
        </div>

        <div className="chart">
          <APYChart />
        </div>
      </div>

      <div className="row">
        <div className="chart" style={{ marginTop: "1rem" }}>
          <DailyPNLChart />
        </div>
      </div>
    </ChartPageWrapper>
  );
};

export default ChartPage;
