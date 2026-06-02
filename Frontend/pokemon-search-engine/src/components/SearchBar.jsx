export default function SearchBar({ value, onChange, onSubmit, disabled }) {
  return (
    <form className="flex w-full max-w-3xl gap-3" onSubmit={onSubmit}>
      <label htmlFor="pokemon-search" className="sr-only">
        Search Pokemon by name
      </label>
      <input
        id="pokemon-search"
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Search by Pokemon name, e.g. pikachu"
        disabled={disabled}
        className="w-full rounded-3xl border border-slate-200 bg-white/90 px-5 py-4 text-base text-slate-900 shadow-sm outline-none transition focus:border-indigo-400 focus:ring-4 focus:ring-indigo-200/40 disabled:cursor-not-allowed disabled:opacity-70 dark:border-slate-700 dark:bg-slate-900/90 dark:text-slate-100 dark:focus:border-indigo-400 dark:focus:ring-indigo-500/20"
      />
      <button
        type="submit"
        disabled={disabled}
        className="inline-flex items-center justify-center rounded-3xl bg-gradient-to-r from-indigo-600 to-violet-600 px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition hover:-translate-y-0.5 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60"
      >
        Search
      </button>
    </form>
  )
}
