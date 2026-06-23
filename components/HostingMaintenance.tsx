import {
  Check,
  Mail,
  MessageSquareText,
  Plus,
  Server,
  Wrench,
} from "lucide-react";

const smallUpdates = [
  "Change hours",
  "Change phone number or address",
  "Swap photos",
  "Update services",
  "Add announcements",
  "Minor text changes",
];

const largerChanges = [
  "New full pages",
  "Major redesigns",
  "Booking systems",
  "Payment features",
  "Advanced SEO campaigns",
  "Custom integrations",
];

export function HostingMaintenance() {
  return (
    <section className="section-pad bg-ink text-white">
      <div className="container-site">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <span className="mb-4 inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#b8b9ff]">
              Hosting &amp; Maintenance
            </span>
            <h2 className="text-balance text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
              Ongoing support, when you want it.
            </h2>
            <p className="mt-6 text-pretty text-lg leading-8 text-gray-400">
              With a monthly support plan, JWSites can host and manage your
              website after launch. You do not need to learn a website editor
              or handle technical maintenance yourself.
            </p>
            <p className="mt-5 text-pretty leading-7 text-gray-400">
              When something needs to change, simply email or text us. We make
              the update and keep your website current, secure, and working
              smoothly.
            </p>
            <p className="mt-5 text-sm leading-6 text-gray-500">
              Monthly service is optional. The website remains your one-time
              purchase whether or not you choose ongoing support.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300">
                <Server size={16} className="text-[#a5a6ff]" />
                Reliable hosting
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300">
                <Wrench size={16} className="text-[#a5a6ff]" />
                Ongoing care
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300">
                <Mail size={16} className="text-[#a5a6ff]" />
                Email or text updates
              </span>
            </div>
          </div>

          <div className="grid gap-5">
            <article className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-7 sm:p-8">
              <div className="flex items-start gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-accent text-white">
                  <MessageSquareText size={21} />
                </span>
                <div>
                  <h3 className="text-xl font-semibold tracking-[-0.025em]">
                    Small updates are easy
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-gray-400">
                    Maintenance plans are designed for the everyday changes
                    that keep your business information accurate.
                  </p>
                </div>
              </div>
              <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                {smallUpdates.map((update) => (
                  <li
                    key={update}
                    className="flex items-center gap-3 rounded-xl bg-white/[0.05] px-4 py-3 text-sm text-gray-200"
                  >
                    <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-accent/20 text-[#b8b9ff]">
                      <Check size={12} strokeWidth={3} />
                    </span>
                    {update}
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-[2rem] border border-white/10 bg-white p-7 text-ink sm:p-8">
              <div className="flex items-start gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-surface text-accent">
                  <Plus size={21} />
                </span>
                <div>
                  <h3 className="text-xl font-semibold tracking-[-0.025em]">
                    Larger additions are quoted separately
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    Bigger changes require more planning and build time. We
                    explain the scope and price clearly before starting.
                  </p>
                </div>
              </div>
              <ul className="mt-7 grid gap-x-6 gap-y-3 sm:grid-cols-2">
                {largerChanges.map((change) => (
                  <li
                    key={change}
                    className="flex items-center gap-3 border-b border-line pb-3 text-sm text-gray-700"
                  >
                    <span className="size-1.5 shrink-0 rounded-full bg-accent" />
                    {change}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
