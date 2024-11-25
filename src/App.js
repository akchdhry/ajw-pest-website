import React, { useState } from 'react';
import { Phone, Mail, Clock, MapPin, CheckCircle, Square, SquareCheckBig } from 'lucide-react';
import logo from './images/ajwlogo.png'
import ant from './images/carpenter-ant.png'
import termite from './images/termite.jpg'
import wasp from './images/wasp.jpg'
import mouse from './images/mouse.jpg'
import Slider from './Slider';


const PestControlWebsite = () => {

  const Box = () => {
    const [isToggled, setIsToggled] = useState(false);

    const handleClick = () => {setIsToggled(!isToggled)}

    return (
    <button onClick={handleClick}> {
      isToggled ? 
      <SquareCheckBig className="w-6 h-6 text-pest-red flex-shrink-0"/> : 
      <Square className="w-6 h-6 text-pest-red flex-shrink-0"/> 
      }
    </button>
    );
  }
  

  const recs = [
    {id: 1, rec: 'Install screening under porches'},
    {id: 2, rec: 'Attach or re-attach down spouts'},
    {id: 3, rec: 'Clean gutters'},
    {id: 4, rec: 'Trim trees overhanging the house'},
    {id: 5, rec: 'Fill cement cracks in the foundation'},
    {id: 6, rec: 'Clean and inspect dryer vent(s)'},
    {id: 7, rec: 'Trim bushes away from the house'},
    {id: 8, rec: 'Lower or remove soil touching wood around the house'},
    {id: 9, rec: 'Direct down spouts to run water away from the house'},
    {id: 10, rec: 'Clean cellar window wells'},
    {id: 11, rec: 'Fill spaces at the tops of steps'},
    {id: 12, rec: 'Repair wood rot (use composite material whenever possible)'},
    {id: 13, rec: 'Remove fire wood away from the house'},
    {id: 14, rec: 'Repair chimney outside'},
    {id: 15, rec: 'Fill in spaces between the house and chimney'},
    {id: 16, rec: 'Clean debris from under porches, decks or crawl spaces'},
    {id: 17, rec: 'Remove vines from the house and/or garage'},
    {id: 18, rec: 'Fix leaky water faucets'},
  ]

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Header */}
      <header className="bg-pest-navy text-pest-logo-grey py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
              <h1 className="text-2xl font-bold">A.J. Williamson Termite and Pest Control</h1>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#services" className="hover:text-blue-300">Services</a>
            <a href="#about" className="hover:text-blue-300">About</a>
            <a href="#recommendations" className="hover:text-blue-300">Recommendations</a>
            <a href="#contact" className="hover:text-blue-300">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-pest-navy-light text-white py-10">
        <div className="container mx-auto px-4 text-center">
          <div className='flex justify-center mb-6'>
            <img src={logo} alt='A.J. Williamson Termite and Pest Control' className='w-72'></img>
          </div>
          <h2 className="text-4xl font-bold mb-6">We can help identify your pests!</h2>
          <p className="text-xl mb-8">We are a family-owned and family-operated business serving the Sudbury, MA area since 1971</p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className=" bg-gray-200 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Specialties</h2>
          <div className="grid md:grid-cols-4 gap-8">

            <div className="bg-white p-6 rounded-lg shadow-md justify-center text-center">
              <div className='flex justify-center'>
                <img src={ant} alt='Carpenter Ants' className='w-40 rounded-xl mb-5'></img>
              </div>
              <h3 className="text-xl font-semibold mb-2">Carpenter Ants</h3>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md justify-center text-center">
              <div className='flex justify-center'>
                <img src={termite} alt='Termites' className='w-40 rounded-xl mb-5'></img>
              </div>
              <h3 className="text-xl font-semibold mb-2">Termites</h3>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md justify-center text-center">
              <div className='flex justify-center'>
                <img src={wasp} alt='Wasps' className='w-40 rounded-xl mb-5'></img>
              </div>
              <h3 className="text-xl font-semibold mb-2">Wasps</h3>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md justify-center text-center">
              <div className='flex justify-center'>
                <img src={mouse} alt='Mice' className='w-40 rounded-xl mb-5'></img>
              </div>
              <h3 className="text-xl font-semibold mb-2">Mice</h3>
            </div>

          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
          
          <div className="grid md:grid-cols-2 gap-8">


            <div className="space-y-8">

              <div className="flex items-start space-x-3">
                <CheckCircle className="w-7 h-7 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold">Residential and Commercial Pest Control</h3>
                  <p className="text-gray-600"><strong>For over 50 years</strong>, The A.J. Williamson Pest Control company has been serving the residential & commercial area of Metrowest, MA with <strong>exceptional results</strong>.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle className="w-7 h-7 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold">Special Offer</h3>
                  <p className="text-gray-600">We offer Termite & Pest Inspections for <strong>$150.00</strong>, including a one year warranty.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle className="w-7 h-7 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold">Free Estimates</h3>
                  <p className="text-gray-600">Contact us at <strong>(978) 443-8245</strong> for a free estimate!<br></br>
                  </p>
                </div>
              </div>
            </div>


            <div className="space-y-4">
              <Slider></Slider>
              <a
              href="https://www.angi.com/companylist/us/ma/sudbury/aj-williamson-termite-and-pest-reviews-73439.htm" target='_blank'
              className="flex justify-center mx-40 bg-angie-orange text-white py-3 px-5 rounded-lg font-semibold hover:bg-angie-hover"> 
              See more reviews on Angi!
              </a>
            </div>
          </div>
        </div>
      </section>


      {/* Recommendation Section*/}
      <section id="recommendations" className="py-16">
        <div className="container mx-auto px-4">
          <div className='text-center'>
            <h2 className="text-4xl font-bold mb-6">Insect Problem Prevention</h2>
            <p className="text-xl mb-16">We recommend considering all of these if you're selling your home:</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">

            {recs.map( (rec) => (
            <div id={rec.id} className="flex items-start space-x-3">
              {Box()}
              <h3 className="font-semibold">
                {rec.rec}
              </h3>
            </div>
            ))};

          </div>
        </div>

      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
          <div className="grid md:grid-cols-4 gap-8 font-semibold">
            <a href='tel:978-443-8245' className="flex items-center space-x-3">
              <Phone className="w-6 h-6 text-pest-red" />
              <span>(978) 443-8245</span>
            </a>
            <a href='mailto:ajwilliamsonpest@gmail.com' className="flex items-center space-x-3">
              <Mail className="w-6 h-6 text-pest-red" />
              <span>ajwilliamsonpest@gmail.com</span>
            </a>
            <div className="flex items-center space-x-3">
              <Clock className="w-6 h-6 text-pest-red" />
              <span>Monday - Friday: 8AM - 5PM <br></br> Saturday: 8AM - 3PM</span>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="w-6 h-6 text-pest-red" />
              <span>131 Barton Drive <br></br> Sudbury, MA 01776</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-pest-black text-pest-grey py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2016 A.J. Williamson Termite Control Co., Inc. | Sudbury, MA</p>
        </div>
      </footer>
    </div>
  );
};

export default PestControlWebsite;