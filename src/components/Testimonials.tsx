"use client";
import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
function Testimonials() {
  const testimonials = [
    {
      quote:
        "Joining this music academy has been a transformative experience. The instructors are incredibly talented and supportive, and I've seen a tremendous improvement in my skills.",
      name: "Emily Johnson",
      title: "Piano Student",
    },
    {
      quote:
        "The diverse range of courses offered here is amazing. Whether you're into classical music or modern genres, there's something for everyone. The learning environment is truly inspiring.",
      name: "Michael Davis",
      title: "Guitar Student",
    },
    {
      quote:
        "I never thought I'd be able to perform on stage with confidence, but the performance opportunities at this academy have really helped me grow as a musician.",
      name: "Sophia Martinez",
      title: "Vocal Student",
    },
    {
      quote:
        "The faculty here are not just teachers but mentors. They genuinely care about each student's progress and provide personalized guidance to help us achieve our musical goals.",
      name: "Liam Brown",
      title: "Drum Student",
    },
    {
      quote:
        "From theory lessons to practical workshops, the curriculum is comprehensive and well-structured. I've gained a deep understanding of music and honed my technical skills.",
      name: "Ava Wilson",
      title: "Violin Student",
    },
  ];

  return (
    <div className="py-12">
      <h2 className="text-center mt-20 mb-10 md:mt-0 text-2xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
        Our Testimonials
      </h2>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

export default Testimonials;
