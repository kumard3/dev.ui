/* eslint-disable @next/next/no-img-element */
export const metadata = {
  title: 'Templates',
}

export default  function page() {

  return (
    <div className="container flex items-center justify-center p-6 mx-auto mt-8 lg:my-16 h-80 sm:h-96 md:h-112 xl:h-128">
      <img
        alt="pc_guy"
        className="object-contain h-80 sm:h-96 md:h-112 xl:h-128"
        src="/pc_guy.png"
        loading="lazy"
      />
    </div>
  );
}
