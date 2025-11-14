"use client";
import TestimonialCard from "./TestimonialCard";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  image: string;
}

interface TestimonialsCarouselProps {
  testimonials: Testimonial[];
}

export default function TestimonialsCarousel({ testimonials }: TestimonialsCarouselProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {testimonials.map((testimonial, index) => (
        <TestimonialCard
          key={index}
          quote={testimonial.quote}
          author={testimonial.author}
          role={testimonial.role}
          image={testimonial.image}
        />
      ))}
    </div>
  );
}
