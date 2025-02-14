
import team2 from '../assets/team2.jpg'
import team1 from '../assets/team1.jpg'
import AboutCard from './AboutCard';


function About()
{
  const Abouts=[
    {image:team2,
      name:"John Doe",
      title:"Principal Architect",
      contact:"contact"
    },
    {image:team1,
      name:"Jone Smith",
      title:"Principal Architect",
      contact:"contact"
    },
    {image:team2,
      name:"Mike Johnson",
      title:"Design Director",
      contact:"contact"
    },
    {image:team1,
      name:"Sarah Wilson",
      title:"Project Manager",
      contact:"contact"
    },

  ]
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
        {Abouts.map((About,index)=>(
            <AboutCard key={index} image={About.image} name={About.name} title={About.title} contact={About.contact}></AboutCard>
          ))
        }
        
      </div>
    </div>
  </section>
    );
};
export default About;
