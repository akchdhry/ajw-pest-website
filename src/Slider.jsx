import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const slides = [
    { id: 1, content: 
        <div className='mx-20'>
            "AJ Williamson Termite Control came to my home recently to do a carpenter ant treatment. 
            I found them to be extremely professional and courteous.
            They did an excellent job and were very respectful of my time, space and family. 
            I would highly recommend their services!" <br></br> 
            <div className='flex justify-end'>
                <strong>- Molly H.</strong>
            </div>
        </div> , 
    },
    { id: 2, content: 
        <div className='mx-20'>
            "Wasp nest removal went extremely well. 
            Trevor, the owner, inspected the situation and was very professional throughout 
            - personally undertaking the removal. 
            He also followed up with an after job site inspection. 
            So nice to have work performed in a friendly, efficient and effective manner." <br></br> 
            <div className='flex justify-end'>
                <strong>- Trevor L.</strong>
            </div>
        </div> , 
    },
    { id: 3, content: 
        <div className='mx-20'>
            "I offer my highest recommendation to this Sudbury based local company. 
            I found them in the local yellow pages when I needed to find a pest control company to deal with mice. 
            Not only did Trevor successfully handle the situation, 
            but he was courteous, professional, and very much a calming influence. 
            This is a small family owned business, and a truly local company. 
            I will absolutely be calling them in the future for any pest control needs." <br></br> 
            <div className='flex justify-end'>
                <strong>- Neill S.</strong>
            </div>
        </div> , 
    },
    { id: 4, content: 
        <div className='mx-20'>
            "We've used AJ Williamson in the past 
            and they do a thorough job performing outside and inside the house inspections. 
            Always provide excellent recommendations for anything they observe e.g. rotted wood house trim, 
            evidence of other insect pests, foundation cracks, etc. 
            Would not hesitate to use them again for any pest control needs. 
            They always exhibit professionalism and trustworthiness." <br></br> 
            <div className='flex justify-end'>
                <strong>- Frank V.</strong>
            </div>
        </div> , 
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {/* Main slider container */}
      <div className="relative h-72 overflow-hidden rounded-lg">
        {/* Slides */}
        <div 
          className="flex transition-transform duration-300 ease-in-out h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide) => (
            <div
              key={slide.id}
              className={`flex-shrink-0 w-full h-5/6 flex justify-center overflow-scroll text-black ${slide.color}`}
            >
              {slide.content}
            </div>
          ))}
        </div>        

        {/* Navigation arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white shadow-lg"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white shadow-lg"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Dots indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? 'bg-angie-orange' : 'bg-gray-500'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;