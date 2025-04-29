import Button from "../Button/Button"
import aboutImage from "../../assets/about.png"

const About = () => {
  return (
    <section id="about" className="py-16 dark:bg-slate-900 dark:text-slate-300">
      <div className="container mx-auto max-w-7xl flex flex-col lg:flex-row items-center gap-10 px-4">
        <div className="flex flex-col gap-3 w-full lg:w-1/2 items-start">
          <h1 className="font-extrabold lg:text-6xl md:text-5xl sm:text-4xl text-2xl uppercase">
            Riding with Agile Experience
          </h1>
          <p className="font-medium">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat soluta at impedit minus. Voluptatem illum harum deserunt quae laudantium aut delectus, quo reprehenderit! Dolorum ratione deleniti sint, qui voluptate dolore?
          </p>
          <Button>Test Drive</Button>
        </div>

        <div className="w-full lg:w-1/2 flex justufy-center">
          <img 
            src={aboutImage} 
            alt="turbotrial aboutImage"
            className="w-full max-w-lg h-auto"
          />
        </div>
      </div>
    </section>
  )
}

export default About