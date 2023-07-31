import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Market() {
  const [data, setData] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [apiLoad, setApiLoad] = useState<boolean>(true);

  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=${currentPage}&sparkline=false
  `;

  function numberWithCommas(x: any) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const json = await response.json();
      setData(json);
    };
    fetchData();
  }, [url]);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const paginationButtons = [];
  for (let i = 1; i <= 5; i++) {
    paginationButtons.push(
      <button
        key={i}
        onClick={() => setCurrentPage(i)}
        className={`font-roboto text-lg ${i === currentPage ? "activePage rounded bg-primary text-white px-4 py-2" : ""}`}
      >
        {i}
      </button>
    );
  }

  return(
    <>
      <div className="container mx-auto mt-[100px] mb-10 px-4">
        <section className="market-overview">
          <h1 className="text-3xl pt-8 font-bold">Market Overview</h1>
          <p className="font-roboto text-secondary text-sm mt-1">
            All price information is in USD
          </p>
        </section>
        <section className="coinlist mt-10">
          <div>
            <div className="coin-list__header grid grid-cols-[200px_100px_100px_150px] md:grid-cols-4 gap-8 p-4 font-roboto border-b border-[#ececec] w-fit md:w-full">
              <p>Name</p>
              <p>Price</p>
              <p>24h Change</p>
              <p>Market Cap</p>
            </div>
            <div
              onLoad={() => setApiLoad(false)}
              className="coin-list__row flex flex-col"
            >
              {apiLoad && <span className="loader"></span>}
              {data.map((item, index) => (
                <Link
                  onClick={scrollTop}
                  to={`/coin/${item.id}`}
                  className={`coin-row grid grid-cols-[200px_100px_100px_150px] md:grid-cols-4 gap-8 p-4 font-roboto items-center w-fit md:w-full ${ index % 2 === 1 ? "bg-[#ececec]" : ""}`}
                  key={item.id}
                >
                  <span className="flex gap-8 items-center">
                    <img className="w-12 h-12" src={item.image} alt={item.name} /> {item.name}
                  </span>
                  <p>{"$ " + item.current_price.toFixed(2)}</p>
                  <p
                    className={
                      "coin__price " +
                      (item.price_change_percentage_24h >= 0
                        ? "text-[#52a383]"
                        : "text-[#db423a]")
                    }
                  >
                    {item.price_change_percentage_24h?.toFixed(2) + " %"}
                  </p>
                  <p>{"$ " + numberWithCommas(item.market_cap)}</p>
                </Link>
              ))}
              <div className="pagination flex items-center justify-center gap-6 mt-5">
                {paginationButtons}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Market;