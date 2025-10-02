import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export const useGSAP = () => {
  const containerRef = useRef<HTMLElement>(null);

  // Fade in from bottom animation
  const fadeInUp = (elements: string | Element[], options?: gsap.TweenVars) => {
    return gsap.fromTo(elements, 
      { 
        y: 60, 
        opacity: 0 
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        ...options
      }
    );
  };

  // Fade in from left animation
  const fadeInLeft = (elements: string | Element[], options?: gsap.TweenVars) => {
    return gsap.fromTo(elements,
      {
        x: -60,
        opacity: 0
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        ...options
      }
    );
  };

  // Fade in from right animation
  const fadeInRight = (elements: string | Element[], options?: gsap.TweenVars) => {
    return gsap.fromTo(elements,
      {
        x: 60,
        opacity: 0
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        ...options
      }
    );
  };

  // Scale in animation
  const scaleIn = (elements: string | Element[], options?: gsap.TweenVars) => {
    return gsap.fromTo(elements,
      {
        scale: 0.8,
        opacity: 0
      },
      {
        scale: 1,
        opacity: 1,
        duration: 0.6,
        ease: "back.out(1.7)",
        ...options
      }
    );
  };

  // Stagger animation for multiple elements
  const staggerAnimation = (elements: string | Element[], options?: gsap.TweenVars) => {
    return gsap.fromTo(elements,
      {
        y: 40,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.1,
        ...options
      }
    );
  };

  // Counter animation
  const animateCounter = (element: Element, endValue: number, options?: gsap.TweenVars) => {
    const obj = { value: 0 };
    return gsap.to(obj, {
      value: endValue,
      duration: 2,
      ease: "power2.out",
      onUpdate: () => {
        element.textContent = Math.round(obj.value).toString();
      },
      ...options
    });
  };

  // Parallax effect
  const parallax = (elements: string | Element[], speed: number = 0.5) => {
    return gsap.to(elements, {
      yPercent: -50 * speed,
      ease: "none",
      scrollTrigger: {
        trigger: elements,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });
  };

  // Create scroll trigger animation
  const createScrollTrigger = (
    trigger: string | Element,
    animation: gsap.core.Tween | gsap.core.Timeline,
    options?: ScrollTrigger.Vars
  ) => {
    return ScrollTrigger.create({
      trigger,
      start: "top 80%",
      end: "bottom 20%",
      animation,
      toggleActions: "play none none reverse",
      ...options
    });
  };

  // Batch scroll animations for performance
  const batchScrollAnimations = (selector: string, animation: any) => {
    return ScrollTrigger.batch(selector, {
      onEnter: (elements) => animation(elements),
      onLeave: (elements) => gsap.set(elements, { opacity: 0, y: 60 }),
      onEnterBack: (elements) => animation(elements),
      start: "top 85%",
      end: "bottom 15%"
    });
  };

  return {
    containerRef,
    fadeInUp,
    fadeInLeft,
    fadeInRight,
    scaleIn,
    staggerAnimation,
    animateCounter,
    parallax,
    createScrollTrigger,
    batchScrollAnimations,
    gsap,
    ScrollTrigger
  };
};

export default useGSAP;
