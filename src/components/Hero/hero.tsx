import Image from "next/image";
import LeafStore from "../../../public/chpkleaf.webp"
import LeafStore2 from "../../../public/tashkentLeaf.webp"
import Link from "next/link";
import {  getTranslations } from 'next-intl/server';
import { Route } from "next";
import { LocalType } from "@/types/type";


export default async function Hero({ locale }: LocalType) {
   const t = await getTranslations({ locale, namespace: "hero" });
  return (
    <section className="relative w-full h-[100vh] flex items-center justify-center text-center bg-black text-white">
      <Image
        src={LeafStore}
        alt="Coffee shop"
        fill
        className="object-cover opacity-70 max-md1:hidden"
      />
        <Image
        src={LeafStore2}
        alt="Coffee shop"
        fill
        className="object-cover opacity-70 hidden max-md1:inline"
      />
      <div className="relative z-10">
        <h1 className="text-5xl font-bold mb-4">{t("title")}</h1>
        <p className="text-xl mb-6">{t("description")}</p>
        <div className="space-x-4">
          <button className="px-6 py-3 bg-white text-black rounded-lg hover:bg-[#b5d8d2]">
            <Link href={`/${locale}/menu` as unknown as Route}>{t("buttons.view_menu")}</Link>
          </button>
        </div>
      </div>
    </section>
  );
}
