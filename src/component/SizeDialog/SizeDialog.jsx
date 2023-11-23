 
const SizeDialog = () => {
    return (
        <div
  data-dialog-backdrop="web-3-dialog"
  data-dialog-backdrop-close="true"
  className="pointer-events-none fixed inset-0 z-[999] grid h-screen w-screen place-items-center bg-black bg-opacity-60 opacity-0 backdrop-blur-sm transition-opacity duration-300"
>
  <div
    className="relative bg-white m-4 rounded-lg shadow-2xl text-blue-gray-500 antialiased font-sans text-base font-light leading-relaxed w-1/4 min-w-[25%] max-w-[25%]"
    data-dialog="web-3-dialog"
  >
    <div
      className="flex items-center shrink-0 p-4 text-blue-gray-900 antialiased font-sans text-2xl font-semibold leading-snug justify-between"
    >
      <h5
        className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900"
      >
        Connect a Wallet
      </h5>
      <button
        className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-8 max-w-[32px] h-8 max-h-[32px] rounded-lg text-xs text-blue-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30"
        type="button"
        data-ripple-dark="true"
        data-dialog-close="true"
      >
        <span
          className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            aria-hidden="true"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </span>
      </button>
    </div>
    <div
      className="relative p-4 text-blue-gray-500 antialiased font-sans text-base font-light leading-relaxed overflow-y-scroll pr-2"
    >
      <div className="mb-6">
        <p
          className="block antialiased font-sans text-sm leading-normal text-gray-700 font-semibold opacity-70"
        >
          Popular
        </p>
        <ul className="mt-1 -ml-2 flex flex-col gap-1">
          <button
            role="menuitem"
            className="w-full pt-[9px] pb-2 px-3 rounded-md text-start leading-tight cursor-pointer select-none transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 focus:bg-blue-gray-50 focus:bg-opacity-80 active:bg-blue-gray-50 active:bg-opacity-80 hover:text-blue-gray-900 focus:text-blue-gray-900 active:text-blue-gray-900 outline-none flex items-center gap-3"
          >
            <img src="/icons/metamask.svg" alt="metamast" className="h-6 w-6" />
            <h6
              className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-blue-gray-900"
            >
              MetaMask
            </h6>
          </button>
          <button
            role="menuitem"
            className="w-full pt-[9px] pb-2 px-3 rounded-md text-start leading-tight cursor-pointer select-none transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 focus:bg-blue-gray-50 focus:bg-opacity-80 active:bg-blue-gray-50 active:bg-opacity-80 hover:text-blue-gray-900 focus:text-blue-gray-900 active:text-blue-gray-900 outline-none flex items-center gap-3"
          >
            <img
              src="/icons/coinbase.svg"
              alt="metamast"
              className="h-6 w-6 rounded-md"
            />
            <h6
              className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-blue-gray-900"
            >
              Coinbase Wallet
            </h6>
          </button>
          <button
            role="menuitem"
            className="w-full pt-[9px] pb-2 px-3 rounded-md text-start leading-tight cursor-pointer select-none transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 focus:bg-blue-gray-50 focus:bg-opacity-80 active:bg-blue-gray-50 active:bg-opacity-80 hover:text-blue-gray-900 focus:text-blue-gray-900 active:text-blue-gray-900 outline-none flex items-center gap-3"
          >
            <img
              src="/icons/connect-wallet.svg"
              alt="metamast"
              className="h-6 w-6 rounded-md"
            />
            <h6
              className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-blue-gray-900"
            >
              Connect Wallet
            </h6>
          </button>
        </ul>
      </div>
      <div>
        <p
          className="block antialiased font-sans text-sm leading-normal text-gray-700 font-semibold opacity-70"
        >
          More
        </p>
        <ul className="mt-1 -ml-2.5 flex flex-col gap-1">
          <button
            role="menuitem"
            className="w-full pt-[9px] pb-2 px-3 rounded-md text-start leading-tight cursor-pointer select-none transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 focus:bg-blue-gray-50 focus:bg-opacity-80 active:bg-blue-gray-50 active:bg-opacity-80 hover:text-blue-gray-900 focus:text-blue-gray-900 active:text-blue-gray-900 outline-none flex items-center gap-3"
          >
            <img
              src="/icons/trust-wallet.svg"
              alt="metamast"
              className="h-7 w-7 rounded-md border border-blue-gray-50"
            />
            <h6
              className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-blue-gray-900"
            >
              Trust Wallet
            </h6>
          </button>
          <button
            role="menuitem"
            className="w-full pt-[9px] pb-2 px-3 rounded-md text-start leading-tight cursor-pointer select-none transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 focus:bg-blue-gray-50 focus:bg-opacity-80 active:bg-blue-gray-50 active:bg-opacity-80 hover:text-blue-gray-900 focus:text-blue-gray-900 active:text-blue-gray-900 outline-none flex items-center gap-3"
          >
            <img
              src="/icons/argent-wallet.svg"
              alt="metamast"
              className="h-7 w-7 rounded-md border border-blue-gray-50"
            />
            <h6
              className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-blue-gray-900"
            >
              Coinbase Wallet
            </h6>
          </button>
        </ul>
      </div>
    </div>
    <div
      className="flex items-center shrink-0 flex-wrap p-4 text-blue-gray-500 justify-between gap-2 border-t border-blue-gray-50"
    >
      <p
        className="block antialiased font-sans text-sm leading-normal text-gray-700 font-normal"
      >
        New to Ethereum wallets?
      </p>
      <button
        className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 px-4 rounded-lg text-pink-500 hover:bg-pink-500/10 active:bg-pink-500/30"
        type="button"
        data-ripple-dark="true"
      >
        Learn More
      </button>
    </div>
  </div>
</div>
    );
};

export default SizeDialog;