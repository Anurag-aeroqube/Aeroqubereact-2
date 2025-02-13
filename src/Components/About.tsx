
import team2 from '../assets/team2.jpg'
import team1 from '../assets/team1.jpg'


function About()
{
    return(
        <section id="about" className="py-10 ">
    <div className=" mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl  text-gray-900 mb-8">About</h2>
       <hr className="mb-6 opacity-7"/> 
      {/* <!-- <div className="w-full h-px bg-gray-300 mx-auto mb-6"></div> --> */}

      <p className="text-lg text-gray-600 mb-8 ">
        We are a team of passionate architects dedicated to creating sustainable and innovative spaces. Our approach combines modern aesthetics with functional design, ensuring each project tells its unique story 
        while meeting the practical needs of our clients.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        <div className="space-y-4">
          <img src={team2} alt="Team member" className="w-full h-64 object-cover " />
          <h3 className="text-xl font-semibold">John Doe</h3>
          <p className="text-gray-600">Principal Architect</p>
          <p className="w-full text-center border  px-4 py-2 bg-black/10 ">Contact</p>
        </div>
        <div className="space-y-4">
          <img src={team1} alt="Team member" className="w-full h-64 object-cover " />
          <h3 className="text-xl font-semibold">Jane Smith</h3>
          <p className="text-gray-600">Design Director</p>
          <p className="w-full text-center border  px-4 py-2 bg-black/10 ">Contact</p>
        </div>
        <div className="space-y-4">
          <img src={team1} alt="Team member" className="w-full h-64 object-cover" />
          <h3 className="text-xl font-semibold">Mike Johnson</h3>
          <p className="text-gray-600">Project Manager</p>
          <p className="w-full text-center border  px-4 py-2 bg-black/10 ">Contact</p>
        </div>
        <div className="space-y-4">
          <img src={team2} alt="Team member" className="w-full h-64 object-cover" />
          <h3 className="text-xl font-semibold">Sarah Wilson</h3>
          <p className="text-gray-600">Interior Designer</p>
          <p className="w-full text-center border  px-4 py-2 bg-black/10 ">Contact</p>
        </div>
      </div>
    </div>
  </section>
    );
};
export default About;
