import Logo from "../Logo/Logo";
import FacebookIcon from "../../assets/icon-facebook.svg";

const serviceLinks = [
  {
    title: "Features",
    links: ["Link Shortening", "Branded Links", "Analytics"],
  },
  {
    title: "Resources",
    links: ["Blog", "Developers", "Support"],
  },
  {
    title: "Company",
    links: ["About", "Our Team", "Careers", "Contact"],
  },
];
const mediaLinks = [FacebookIcon];
const Footer = () => {
  return (
    <section className="footer  bg-very-dark-violet">
      <div className="footer_container  text-center flex-col flex items-center bg-very-dark-violet py-10 text-xs px-16 md:flex-row justify-evenly md:items-start">
        <Logo color="#ffffff" />
        <ul className="flex md:flex-row flex-col md:gap-7">
          {serviceLinks.map((e, i) => (
            <div key={i} className="mt-7 md:mt-0">
              <h2 className="service_title font-bold text-white mb-4">
                {e.title}
              </h2>
              {e.links.map((e, i) => (
                <li key={i} className="service_link mb-2 hover:text-cyan">
                  <a href="">{e}</a>
                </li>
              ))}
            </div>
          ))}
        </ul>
        <ul className="flex bg-black justify-between w-full mt-5 md:flex-row flex-col md:w-auto md:gap-5 md:mt-0">
          {mediaLinks.map((e, i) => (
            <li key={i}>
              <a href="">{e.path}</a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Footer;
