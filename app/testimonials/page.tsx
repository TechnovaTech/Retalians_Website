import TestimonialsCarousel from "@/components/TestimonialsCarousel";

export default function TestimonialsPage() {
  const testimonials = [
    {
      quote: "Great service and quality products!",
      author: "John Doe",
      role: "Customer",
      image: "/placeholder.jpg"
    }
  ];

  return (
    <div className="min-h-screen">
      <TestimonialsCarousel testimonials={testimonials} />
    </div>
  );
}