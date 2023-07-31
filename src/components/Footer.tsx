function Footer() {
  return (
    <>
      <section className="py-10 bg-primary sm:pt-16 lg:pt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-y-16 gap-x-12">
            <div className="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8">
              <h5 className="font-bold text-xl xl:text-3xl text-[#fcfbfe]">
                CryptoLand
              </h5>

              <p className="font-roboto text-base leading-relaxed text-secondary mt-10">
                Providing you with the most seamless process you can imagine for trading crypto.
              </p>
            </div>
            
            <div className="md:col-span-1 lg:col-start-5 lg:col-span-2">
              <div className="socials flex justify-end">
                <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                  <img className="h-6 mr-6" src="/instagram.svg" alt="Instagram" />
                </a>
                <a href="https://www.discord.com" target="_blank" rel="noreferrer">
                  <img className="h-6 mr-6" src="/discord.svg" alt="Discord" />
                </a>
                <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                  <img className="h-6 mr-6" src="/facebook.svg" alt="Facebook" />
                </a>
                <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
                  <img className="h-6 mr-6" src="/youtube.svg" alt="Youtube" />
                </a>
              </div>
            </div>

          </div>
          <hr className="mt-16 mb-10 border-secondary" />
          <p className="text-sm text-center text-secondary font-roboto">
            © Copyright 2023, All Rights Reserved by CryptoLand
          </p>
        </div>
      </section>
    </>
  )
}

export default Footer;