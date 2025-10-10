import {
  EnvironmentOutlined,
  PhoneOutlined,
  MailOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";
import YandexMap from "./components/yandex-map";
import {  getTranslations } from 'next-intl/server';
import { LocalType } from "@/types/type";


export default async function Contacts({ locale }: LocalType) {

  const t = await getTranslations({ locale, namespace: "restaurants" });

  const locations: string[] = t.raw("locations");
 
  return (
    <section id="restaurants" className="bg-[#f9f6f1] py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
           {t("title")}
          </h2>
          <p className="text-gray-600 mt-3">
           {t("question")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <EnvironmentOutlined className="text-2xl text-amber-600 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-700">{t("address")}</h3>
                {locations.map((el,i) => (
                  <p key={i}>{el}</p>
                ))}
              </div>
            </div>

            <div className="flex items-start gap-4">
              <PhoneOutlined className="text-2xl text-amber-600 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-700">{t("phones")}</h3>
                <p className="text-gray-600">+998885770077</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MailOutlined className="text-2xl text-amber-600 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-700">{t("email")}</h3>
                <p className="text-gray-600">coffee.shop@example.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <ClockCircleOutlined className="text-2xl text-amber-600 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-700">{t("hours")}</h3>
                <p className="text-gray-600">24/7</p>
              </div>
            </div>

          </div>
            <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-md">
              <YandexMap/>
            </div>

        </div>
      </div>
    </section>
  );
};

