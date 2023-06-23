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
    <section className="footer">
      <div className="footer_container">
        <Logo />
        <ul>
          {serviceLinks.map((e, i) => (
            <div key={i} className="mt-3">
              <h2>{e.title}</h2>
              {e.links.map((e, i) => (
                <li key={i} className="">
                  <a href="">{e}</a>
                </li>
              ))}
            </div>
          ))}
        </ul>
        <ul className="flex bg-black">
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
