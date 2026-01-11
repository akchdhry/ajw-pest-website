import React, { useState } from 'react';
import { Phone, Mail, Clock, MapPin, CheckCircle, Square, SquareCheckBig, X, Menu} from 'lucide-react';
import logo from './images/ajwlogo.png'
import ant from './images/carpenter-ant.png'
import termite from './images/termite.jpg'
import wasp from './images/wasp.jpg'
import mouse from './images/mouse.jpg'
import Slider from './Slider';


const PestControlWebsite = () => {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const Box = () => {
    const [isToggled, setIsToggled] = useState(false);

    const handleClick = () => {setIsToggled(!isToggled)}

    return (
    <button onClick={handleClick} className='touch-manipulation' > {
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
      {/* Mobile Menu Toggle */}
      <button 
        className="md:hidden fixed top-4 right-4 z-50 bg-pest-navy p-3 rounded-lg" 
        onClick={toggleMobileMenu}
        aria-label="Toggle Mobile Menu"
      >
        {isMobileMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
      </button>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-pest-navy z-40 md:hidden">
          <nav className="flex flex-col items-center justify-center h-full space-y-6">
            {['Services', 'About', 'Recommendations', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(' ', '')}`} 
                onClick={toggleMobileMenu} 
                className="text-2xl text-white hover:text-blue-300 touch-manipulation"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      )}

      {/* Header */}
      <header className="bg-pest-navy text-pest-logo-grey py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <h1 className="text-xl md:text-2xl font-bold truncate">A.J. Williamson Termite and Pest</h1>
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
            <img 
              src={logo} 
              alt='A.J. Williamson Termite and Pest Control' 
              className='w-48 md:w-72 object-contain'
              loading="lazy"
            />
          </div>
          <h2 className="text-2xl md:text-4xl font-bold mb-6">We can help identify your pests!</h2>
          <p className="text-base md:text-xl mb-8">We are a family-owned and family-operated business serving the MetroWest area since 1971</p>
          <i>State Licensed</i>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-gray-200 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Our Specialties</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {img: ant, alt: 'Carpenter Ants', title: 'Carpenter Ants'},
              {img: termite, alt: 'Termites', title: 'Termites'},
              {img: wasp, alt: 'Wasps', title: 'Wasps'},
              {img: mouse, alt: 'Mice', title: 'Mice'}
            ].map(({img, alt, title}) => (
              <div key={alt} className="bg-white p-6 rounded-lg shadow-md justify-center text-center">
                <div className='flex justify-center'>
                  <img 
                    src={img} 
                    alt={alt} 
                    className='w-40 h-40 object-cover rounded-xl mb-5'
                    loading="lazy"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-8">
              {[
                {
                  icon: <CheckCircle className="w-7 h-7 text-blue-600 flex-shrink-0" />,
                  title: "Residential and Commercial Pest Control",
                  description: <p className="text-gray-600"><strong>For over 50 years</strong>, The A.J. Williamson Pest Control company has been serving the residential & commercial area of Metrowest, MA with <strong>exceptional results</strong>.</p>
                },
                {
                  icon: <CheckCircle className="w-7 h-7 text-blue-600 flex-shrink-0" />,
                  title: "Special Offer",
                  description: <p className="text-gray-600">We offer Termite & Pest Inspections for <strong>$150.00</strong>, including a one year warranty.</p>
                },
                {
                  icon: <CheckCircle className="w-7 h-7 text-blue-600 flex-shrink-0" />,
                  title: "Free Estimates",
                  description: <p className="text-gray-600">Contact us at <strong>(978) 443-8245</strong> for a free estimate!</p>
                }
              ].map(({icon, title, description}) => (
                <div key={title} className="flex items-start space-x-3 touch-manipulation">
                  {icon}
                  <div>
                    <h3 className="text-base md:text-xl font-semibold">{title}</h3>
                    {description}
                  </div>
                </div>
              ))}
            </div>


            <div className="space-y-4">
              <Slider />
              <a
              href="https://www.angi.com/companylist/us/ma/sudbury/aj-williamson-termite-and-pest-reviews-73439.htm" target='_blank' rel='noreferrer'
              className="flex text-center justify-center mx-40 bg-angie-orange text-white py-3 px-5 rounded-lg font-semibold hover:bg-angie-hover"> 
              See more reviews on Angi!
              </a>
              
            </div>
          </div>
        </div>
      </section>


      {/* Recommendations Section */}
      <section id="recommendations" className="py-16">
        <div className="container mx-auto px-4">
          <div className='text-center'>
            <h2 className="text-2xl md:text-4xl font-bold mb-6">Insect Problem Prevention</h2>
            <p className="text-base md:text-xl mb-16">We recommend considering all of these if you're selling your home:</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {recs.map((rec) => (
              <div key={rec.id} className="flex items-center space-x-3 touch-manipulation">
                {Box()}
                <h3 className="font-semibold text-sm md:text-base">
                  {rec.rec}
                </h3>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 font-semibold">
            {[
              {
                icon: <Phone className="w-6 h-6 text-pest-red" />,
                text: '(978) 443-8245',
                href: 'tel:978-443-8245'
              },
              {
                icon: <Mail className="w-6 h-6 text-pest-red" />,
                text: 'ajwilliamsonpest@gmail.com',
                href: 'mailto:ajwilliamsonpest@gmail.com'
              },
              {
                icon: <Clock className="w-6 h-6 text-pest-red" />,
                text: 'Monday - Friday: 8AM - 5PM\nSaturday: 8AM - 3PM'
              },
              {
                icon: <MapPin className="w-6 h-6 text-pest-red" />,
                text: '131 Barton Drive\nSudbury, MA 01776'
              }
            ].map(({icon, text, href}) => (
              <a 
                key={text} 
                href={href} 
                className="flex flex-col md:flex-row items-center justify-center md:justify-start space-x-3 touch-manipulation"
              >
                {icon}
                <span className="text-center md:text-left mt-2 md:mt-0 text-sm md:text-base">{text}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-pest-black text-pest-grey py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-xs md:text-sm">&copy; 2016 A.J. Williamson Termite Control Co., Inc. | Sudbury, MA</p>
        </div>
      </footer>
    </div>
  );
};

export default PestControlWebsite;