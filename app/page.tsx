import Link from "next/link";

export default function Home() {
  const components = [
    { name: "Dosar medical personal", href: "/dosar", desc: "Centralizează istoricul, analizele, medicația și datele de la senzori." },
    { name: "Prevenție aplicată", href: "/preventie", desc: "Identifică factorii de risc, investigațiile recomandate și ce lipsește." },
    { name: "Baseline personal", href: "/baseline", desc: "Urmărește evoluția valorilor față de normalul tău." },
    { name: "Motor de risc", href: "/risc", desc: "Aplică scoruri validate (SCORE2, PhenoAge etc.) și modele experimentale." },
    { name: "Strat de acțiune", href: "/actiune", desc: "Transformă constatările în pași concreți." },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">Bun venit la KeepAlive</h2>
      <p className="mb-8 text-lg text-gray-600">
        Primul pas: infrastructura software pentru profilul de prevenție personală (Faza 1 din plan).
        Datele rămân locale / în Supabase configurat de tine. Niciun model nou încă — doar structură și reutilizare.
      </p>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {components.map((c) => (
          <Link
            key={c.href}
            href={c.href}
            className="block p-6 bg-white rounded-lg shadow hover:shadow-md transition border border-gray-100"
          >
            <h3 className="text-xl font-semibold text-blue-600 mb-2">{c.name}</h3>
            <p className="text-gray-600">{c.desc}</p>
          </Link>
        ))}
      </div>
      <div className="mt-12 p-6 bg-blue-50 rounded-lg">
        <h3 className="font-bold mb-2">Următorii pași (conform planului V4)</h3>
        <ul className="list-disc pl-5 space-y-1 text-sm">
          <li>Configurare Supabase (auth + tabele pentru profiluri)</li>
          <li>Registru de reutilizare (scoruri SCORE2, PREVENT, PhenoAge)</li>
          <li>Fișă de o pagină pentru medic</li>
          <li>Integrare date NHANES pentru baseline model</li>
        </ul>
      </div>
    </div>
  );
}
