import Navbar from "../Navbar.tsx";

export default function PortfolioPage() {
  const projects = [
    {
      category: "Industrial Design",
      title: "Product Concept",
      description:
        "Exploring innovative forms, functionality and user experience.",
    },
    {
      category: "Graphic Design",
      title: "Brand Identity",
      description:
        "Visual storytelling through typography, color and composition.",
    },
    {
      category: "Fashion Design",
      title: "Collection Design",
      description:
        "Experimental silhouettes inspired by organic forms and emotion.",
    },
    {
      category: "Industrial Design",
      title: "Furniture Design",
      description:
        "Creating objects that balance beauty and purpose.",
    },
    {
      category: "Graphic Design",
      title: "Editorial Design",
      description:
        "Elegant layouts and meaningful visual narratives.",
    },
    {
      category: "Fashion Design",
      title: "Textile Exploration",
      description:
        "Materials, texture and wearable artistic expression.",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden relative">

      <Navbar />

      {/* Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
      </div>

      <section className="max-w-7xl mx-auto px-6 pt-40 pb-24">

        {/* Hero */}

        <div className="text-center mb-24">

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
            Portfolio
          </h1>

          <p className="mt-8 text-zinc-400 max-w-3xl mx-auto text-lg">
            A curated selection of work across industrial design,
            graphic design and fashion design.
          </p>

        </div>

        {/* Projects */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <div
              key={index}
              className="
              group
              relative
              overflow-hidden

              rounded-[40px]

              bg-white/5
              backdrop-blur-3xl

              border border-white/10

              p-8

              min-h-[320px]

              transition-all
              duration-700

              hover:scale-[1.03]
              hover:border-violet-300/40
              hover:shadow-[0_0_50px_rgba(167,139,250,0.25)]
              "
            >
              {/* Glow */}
              <div
                className="
                absolute
                inset-0

                opacity-0
                group-hover:opacity-100

                transition-all
                duration-700

                bg-gradient-to-br
                from-violet-400/10
                to-fuchsia-400/10
                "
              />

              {/* Pearl */}
              <div
                className="
                absolute
                top-6
                right-6

                w-12
                h-12

                rounded-full

                bg-gradient-to-br
                from-white
                to-violet-200

                opacity-70

                group-hover:scale-125

                transition-all
                duration-700
                "
              />

              <div className="relative z-10">

                <p className="text-violet-300 text-sm mb-4 tracking-widest uppercase">
                  {project.category}
                </p>

                <h2 className="text-3xl font-bold mb-5">
                  {project.title}
                </h2>

                <p className="text-zinc-400 leading-relaxed">
                  {project.description}
                </p>

                <button
                  className="
                  mt-10

                  px-6 py-3

                  rounded-full

                  bg-white/10
                  backdrop-blur-xl

                  border border-white/10

                  hover:border-violet-300/40

                  transition-all
                  duration-500
                  "
                >
                  View Project
                </button>

              </div>

            </div>
          ))}
        </div>

        {/* Footer */}

        <div className="text-center mt-24">

          <p className="text-zinc-500 italic">
            Design is the transformation of imagination into experience.
          </p>

        </div>

      </section>

    </main>
  );
}