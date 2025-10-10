import { Product } from "@/types/type";
import { Testimonial } from "@/types/type";


export const products: Product[] = [
  {
    id: 1,
    img: "/product.jpg",
    title: "Айс американо",
    description:
      "Холодный напиток на основе двойного эспрессо из отборных сортов 100% арабики, фильтрованной воды с",
    price: "35 000",
  },
  {
    id: 2,
    img: "/product1.jpg",
    title: "Ice Tea Клубничный",
    description:
      "Классический айс-ти с добавлением пюре клубники. Продукт на фото может отличаться",
    price: "38 000",
  },
  {
    id: 4,
    img: "/product3.jpg",
    title: "Гранд капучино",
    description:
      "Эспрессо из отборных зерен арабики и робусты, горячее взбитое молоко",
    price: "40 000",
  },
  {
    id: 5,
    img: "/product4.jpg",
    title: "Пирожное `Дольче вита`",
    description:
      "Крамбл, миндальный бисквит, клуб кули, клубничный чизкрем, лимонный мусс",
    price: "36 000",
  },
  {
    id: 6,
    img: "/product5.jpg",
    title: "Чизкейк `Сан Себастьян` Ванильный",
    description: "Запеченный чизкейк с добавлением ванильного стручка",
    price: "39 000",
  },
  {
    id: 7,
    img: "/product6.jpg",
    title: "Круассан с Фисташкой",
    description: "Слоенно-дрожжевое тесто, фисташковая начинка",
    price: "57 000",
  },
  {
    id: 9,
    img: "/product8.jpg",
    title: "Мохито классический",
    description:
      "Освежающий напиток на основе лайма, мяты, сахарного сиропа и газированной воды",
    price: "37 000",
  },
  {
    id: 10,
    img: "/product9.jpg",
    title: "Фрапучино йогурт-шоколад",
    description:
      "Холодный кофейный напиток, на основе двойного эспрессо, молока, йогуртового и шоколадного наполнителя с карамельным сиропом",
    price: "60 000",
  },
];


export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Anastasia",
    city: "Tashkent",
    text: "The coffee is simply delightful! The atmosphere is very cozy.",
    img: "https://i.pravatar.cc/150?img=32",
  },
  {
    id: 2,
    name: "Jamshid",
    city: "Kokand",
    text: "The best desserts I’ve ever tried are from them.",
    img: "https://i.pravatar.cc/150?img=12",
  },
  {
    id: 3,
    name: "Leila",
    city: "Guest",
    text: "I really like their cappuccino. The taste is natural and fresh.",
    img: "https://i.pravatar.cc/150?img=47",
  },
];
