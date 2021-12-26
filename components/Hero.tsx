export default function Hero() {
    return (
<section className="dark:bg-coolGray-800 dark:text-coolGray-100">
	<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
		<div className="flex flex-col text-white  justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
			<h1 className="text-5xl font-bold leading-none sm:text-6xl">Kickstart your next
				<span className="dark:text-indigo-400 mx-2">website</span>in minutes
			</h1>
			<p className="mt-6 mb-8 text-lg sm:mb-12">Dev UI is a free, open-source collection of UI components and templates based on Tailwind CSS.
				{/* <br className="hidden md:inline lg:hidden"/>turpis pulvinar, est scelerisque ligula sem */}
			</p>
			<div className="flex space-y-4 items-center justify-start ">
				<a href="#" className="px-8 py-3 text-lg font-semibold rounded bg-indigo-400  ">Components</a>
				{/* <a href="#" className="px-8 py-3 text-lg font-semibold border rounded dark:border-coolGray-100">Malesuada</a> */}
			</div>
		</div>
		<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
			<img src="/next.svg" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 dark:bg-coolGray-500"/>
		</div>
	</div>
</section>
    )
}
