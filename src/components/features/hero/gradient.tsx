export default function GradientBackground({ children }: { children: React.ReactNode }) {
    return (
      <div className="min-h-screen w-full bg-gradient-to-t from-black via-indigo-900 to-indigo-500 flex items-center justify-center">
        {children}
      </div>
    )
  }