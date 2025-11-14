"use client";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  image: string;
}

export default function TestimonialCard({ quote, author, role, image }: TestimonialCardProps) {
  return (
    <div className="p-8 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300">
      <p className="text-gray-700 mb-6 leading-relaxed italic">"{quote}"</p>
      <div className="flex items-center gap-4">
        <img src={image} alt={author} className="w-12 h-12 rounded-full object-cover" />
        <div>
          <div className="font-semibold text-gray-900">{author}</div>
          <div className="text-sm text-gray-600">{role}</div>
        </div>
      </div>
    </div>
  );
}
