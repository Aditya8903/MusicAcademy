"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
const musicSchoolContent = [
  {
    title: "Discover Your Sound with Us: A Personal Journey in Music Mastery",
    description:
      "Start a unique musical journey tailored just for you. Our personalized lessons are designed to meet your specific needs, fostering exceptional growth and creativity. At our music school, we blend your dreams with our dedicated support to create a seamless path to musical mastery.",
  },
  {
    title: "Discover Your Sound with Us: A Personal Journey in Music Mastery",
    description:
      "Start a unique musical journey tailored just for you. Our personalized lessons are designed to meet your specific needs, fostering exceptional growth and creativity. At our music school, we blend your dreams with our dedicated support to create a seamless path to musical mastery.",
  },
  {
    title: "Discover Your Sound with Us: A Personal Journey in Music Mastery",
    description:
      "Start a unique musical journey tailored just for you. Our personalized lessons are designed to meet your specific needs, fostering exceptional growth and creativity. At our music school, we blend your dreams with our dedicated support to create a seamless path to musical mastery.",
  },
  {
    title: "Live Feedback & Engagement",
    description:
      "Engage in an interactive learning environment where feedback is instant, akin to real-time changes in a collaborative project. This method enhances your grasp of music concepts and performance skills.",
  },
  {
    title: "Cutting-Edge Curriculum",
    description:
      "Stay ahead with our continuously updated curriculum, incorporating the latest in music education trends and technologies. Leave behind outdated materials and embrace a learning experience that evolves with the music industry.",
  },
  {
    title: "Limitless Learning Opportunities",
    description:
      "Explore an extensive resource library and diverse course offerings, ensuring you always have something new to learn. Our platform offers ongoing opportunities for growth, helping your musical skills constantly progress.",
  },
];

function WhyChooseUs() {
  return (
    <div>
      <StickyScroll content={musicSchoolContent} />
    </div>
  );
}

export default WhyChooseUs;
