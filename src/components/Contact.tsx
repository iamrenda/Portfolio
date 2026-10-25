import type { IconType } from "react-icons";
import { FaLinkedin } from "react-icons/fa6";
import { LuArrowUpRight } from "react-icons/lu";
import { SiGithub, SiGmail, SiWantedly } from "react-icons/si";

const LINKS: { name: string; handle: string; href: string; icon: IconType }[] =
  [
    {
      name: "Gmail",
      handle: "iamrenda.dev[at]gmail.com",
      href: "mailto:iamrenda.dev@gmail.com",
      icon: SiGmail,
    },
    {
      name: "LinkedIn",
      handle: "in/iamrenda",
      href: "https://www.linkedin.com/in/iamrenda",
      icon: FaLinkedin,
    },
    {
      name: "Wantedly",
      handle: "id/iamrenda",
      href: "https://www.wantedly.com/id/iamrenda",
      icon: SiWantedly,
    },
    {
      name: "GitHub",
      handle: "@iamrenda",
      href: "https://github.com/iamrenda",
      icon: SiGithub,
    },
  ];

export default function Contact() {
  return (
    <section id="contact" className="bg-white px-12 pt-16 pb-32">
      <div className="grid grid-cols-[4fr_6fr] gap-16">
        <div>
          <h2 className="font-display text-ink mb-4 text-[160px] leading-none uppercase">
            Contact
          </h2>
          <p className="text-md leading-[2] text-slate-500">
            インターンや開発のご依頼、勉強会のお誘いなどお待ちしています。
          </p>
        </div>

        <ul className="border-tint self-end border-t">
          {LINKS.map(({ name, handle, href, icon: Icon }) => (
            <li key={name} className="border-tint border-b">
              <a
                href={href}
                {...(href.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="group relative flex w-full items-center gap-8 overflow-hidden px-4 py-6 text-left"
              >
                <span
                  aria-hidden
                  className="bg-ink absolute inset-0 -translate-x-full transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0 motion-reduce:transition-none"
                />
                <span className="bg-accent relative flex size-16 shrink-0 items-center justify-center text-white">
                  <Icon size={28} aria-hidden />
                </span>
                <span className="font-display text-ink relative text-[96px] leading-none uppercase transition-colors duration-300 group-hover:text-white">
                  {name}
                </span>
                <span className="relative ml-auto text-sm font-semibold text-slate-500 transition-colors duration-300 group-hover:text-white">
                  {handle}
                </span>
                <LuArrowUpRight
                  size={24}
                  aria-hidden
                  className="text-ink relative shrink-0 transition-colors duration-300 group-hover:text-white"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
