export default function Cardiovascular() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-2">Cardiovascular</h2>
      <p className="text-gray-600 mb-6">
        Scoruri validate: SCORE2 (ghiduri europene) și PREVENT (AHA 2023).
        Rezultat: risc de evenimente fatale și non-fatale pe 10 ani.
      </p>
      <div className="bg-white rounded-xl border p-6">
        <p className="text-sm text-gray-500">
          Placeholder — următoarea iterație: calculator SCORE2 / PREVENT pe datele din Sănătate-Familie
          (vârstă, sex, tensiune, colesterol, HDL, diabet, fumat).
        </p>
      </div>
    </div>
  );
}
