export default function ServicesPage() {
  const services = [
    {
      title: "Industrial Design",
      icon: "⚙️",
      items: [
        "Product Design",
        "Furniture Design",
        "3D Modeling",
        "Prototype Development",
        "Design Research",
      ],
    },
    {
      title: "Graphic Design",
      icon: "🎨",
      items: [
        "Brand Identity",
        "Logo Design",
        "Packaging Design",
        "Editorial Design",
        "Art Direction",
      ],
    },
    {
      title: "Fashion Design",
      icon: "👗",
      items: [
        "Collection Design",
        "Fashion Illustration",
        "Textile Design",
        "Trend Research",
        "Creative Direction",
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden">

      {/* Aurora Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
      </div>

      <section className="max-w-7xl mx-auto px-8 py-32">

        <h1 className="text-7xl font-bold text-center mb-8 bg-gradient-to-r from-white via-violet-200 to-violet-400 bg-clip-text text-transparent">
          Services
        </h1>

        <p className="text-center text-zinc-400 text-xl max-w-3xl mx-auto mb-24">
          From product innovation and brand identity to fashion concepts,
          every project is crafted with strategy, beauty and purpose.
        </p>

        <div className="grid md:grid-cols-3 gap-10">

          {services.map((service) => (
            <div
              key={service.title}
              className="
              group
              relative
              overflow-hidden
              rounded-[32px]
              p-10

              bg-white/5
              backdrop-blur-3xl

              border border-white/10

              transition-all
              duration-700

              hover:-translate-y-4
              hover:border-violet-400/40

              hover:bg-white/10

              hover:shadow-[0_0_60px_rgba(167,139,250,0.35)]
              "
            >

              {/* Glass Glow */}
              <div
                className="
                absolute
                inset-0
                opacity-0
                group-hover:opacity-100
                transition-all
                duration-700
                bg-gradient-to-br
                from-violet-400/20
                via-white/5
                to-fuchsia-400/20
                "
              />

              <div className="relative z-10">

                <div className="text-6xl mb-8 transition-transform duration-700 group-hover:scale-125">
                  {service.icon}
                </div>

                <h2 className="text-3xl font-bold mb-8">
                  {service.title}
                </h2>

                <ul className="space-y-4 text-zinc-300">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="
                      transition-all
                      duration-500
                      group-hover:text-white
                      "
                    >
                      ✦ {item}
                    </li>
                  ))}
                </ul>

              </div>

            </div>
          ))}

        </div>

      </section>
    </main>
  );
}