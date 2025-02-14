import React from 'react'


interface AboutCardProps {
    image: string;
    name:string;
    title: string;
    contact:string;
    
  }

const AboutCard:React.FC<AboutCardProps> = ({image,name,title,contact}) => {
  
  return (
    <div className="space-y-4">
      <img src={image} alt="Team member" className="w-full h-64 object-cover " />
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="text-gray-600">{title}</p>
      <p className="w-full text-center border  px-4 py-2 bg-black/10 ">{contact}</p>
    </div>
  )
}


export default AboutCard




