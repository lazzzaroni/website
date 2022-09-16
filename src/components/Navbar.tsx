import { FC } from "react";
import { clsx } from "clsx";
import dynamic from "next/dynamic";
import Link from "next/link";
import { NextRouter, useRouter } from "next/router";

import MobileMenu from "./MobileMenu";

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
          "hidden sm:inline-block px-3 py-2 mr-1 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-all font-medium",
          isActive
            ? "bg-transparent hover:bg-transparent dark:hover:bg-zinc-900 text-purple-700 dark:text-purple-400"
            : "hover:text-inherit"
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
    <nav className="flex items-center justify-between w-full py-6 mx-auto capitalize border-zinc-200 dark:border-zinc-700 sm:pb-16 text-zinc-900 dark:text-zinc-100">
      <a href="#skip" className="skip-nav">
        Skip to content
      </a>
      <div>
        <MobileMenu />
        {links.map((link, index) => (
          <NavItem href={`/${link}`} text={link} router={router} key={index} />
        ))}
      </div>
      <ColorModeToggle />
    </nav>
  );
};

export default Navbar;
