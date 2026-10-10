# KeepAlive

Sistem personal de avertizare timpurie pentru evenimente biologice catastrofale.

Conform planului V4 (octombrie 2026):

- Primul pas software: infrastructură pentru **profilul de prevenție personală** (Faza 1).
- Cinci componente: Dosar, Prevenție aplicată, Baseline, Motor de risc, Strat de acțiune.
- Date publice (NHANES etc.) pentru modele; date personale rămân locale / în Supabase configurat privat.
- Regula de aur: fiecare strat nou intră doar dacă îmbunătățește măsurabil predicția.

## Stack

- Next.js 15 + React 19 + TypeScript
- Tailwind CSS
- Supabase (client pregătit — configurează cheile în `.env.local`)
- Deploy: Vercel (conectat la acest repo)

## Rulare locală

```bash
npm install
npm run dev
```

## Următoare iterații (cu Grok)

1. Configurare Supabase + autentificare + tabele profil.
2. Registru de reutilizare (implementare SCORE2 / PhenoAge calculatoare).
3. Fișă de o pagină pentru medic.
4. Pipeline NHANES pentru baseline model.

**Nu este un dispozitiv medical.** Pentru uz personal și cercetare. Discută orice rezultat cu un medic.
