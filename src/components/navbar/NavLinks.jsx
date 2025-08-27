const NavLinks = ({ navLinks, activeLink, setActiveLink, onClick }) => (
  <>
    {navLinks.map((link) => (
      <a
        key={link.href}
        href={link.href}
        onClick={() => {
          setActiveLink(link.href);
          if (onClick) onClick();
        }}
        className={`block text-sm font-medium font-body py-2 ${
          activeLink === link.href
            ? "text-slate-700 hover:primary"
            : "text-btt hover:primary"
        }`}
      >
        {link.label}
      </a>
    ))}
  </>
);

export default NavLinks;
