import { TeamOutlined, CoffeeOutlined, HeartOutlined } from "@ant-design/icons";
import Image from "next/image";
import {  getTranslations } from 'next-intl/server';
import { LocalType } from "@/types/type";


export default async function About({ locale }: LocalType){
  const t = await getTranslations({ locale, namespace: "about" });

  return (
    <section id="about" className="py-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <Image
            src="/coffeestore.jpg"
            alt="Coffee Shop"
            width={600}
            height={400}
            className="rounded-lg shadow-lg object-contain"
          />
          <div className="absolute bottom-4 left-4 bg-white shadow-md px-4 py-2 rounded-lg">
            <p className="font-semibold text-amber-700"> {t("experience")}</p>
          </div>
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            {t("title")}
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            {t("description")}
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <CoffeeOutlined className="text-2xl text-amber-600 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-gray-700">{t("Mission")}</h3>
                <p className="text-gray-500">
                   {t("mission")}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <TeamOutlined className="text-2xl text-amber-600 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-gray-700">{t("Team")}</h3>
                <p className="text-gray-500">
                 {t("team")}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <HeartOutlined className="text-2xl text-amber-600 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-gray-700">{t("Values")}</h3>
                <p className="text-gray-500">
                  {t("values")}
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

