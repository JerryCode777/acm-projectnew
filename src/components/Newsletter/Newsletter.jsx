import Button from "../Button/Button"

export const Newsletter = () => {
  return (
    <section id="subscribe" className="dark:bg-slate-900 py-20 p-3">
      <div className="container max-w-7xl mx-auto text-center rounded-lg px-4 py-20 bg-slate-100 dark:bg-slate-800 dark:text-slate-200 ">
        <h1 className="text-2xl md:text-4xl font-semibold mb-6">
          Join Our Newsletter
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg mb-10">
          Stay informed with latest updates. No spam, just exlusive content.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center md:gap-2 md:gap-6">
          <input 
            type="email" 
            placeholder="Enter your email"
            className="w-full md:w-2/3 p-3 text-sm bg-white dark:bg-gray-800 border border-slate-300 dark:border-slate-500 rounded-md focus-within:outline-none focus:ring-2 focus:ring-slate-400 dark:focus:ring-slate-600"
          />
          <Button>Subscribe</Button>
        </div>
      </div>
    </section>
  )
}
