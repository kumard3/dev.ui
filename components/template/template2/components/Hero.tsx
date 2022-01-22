export default function Hero() {
  return (
    <div className="container w-full mx-auto flex flex-wrap justify-between mt-[2rem]">
      <div className="flex flex-col items-start justify-center max-w-xl  px-[30px]">
        <h1 className="text-7xl font-bold  text-left">Let's get fusely together</h1>
        <p className="text-md my-5">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus
          expedita id dolorum molestias delectus odio, incidunt est reiciendis
          laboriosam non quam dolor nam, ipsum similique quod modi nulla optio
          iure!
        </p>
        <button className='p-3 bg-indigo-500 rounded-xl flex justify-center sm:justify-start my-4'> Get Started</button>
      </div>
 
      <div className="flex flex-col items-center  justify-center">
        <img src="/Hero image.svg" className="md:h-[30rem] sm:w-[27rem] p-10 md:p-0 "/>
      </div>
    </div>
  );
}
