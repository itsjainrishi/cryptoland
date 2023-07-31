import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DOMPurify from "dompurify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTrendDown, faArrowTrendUp } from "@fortawesome/free-solid-svg-icons";


function Coin() {
  const { coinId } = useParams();
  const [coin, setCoin] = useState<any>({});
  const [loadCoin, setLoadCoin] = useState(true);

  const url = `https://api.coingecko.com/api/v3/coins/${coinId}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Error!");
        }
        const json = await response.json();
        setCoin(json);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [url]);

  function numberWithCommas(x: number) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  // console.log(coin);

  const h24 = coin?.market_data ? coin?.market_data.price_change_24h : "";

  return (
    <>
      <div className="container mx-auto mt-[100px] mb-10">
        <section className="coin-page">
          <div onLoad={() => setLoadCoin(false)} className="coin-content">
            <div className="breadcrumb py-4">
              <span className="text-secondary text-lg">Cryptocurrencies / </span>
              <span className="text-secondary text-lg">Coins / </span>
              <span className="text-lg">{coin?.name}</span>
            </div>
            <div className="coin-content__oveview-side">
              {loadCoin && <span className="loader"></span>}
              {coin?.coingecko_rank
                ? 
                  <div className="flex mt-4 items-center">
                    <div className="flex justify-center items-center bg-primary text-xl text-[#fafafa] font-roboto rounded-full h-16 w-24 mr-8">
                      {coin?.coingecko_rank}
                    </div>
                    {coin?.image ? <img src={coin?.image?.small} alt={coin?.id} /> : null}
                    <h2 className="ml-8 text-5xl font-bold">{coin?.name}</h2>
                    <h3 className="ml-8 text-secondary text-5xl uppercase">{coin?.symbol}</h3>
                  </div> 
                : null
              }
            </div>
            <div className="coin-content__market-side mt-10">
              <div className="grid grid-cols-4 xl:grid-cols-12 gap-4 xl:gap-6">
                <div className="col-span-1 xl:col-span-4">
                  <div className="card p-8">
                    <div className="card-header flex font-roboto items-center justify-between xl:text-xl">
                      <h4 className="title">Market price</h4>
                      {coin?.market_data
                        ?
                          <div className={`price_change_24 rounded-xl text-[#fafafa] p-2 ${(h24 >= 0
                            ? "bg-[#52a383]"
                            : "bg-[#db423a]")
                          }`}>
                            {h24 >= 0
                              ?
                              <FontAwesomeIcon icon={faArrowTrendUp} size="xl" style={{color: "#ffffff",}} />
                              :
                              <FontAwesomeIcon icon={faArrowTrendDown} size="xl" style={{color: "#ffffff",}} />
                            }
                            <span className="ml-2 xl:ml-4">
                              {coin.market_data.price_change_percentage_24h.toFixed(2) + "%"}
                            </span>
                          </div>
                        : ""
                      }
                    </div>
                    <div className="card-content mt-8">
                      <p className="text-primary text-3xl font-bold font-roboto">
                        ${coin?.market_data?.current_price?.usd?.toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-span-1 xl:col-span-4">
                  <div className="card p-8">
                    <div className="card-header flex font-roboto items-center justify-between xl:text-xl">
                      <h4 className="title">Market cap</h4>
                      {coin?.market_data
                        ?
                          <div className={`price_change_24 rounded-xl text-[#fafafa] p-2 ${(coin?.market_data?.market_cap_change_percentage_24h >= 0
                            ? "bg-[#52a383]"
                            : "bg-[#db423a]")
                          }`}>
                            {coin?.market_data?.market_cap_change_percentage_24h >= 0
                              ?
                              <FontAwesomeIcon icon={faArrowTrendUp} size="xl" style={{color: "#ffffff",}} />
                              :
                              <FontAwesomeIcon icon={faArrowTrendDown} size="xl" style={{color: "#ffffff",}} />
                            }
                            <span className="ml-2 xl:ml-4">
                              {coin?.market_data?.market_cap_change_percentage_24h.toFixed(2) + "%"}
                            </span>
                          </div>
                        : ""
                      }
                    </div>
                    <div className="card-content mt-8">
                      <p className="text-primary text-3xl font-bold font-roboto">
                        ${coin?.market_data?.market_cap?.usd?.toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-span-1 xl:col-span-4">
                  <div className="card p-8">
                    <div className="card-header flex font-roboto items-center justify-between xl:text-xl">
                      <h4 className="title">Fully Diluted Valuation</h4>
                      {coin?.market_data
                        ?
                          <div className={`invisible price_change_24 rounded-xl text-[#fafafa] p-2 ${(coin?.market_data?.market_cap_change_percentage_24h >= 0
                            ? "bg-[#52a383]"
                            : "bg-[#db423a]")
                          }`}>
                            {coin?.market_data?.market_cap_change_percentage_24h >= 0
                              ?
                              <FontAwesomeIcon icon={faArrowTrendUp} size="xl" style={{color: "#ffffff",}} />
                              :
                              <FontAwesomeIcon icon={faArrowTrendDown} size="xl" style={{color: "#ffffff",}} />
                            }
                            <span className="ml-2 xl:ml-4">
                              {coin?.market_data?.market_cap_change_percentage_24h.toFixed(2) + "%"}
                            </span>
                          </div>
                        : ""
                      }
                    </div>
                    <div className="card-content mt-8">
                      <p className="text-primary text-3xl font-bold font-roboto">
                        ${coin?.market_data?.fully_diluted_valuation?.usd?.toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="coin-description mt-10">
              <div className="grid grid-cols-4 xl:grid-cols-12 gap-4 xl:gap-6">
                <div className="col-span-1 xl:col-span-8">
                  <p className="font-roboto text-xl tracking-wider leading-8"
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(
                        coin.description ? coin.description.en : ""
                      ),
                    }}
                  ></p>
                </div>
                <div className="col-span-1 xl:col-span-4">
                  <div className="card p-8">
                    <div className="card-header flex font-roboto items-center justify-between xl:text-xl">
                      <h4 className="title">{coin?.name} stats</h4>
                    </div>
                    <div className="card-content mt-8">
                      <div className="flex justify-between py-4 text-lg font-roboto border-b border-secondary">
                        <span>{coin?.name} Price</span>
                        <span>${coin?.market_data?.current_price?.usd?.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between py-4 text-lg font-roboto border-b border-secondary">
                        <span>Price Change 24h</span>
                        <span className={`${(h24 >= 0 ? "text-[#52a383]" : "text-[#db423a]")}`}>
                          ${coin?.market_data?.price_change_24h_in_currency?.usd?.toFixed(2)}
                        </span>
                      </div>
                      <div className="flex justify-between py-4 text-lg font-roboto border-b border-secondary">
                        <span>24h Low / 24h High Price</span>
                        <span className="text-right">
                          ${coin?.market_data?.low_24h?.usd?.toFixed(2)} / ${coin?.market_data?.high_24h?.usd?.toFixed(2)}
                        </span>
                      </div>
                      <div className="flex justify-between py-4 text-lg font-roboto border-b border-secondary">
                        <span>All Time High</span>
                        <span>${coin?.market_data?.ath?.usd?.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between py-4 text-lg font-roboto border-b border-secondary">
                        <span>All Time Low</span>
                        <span>${coin?.market_data?.atl?.usd?.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Coin;