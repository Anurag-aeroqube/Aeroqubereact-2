

function Contact()
{
    return(
    
       <section id="contact" className="py-10">
       <div className=" mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl  text-gray-900 mb-8">Contact</h2>
      <hr className="mb-6 opacity-7"/>
      <p className="text-lg py-5">Lets get in touch and talk about your next project.</p>
      <form className="max-w-1xl mx-auto space-y-6">
        <div>
          <input type="text" placeholder="Name" id="name" name="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border" />
        </div>
        <div>
          <input type="email" placeholder="Email" name="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border" />
        </div>
        <div>
     
          <input type="text" placeholder="Subject" id="subject" name="subject" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border" />
        </div>
        <div>
          <input id="message" placeholder="Message" name="message"  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"></input>
        </div>
        <button type="submit" className="max-w-1xl bg-black text-white px-6 py-2  hover:bg-gray-800 transition-colors">Send Message</button>
      </form>
    </div>
  </section>
       

    );
};

export default Contact;