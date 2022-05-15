export function HomeContainer() {
  return (
    <section className="mx-auto grid h-96 max-w-section-max grid-cols-[repeat(12,_1fr)] gap-10 px-section-padding pt-10">
      <div className="grid grid-cols-9 col-start-1 col-end-10 left-area max-w-home-left-max grid-rows-home-first-section-left gap-home-left-area-gap">
        <div className="hero collapse-hero col-start-4 col-end-[-1] h-96 bg-black pr-2"></div>
        <div className="col-span-3 col-start-1 col-end-4 row-start-1 bg-black summaray-list h-96"></div>
      </div>
      <div className="right-area summaray-list col-start-10 col-end-[-1] row-start-1 h-96 bg-black"></div>
    </section>
  );
}
