"use client";
import React, { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { projects } from "./projects";

import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import ProjectsSlide from "./ProjectsSlide";

const projectss = {
  shortTitle: "firebase-budget-tracker",
  imageSrc: "/firebase-budget-tracker.jpg",
  staticPathImportName: "firebase",
  alt: "firebase-budget-tracker",
  fullTitle: "Budget Tracker - Firebase",
  demoHref: "https://ivanmpr.github.io/firebase-budget-tracker/",
  codeHref: "https://github.com/IvanMPR/firebase-budget-tracker",
  description:
    "CRUD app with implemented Firebase database and authentication. You can add, edit, delete and filter your incomes and expenses, having more insight over your finances...",
  techStack: ["react", "firebase", "tailwind"],
  projectNum: 0,
};
const EmblaCarousel = props => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [scrollProgress, setScrollProgress] = useState(0);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);
  const onScroll = useCallback(emblaApi => {
    const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()));
    setScrollProgress(progress * 100);
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onScroll(emblaApi);
    emblaApi
      .on("reInit", onScroll)
      .on("scroll", onScroll)
      .on("slideFocus", onScroll);
  }, [emblaApi, onScroll]);

  return (
    <section className='embla'>
      <div className='embla__viewport' ref={emblaRef}>
        <div className='embla__container'>
          {slides.map(index => (
            <div className='embla__slide' key={index}>
              <ProjectsSlide project={projects[index]} />
            </div>
          ))}
        </div>
      </div>

      <div className='embla__controls'>
        <div className='embla__buttons'>
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        {/* <div className='embla__dots'>
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={"embla__dot".concat(
                index === selectedIndex ? " embla__dot--selected" : ""
              )}
            />
          ))}
        </div> */}
        <div className='embla__progress'>
          <div
            className='embla__progress__bar'
            style={{ transform: `translate3d(${scrollProgress}%,0px,0px)` }}
          />
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
// import { useCallback } from "react";
// import ProjectsSlide from "./ProjectsSlide";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// export default function EmblaCarousel() {
//   const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

//   const scrollPrev = useCallback(() => {
//     if (emblaApi) emblaApi.scrollPrev();
//   }, [emblaApi]);

//   const scrollNext = useCallback(() => {
//     if (emblaApi) emblaApi.scrollNext();
//   }, [emblaApi]);

//   return (
//     <div class='embla'>
//       <div className='embla__viewport ' ref={emblaRef}>
//         <div className='embla__container'>
//           <div className='embla__slide '>
//             <ProjectsSlide />
//           </div>
//           <div className='embla__slide'>Slide 1</div>
//           <div className='embla__slide'>Slide 2</div>
//           <div className='embla__slide'>Slide 3</div>
//         </div>
//       </div>
//       <div>
//         <button className='embla__prev' onClick={scrollPrev}>
//           {/* Prev */}
//           <FaChevronLeft />
//         </button>
//         <button className='embla__next' onClick={scrollNext}>
//           {/* Next */}
//           <FaChevronRight />
//         </button>
//       </div>
//     </div>
//   );
// }
