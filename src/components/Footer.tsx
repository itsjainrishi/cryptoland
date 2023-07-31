function Footer() {
  return (
    <>
      <section className="py-10 bg-primary sm:pt-16 lg:pt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:col-span-3 lg:grid-cols-6 gap-y-16 gap-x-12">
            <div className="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8">
              <h5 className="font-bold text-xl xl:text-3xl text-[#fcfbfe]">
                CryptoLand
              </h5>

              <p className="font-roboto text-base leading-relaxed text-secondary mt-10">
                Providing you with the most seamless process you can imagine for trading crypto.
              </p>
            </div>
            <div className="lg:col-start-5">
              <p className="text-sm font-roboto font-semibold tracking-widest text-[#fcfbfe] uppercase">
                Company
              </p>

              <ul className="mt-6 space-y-4 font-roboto">
                <li>
                  <a href="#" className="flex text-base text-secondary">
                    About
                  </a>
                </li>

                <li>
                  <a href="#" className="flex text-base text-secondary">
                    Careers
                  </a>
                </li>

                <li>
                  <a href="#" className="flex text-base text-secondary">
                    Privacy
                  </a>
                </li>

                <li>
                  <a href="#" className="flex text-base text-secondary">
                    Terms
                  </a>
                </li>
              </ul>
            </div>

            <div className="lg:col-start-6">
              <p className="text-sm font-roboto font-semibold tracking-widest text-[#fcfbfe] uppercase">
                Help
              </p>

              <ul className="mt-6 space-y-4 font-roboto">
                <li>
                  <a href="#" className="flex text-base text-secondary">
                    Chat Support
                  </a>
                </li>

                <li>
                  <a href="#" className="flex text-base text-secondary">
                    Support Center
                  </a>
                </li>

                <li>
                  <a href="#" className="flex text-base text-secondary">
                    Trading Rules
                  </a>
                </li>
              </ul>
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