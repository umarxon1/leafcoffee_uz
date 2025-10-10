import Image from "next/image";
import Cappucino from "../../../public/CAPPUCCINO.png"
import Barista1 from "../../../public/barista1.jpg"
import Chpkatmosphere from "../../../public/chpkatmosphere.jpg"

export default function ProductGrid() {
  const products = [
    {
      title: "Latte Macchiato",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe rem soluta commodi aut sit distinctio magnam illum nihil enim! Itaque?",
      img: Barista1,
    },
    {
      title: "Cappuccino",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe rem soluta commodi aut sit distinctio magnam illum nihil enim! Itaque?",
      img: Chpkatmosphere,
    },
    {
      title: "Cheesecake",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe rem soluta commodi aut sit distinctio magnam illum nihil enim! Itaque?",
      img: Cappucino,
    },
    {
      title: "Croissant",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe rem soluta commodi aut sit distinctio magnam illum nihil enim! Itaque?",
      img: Cappucino,
    },
  ];

  return (
    <section className="grid md:grid-cols-2 gap-4 p-6">
      {products.map((p, i) => (
        <div key={i} className="relative h-[400px] bg-gray-100">
           <Image
            src={p.img}
            alt={p.title}
            fill        
            className="object-cover bg-amber-50"
    
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white">
            <h2 className="text-3xl font-bold">{p.title}</h2>
            <p className="mb-4 text-center">{p.desc}</p>
           
          </div>
        </div>
      ))}
    </section>
  );
}
