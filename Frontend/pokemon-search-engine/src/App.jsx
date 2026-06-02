import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import SearchBar from './components/SearchBar'
import PokemonCard from './components/PokemonCard'
import Loader from './components/Loader'
import ErrorCard from './components/ErrorCard'
import RecentSearches from './components/RecentSearches'
import { getPokemon } from './services/pokemonApi'
import useTheme from './hooks/useTheme'

const STORAGE_KEY = 'pokemon-search-history'

function App() {
  const { theme, toggleTheme } = useTheme()
  const [query, setQuery] = useState('')
  const [pokemon, setPokemon] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [recentSearches, setRecentSearches] = useState([])

  useEffect(() => {
    const stored = JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]')
    setRecentSearches(Array.isArray(stored) ? stored : [])
  }, [])

  const saveRecentSearch = (name) => {
    const normalized = name.toLowerCase().trim()
    if (!normalized) return
    setRecentSearches((current) => {
      const updated = [normalized, ...current.filter((item) => item !== normalized)].slice(0, 5)
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
      return updated
    })
  }

  const searchPokemon = async (name) => {
    if (!name.trim()) {
      setError('Please enter a Pokemon name')
      setPokemon(null)
      return
    }

    try {
      setLoading(true)
      setError('')
      const data = await getPokemon(name)
      setPokemon(data)
      saveRecentSearch(name)
    } catch (err) {
      setPokemon(null)
      setError(err.response?.status === 404 ? 'Pokemon not found' : 'Unable to fetch Pokemon')
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    searchPokemon(query)
  }

  const handleSelectRecent = (name) => {
    setQuery(name)
    searchPokemon(name)
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-900 transition-colors duration-500 dark:bg-slate-950 dark:text-slate-100">
      <Navbar theme={theme} onToggleTheme={toggleTheme} />

      <main className="relative overflow-hidden pb-20">
        <div className="absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.19),_transparent_35%),radial-gradient(circle_at_20%_20%,_rgba(59,130,246,0.14),_transparent_25%)] backdrop-blur-2xl" />
        <div className="relative mx-auto max-w-7xl px-4 pt-10 sm:px-6 lg:px-8">
          <section className="rounded-[2rem] border border-white/10 bg-slate-950/95 px-6 py-10 shadow-soft shadow-slate-950/20 backdrop-blur-xl sm:px-10 lg:px-14">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-3 rounded-full bg-slate-900/80 px-4 py-2 text-sm text-slate-200 shadow-lg shadow-slate-950/20 ring-1 ring-white/10">
                  <span className="text-xl">⚡</span>
                  <span>Modern Pokemon search with API-driven results.</span>
                </div>
                <div className="max-w-xl space-y-4">
                  <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                    Search Pokemon instantly with premium discovery.
                  </h1>
                  <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                    Enter a Pokemon name to explore stats, abilities, and type badges with a responsive dark mode experience.
                  </p>
                </div>
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="space-y-2">
                    <p className="text-sm uppercase tracking-[0.28em] text-slate-500">Fast search</p>
                    <p className="text-3xl font-semibold text-white">Beautiful results instantly.</p>
                  </div>
                  <div className="rounded-3xl bg-slate-900/80 px-5 py-4 text-sm text-slate-300 ring-1 ring-white/10">
                    Type <span className="font-semibold text-white">pikachu</span> and press Enter.
                  </div>
                </div>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-slate-900/90 p-8 shadow-soft shadow-slate-950/40 backdrop-blur-xl">
                <p className="mb-4 text-sm uppercase tracking-[0.3em] text-slate-500">Your search</p>
                <SearchBar value={query} onChange={(event) => setQuery(event.target.value)} onSubmit={handleSubmit} disabled={loading} />
                <p className="mt-4 text-sm leading-6 text-slate-400">
                  Recent searches are stored locally in your browser so you can revisit them quickly.
                </p>
              </div>
            </div>
          </section>

          <div className="mt-10 space-y-8">
            <RecentSearches searches={recentSearches} onSelect={handleSelectRecent} />

            <section className="mx-auto max-w-6xl">
              {loading ? (
                <Loader />
              ) : error ? (
                <ErrorCard message={error} />
              ) : pokemon ? (
                <PokemonCard pokemon={pokemon} />
              ) : (
                <div className="rounded-[2rem] border border-slate-200/50 bg-slate-50/80 p-10 text-center shadow-lg shadow-slate-200/50 backdrop-blur dark:border-slate-700/50 dark:bg-slate-900/75 dark:text-slate-200">
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">Ready</p>
                  <h2 className="mt-4 text-3xl font-semibold text-slate-950 dark:text-white">Search a Pokemon to see its profile.</h2>
                  <p className="mt-3 max-w-2xl mx-auto text-slate-600 dark:text-slate-300">
                    Example searches: <span className="font-semibold text-slate-900 dark:text-white">pikachu, charizard, bulbasaur</span>.
                  </p>
                </div>
              )}
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
