"use client";
import { MenuOutlined, GlobalOutlined } from "@ant-design/icons";
import { Drawer, Button, Dropdown, Select } from "antd";
import { useEffect, useState, useTransition } from "react";
import Logo from "../../../../public/logo.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";

const Navbar = () => {
  const t = useTranslations("header");

  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  // 🔁 Til o‘zgartirish funksiyasi
  const handleLangChange = (value: string) => {
    startTransition(() => {
      const newPath = `/${value}${pathname.substring(3)}`;
      router.push(newPath as any);
    });
  };

  // 🌐 Dropdown menyu elementlari
  const items = [
    { key: "en", label: "English" },
    { key: "ru", label: "Русский" },
    { key: "uz", label: "O‘zbekcha" },
  ];

  const handleMenuClick = (e: any) => {
    handleLangChange(e.key);
  };

  // 🔽 Scroll & Drawer
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const onClose = () => setOpen(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isContactPage = pathname === `/${locale}/contact`;

  return (
    <div>
      <div
        className={`fixed top-0 left-0 w-full z-50 transition-colors duration-400 ${
          scrolled || isContactPage
            ? "bg-[#b5d8d2] shadow-md"
            : "bg-transparent text-white"
        }`}
      >
        <header className="container">
          <nav className="p-5 flex items-center justify-between">
            {/* --- LEFT --- */}
            <div className="flex items-center gap-25 max-xl1:gap-10">
              <Link href={`/${locale}`}>
                <Image
                  src={Logo}
                  alt="Logo"
                  width={300}
                  height={70}
                  className={`max-sm1:max-w-[140px] cursor-pointer object-contain h-[40px] transform-transition ease-in duration-260 ${
                    scrolled || isContactPage
                      ? "w-[220px]"
                      : "w-[300px] h-[70px]"
                  }`}
                />
              </Link>

              <ul
                className={`flex gap-5 font-[16px] max-md1:hidden ${
                  scrolled || isContactPage ? "text-gray-700" : "text-white"
                }`}
              >
                <li>
                  <Link
                    href={`/${locale}/menu`}
                    className="hover:text-white cursor-pointer"
                  >
                    {t("menu")}
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/${locale}#about`}
                    className="hover:text-white cursor-pointer"
                  >
                    {t("about_us")}
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/${locale}#restaurants`}
                    className="hover:text-white cursor-pointer"
                  >
                    {t("restaurants")}
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/${locale}/contact`}
                    className="hover:text-white cursor-pointer"
                  >
                    {t("contacts")}
                  </Link>
                </li>
              </ul>
            </div>

            {/* --- RIGHT --- */}
            <div className="flex items-center gap-10 max-xl:gap-10 max-sm1:gap-5 max-sm3:gap-0">
              
              {/* 🌍 LG ekranlarda SELECT (til nomi bilan) */}
              <div className="hidden md:block">
                <Select
                  value={locale}
                  onChange={handleLangChange}
                  loading={isPending}
                  style={{ width: 100 }}
                  suffixIcon={null}
                  options={[
                    { value: "en", label: "English" },
                    { value: "ru", label: "Русский" },
                    { value: "uz", label: "O‘zbekcha" },
                  ]}
                />
              </div>

              {/* 🌐 MD va kichik ekranlarda GLOBUS */}
              <div className="block md:hidden">
                <Dropdown
                  menu={{
                    items,
                    onClick: handleMenuClick,
                    selectable: true,
                    defaultSelectedKeys: [locale],
                  }}
                  placement="bottomRight"
                  arrow
                >
                  <Button
                    type="text"
                    icon={
                      <GlobalOutlined
                        style={{
                          fontSize: "22px",
                          color:"white",
                        }}
                      />
                    }
                  />
                </Dropdown>
              </div>

              {/* 📞 Telefon raqami */}
              <div className="flex items-center flex-col max-lg1:hidden">
                <a
                  href="tel:+998885770077"
                  className={`font-medium text-[16px] ${
                    scrolled || isContactPage ? "text-gray-700" : "text-white"
                  }`}
                >
                  +998 88 577-00-77
                </a>
                <span
                  className={`text-[12px] ${
                    scrolled || isContactPage ? "text-gray-700" : "text-white"
                  }`}
                >
                  {t("every_day")} 24/7
                </span>
              </div>

              {/* ☰ Mobil menyu */}
              <div className="hidden max-md1:inline">
                <Button
                  type="text"
                  icon={
                    <MenuOutlined
                      style={{
                        fontSize: "22px",
                        color: "white",
                      }}
                    />
                  }
                  onClick={() => setOpen(true)}
                />
                <Drawer
                  title={<span className="text-2xl">Menu</span>}
                  placement="left"
                  onClose={onClose}
                  open={open}
                  width={220}
                >
                  <div className="text-[18px] text-gray-600 flex flex-col gap-10 items-center">
                    <Link
                      href={`/${locale}/menu`}
                      onClick={onClose}
                      style={{ color: "black" }}
                    >
                      Menu
                    </Link>
                    <Link
                      href={`/${locale}#about`}
                      onClick={onClose}
                      style={{ color: "black" }}
                    >
                      About us
                    </Link>
                    <Link
                      href={`/${locale}#restaurants`}
                      onClick={onClose}
                      style={{ color: "black" }}
                    >
                      Restaurants
                    </Link>
                    <Link
                      href={`/${locale}/contact`}
                      onClick={onClose}
                      style={{ color: "black" }}
                    >
                      Contact
                    </Link>
                  </div>
                </Drawer>
              </div>
            </div>
          </nav>
        </header>
      </div>
    </div>
  );
};

export default Navbar;
