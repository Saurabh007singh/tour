import HeroCTA from "@/components/home/bookenow";
import Categories from "@/components/home/categories";
import Destination from "@/components/home/destination";
import FaqSection from "@/components/home/faq";
import Selection from "@/components/home/selection";
import BannerCrousel from "@/components/home/slides";
import Stroies from "@/components/home/stories";
import Tour from "@/components/home/tours";
import Trips from "@/components/home/trips";
import WhyChoseUs from "@/components/home/whychoseus";
import BlogSection from "@/components/home/blogs";
import GallerySection from "@/components/home/gallery";

export default function Home() {
  return (

    <div className=" w-full h-auto  ">
       <div className=" fixed inset-0 -z-10">
        <img
          src="images/banner1.avif"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>
      <div className=" w-full "><section><BannerCrousel></BannerCrousel></section>
      <section className="bg-white  mb-2 border-1 border-slate-300 rounded-md w-[99%] mx-auto py-8 px-2"><Selection></Selection></section>
      <section className="bg-white px-2 md:px-30 py-20"><Categories></Categories></section>
      <section className="   px-2 md:px-30 py-20 bg-[#EEF8FF] flex "><Trips></Trips></section>
      <section className=" bg-white  px-2 md:px-30 py-20  flex "><Tour></Tour></section>
       <section className="   py-20 bg-[#113A75] flex "><WhyChoseUs></WhyChoseUs></section>
       <section className=" bg-white md:px-30   py-20 px-2  flex "><Destination></Destination></section>
        <section className=" bg-white  py-20 px-2 md:px-30 flex "><Stroies></Stroies></section>
        <section className=""><HeroCTA></HeroCTA></section>
        <section className="bg-white md:px-30"><BlogSection></BlogSection></section>
         <section className="bg-white"><GallerySection></GallerySection></section>
        <section className=" bg-white   py-20 px-2 flex "><FaqSection></FaqSection></section>
        
        </div>
      
    </div>
  );
}
