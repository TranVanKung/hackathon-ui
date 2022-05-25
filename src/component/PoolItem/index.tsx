import { useState } from "react";
import Link from "next/link";
import { Status, Icon } from "@/component";
import { PoolItemWrapper, CoinImageWrapper } from "./style";

const formatBalance = (value: any) => {
  return Number(value).toFixed(2);
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
  "https://crypto-call.s3.ap-southeast-1.amazonaws.com/coin-icon/pancakeswap-token.png";
const quoteIcon =
  "https://crypto-call.s3.ap-southeast-1.amazonaws.com/coin-icon/binancecoin.png";

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
              content={`$ ${formatBalance(imploss)}`}
              isSuccess={Number(imploss) >= 0}
            />
          </div>
        </div>

        <div className="item">
          <div className="label">PNL</div>
          <div className="value">
            <Status
              content={`$ ${formatBalance(pnl)}`}
              isSuccess={Number(pnl) >= 0}
            />
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="reward">
          <div className="label">Rewards:</div>

          <div className="value-wrapper">
            <div className="value">
              {reward}
              <div className="ticker">{token0?.token?.symbol}</div>
            </div>
            <div className="sub-value">
              <span>($ {rewardUSD})</span>
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
              ($ {formatBalance(token0?.depositFiatAmount)})
            </div>

            <div className="value">
              {formatBalance(token1?.depositAmount)}
              <div className="ticker">{token1?.token?.symbol}</div>
            </div>
            <div className="sub-value">
              ($ {formatBalance(token1?.depositFiatAmount)})
            </div>
          </div>

          <div className="item">
            <div className="label">Realtime value</div>

            <div className="value">
              {formatBalance(token0?.currentBalance)}
              <div className="ticker">{token0?.token?.symbol}</div>
            </div>

            <div className="sub-value">
              (${formatBalance(token0?.currentFiatBalance)})
            </div>

            <div className="value">
              {formatBalance(token1?.currentBalance)}
              <div className="ticker">{token1?.token?.symbol}</div>
            </div>

            <div className="sub-value">
              ($ {formatBalance(token1?.currentFiatBalance)})
            </div>
          </div>

          <div className="item">
            <div className="label">Liquidity Pool Gain</div>

            <div className="value">
              {formatBalance(token0?.gainAmount)}
              <div className="ticker">{token0?.token?.symbol}</div>
            </div>
            <div className="sub-value">
              $ {formatBalance(token0?.gainFiatAmount)}
            </div>

            <div className="value">
              {formatBalance(token1?.gainAmount)}
              <div className="ticker">{token1?.token?.symbol}</div>
            </div>
            <div className="sub-value">
              ${formatBalance(token1?.gainFiatAmount)}
            </div>
          </div>
        </div>
      ) : null}
    </PoolItemWrapper>
  );
};

export default PoolItem;
