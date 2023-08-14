"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import links from "../_constants/links";
import style from "./Navbar.module.css";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className={style.nav}>
      <ul>
        {links.map((link) => {
          const { id, slug, title } = link;
          const isActive = pathname === `/${slug}`;
          return (
            <li key={id}>
              <Link href={`/${slug}`} className={isActive ? style.active : ""}>
                {title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
