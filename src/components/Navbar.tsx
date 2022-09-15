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
          "hidden md:inline-block p-1 sm:px-2 sm:py-1 rounded-lg mx-1 hover:bg-slate-200 dark:hover:bg-zinc-800 transition-all font-medium",
          isActive
            ? "text-purple-500 dark:text-purple-400 font-bold"
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
    <nav className="relative flex items-center justify-between w-full max-w-2xl py-8 mx-auto capitalize border-zinc-200 dark:border-zinc-700 sm:pb-16 text-zinc-900 dark:text-zinc-100">
      <a href="#skip" className="skip-nav">
        Skip to content
      </a>
      <div className="ml-[-0.60rem]">
        {links.map((link, index) => (
          <NavItem href={`/${link}`} text={link} router={router} key={index} />
        ))}
      </div>
      <ColorModeToggle />
    </nav>
  );
};

export default Navbar;
