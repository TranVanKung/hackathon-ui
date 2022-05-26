import { useState } from "react";
import Link from "next/link";
import { DatePicker, Dropdown, Modal } from "antd";
import { Status, Icon } from "@/component";
import { PoolItemWrapper, CoinImageWrapper } from "./style";

const { RangePicker } = DatePicker;

const formatBalance = (value: any) => {
  return Number(value).toFixed(3);
};

interface PoolItemProps {
  token0Symbol: string;
  token0Name: string;
  token1Symbol: string;
  token1Name: string;
  currentValue: string;
  imploss: string;
  pnl: string;
  token0: any;
  token1: any;
  reward: string;
  rewardUSD: string;
  rewardSymbol?: string;
}

const baseIcon =
  "https://crypto-call.s3.ap-southeast-1.amazonaws.com/coin-icon/wbnb.png";
const quoteIcon =
  "https://crypto-call.s3.ap-southeast-1.amazonaws.com/coin-icon/binance-usd.png";

const HelpText = () => (
  <div style={{ fontSize: "1.6rem", letterSpacing: "0.15rem" }}>
    - If you think a token price is up and the other token price is down, you
    should exit the pool.
    <br />
    <br />- If you think the price of token A and B both increase or decrease,
    you should continue farming. <br />
    <br />- If you think the price of token A and B are both stable, you should
    continue farming.
    <br />
    <br />
    <a
      href="https://dailydefi.org/tools/impermanent-loss-calculator/"
      style={{
        color: "var(--color-primary)",
        fontWeight: 500,
        textDecoration: "underline",
      }}
      target="_blank"
    >
      Impermanent Loss Calculator
    </a>
  </div>
);

const PoolItem = (props: PoolItemProps) => {
  const {
    token0Symbol,
    token0Name,
    token1Symbol,
    token1Name,
    currentValue,
    imploss,
    pnl,
    token0,
    token1,
    reward,
    rewardUSD,
  } = props;

  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const onCloseModal = () => {
    setModalVisible(false);
  };

  const seedPnl =
    token0?.currentFiatBalance +
    token1?.currentFiatBalance -
    token0?.depositFiatAmount -
    token1?.depositFiatAmount +
    11.75;

  return (
    <PoolItemWrapper>
      <div className="pool-info">
        <CoinImageWrapper>
          <img src={baseIcon} alt="" className="base-coin" />
          <img src={quoteIcon} alt="" className="quote-coin" />
        </CoinImageWrapper>

        <div className="pair">
          <div className="ticker">
            {token0Symbol}/{token1Symbol}
          </div>

          <div className="name">
            {token0Name}/{token1Name}
          </div>
        </div>

        <div className="list-icon">
          <div className="item">
            <Dropdown
              overlay={
                <span
                  style={{
                    backgroundColor: "white",
                    padding: "1rem 1rem",
                    borderRadius: "var(--border-radius)",
                    boxShadow: "var(--box-shadow)",
                  }}
                >
                  {/* @ts-ignore */}
                  <RangePicker size="small" className="custom-date-picker" />
                </span>
              }
              visible={visible}
            >
              <Status
                content="1d"
                isSuccess={true}
                isLarge={false}
                icon="arrow_drop_down"
                style={{ fontSize: "1.2rem" }}
                onClick={() => {
                  setVisible(!visible);
                }}
              />
            </Dropdown>
          </div>

          <div className="item" onClick={() => setModalVisible(!visible)}>
            <Icon name="tips_and_updates" />
          </div>

          <div className="item">
            <Link href="/chart">
              <a>
                <Icon name="bar_chart" />
              </a>
            </Link>
          </div>

          <div className="item">
            <Icon name="history" />
          </div>
        </div>
      </div>

      <div className="statistic">
        <div className="item">
          <div className="label">Current value</div>
          <div className="value">$ {formatBalance(currentValue)}</div>
        </div>

        <div className="item">
          <div className="label">Impermanent loss</div>
          <div className="value">
            <Status
              content={`$ ${formatBalance(Number(imploss) >= 0 ? 0 : imploss)}`}
              isSuccess={false}
            />
          </div>
        </div>

        <div className="item">
          <div className="label">PNL</div>
          <div className="value">
            <Status
              content={`$ ${formatBalance(seedPnl)}`}
              isSuccess={Number(seedPnl) >= 0}
            />
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="reward">
          <div className="label">Rewards:</div>

          <div className="value-wrapper">
            <div className="value">
              2.5
              <div className="ticker">CAKE</div>
            </div>
            <div className="sub-value">
              <Status content={`$ ${11.75}`} isSuccess={true} />
            </div>
          </div>
        </div>

        <div className="more-info" onClick={() => setIsOpen(!isOpen)}>
          <span>See more</span>
          <Icon name={isOpen ? "expand_more" : "expand_less"} />
        </div>
      </div>

      {isOpen ? (
        <div className="detail">
          <div className="item">
            <div className="label">Previous Value</div>

            <div className="value">
              {formatBalance(token0?.depositAmount)}
              <div className="ticker">{token0?.token?.symbol}</div>
            </div>
            <div className="sub-value">
              $ {formatBalance(token0?.depositFiatAmount)}
            </div>

            <div className="value">
              {formatBalance(token1?.depositAmount)}
              <div className="ticker">{token1?.token?.symbol}</div>
            </div>
            <div className="sub-value">
              $ {formatBalance(token1?.depositFiatAmount)}
            </div>
          </div>

          <div className="item">
            <div className="label">Realtime value</div>

            <div className="value">
              {formatBalance(token0?.currentBalance)}
              <div className="ticker">{token0?.token?.symbol}</div>
            </div>

            <div className="sub-value">
              $ {formatBalance(token0?.currentFiatBalance)}
            </div>

            <div className="value">
              {formatBalance(token1?.currentBalance)}
              <div className="ticker">{token1?.token?.symbol}</div>
            </div>

            <div className="sub-value">
              $ {formatBalance(token1?.currentFiatBalance)}
            </div>
          </div>

          <div className="item">
            <div className="label">Liquidity Pool Gain</div>

            <div className="value">
              {formatBalance(token0?.currentBalance - token0?.depositAmount)}
              <div className="ticker">{token0?.token?.symbol}</div>
            </div>
            <div className="sub-value">
              ${" "}
              {formatBalance(
                token0?.currentFiatBalance - token0?.depositFiatAmount
              )}
            </div>

            <div className="value">
              {formatBalance(token1?.currentBalance - token1?.depositAmount)}
              <div className="ticker">{token1?.token?.symbol}</div>
            </div>
            <div className="sub-value">
              ${" "}
              {formatBalance(
                token1?.currentFiatBalance - token1?.depositFiatAmount
              )}
            </div>
          </div>
        </div>
      ) : null}

      <Modal
        visible={modalVisible}
        footer={null}
        width="63rem"
        title="Suggestions"
        onCancel={onCloseModal}
        maskClosable={true}
      >
        <HelpText />
      </Modal>
    </PoolItemWrapper>
  );
};

export default PoolItem;
