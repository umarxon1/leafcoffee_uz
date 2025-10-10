import { Carousel } from "antd";
import { testimonials } from "@/data/db";
import TestimonialCard from "./components/testimonialsCard";
import {  getTranslations } from 'next-intl/server';
import { LocalType } from "@/types/type";



export default async function Testimonials({ locale }: LocalType) {

  const t = await getTranslations({ locale, namespace: "reviews" });

  const items = t.raw("items") as { name: string; city: string; text: string }[];

  const contentStyle: React.CSSProperties = {
  margin: 0,
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

  return (
    <section className="bg-[#f9f6f1] py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          {t("title")}
          </h2>
          <p className="text-gray-600 mt-3">{t("subtitle")}</p>
        </div>

        <div className="hidden md:grid grid-cols-3 gap-6">
          {items.map((review, i) => (
            <div key={i} className="h-full">
              <TestimonialCard review={review} />
            </div>
          ))}
        </div>

        <div className="md:hidden relative">
            <Carousel arrows infinite={true} autoplay autoplaySpeed={5000}>
       {items.map((review,i) => (
              <div key={i} className="px-4">
                <div className="max-w-md mx-auto">
                  <TestimonialCard review={review} />
                </div>
              </div>
            ))}
    </Carousel>
        </div>
      </div>
    </section>
  );
}
