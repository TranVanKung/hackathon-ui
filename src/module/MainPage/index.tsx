import { useState, useEffect } from "react";
import { Input } from "antd";
import { useRouter } from "next/router";
import { PoolItem } from "@/component";
import { seedData } from "@/config/constant";
import { MainPageWrapper } from "./style";

const MainPage = () => {
  const [address, setAddress] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const { wallet = "" } = router.query;

    if (Boolean(wallet)) {
      setAddress(wallet);
    }
  }, [router?.query]);

  const onInputChange = (event: any) => {
    const wallet = event?.target?.value;
    setAddress(wallet);
    router?.replace(`/?wallet=${wallet}`);
  };

  const renderListPool = () => {
    const data = seedData?.[address];

    if (data) {
      return data
        ?.filter((pool: any) => Boolean(pool?.amount) && Boolean(pool?.imploss))
        ?.map((pool: any, index: number) => (
          <PoolItem
            token0Symbol={pool?.poolInfo?.token0?.symbol}
            token0Name={pool?.poolInfo?.token0?.name}
            token1Symbol={pool?.poolInfo?.token1?.symbol}
            token1Name={pool?.poolInfo?.token1?.name}
            currentValue={pool?.amount}
            imploss={pool?.imploss}
            pnl={pool?.pnl}
            token0={pool?.token0}
            token1={pool?.token1}
            reward={pool?.reward}
            rewardUSD={pool?.rewardUSD}
            key={index}
          />
        ));
    } else {
      return (
        <span
          style={{
            fontSize: "3rem",
            fontWeight: 700,
            width: "100%",
            marginTop: "2rem",
            height: "60vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <span>There is no data</span>
        </span>
      );
    }
  };

  return (
    <MainPageWrapper>
      <div className="title">Kystal P&L Feature Demo</div>

      <div className="heading">
        <Input
          size="large"
          placeholder="Enter wallet address"
          onChange={onInputChange}
          value={address}
        />
      </div>
      <div className="list-pool">{renderListPool()}</div>
    </MainPageWrapper>
  );
};

export default MainPage;
