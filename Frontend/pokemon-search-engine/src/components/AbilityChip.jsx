export default function AbilityChip({ ability }) {
  return (
    <span className="rounded-full border border-slate-200 bg-white/90 px-4 py-2 text-sm text-slate-700 shadow-sm shadow-slate-200/40 transition dark:border-slate-700 dark:bg-slate-900/90 dark:text-slate-100 dark:shadow-slate-950/50">
      {ability}
    </span>
  )
}
