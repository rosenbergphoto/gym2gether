import { resourcesLinks, platformLinks, communityLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="mt-20 border-t py-10 border-neutral-700">
      <div className="container mx-auto px-6"> 
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          
          {/* Zdroje */}
          <div className="flex flex-col">
            <h3 className="text-md font-semibold mb-4">Zdroje</h3>
            <ul className="space-y-2">
              {resourcesLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-neutral-300 hover:text-white">
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Platforma */}
          <div className="flex flex-col">
            <h3 className="text-md font-semibold mb-4">Platforma</h3>
            <ul className="space-y-2">
              {platformLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-neutral-300 hover:text-white">
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Komunita */}
          <div className="flex flex-col">
            <h3 className="text-md font-semibold mb-4">Komunita</h3>
            <ul className="space-y-2">
              {communityLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-neutral-300 hover:text-white">
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
