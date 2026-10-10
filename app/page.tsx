import Link from "next/link";

const domains = [
  {
    name: "Cardiovascular",
    href: "/evaluare/cardiovascular",
    desc: "SCORE2 / PREVENT — risc pe 10 ani din factori clasici",
    color: "border-red-200 bg-red-50",
  },
  {
    name: "Metabolic",
    href: "/evaluare/metabolic",
    desc: "HbA1c, glucoză, insulină, lipide — sănătate metabolică",
    color: "border-amber-200 bg-amber-50",
  },
  {
    name: "Inflamație",
    href: "/evaluare/inflamatie",
    desc: "hs-CRP și markeri asociați",
    color: "border-orange-200 bg-orange-50",
  },
  {
    name: "Vârstă biologică",
    href: "/evaluare/varsta",
    desc: "PhenoAge din markeri de rutină (comparat cu Inner Age)",
    color: "border-purple-200 bg-purple-50",
  },
];

const components = [
  { name: "Dosar medical", href: "/dosar", desc: "Analize, Oura, epigenetic, medicație — fiecare cu data și sursa" },
  { name: "Prevenție aplicată", href: "/preventie", desc: "Ce investigații lipsesc, ce riscuri sunt necontrolate (ghiduri)" },
  { name: "Baseline personal", href: "/baseline", desc: "Abateri față de normalul tău (Oura + istoric sânge)" },
  { name: "Motor de risc", href: "/risc", desc: "Ansamblu de scoruri validate — nu un singur procent" },
  { name: "Strat de acțiune", href: "/actiune", desc: "Pași concreți: măsurătoare, investigație, discuție cu medicul" },
];

export default function Home() {
  return (
    <div>
      <div className="mb-10">
        <h2 className="text-3xl font-bold mb-2">KeepAlive</h2>
        <p className="text-lg text-gray-600 max-w-3xl">
          Prima versiune — evaluare pe domenii din scoruri validate (PhenoAge, SCORE2, PREVENT),
          pe markerii pe care îi ai deja. Algoritmul compus vine după, testat pe date publice.
        </p>
      </div>

      <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-3">
        Evaluare pe domenii
      </h3>
      <div className="grid gap-4 md:grid-cols-2 mb-12">
        {domains.map((d) => (
          <Link
            key={d.href}
            href={d.href}
            className={`block p-5 rounded-xl border ${d.color} hover:shadow-md transition`}
          >
            <h4 className="font-semibold text-lg mb-1">{d.name}</h4>
            <p className="text-sm text-gray-700">{d.desc}</p>
          </Link>
        ))}
      </div>

      <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-3">
        Componente
      </h3>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {components.map((c) => (
          <Link
            key={c.href}
            href={c.href}
            className="block p-5 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition"
          >
            <h4 className="font-semibold text-blue-700 mb-1">{c.name}</h4>
            <p className="text-sm text-gray-600">{c.desc}</p>
          </Link>
        ))}
      </div>

      <div className="mt-12 p-6 bg-blue-50 rounded-xl border border-blue-100">
        <h3 className="font-bold mb-2">Conform planului V5</h3>
        <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
          <li>Registrul de reutilizare este documentul central</li>
          <li>Scoruri validate pe datele existente înainte de orice model nou</li>
          <li>Evaluare pe domenii, nu un singur procent</li>
          <li>Dispozitivul non-invaziv doar dacă analiza lacunelor îl cere</li>
        </ul>
      </div>
    </div>
  );
}
