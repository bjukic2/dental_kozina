"use client";

import {
  ReactCompareSlider,
  ReactCompareSliderImage,
  useReactCompareSliderRef,
} from "react-compare-slider";

interface GalerijaClientProps {
  usporedbe: {
    id: number;
    naziv: string;
    opis: string | null;
    prijeUrl: string;
    poslijeUrl: string;
  }[];
}

export default function GalerijaClient({ usporedbe }: GalerijaClientProps) {
  const reactCompareSliderRef = useReactCompareSliderRef();
  return (
    <div className="grid gap-12">
      {usporedbe.map((item) => (
        <div key={item.id} className="space-y-4 text-center">
          <div className="aspect-video w-full max-w-3xl mx-auto overflow-hidden rounded-xl shadow">
            <ReactCompareSlider
              ref={reactCompareSliderRef}
              itemOne={
                <ReactCompareSliderImage
                  src={item.prijeUrl}
                  alt="Slika prije"
                />
              }
              itemTwo={
                <ReactCompareSliderImage
                  src={item.poslijeUrl}
                  alt="Slika poslije"
                />
              }
              onlyHandleDraggable
            />
          </div>
          <h2 className="text-xl font-semibold">{item.naziv}</h2>
          {item.opis && <p className="text-gray-600">{item.opis}</p>}
        </div>
      ))}
    </div>
  );
}
