export function NewsletterBanner() {
  return (
    <div className="news-letter-banner-wrapper flex h-[600px] items-center justify-center bg-news-letter-bg bg-cover p-6 md:p-0">
      <div className="block  w-100% max-w-[930px] grid-cols-2 items-center justify-center bg-white	px-4 pb-4 md:grid md:px-0">
        <div className="news-left-area m-[3.5rem_1rem_4rem_2rem]">
          <svg
            className="icon icon-newsletter icon-newsletter-arrow"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path
                d="M19 20V22L21 20H19ZM0.545974 3.37325L17.546 21.3732L20.454 18.6268L3.45403 0.626753L0.545974 3.37325ZM21 20V6.64516H17V20H21ZM19 18H5.70161V22H19V18Z"
                fill="black"
              ></path>
            </g>
            <g>
              <path d="M0 28H28" stroke="black" strokeWidth="2"></path>
            </g>
          </svg>
          <h3 className=" my-4 font-Druk text-4xl uppercase leading-8	tracking-[1.5px]	">
            Sign up for the WIRED Daily Newsletter
          </h3>

          <div>
            <p className="text-base leading-5 font-BreveText ">
              Our biggest stories, delivered to your inbox every day.
              <br />
              <a
                href="#/"
                className="font-BreveText text-base text-[#757575] underline"
              >
                See all newsletters.
              </a>
            </p>
          </div>
        </div>
        <div className="news-right-area	m-[3.5rem_1.9rem_4rem_1rem] self-center">
          <div>
            <form name="homepage_newsletter" className="2.5rem mt-10">
              <div className="block items-center md:grid md:grid-cols-[1fr_auto]">
                <label>
                  <span className="relative z-10 float-left mb-[-0.5rem]	 ml-[0.5rem] bg-white p-[0px_0.5rem] font-ProximaNova text-xs text-[#757575]">
                    Your Email
                  </span>

                  <div>
                    <input
                      type="email"
                      placeholder="E-mail Address"
                      className="m-0  h-12 w-100% border border-solid border-black p-2 font-ProximaNova text-base text-black outline-none placeholder:text-black	"
                    />
                  </div>
                </label>

                <button
                  type="submit"
                  className="relative mt-3 mb-[-0.5rem] block h-[48px] w-100% min-w-[100px] items-center justify-center bg-[#757575] md:mt-0 md:ml-3 md:flex md:w-auto"
                >
                  <span className="text-xs text-white uppercase font-WiredMono ">
                    submit
                  </span>
                </button>
              </div>

              <div className="mt-4">
                <span>
                  <p className="font-ProximaNova text-xs text-[#757575]">
                    By signing up you agree to our
                    <a href="#/" className="underline">
                      User Agreement
                    </a>
                    (including the
                    <a href="#/" className="underline">
                      class action waiver and arbitration provisions
                    </a>
                    ), our
                    <a href="#/" className="underline">
                      Privacy Policy &amp; Cookie Statement
                    </a>
                    and to receive marketing and account-related emails from
                    WIRED. You can unsubscribe at any time.
                  </p>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
