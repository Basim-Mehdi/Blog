import Link from '@/components/Link'

export default function NotFound() {
  return (
<div className="flex flex-col items-center justify-center min-h-screen px-4 text-center bg-gradient-to-b from-gray-50 to-gray-200 dark:from-gray-900 dark:to-gray-800">
  <div className="flex flex-col md:flex-row md:items-center md:space-x-8">
    <h1 className="text-7xl md:text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 animate-pulse">
      👾 404 
    </h1>
    <div className="mt-6 md:mt-0">
      <p className="mb-4 text-2xl font-bold text-gray-800 dark:text-gray-100">
        Oops! This page vanished into the cyber void.
      </p>
      <p className="mb-8 text-gray-600 dark:text-gray-300">
        But don’t worry — there’s plenty to explore back on our homepage.
      </p>
      <Link
        href="/"
        className="inline-block rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 text-lg font-medium text-white shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl focus:outline-none"
      >
        🔙 Back to Homepage
      </Link>
    </div>
  </div>
</div>
  )
}
