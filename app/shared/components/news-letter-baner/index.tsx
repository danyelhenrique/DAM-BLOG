export function NewsletterBanner() {
  return (
    <div className="news-letter-banner-wrapper flex h-[600px] items-center justify-center bg-news-letter-bg bg-cover">
      <div className="grid w-100% max-w-[930px] grid-cols-2	bg-white">
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
          <h3 className="my-4 text-4xl">
            Sign up for the WIRED Daily Newsletter
          </h3>

          <div>
            <p>
              Our biggest stories, delivered to your inbox every day.
              <br />
              <a href="#/">See all newsletters.</a>
            </p>
          </div>
        </div>
        <div className="news-right-area m-[3.5rem_1rem_4rem_2rem]">
          <div>
            <form name="homepage_newsletter">
              <div className="grid grid-cols-[1fr_auto] items-center">
                <label>
                  <span className="relative z-10 float-left mb-[-0.5rem] ml-[0.5rem] bg-white p-[0px_0.5rem]">
                    Your Email
                  </span>

                  <div>
                    <input
                      type="email"
                      placeholder="E-mail Address"
                      className="m-0 h-12 w-100% border border-solid border-black p-2 text-black outline-none "
                    />
                  </div>
                </label>

                <button
                  type="submit"
                  className="relative ml-3 mb-[-1rem] flex h-[48px] min-w-[100px] items-center justify-center bg-[#757575]"
                >
                  <span>submit</span>
                </button>
              </div>

              <div>
                <span>
                  <p className="text-xs ">
                    By signing up you agree to our
                    <a href="#/">User Agreement</a>(including the
                    <a href="#/">
                      class action waiver and arbitration provisions
                    </a>
                    ), our
                    <a href="#/">Privacy Policy &amp; Cookie Statement</a>
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
