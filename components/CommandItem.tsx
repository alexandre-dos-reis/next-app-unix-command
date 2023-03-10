import { ReactNode } from "react";

interface Props {
  i: string; // The command
  children: ReactNode; // The description
  env?: string; // The environment for the user, ex: $
}

export const CommandItem = (p: Props) => (
  <section className="not-prose mb-10 w-full rounded-lg">
    <div className="mb-3">{p.children}</div>
    <div className="flex items-center gap-3">
      <code className="bg-slate-800 whitespace-nowrap overflow-x-auto overflow-y-hidden font-mono rounded-lg text-gray-100 p-2 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-300">
        <span className="text-gray-500">{p.env ?? "$"}</span> {p.i}
      </code>
    </div>
  </section>
);
