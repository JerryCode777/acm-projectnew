import hero from "../../assets/hero.jpg"

const Hero = () => {
  return (
    <section id="home" className="dark:bg-slate-900 overflow-hidden py-6">
      <div
        style={{ backgroundImage: `url(${hero})` }}
        className="container mx-auto justify-between max-w-7xl flex flex-col h-[600px] bg-cover bg-center rounded-lg"
      >
        <div className="w-full h-full bg-opacity-40 bg-slate-500">
          <h1 className="font-bold text-white rotate-12 mt-10 md:mt-0 text-5xl lg:text-8xl lg:p-10 p-3 text-right">
            Jerry Anderson <br /> Huaynacho Mango
          </h1>
        </div>
      </div>
    </section>
  )
}

export default Hero