"use client";

import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SideBar = ({ user }: SiderbarProps) => {
  const pathname = usePathname();
  return (
    <section className="sidebar ">
      <nav className="flex flex-col gap-4">
        <Link
          href="/"
          className=" flex mb-12 cursor-pointer items-center gap-2"
        >
          <Image
            alt="logo"
            src="/icons/logo.svg"
            width={34}
            height={34}
            className="size-[24px] max-xl:size-14 "
          />
          <h1 className="sidebar-logo">Horizon</h1>
        </Link>
        {sidebarLinks.map((items) => {
          const isActive = pathname === items.route;
          return (
            <Link
              className={cn("sidebar-link", { "bg-bank-gradient": isActive })}
              key={items.label}
              href={items.route}
            >
              <div className="relative size-6">
                <Image
                  src={items.imgURL}
                  alt={items.label}
                  fill
                  className={cn({ "brightness-[3] invert-0": isActive })}
                />
              </div>
              <p className={cn("sidebar-label", { "!text-white": isActive })}>
                {items.label}
              </p>
            </Link>
          );
        })}
        USER
      </nav>
      Footer
    </section>
  );
};

export default SideBar;
