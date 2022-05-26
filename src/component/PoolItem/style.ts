import styled from "styled-components";

const PoolItemWrapper = styled.div`
  border: 1px solid red;
  flex-basis: 49%;
  border: 1px dashed rgba(255, 255, 255, 0.3);
  display: flex;
  flex-direction: column;
  padding: var(--padding);
  border-radius: var(--border-radius);
  margin-bottom: var(--margin-bottom);
  box-shadow: var(--box-shadow);
  background-image: ${({ theme }) =>
    `linear-gradient(to right, rgba(79, 70, 229, 0.06), rgba(237, 83, 224, 0.09), rgba(79, 70, 229, 0.06))`};

  .pool-info {
    display: flex;
    align-items: center;

    .pair {
      display: flex;
      flex-direction: column;
      margin-left: 2rem;

      .ticker {
        color: var(--color-primary-light);
        font-weight: 500;
      }

      .name {
        color: var(--color-text-secondary);
        font-size: 1.2rem;
      }
    }

    .list-icon {
      margin-left: auto;
      display: flex;
      align-items: center;

      .item {
        cursor: pointer;
        margin-left: 0.7rem;
        display: flex;
        justify-content: center;
        align-items: center;

        & * {
          font-size: 1.9rem;
          color: var(--color-text-primary);
        }
      }
    }
  }

  .statistic {
    margin-top: 1rem;
    display: flex;

    .item {
      flex-basis: 33.33%;

      .label {
        font-size: 1.4rem;
      }

      .value {
        font-weight: 600 !important;
        display: flex;
        margin-top: 0.5rem;
      }
    }
  }

  .footer {
    display: flex;
    align-items: flex-end;

    .reward {
      display: flex;
      align-items: center;
      margin-top: 1.5rem;

      .label {
        margin-right: 1rem;
        font-size: 1.3rem;
      }

      .value-wrapper {
        display: flex;

        .value {
          display: flex;
          align-items: center;

          .ticker {
            margin-left: 0.5rem;
            color: var(--color-primary-light);
            font-weight: 600;
            font-size: 1.4rem;
          }
        }

        .sub-value {
          margin-left: 0.5rem;
          color: var(--color-text-secondary);
          font-size: 1.4rem;
          font-size: 1.3rem;
          display: flex;
          align-items: center;
        }
      }
    }

    .more-info {
      color: var(--color-primary-light);
      font-weight: 500;
      font-size: 1.4rem;
      margin-left: auto;
      cursor: pointer;
      display: flex;
      align-items: center;
    }
  }

  .detail {
    display: flex;
    margin-top: 1.5rem;

    .item {
      flex-basis: 33.33%;

      .label {
        font-size: 1.3rem;
      }

      .value {
        display: flex;
        font-weight: 500;
        font-size: 1.5rem;
        margin-top: 1rem;

        .ticker {
          margin-left: 0.5rem;
          color: var(--color-primary-light);
          font-weight: 600;
          font-size: 1.4rem;
        }
      }

      .sub-value {
        color: var(--color-text-secondary);
        font-size: 1.4rem;
      }
    }
  }
`;

const CoinImageWrapper = styled.div`
  position: relative;
  border-radius: 50%;
  height: 3rem;
  width: 3rem;

  .base-coin {
    border-radius: 50%;
    height: 2.5rem;
    width: 2.5rem;
    border: 1px solid rgba(0, 0, 0, 0.2);
  }

  .quote-coin {
    bottom: -0.1rem;
    right: -0.7rem;
    position: absolute;
    border-radius: 50%;
    height: 2.2rem;
    width: 2.2rem;
    border: 1px solid rgba(0, 0, 0, 0.2);
  }
`;

export { PoolItemWrapper, CoinImageWrapper };
