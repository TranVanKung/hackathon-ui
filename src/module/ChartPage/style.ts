import styled from "styled-components";

const ChartPageWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 2rem 2rem;
  font-size: 1.6rem;
  overflow-x: hidden;
  background-color: rgba(242, 242, 242);

  .row {
    display: flex;
    justify-content: space-between;
    width: 100%;

    .chart {
      flex-basis: 49%;
    }
  }
`;

export { ChartPageWrapper };
