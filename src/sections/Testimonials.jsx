import React from 'react'
import TitleHeader from '../components/TitleHeader'
import { testimonials } from '../constants'
import GlowCard from '../components/GlowCard'
import GlowCard2 from '../components/GlowCard2'

const Testimonials = () => {
  return (
    <section id='testimonials' className='flex-center section-padding'>
        <div className="w-full h-full md:px-10 px-5">
            <TitleHeader 
            title="What People Say About Me?"
            sub="⭐ Client Feedback Highlights"
            />

            <div className="lg:columns-3 md:columns-2 columns-1 mt-16">
                {/* {testimonials.map(({ imgPath, name, mentions, review }) => (
                    <GlowCard2 card={{review}}>
                        <div className="flex items-center gap-3">
                            <div>
                                <img src={imgPath} alt={name} />
                            </div>
                            <div>
                                <p className='font-bold'>{name}</p>
                                <p className="text-white-50">{mentions}</p>
                            </div>
                        </div>
                    </GlowCard2>
                ))} */}
                
                {testimonials.map((testimonial, index) => (
            <GlowCard2 card={testimonial} key={index} index={index}>
              <div className="flex items-center gap-3">
                <div>
                  <img src={testimonial.imgPath} alt="" />
                </div>
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-white-50">{testimonial.mentions}</p>
                </div>
              </div>
            </GlowCard2>
          ))}
            </div>
        </div>
    </section>
  )
}

export default Testimonials