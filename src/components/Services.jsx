import { logo, plogo } from "./assets/images/index";
import { services } from "./constants";


const Services = () => {     
  return (
    <div className=" md:px-14 px-4 py-16 max-w-screen-2xl mx-auto">
        <div className=" text-center my-8">
          <h2 className=" text-4xl text-neutralDgrey font-semibold mb-2">Our Client</h2>
          <p className=" text-neutralGrey">we have been working with some 50+Client</p>
          {/* Company logos */}
            <div className=" my-12 flex flex-wrap justify-evenly items-center gap-8">
              <img src={logo} alt="logo" />
              <img src={logo} alt="logo" />
              <img src={logo} alt="logo" />
              <img src={logo} alt="logo" />
              <img src={logo} alt="logo" />
              <img src={logo} alt="logo" />
            </div>
        </div>

            {/* Service Card */}
            <div className="mt-20 md:w-1/2 mx-auto text-center">
              <h2 className=" text-4xl text-neutralDgrey font-semibold mb-3">Manage your entire Community in single system</h2>
              <p className=" text-neutralGrey">we have been working with some 50+Client</p>
            </div>
            
            {/* card */}
            <div className="mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12 ">
              {
                services.map(service => <div key={service.id} className=" px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300 flex items-center justify-center h-full">   
                              <div>
                                <div className=" bg-[#e8f5e9] h-14 mb-4 w-14 mx-auto rounded-tl-3xl rounded-br-3xl flex justify-center"><img src={service.image} alt="logo"  className=" ml-5 "/></div>
                                <h4 className=" text-2xl font-bold text-neutralDgrey mb-2 px-2">{service.title}</h4>
                                <p className=" text-sm  text-neutralGrey">{service.description}</p>
                              </div>
                </div>)
              }
            </div>

    </div>
  )
}

export default Services