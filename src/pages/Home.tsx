import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTrendUp, faDatabase, faSuitcase } from "@fortawesome/free-solid-svg-icons";

function Home() {
  return (
    <>
      <div className="container mx-auto mt-[100px] mb-10">
        <section className="hero relative flex items-center min-h-[730px]">
          <div className="hero-content">
            <div className="hero-title">
              <h1 className="font-bold text-primary text-8xl leading-normal">
                Trade Crypto.
              </h1>
              <h1 className="font-bold text-primary text-8xl">
                Seamlessly.
              </h1>
            </div>
            <div className="hero-description mt-10">
              <p className="font-roboto xl:text-xl">
                Trade your favourite crypto with CryptoLand, a seamless exchange.
              </p>
            </div>
            <button className="font-roboto mt-10 px-4 py-3 rounded bg-primary text-white text-base">
              Get started
            </button>
          </div>
          <div className="absolute top-[-90px] right-0 w-5/12">
            <img alt="cryptoland" className="object-contain ml-auto" src="/ss-1.webp" />
          </div>
        </section>

        <section className="partners mt-[10%]">
          <div className="bg-[#fafafa] rounded-xl py-10">
            <div className="flex justify-evenly items-center">
              <img alt="Coingecko" className="w-40 h-24" src="coingecko.webp" />
              <img alt="Coingecko" className="w-40 h-24" src="coingecko.webp" />
              <img alt="Coingecko" className="w-40 h-24" src="coingecko.webp" />
              <img alt="Coingecko" className="w-40 h-24" src="coingecko.webp" />
            </div>
          </div>
        </section>

        <section className="choose-us mt-32">
          <div className="font-bold text-center text-primary text-5xl">
            <h2>Seamless process.</h2>
            <h2>Flawless experience.</h2>
          </div>
          <div className="description text-center text-primary text-xl">
            <p className="font-roboto text-secondary mt-10">
              Providing you with the most seamless process you can imagine<br /> for trading crypto.
            </p>
          </div>
          <div className="grid grid-cols-4 xl:grid-cols-12 gap-4 lg:gap-6 mt-20 px-10">
            <div className="col-span-4 pb-20 pt-4 px-4 text-center">
              <div className="flex items-center justify-center mx-auto bg-[#dbf4e9] rounded-full w-12 h-12 mb-8">
                <FontAwesomeIcon icon={faArrowTrendUp} size="xl" style={{color: "#33b37a",}} />
              </div>
              <p className="font-roboto text-secondary text-lg">
                Built with the latest technology that<br />
                gives you inituitive data updates, so that<br />
                you dont miss out on your favourite crypto.
              </p>
            </div>
            <div className="col-span-4 pb-20 pt-4 px-4 text-center">
              <div className="flex items-center justify-center mx-auto bg-[#e1efff] rounded-full w-12 h-12 mb-8">
                <FontAwesomeIcon icon={faSuitcase} size="xl" style={{color: "#1278ea",}} />
              </div>
              <p className="font-roboto text-secondary text-lg">
                All in one exchange, you can do anything<br />
                related to crypto in our exchange. Buying<br />
                tokens, trade, exchange, etc.
              </p>
            </div>
            <div className="col-span-4 pb-20 pt-4 px-4 text-center">
              <div className="flex items-center justify-center mx-auto bg-[#f2e8ff] rounded-full w-12 h-12 mb-8">
                <FontAwesomeIcon icon={faDatabase} size="xl" style={{color: "#934eeb",}} />
              </div>
              <p className="font-roboto text-secondary text-lg">
                We always priotise the seamless<br />
                process and steps of our product as<br />
                simple yet understandable as possible.
              </p>
            </div>
          </div>
        </section>

        <section className="testimonial mt-20">
          <h2 className="font-bold text-center text-primary text-5xl mb-10">
            Testimonials
          </h2>
          <div className="grid grid-cols-4 xl:grid-cols-12 gap-4 lg:gap-6">
            <div className="col-span-4 xl:col-span-6">
              <div className="relative h-[400px]">
                <div className="absolute top-[50%] -translate-y-[50%] user-text w-2/3 p-12 z-20 text-lg leading-6">
                  <p className="font-roboto">
                    Trading with CryptoLand has been incredible! The process of the exchange is so much better than other exchanges
                  </p>
                  <br />
                  <p className="font-roboto">Jayn Kent</p>
                </div>
                <div className="user-img absolute right-0 top-0">
                  <img
                    className="h-[400px] w-[300px] rounded-[10px] object-cover"
                    src="/users/user-1.webp"
                    alt="avatar"
                  />
                </div>
              </div>
            </div>
            <div className="col-span-4 xl:col-span-6">
              <div className="relative h-[400px]">
                <div className="absolute top-[50%] -translate-y-[50%] user-text w-2/3 p-12 z-20 text-lg leading-6">
                  <p className="font-roboto">
                    Trading with CryptoLand has been incredible! The process of the exchange is so much better than other exchanges
                  </p>
                  <br />
                  <p className="font-roboto">Ben Chiller</p>
                </div>
                <div className="user-img absolute right-0 top-0">
                  <img
                    className="h-[400px] w-[300px] rounded-[10px] object-cover"
                    src="/users/user-2.webp"
                    alt="avatar"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Home;
