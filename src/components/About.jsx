import {aboutUS} from "./assets/images/index"
import {stats} from "./constants/index"

export const About = () => {


  return (
    <div>
        {/* About text */}
            <div className=" px-4 lg:px-14 max-w-screen-2xl mx:auto my-8">
                <div className=" md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center">
                    <div>
                        <img src={aboutUS} alt="aboutUS"  className=" w-2/4 sm:w-2/4 md:w-4/5"/>
                    </div>
                    <div>
                        <h2 className=" text-4xl text-neutralDgrey font-semibold mb-4 md:w-4/5 ">The unseen of spending three years at Pixelgrade</h2>
                        <p className=" md:w-3/4 text-sm text-neutralGrey mb-8 ">When joining the JustGo Community, your success becomes our success. In other words, our Customer Success team will be on hand from day one to ensure we understand your requirements, share your goals and work with you for a smooth adoption of our software.</p>
                        <button className="btn-about">Learn More</button>
                    </div>
                </div>
            </div>

            {/* company stats */}

            <div className=" px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16">
                <div className=" flex  items-center justify-center">
                    <div className=" md:w-1/2">
                    <h2 className=" text-4xl text-neutralDgrey font-semibold mb-4 md:w-2/3 ">Helping a <span className=" text-brandPrimary">local business reinvent itself</span></h2>
                        <p className=" md:w-3/4 text-sm text-neutralGrey mb-8 ">We reached here with our hard work and dedication</p>
                    </div>

                {/* Stats */}
                    <div className=" md:w-1/2 mx-auto flex sm:flex-row flex-col sm:items-center justify-around gap-12 ">
                        {
                            stats.map(stat=> <div key={stat.id}>
                                <div className=" flex items-center gap-4 text-2xl">
                                    <img src={stat.image} alt="stat.img" width={300} />
                                    <div>
                                        <h4 className=" text-3xl text-neutralDgrey font-semibold ">{stat.numbers}</h4>
                                        <p>{stat.title}</p>
                                    </div>
                                </div>
                            </div>)
                        }
                    </div>
                    
                </div>
            </div>

    </div>
  )
}
