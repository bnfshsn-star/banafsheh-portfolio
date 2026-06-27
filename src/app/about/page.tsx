import Navbar from "../Navbar.tsx";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden relative">

      <Navbar />

      {/* Background Blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="blob blob-1" />
        <div className="blob blob-2" />

        <div className="absolute top-40 left-1/4 w-32 h-32 rounded-full bg-violet-300/20 blur-3xl" />
        <div className="absolute bottom-40 right-1/4 w-40 h-40 rounded-full bg-fuchsia-300/20 blur-3xl" />
      </div>

      <section className="max-w-6xl mx-auto px-8 pt-40 pb-24">

        <div className="text-center">

          <div className="text-7xl mb-6">
            🦪
          </div>

          <h1
            className="
            text-6xl md:text-8xl
            font-bold
            bg-gradient-to-r
            from-white
            via-violet-200
            to-violet-400
            bg-clip-text
            text-transparent
            "
          >
            About Me
          </h1>

          <p className="text-zinc-400 text-lg md:text-xl mt-8 max-w-3xl mx-auto leading-relaxed">
            I am a multidisciplinary designer and visual artist exploring
            the intersection of art, innovation, storytelling and emotion.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 mt-24">

          {/* Left Card */}
          <div
            className="
            relative
            rounded-[40px]
            bg-white/5
            backdrop-blur-2xl
            border border-white/10
            p-10
            overflow-hidden
            group
            transition-all
            duration-500
            hover:scale-[1.02]
            hover:border-violet-400/30
            "
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-br from-violet-500/10 to-fuchsia-500/10" />

            <h2 className="text-3xl font-bold mb-6">
              Design Philosophy
            </h2>

            <p className="text-zinc-300 leading-relaxed">
              My work is inspired by nature, organic forms and emotional
              storytelling. Every project is approached as a balance between
              beauty, functionality and meaning.
            </p>
          </div>

          {/* Right Card */}
          <div
            className="
            relative
            rounded-[40px]
            bg-white/5
            backdrop-blur-2xl
            border border-white/10
            p-10
            overflow-hidden
            group
            transition-all
            duration-500
            hover:scale-[1.02]
            hover:border-violet-400/30
            "
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-br from-violet-500/10 to-fuchsia-500/10" />

            <h2 className="text-3xl font-bold mb-6">
              Creative Vision
            </h2>

            <p className="text-zinc-300 leading-relaxed">
              Through industrial design, graphic design and fashion design,
              I create experiences that connect aesthetics with purpose and
              transform ideas into tangible stories.
            </p>
          </div>

        </div>

        {/* Pearl Section */}

        <div
          className="
          mt-24
          rounded-[50px]
          bg-white/5
          backdrop-blur-2xl
          border border-white/10
          p-12
          text-center
          "
        >
          <div className="text-6xl mb-6">
            🤍
          </div>

          <h3 className="text-4xl font-bold mb-6">
            Like a Pearl
          </h3>

          <p className="max-w-2xl mx-auto text-zinc-400 leading-relaxed">
            Just as a pearl forms through time, patience and transformation,
            meaningful design emerges from exploration, refinement and care.
          </p>
        </div>

      </section>

    </main>
  );
}