import ThemeToggle from './ThemeToggle'

export default function Navbar({ theme, onToggleTheme }) {
  return (
    <header className="sticky top-0 z-40 bg-slate-50/85 backdrop-blur-xl border-b border-slate-200/70 dark:bg-slate-950/85 dark:border-slate-700/70">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-slate-500 dark:text-slate-400">
            Pokemon Search Engine
          </p>
          <h1 className="mt-1 text-2xl font-semibold tracking-tight text-slate-950 dark:text-white">
            PokeQuery
          </h1>
        </div>
        <ThemeToggle theme={theme} onToggle={onToggleTheme} />
      </div>
    </header>
  )
}
