"use client";
import { useState } from "react";
import YandexMap from "@/components/Contact/components/yandex-map";
import { useTranslations } from 'next-intl';
import { Location } from "@/types/type";
import { PhoneOutlined } from "@ant-design/icons"


export default function Contacts() {
  const [selectedLocation, setSelectedLocation] = useState<Location| null>(
    null
  );

  const t = useTranslations('contact');

  const locations = t.raw('locations') as Location[];

  return (
    <section className=" py-30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12 flex flex-col items-center gap-5">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
           {t("title")}
          </h2>
         <div className="bg-[#b5d8d2] p-2 max-w-[260px] rounded-xl">
           <a href="tel:+998885770077" className="text-gray-600 mt-3 text-3xl text-white">
            88 577-00-77 <PhoneOutlined/>
          </a>
         </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6 h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-amber-600 scrollbar-track-gray-200 rounded-xl p-2">
            {locations.map((loc) => (
              <div
                key={loc.id}
                onClick={() => setSelectedLocation(loc)}
                className={`flex items-start gap-4 border-b border-gray-300 p-5 rounded-lg cursor-pointer transition ${
                  selectedLocation?.id === loc.id
                    ? "bg"
                    : "hover:bg-[#e6f1ee]"
                }`}
              >
                <div>
                  <h3 className="font-semibold text-gray-700 mb-2">
                    {loc.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{loc.address}</p>
                  <div className="flex gap-20">
                    <div className="flex flex-col">
                      <span>{t("phonelabel")}</span>
                      <a className="text-gray-600 text-sm font-semibold">
                        {loc.phone}
                      </a>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm">{t("hours")}</span>
                      <span className="text-sm">{loc.hours}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-md">
            <YandexMap center={selectedLocation?.coords} />
          </div>
        </div>
      </div>
    </section>
  );
}
