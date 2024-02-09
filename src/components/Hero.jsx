import  {banner}  from "./assets/images/index";


const Hero = () => {
  return (
<section className="bg-gray-800text-gray-100">
    <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          
            <img src={banner} alt="hero_img" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
        </div>
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-5xl font-bold leadi sm:text-6xl">Eius placeat 
                <span className="text-violet-400">ut incidunt!</span>erat pharetra
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12" />Lorem, ipsum dolor 
                <p className="hidden md:inline lg:hidden">sit amet consectetur adipisicing elit. 
                </p>
                <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                    <a href="#" className="px-8 py-3 text-lg font-semibold rounded bg-violet-400 text-gray-900">Contact Us</a>
                    <a href="#" className="px-8 py-3 text-lg font-semibold border rounded border-gray-100">Services</a>
                </div>
        </div>
    </div>
</section>
  )
}

export default Hero