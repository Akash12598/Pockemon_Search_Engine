import AbilityChip from './AbilityChip'
import TypeBadge from './TypeBadge'

export default function PokemonCard({ pokemon }) {
  const { name, height, weight, baseExperience, types, abilities, image } = pokemon

  return (
    <article className="mx-auto w-full max-w-6xl overflow-hidden rounded-[2rem] border border-slate-200/70 bg-white/90 shadow-[0_30px_80px_-40px_rgba(15,23,42,0.35)] backdrop-blur-2xl dark:border-slate-700/70 dark:bg-slate-950/85">
      <div className="grid grid-cols-1 gap-8 px-6 py-10 lg:grid-cols-[1.2fr_1fr] lg:items-center lg:px-10 lg:py-12">
        <div className="flex flex-col gap-8">
          <div className="space-y-3">
            <p className="inline-flex rounded-full bg-indigo-100 px-4 py-1.5 text-sm font-semibold text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-200">
              Pokemon information
            </p>
            <div className="flex items-center gap-4">
              <h2 className="text-4xl font-semibold tracking-tight text-slate-950 dark:text-white">
                {name}
              </h2>
              <div className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                #{name?.length}
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              {types.map((type) => (
                <TypeBadge key={type} type={type} />
              ))}
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-3xl bg-slate-50 p-6 text-center shadow-sm shadow-slate-200/50 dark:bg-slate-900/90 dark:shadow-slate-950/40">
              <p className="text-sm uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">Height</p>
              <p className="mt-3 text-3xl font-semibold text-slate-950 dark:text-white">{height}</p>
            </div>
            <div className="rounded-3xl bg-slate-50 p-6 text-center shadow-sm shadow-slate-200/50 dark:bg-slate-900/90 dark:shadow-slate-950/40">
              <p className="text-sm uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">Weight</p>
              <p className="mt-3 text-3xl font-semibold text-slate-950 dark:text-white">{weight}</p>
            </div>
            <div className="rounded-3xl bg-slate-50 p-6 text-center shadow-sm shadow-slate-200/50 dark:bg-slate-900/90 dark:shadow-slate-950/40">
              <p className="text-sm uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">Base Exp</p>
              <p className="mt-3 text-3xl font-semibold text-slate-950 dark:text-white">{baseExperience}</p>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-slate-950 dark:text-white">Abilities</h3>
            <div className="flex flex-wrap gap-3">
              {abilities.map((ability) => (
                <AbilityChip key={ability} ability={ability} />
              ))}
            </div>
          </div>
        </div>

        <div className="relative flex items-center justify-center overflow-hidden rounded-[2rem] bg-gradient-to-br from-indigo-500 via-violet-500 to-sky-500 px-6 py-8 shadow-2xl shadow-indigo-500/20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.28),_transparent_40%)] opacity-70" />
          <div className="relative z-10 flex h-full w-full items-center justify-center">
            <img
              src={image}
              alt={name}
              className="h-[320px] w-[320px] max-w-full object-contain transition duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </article>
  )
}
