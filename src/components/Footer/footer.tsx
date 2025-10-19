import { LocalType } from "@/types/type";
import { getTranslations } from "next-intl/server";
export default async function Footer({ locale }: LocalType) {
  const t = await getTranslations({ locale, namespace: "footer" })
  return (
    <footer className="bg-[#b5d8d2] text-white py-8 text-center">
      <p className="mb-2">{t("copyright")}</p>
      <p>{t("contact")}</p>
      <p className="mt-2">{t("follow")} <a href="https://www.instagram.com/leaf_uz/" className="underline">Instagram</a></p>
    </footer>
  );
}
