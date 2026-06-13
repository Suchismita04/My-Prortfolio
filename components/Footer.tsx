const socials = [
  { icon: "fa-brands fa-github", label: "GitHub", href: "https://github.com/Suchismita04" },
  { icon: "fa-brands fa-linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/suchismita-chatterjee-736a89280/" },
  // { icon: "fa-brands fa-twitter", label: "Twitter", href: "#" },
  // { icon: "fa-brands fa-dribbble", label: "Dribbble", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 px-[clamp(1.25rem,8%,7.5rem)] py-9 text-center">
      <div className="flex justify-center gap-4 mb-5">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            aria-label={s.label}
            className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center
              text-gray-500 text-[1.15rem] hover:text-indigo-600 hover:border-indigo-600
              hover:-translate-y-1 transition-all duration-300"
          >
            <i className={s.icon} />
          </a>
        ))}
      </div>
      <p className="text-gray-400 text-[0.88rem]">
        &copy; {new Date().getFullYear()} Suchismita Chatterjee . All Rights Reserved.
      </p>
    </footer>
  );
}
