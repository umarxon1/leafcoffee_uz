import Image from "next/image";
import Barista from "../../../public/barista.jpg"
import Store from "../../../public/store.jpg"
import Coffemachine from "../../../public/coffemachine.jpg"
import {  getTranslations } from 'next-intl/server';
import { LocalType } from "@/types/type";


export default async function Atmosphere({ locale }: LocalType) {
   const t = await getTranslations({ locale, namespace: "experience" });

  return (
    <section className="p-12 text-center bg-[#f9f6f1]">
     <div className="container">
       <h2 className="text-4xl font-bold mb-6">{t("title")}</h2>
      <p className="max-w-2xl mx-auto mb-8 text-gray-600">
        {t("description")}
      </p>
      <div className="grid md:grid-cols-3 gap-5  max-md:justify-items-center ">
        <Image src={Barista} alt="Barista" width={400} height={300} className="rounded-lg object-cover"/>
        <Image src={Coffemachine} alt="Interior" width={400} height={300} className="rounded-lg object-cover"/>
        <Image src={Store} alt="Coffee crowd" width={400} height={300} className="rounded-lg object-cover"/>
      </div>
     </div>
    </section>
  );
}
