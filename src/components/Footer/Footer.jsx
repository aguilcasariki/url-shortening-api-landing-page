import Logo from "../Logo/Logo";

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
const mediaLinks = [
  {
    path: "../../../src/assets/icon-facebook.svg",
    alt: "Facebook Link",
  },
  {
    path: "../../../src/assets/icon-twitter.svg",
    alt: "Facebook Link",
  },
  {
    path: "../../../src/assets/icon-pinterest.svg",
    alt: "Facebook Link",
  },
  {
    path: "../../../src/assets/icon-instagram.svg",
    alt: "Facebook Link",
  },
];
const Footer = () => {
  return (
    <section className="footer  bg-very-dark-violet">
      <div className="footer_container  text-center flex-col flex items-center bg-very-dark-violet py-10 text-xs px-16">
        <Logo color="#ffffff" />
        <ul>
          {serviceLinks.map((e, i) => (
            <div key={i} className="mt-7">
              <h2 className="service_title font-bold text-white mb-4">
                {e.title}
              </h2>
              {e.links.map((e, i) => (
                <li key={i} className="service_link mb-2">
                  <a href="">{e}</a>
                </li>
              ))}
            </div>
          ))}
        </ul>
        <ul className="flex bg-black justify-between w-full mt-5">
          {mediaLinks.map((e, i) => (
            <li key={i}>
              <a href="">
                <img src={e.path} alt={e.alt} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Footer;
