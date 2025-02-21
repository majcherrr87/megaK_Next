"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./styles.module.scss";

export const MainNavigation = () => {
  const pathName = usePathname();

  return (
    <nav>
      <ul className={styles.navigation}>
        <li className={pathName.startsWith("/panel") ? styles.active : ""}>
          <Link href="/panel">Panel</Link>
        </li>
        <li className={pathName.startsWith("/admin") ? styles.active : ""}>
          <Link href="/admin">Admin</Link>
        </li>
        <li className={pathName.startsWith("/about") ? styles.active : ""}>
          <Link href="/about">About</Link>
        </li>
        <li className={pathName.startsWith("/users") ? styles.active : ""}>
          <Link href="/users">Users</Link>
        </li>
      </ul>
    </nav>
  );
};
