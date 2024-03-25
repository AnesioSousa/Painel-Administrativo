import { HeartIcon } from "@heroicons/react/24/solid";
import { Typography } from "@material-tailwind/react";
import PropTypes from "prop-types";

export function Footer({ brandName, brandLink, routes, poweredBy}) {
  const year = new Date().getFullYear();

  return (
    <footer className="py-2">
      <div className="flex w-full flex-wrap items-center justify-center gap-6 px-2 md:justify-between">
        <Typography variant="small" className="font-normal text-inherit w-1/2">
          &copy; {year} 
          {" ----"}
          <span classname="flex justify-end">
          <a
            href={brandLink}
            target="_blank"
            className="transition-colors hover:text-blue-500 font-bold"
          >
            {brandName} 
          </a>{" "}
          <Typography variant="small" className="font-normal text-inherit w-1/2">
          🔥 poweredBy &nbsp;
            </Typography>
          
          <a
          href={"https://www.creative-tim.com"}
          target="_blank"
          className="transition-colors hover:text-blue-500 font-bold justify-self-end"
          >
            {poweredBy}
            
          </a>
          &nbsp;
          </span>
          
          for a better web.
        </Typography>
        <ul className="flex items-center gap-4">
          {routes.map(({ name, path }) => (
            <li key={name}>
              <Typography
                as="a"
                href={path}
                target="_blank"
                variant="small"
                className="py-0.5 px-1 font-normal text-inherit transition-colors hover:text-blue-500"
              >
                {name}
              </Typography>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

Footer.defaultProps = {
  brandName: "Sousa Santos Industries",
  brandLink: "https://www.linkedin.com/in/an%C3%A9sio-neto-75063a243/",
  poweredBy: "Creative Tim",
  routes: [
    { name: "Creative Tim", path: "https://www.creative-tim.com" },
    { name: "About Us", path: "https://www.creative-tim.com/presentation" },
    { name: "Blog", path: "https://www.creative-tim.com/blog" },
    { name: "License", path: "https://www.creative-tim.com/license" },
  ],
};

Footer.propTypes = {
  brandName: PropTypes.string,
  poweredBy: PropTypes.string,
  brandLink: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object),
};

Footer.displayName = "/src/widgets/layout/footer.jsx";

export default Footer;
