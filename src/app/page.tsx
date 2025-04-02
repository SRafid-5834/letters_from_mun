import { Input } from "@/components/ui/input"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-red-950">
      <div className="container mx-auto px-4 py-32 flex flex-col items-center">
        <div className="text-center mb-8">
          <h1 className="text-6xl font-bold text-white mb-4">
            <span>Letters </span>
            <span className="text-gray-400">from MUN</span>
          </h1>
          <p className="text-gray-300 text-lg mb-2">
            Learn from your previous peers. See how they did! It&apos;s
          </p>
          <p className="text-gray-300 text-lg">
            free and accessible for all MUN students.
          </p>
        </div>
        
        <div className="w-full max-w-2xl">
          <div className="relative">
            <Input 
              type="search"
              placeholder="Search for a course or professor"
              className="w-full bg-gray-900/60 border-gray-700 text-white placeholder:text-gray-400 h-12 pr-12"
            />
            <button 
              className="absolute right-3 top-1/2 -translate-y-1/2"
              aria-label="Search"
            >
              <SearchIcon className="h-5 w-5 text-gray-400" />
            </button>
          </div>
        </div>

        <p className="text-gray-400 mt-8">
          Enjoy your course registration experience!
        </p>
      </div>
    </main>
  )
}

function SearchIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}
