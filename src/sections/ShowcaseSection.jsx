import React, { useRef } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);

    

    

    useGSAP(() => {
        const projects = [project1Ref.current, project2Ref.current, project3Ref.current];

        projects.forEach((card, index) => {
        gsap.fromTo(
            card,
            {
                y: 50, opacity : 0
            },
            {
                y: 0, 
                opacity: 1,
                duration: 1,
                delay: 0.3 * (index + 1),
                scrollTrigger: {
                    trigger: card,
                    start: 'top bottom-=100'
                }
            }
        )
    });

        gsap.fromTo(
            sectionRef.current,
        { opacity : 0 },
        { opacity : 1, duration : 1.5 }
        )
    }, [])

  return (
    <section id='work' ref={sectionRef} className='app-showcase'>
        <div className="w-full">
            <div className="showcaselayout">
                {/* LEFT */}
                <div className="first-project-wrapper" ref={project1Ref}>
                    <div className="image-wrapper">
                        <img src="/images/project6.png" alt="AKURA" />
                    </div>
                    <div className="text-content">
                        <h2>Online Learning Made Simple with a Powerful, User-Friendly Web App called Akura</h2>
                        <p className='text-white-50 md:text-xl'>AKURA Learning Management System, a full-featured web platform designed for Akura Institute to modernize their manual education workflow. The system streamlines class management, content delivery, student enrollment, progress tracking, and payment handling. I led the entire SDLC—requirements analysis, system design, implementation, and testing—using modern technologies such as Next.js, Prisma, TailwindCSS, Stripe, Clerk Auth, UploadThing, and Mux. The final product delivers a user-friendly, scalable, and secure LMS that improves operational efficiency for administrators, teachers, and students alike.</p>
                    </div>
                </div>

                {/* RIGHT */}
                <div className="project-list-wrapper overflow-hidden">
                    <div className="project" ref={project2Ref}>
                        <div className="image-wrapper bg-[#ffefdb]">
                            <img src="/images/project5.png" alt="Brick Shooter" />
                        </div>
                        <h2>Brick Shooter Game</h2>
                        <p className='text-white-50 md:text-xl'>Dive into a fast-paced brick-shooter challenge where precision and timing are everything. Built in C++, this game tasks you with launching projectiles to break through waves of colorful bricks before they reach the bottom. With simple controls, it’s a classic arcade experience reimagined for modern play.</p>
                    </div>
                    <div className="project" ref={project3Ref}>
                        <div className="image-wrapper bg-[#ffe7eb]">
                            <img src="/images/project4.png" alt="CeyNest" />
                        </div>
                        <h2>CeyNest - A Home Rental Frontend</h2>
                        <p className='text-white-50 md:text-xl'>CeyNest is a fully responsive home-rental user interface built with React and Tailwind CSS, designed to deliver a premium, visually immersive browsing experience. It features a floating glass-style navbar, a cinematic 113-frame scroll animation, dynamic property listings, testimonials, and a polished CTA section. The project uses reusable components, clean data-driven architecture, and smooth UI interactions to create a modern, elegant rental-platform feel.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ShowcaseSection