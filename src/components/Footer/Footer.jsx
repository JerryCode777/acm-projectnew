import Logo from "../Navbar/Logo";
import CopyrightCredit from "./CopyrightCredit";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  return (
    <footer className="bg-slate-100 dark:bg-slate-800 py-10 p-2">
      <div className="container mx-auto max-w-7xl flex justify-between flex-col md:flex-row gap-5 items-center">
        <lofo />
        <div className="flex items-center gap-10">
          <SocialLinks />
          <CopyrightCredit />
        </div>
      </div>
    </footer>

  )
}

export default Footer