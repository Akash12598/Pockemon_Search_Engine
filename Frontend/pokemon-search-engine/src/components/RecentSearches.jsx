export default function RecentSearches({ searches, onSelect }) {
  if (!searches.length) return null

  return (
    <section className="mx-auto w-full max-w-3xl rounded-[2rem] border border-slate-200/70 bg-slate-50/80 p-6 shadow-sm shadow-slate-200/50 backdrop-blur dark:border-slate-700/70 dark:bg-slate-900/75 dark:shadow-slate-950/30">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">Recent searches</p>
          <h3 className="mt-2 text-lg font-semibold text-slate-950 dark:text-white">Your last 5 lookups</h3>
        </div>
      </div>
      <div className="mt-4 flex flex-wrap gap-3">
        {searches.map((search) => (
          <button
            key={search}
            type="button"
            onClick={() => onSelect(search)}
            className="rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-indigo-300 hover:bg-indigo-50 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:hover:border-indigo-500 dark:hover:bg-slate-800"
          >
            {search}
          </button>
        ))}
      </div>
    </section>
  )
}
