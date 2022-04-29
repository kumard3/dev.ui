export default function HeroSection7() {
  return (
    <div className="bg-[#EEF4FF] min-h-screen relative w-full text-black">
      <Nav />
      <Header />
    </div>
  )
}

const Nav = () => {
  const navData = [
    {
      name: 'Home',
      href: '#home',
    },
    {
      name: 'Work',
      href: '#work',
    },
    {
      name: 'About',
      href: '#about',
    },
    {
      name: 'Contact',
      href: '#contact',
    },
  ]
  return (
    <div className="absolute top-0 z-50  w-full py-3 text-xl font-bold drop-shadow-xl flex-none transition-colors duration-500  ">
      <div className="px-4 flex justify-around">
        <div>
          <h1 className="font-jostBold text-4xl text-[#3E3FD8] ">Agency</h1>
        </div>
        <div className="sm:flex justify-around hidden">
          {navData.map((n, index) => {
            return (
              <a href={n.href} key={index}>
                <h1 className="mx-4 font-jostRegular text-2xl  ">{n.name}</h1>
              </a>
            )
          })}
        </div>
        <div>
          <button
            type="button"
            className="bg-[#EEF4FF] rounded-xl w-[170px] h-[60px] text-[#3E3FD8] "
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  )
}

const Header = () => {
  return (
    <div className="flex pt-24 w-full  xl:pt-0 justify-around min-h-screen items-center flex-wrap overflow-hidden px-5">
      <div className="max-w-xl text-black ">
        <h1 className="font-jostBold text-[58px] leading-[50px] sm:text-7xl">
          Marketing is The Key of Business Sucess.
        </h1>
        <p className="font-jostRegular text-xl py-10 text-gray-600">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been{' '}
        </p>
        <div className="flex items-center flex-wrap ">
          <button className="bg-[#3E3FD8] mr-4 flex text-white font-jostMedium w-[170px] h-[60px] rounded-3xl text-xl items-center justify-center">
            Get Started{' '}
            <svg
              width="23"
              height="23"
              viewBox="0 0 23 23"
              fill="none"
              className="mx-1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="23" height="23" rx="5" fill="#EEF4FF" />
              <path
                d="M16.3536 12.3536C16.5488 12.1583 16.5488 11.8417 16.3536 11.6464L13.1716 8.46447C12.9763 8.2692 12.6597 8.2692 12.4645 8.46447C12.2692 8.65973 12.2692 8.97631 12.4645 9.17157L15.2929 12L12.4645 14.8284C12.2692 15.0237 12.2692 15.3403 12.4645 15.5355C12.6597 15.7308 12.9763 15.7308 13.1716 15.5355L16.3536 12.3536ZM7 12.5L16 12.5L16 11.5L7 11.5L7 12.5Z"
                fill="black"
              />
            </svg>
          </button>
          <button className="flex text-[#61646B] my-1 sm:my-0 items-center font-jostMedium text-xl">
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              className="mr-1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="24" cy="24" r="20" fill="#3E3FD8" />
              <circle cx="24" cy="24" r="20.95" stroke="#3E3FD8" strokeWidth="0.1" />
              <circle cx="24" cy="24" r="22.95" stroke="#3E3FD8" strokeWidth="0.1" />
              <circle cx="24" cy="24" r="21.95" stroke="#3E3FD8" strokeWidth="0.1" />
              <circle cx="24" cy="24" r="23.95" stroke="#3E3FD8" strokeWidth="0.1" />
              <path
                d="M31 22.2679C32.3333 23.0377 32.3333 24.9623 31 25.7321L22 30.9282C20.6667 31.698 19 30.7358 19 29.1962L19 18.8038C19 17.2642 20.6667 16.302 22 17.0718L31 22.2679Z"
                fill="#EEF4FF"
              />
            </svg>
            Watch Our Video
          </button>
        </div>
      </div>
      <div className="relative h-full">
        <img
          src="https://res.cloudinary.com/ddcg0rzlo/image/upload/v1651252781/Hero_mcnozf.png"
          loading="lazy"
          width="530"
          height="530"
          alt="Hero"
          about="Hero Image"
          className="relative z-10 top-12 -right-16"
        />
        <div className="absolute -top-10 h-full">
          <svg
            width="1100"
            height="808"
            viewBox="0 0 1100 808"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="216" width="884" height="808" rx="60" fill="#3E3FD8" fillOpacity="0.75" />
            <rect y="132" width="501" height="514" rx="60" fill="#EF8B8D" fillOpacity="0.75" />
          </svg>
        </div>
        <div className="bg-[#EEF4FF] hidden sm:block shadow-lg absolute bottom-40 -left-24 p-7 rounded-xl ">
          <h1 className="font-jostMedium text-xl text-[#2E323B]">Our Creative Team</h1>
          <img
            src="https://res.cloudinary.com/ddcg0rzlo/image/upload/v1651252778/group-image_obqbym.png"
            alt="Image"
          />
        </div>
      </div>
    </div>
  )
}
