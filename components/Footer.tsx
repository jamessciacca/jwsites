import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const navigation = [
  ["Home", "/"],
  ["Services", "/services"],
  ["Pricing", "/pricing"],
  ["Concepts", "/concepts"],
  ["About", "/about"],
  ["Contact", "/contact"],
];

const services = [
  ["Website Design", "/services"],
  ["Website Redesigns", "/services"],
  ["Hosting & Maintenance", "/services"],
  ["Website Packages", "/pricing"],
  ["Basic SEO", "/services"],
];

export function Footer() {
  return (
    <footer className="border-t border-line bg-ink text-white">
      <div className="container-site grid gap-12 py-16 sm:py-20 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <Link href="/" className="text-2xl font-bold tracking-[-0.04em]">
            JW<span className="text-[#8b8cff]">Sites</span>
          </Link>
          <p className="mt-5 max-w-xs text-sm leading-6 text-gray-400">
            Modern, reliable websites that help local businesses look
            professional and turn more visitors into customers.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold">Navigation</h2>
          <ul className="mt-5 space-y-3">
            {navigation.map(([label, href]) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-sm text-gray-400 transition hover:text-white"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold">Services</h2>
          <ul className="mt-5 space-y-3">
            {services.map(([service, href]) => (
              <li key={service}>
                <Link
                  href={href}
                  className="text-sm text-gray-400 transition hover:text-white"
                >
                  {service}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold">Ready when you are.</h2>
          <p className="mt-5 text-sm leading-6 text-gray-400">
            Tell us about your business. We’ll help you find the right website
            option without the hard sell.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#a5a6ff] transition hover:text-white"
          >
            Start a conversation <ArrowUpRight size={16} />
          </Link>
          <a
            href="mailto:jsciacca03@gmail.com"
            className="mt-3 block text-sm text-gray-500 transition hover:text-white"
          >
            jsciacca03@gmail.com
          </a>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-site flex flex-col gap-2 py-6 text-xs text-gray-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} JWSites. All rights reserved.</p>
          <p>Built for local business.</p>
        </div>
      </div>
    </footer>
  );
}
