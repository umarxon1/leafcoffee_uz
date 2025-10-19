"use client";
import { MenuOutlined, GlobalOutlined } from "@ant-design/icons";
import { Drawer, Button, Dropdown, Select } from "antd";
import { useEffect, useState, useTransition } from "react";
import Logo from "../../../../public/logo.png";
import Logo1 from "../../../../public/logo.jpg";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { Route } from "next";
import type { MenuProps } from "antd";

const Navbar = () => {
  const t = useTranslations("header");

  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const handleLangChange = (value: string) => {
    startTransition(() => {
      const newPath = `/${value}${pathname.substring(3)}` as unknown as Route;
      router.push(newPath );
    });
  };

  const items = [
    { key: "en", label: "English" },
    { key: "ru", label: "Русский" },
    { key: "uz", label: "O‘zbekcha" },
  ];

 const handleMenuClick: MenuProps["onClick"] = (e) => {
  handleLangChange(e.key);
};

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
            <div className="flex items-center gap-25 max-xl1:gap-10">
              <Link className="flex gap-2 items-center" href={`/${locale}`}>
              <Image
                  src={Logo1}
                  alt="Logo"
                  height={70}
                  className={` max-sm1:max-w-[140px] cursor-pointer object-contain h-[40px] transform-transition ease-in duration-260 ${
                    scrolled || isContactPage
                      ? " h-[70px]"
                      : " h-[90px]"
                  }`}
                />
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
                className="flex gap-5 font-[16px] max-md1:hidden text-white"
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

            <div className="flex items-center gap-10 max-xl:gap-10 max-sm1:gap-5 max-sm3:gap-0">
              
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

              <div className="flex items-center flex-col max-lg1:hidden">
                <a
                  href="tel:+998885770077"
                  className="font-medium text-[16px] text-white"
                
                >
                  +998 88 577-00-77
                </a>
                <span
                  className="text-[12px] text-white"
                >
                  {t("every_day")} 24/7
                </span>
              </div>

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
                  title={<span className="text-2xl">{t("menu")}</span>}
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
                      {t("menu")}
                    </Link>
                    <Link
                      href={`/${locale}#about`}
                      onClick={onClose}
                      style={{ color: "black" }}
                    >
                      {t("about_us")}
                    </Link>
                    <Link
                      href={`/${locale}#restaurants`}
                      onClick={onClose}
                      style={{ color: "black" }}
                    >
                      {t("restaurants")}
                    </Link>
                    <Link
                      href={`/${locale}/contact`}
                      onClick={onClose}
                      style={{ color: "black" }}
                    >
                      {t("contacts")}
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
