export default function ErrorCard({ message = 'Pokemon not found' }) {
  return (
    <div className="mx-auto w-full max-w-3xl rounded-[2rem] border border-red-200/80 bg-red-50/80 p-8 text-center shadow-lg shadow-red-200/30 dark:border-red-500/30 dark:bg-red-950/60 dark:text-red-100 sm:p-10">
      <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-100 text-3xl text-red-600 shadow-inner shadow-red-100/80 dark:bg-red-900/70 dark:text-red-300">
        ❌
      </div>
      <h2 className="text-2xl font-semibold text-slate-950 dark:text-white">Uh oh!</h2>
      <p className="mt-3 text-slate-600 dark:text-slate-300">{message}. Try another name or check spelling.</p>
    </div>
  )
}
