import About from "@/components/About/about";
import Atmosphere from "@/components/Atmosphere/atmosphere";
import Contacts from "@/components/Contact/Restaurantcontact";
import Hero from "@/components/Hero/hero";
import ProductGrid from "@/components/ProductGrid/product_grid";
import Products from "@/components/Products/products";
import Testimonials from "@/components/Testimonials/testimonials";

export default async function Home(props: { params: Promise<{ locale: string }> }) {
   const params = await props.params;
    
  return (
    <main >
     <Hero locale={params.locale}/>
     <ProductGrid/>
     <Atmosphere locale={params.locale}/>
     <Products/>
     <Testimonials locale={params.locale}/>
     <About locale={params.locale}/>
     <Contacts  locale={params.locale}/>
    </main>
  );
}
