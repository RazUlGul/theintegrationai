import FooterComponent from "@/components/footer/footer";
import HeroComponent from "@/components/hero/hero";
import NavComponent from "@/components/nav/nav";

export default function Home() {
  return (
    <div className="">
      <NavComponent />
      <main className="">
        <HeroComponent />
        {/* <p className="text-black text-lg lg:text-xl text-center mx-auto px-4 py-12 lg:py-32">
          We build <span className="font-black">AI Agents</span> that do real work.<br />
          Not just tasks, but meaningful, measurable results<br />
          that <span className="font-black">move your business forward.</span>
        </p> */}
      </main>
      <FooterComponent />
    </div>
  );
}
