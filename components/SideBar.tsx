import { sidebarLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const SideBar = ({ user }: SiderbarProps) => {
  return (
    <section className="sidebar">
      <nav className="flex flex-col gap-4">
        <Link href="/" className="mb-12 cursor-pointer items-center gap-2">
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
          return (
            <Link key={items.label} href={items.route}>
              {items.label}
            </Link>
          );
        })}
      </nav>
    </section>
  );
};

export default SideBar;
