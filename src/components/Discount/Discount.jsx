import car from "../../assets/car04.jpg";
import Button from "../Button/Button";

const Discount = () => {
  return (
    <section className="py-16 overflow-hidden dark:bg-slate-900" id="discount">
      <div style={{backgroundImage:`url(${car})`}} className="h-[500px] bg-cover bg-center">
        <div className="w-full h-full bg-opacity-30 bg-slate-500 py-8 lg:py-16">
          <div className="container mx-auto justify-between max-w-6xl flex flex-col md:flex-row items-center h-full text-white p-2 gap-10">
            <div className="flex flex-col items-center md:items-start gap-5">
              <h1 className="text-4xl lg:text-6xl font-bold ">
                Book car with <br/> a big discount
              </h1>
              <Button> Book Now </Button>
            </div>

            <div className="bg-green-600 p-6 rounded-sm">
              <h1 className="text-6xl font-bold">30%</h1>
              <h2 className="text-2xl">
                For every new <br /> car
              </h2>
            </div>
          </div>
        </div>
     </div>
    </section>
  )
}

export default Discount