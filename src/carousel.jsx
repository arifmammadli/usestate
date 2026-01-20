import { useState } from "react";
import { slides } from "./data";

export default function Carousel() {
  const [img, setImg] = useState(0);

  const prev = () =>
    setImg((p) => (p === 0 ? slides.length - 1 : p - 1));

  const next = () =>
    setImg((p) => (p === slides.length - 1 ? 0 : p + 1));

  return (
    <div className="w-full max-w-[900px] mx-auto">
      <div className="relative overflow-hidden rounded-2xl border bg-white shadow">

        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${img * 100}%)` }}
        >
          {slides.map((slide) => (
            <div key={slide.id} className="min-w-full">
              <img
                src={slide.img}
                alt={`slide-${slide.id}`}
                className="h-[250px] md:h-[380px] w-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* arrows */}
        <button
          onClick={prev}
          className="absolute left-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/80 border grid place-items-center"
        >
          ‹
        </button>

        <button
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/80 border grid place-items-center"
        >
          ›
        </button>

      </div>
    </div>
  );
}
