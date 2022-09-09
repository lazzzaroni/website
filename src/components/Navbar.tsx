import { FC } from "react";
import { clsx } from "clsx";
import dynamic from "next/dynamic";
import Link from "next/link";
import { NextRouter, useRouter } from "next/router";

const ColorModeToggle = dynamic(() => import("@/components/ColorModeToggle"), {
  ssr: false,
});

const NavItem: FC<{ href: string; text: string; router: NextRouter }> = ({
  href,
  text,
  router,
}) => {
  const isActive = router.pathname === (href === "/home" ? "/" : href);

  return (
    <Link href={href === "/home" ? "/" : href}>
      <a
        className={clsx(
          "text-md md:text-lg m-4 md:m-6",
          isActive
            ? "text-purple-600 dark:text-purple-300 font-semibold"
            : "hover:text-purple-800 dark:hover:text-purple-400 transition-colors duration-300 hover:underline hover:underline-offset-2"
        )}
      >
        {text}
      </a>
    </Link>
  );
};

const Navbar = () => {
  const router = useRouter();
  const links = ["home", "blog", "projects", "about"];

  return (
    <nav className="flex items-center justify-between max-w-lg mx-auto mt-4 capitalize">
      {links.map((link, index) => (
        <NavItem href={`/${link}`} text={link} router={router} key={index} />
      ))}

      <ColorModeToggle />
    </nav>
  );
};

export default Navbar;
