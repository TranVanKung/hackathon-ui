import styled from "styled-components";

const MainPageWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 2rem 2rem;
  font-size: 1.6rem;

  .title {
    margin-bottom: 1.5rem;
    font-size: 2rem;
    font-weight: 700;
  }

  .heading {
    width: 40rem;
  }

  .list-pool {
    margin-top: 2.5rem;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`;

export { MainPageWrapper };
