const typeStyles = {
  electric: 'from-yellow-300 to-amber-400 text-slate-900',
  fire: 'from-orange-400 to-rose-500 text-white',
  water: 'from-sky-400 to-blue-600 text-white',
  grass: 'from-emerald-400 to-green-600 text-slate-950',
  psychic: 'from-fuchsia-400 to-violet-600 text-white',
  ice: 'from-cyan-200 to-sky-400 text-slate-950',
  dragon: 'from-emerald-600 to-cyan-500 text-white',
  fairy: 'from-pink-300 to-fuchsia-500 text-slate-950',
  dark: 'from-slate-600 to-slate-800 text-white',
  ghost: 'from-violet-600 to-indigo-700 text-white',
  steel: 'from-slate-400 to-slate-600 text-slate-950',
  rock: 'from-amber-500 to-yellow-600 text-slate-950',
  ground: 'from-amber-500 to-orange-500 text-slate-950',
  bug: 'from-lime-400 to-emerald-500 text-slate-950',
  normal: 'from-slate-300 to-slate-400 text-slate-950',
  poison: 'from-violet-500 to-fuchsia-600 text-white',
  flying: 'from-sky-300 to-cyan-500 text-slate-950',
  fighting: 'from-rose-400 to-orange-500 text-white',
}

export default function TypeBadge({ type }) {
  const normalized = type?.toLowerCase() || 'normal'
  const classes = typeStyles[normalized] ?? typeStyles.normal

  return (
    <span className={`inline-flex rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] bg-gradient-to-r ${classes}`}>
      {normalized}
    </span>
  )
}
