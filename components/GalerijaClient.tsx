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
      {usporedbe.map((item, i) => (
        <div key={item.id}>
          <div className="space-y-4 text-center">
            <h2 className="text-xl font-semibold text-gray-200">
              {item.naziv}
            </h2>

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

            {item.opis && <p className="text-gray-300">{item.opis}</p>}
          </div>

          {/* Divider između usporedbi */}
          {i !== usporedbe.length - 1 && (
            <div className="w-full h-px bg-gray-800 my-16" />
          )}
        </div>
      ))}
    </div>
  );
}
