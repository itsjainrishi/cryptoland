import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTrendUp, faDatabase, faSuitcase } from "@fortawesome/free-solid-svg-icons";

function Home() {
  return (
    <>
      <div className="container mx-auto mt-[100px] mb-10 px-4 lg:px-0 lg:pl-4">
        <section className="hero relative flex justify-center lg:justify-between items-center lg:min-h-[730px]">
          <div className="hero-content text-center lg:text-left">
            <div className="hero-title">
              <h1 className="font-bold text-primary text-4xl lg:text-8xl leading-normal">
                Trade Crypto.
              </h1>
              <h1 className="font-bold text-primary text-4xl lg:text-8xl">
                Seamlessly.
              </h1>
            </div>
            <div className="hero-description mt-10">
              <p className="font-roboto lg:text-xl">
                Trade your favourite crypto with CryptoLand, a seamless exchange.
              </p>
            </div>
            <button className="font-roboto mt-10 px-4 py-3 rounded bg-primary text-white text-base">
              Get started
            </button>
          </div>
          <div className="absolute top-[-90px] right-0 w-5/12 hidden lg:block">
            <img alt="cryptoland" className="object-contain ml-auto" src="/ss-1.webp" />
          </div>
        </section>

        <section className="partners mt-[10%]">
          <div className="bg-[#fafafa] rounded-xl py-10">
            <div className="flex justify-evenly items-center">
              <img alt="Coingecko" className="w-20 h-12 lg:w-40 lg:h-24" src="coingecko.webp" />
              <img alt="Coingecko" className="w-20 h-12 lg:w-40 lg:h-24" src="coingecko.webp" />
              <img alt="Coingecko" className="hidden lg:block w-40 h-24" src="coingecko.webp" />
              <img alt="Coingecko" className="hidden lg:block w-40 h-24" src="coingecko.webp" />
            </div>
          </div>
        </section>

        <section className="choose-us mt-10 lg:mt-32 px-4 lg:px-0">
          <div className="font-bold text-center text-primary text-3xl lg:text-5xl">
            <h2>Seamless process.</h2>
            <h2>Flawless experience.</h2>
          </div>
          <div className="description text-center text-primary tex-base lg:text-xl">
            <p className="font-roboto text-secondary mt-10">
              Providing you with the most seamless process you can imagine<br /> for trading crypto.
            </p>
          </div>
          <div className="grid grid-cols-4 lg:grid-cols-12 gap-4 lg:gap-6 mt-10 lg:mt-20 px-10">
            <div className="col-span-4 pb-8 lg:pb-16 pt-4 px-4 text-center">
              <div className="flex items-center justify-center mx-auto bg-[#dbf4e9] rounded-full w-8 h-8 lg:w-12 lg:h-12 mb-4 lg:mb-8">
                <FontAwesomeIcon icon={faArrowTrendUp} className="w-4 h-4 lg:w-8 lg:h-8" style={{color: "#33b37a",}} />
              </div>
              <p className="font-roboto text-secondary text-base lg:text-lg">
                Built with the latest technology that
                gives you inituitive data updates, so that
                you dont miss out on your favourite crypto.
              </p>
            </div>
            <div className="col-span-4 pb-8 lg:pb-16 pt-4 px-4 text-center">
              <div className="flex items-center justify-center mx-auto bg-[#e1efff] rounded-full w-8 h-8 lg:w-12 lg:h-12 mb-4 lg:mb-8">
                <FontAwesomeIcon icon={faSuitcase} className="w-4 h-4 lg:w-8 lg:h-8" style={{color: "#1278ea",}} />
              </div>
              <p className="font-roboto text-secondary text-base lg:text-lg">
                All in one exchange, you can do anything
                related to crypto in our exchange. Buying
                tokens, trade, exchange, etc.
              </p>
            </div>
            <div className="col-span-4 pb-8 lg:pb-16 pt-4 px-4 text-center">
              <div className="flex items-center justify-center mx-auto bg-[#f2e8ff] rounded-full w-8 h-8 lg:w-12 lg:h-12 mb-4 lg:mb-8">
                <FontAwesomeIcon icon={faDatabase} className="w-4 h-4 lg:w-8 lg:h-8" style={{color: "#934eeb",}} />
              </div>
              <p className="font-roboto text-secondary lg:text-lg">
                We always priotise the seamless
                process and steps of our product as
                simple yet understandable as possible.
              </p>
            </div>
          </div>
        </section>

        <section className="testimonial mt-10 lg:mt-20 px-4 lg:px-0">
          <h2 className="font-bold text-center text-primary text-3xl lg:text-5xl mb-10">
            Testimonials
          </h2>
          <div className="grid grid-cols-4 xl:grid-cols-12 gap-4 lg:gap-6">
            <div className="col-span-4 xl:col-span-6">
              <div className="relative h-[400px]">
                <div className="absolute top-[50%] -translate-y-[50%] user-text w-2/3 p-12 z-20 lg:text-lg leading-6">
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
                <div className="absolute top-[50%] -translate-y-[50%] user-text w-2/3 p-12 z-20 lg:text-lg leading-6 right-0 lg:left-0">
                  <p className="font-roboto">
                    Trading with CryptoLand has been incredible! The process of the exchange is so much better than other exchanges
                  </p>
                  <br />
                  <p className="font-roboto">Ben Chiller</p>
                </div>
                <div className="user-img absolute left-0 lg:right-0 lg:left-auto top-0">
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
