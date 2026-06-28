import Navbar from "../Navbar";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden relative">

      <Navbar />

      {/* Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
      </div>

      <section className="max-w-6xl mx-auto px-6 pt-40 pb-24">

        {/* Hero */}
        <div className="text-center mb-20">

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
            Let's Create Something Meaningful
          </h1>

          <p className="mt-8 text-zinc-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Every project begins with a conversation.
            <br />
            Let's transform ideas into experiences.
          </p>

        </div>

        {/* Contact Form */}

        <div
          className="
          max-w-3xl
          mx-auto

          rounded-[50px]
          bg-white/5
          backdrop-blur-3xl

          border
          border-white/10

          p-10 md:p-14

          shadow-[0_0_50px_rgba(167,139,250,0.15)]
          "
        >
          <form className="space-y-6">

            <input
              type="text"
              placeholder="Your Name"
              className="
              w-full
              p-5
              rounded-2xl
              bg-white/5
              border border-white/10
              text-white
              outline-none
              focus:border-violet-400
              "
            />

            <input
              type="email"
              placeholder="Your Email"
              className="
              w-full
              p-5
              rounded-2xl
              bg-white/5
              border border-white/10
              text-white
              outline-none
              focus:border-violet-400
              "
            />

            <select
              className="
              w-full
              p-5
              rounded-2xl
              bg-black
              border border-white/10
              text-white
              outline-none
              focus:border-violet-400
              "
            >
              <option>Industrial Design</option>
              <option>Graphic Design</option>
              <option>Fashion Design</option>
              <option>Creative Collaboration</option>
            </select>

            <textarea
              rows={6}
              placeholder="Tell me about your project..."
              className="
              w-full
              p-5
              rounded-2xl
              bg-white/5
              border border-white/10
              text-white
              outline-none
              resize-none
              focus:border-violet-400
              "
            />

            <button
              className="
              w-full
              py-5
              rounded-full

              bg-gradient-to-r
              from-violet-300
              to-fuchsia-300

              text-black
              font-semibold

              transition-all
              duration-500

              hover:scale-105
              hover:shadow-[0_0_40px_rgba(192,132,252,0.6)]
              "
            >
              Send Message ✨
            </button>

          </form>
        </div>

        {/* Direct Contact */}

        <div className="mt-20">

          <h3 className="text-center text-zinc-400 uppercase tracking-[0.3em] mb-8">
            Connect
          </h3>

          <div className="flex flex-wrap justify-center gap-4">

            <a
              href="tel:+989000000000"
              className="
              px-6 py-4
              rounded-full
              bg-white/5
              backdrop-blur-xl
              border border-white/10
              hover:border-violet-300/40
              transition-all duration-500
              hover:scale-105
              "
            >
              📞 Phone
            </a>

            <a
              href="mailto:hello@example.com"
              className="
              px-6 py-4
              rounded-full
              bg-white/5
              backdrop-blur-xl
              border border-white/10
              hover:border-violet-300/40
              transition-all duration-500
              hover:scale-105
              "
            >
              ✉️ Email
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              className="
              px-6 py-4
              rounded-full
              bg-white/5
              backdrop-blur-xl
              border border-white/10
              hover:border-violet-300/40
              transition-all duration-500
              hover:scale-105
              "
            >
              📷 Instagram
            </a>

            <a
              href="https://t.me"
              target="_blank"
              className="
              px-6 py-4
              rounded-full
              bg-white/5
              backdrop-blur-xl
              border border-white/10
              hover:border-violet-300/40
              transition-all duration-500
              hover:scale-105
              "
            >
              ✈️ Telegram
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              className="
              px-6 py-4
              rounded-full
              bg-white/5
              backdrop-blur-xl
              border border-white/10
              hover:border-violet-300/40
              transition-all duration-500
              hover:scale-105
              "
            >
              💼 LinkedIn
            </a>

          </div>
        </div>

        {/* Availability */}

        <div
          className="
          mt-20
          rounded-[40px]
          bg-white/5
          backdrop-blur-2xl
          border border-white/10
          p-10
          max-w-4xl
          mx-auto
          "
        >
          <h2 className="text-3xl font-bold mb-8 text-center">
            Currently Available For
          </h2>

          <div className="grid md:grid-cols-2 gap-6 text-zinc-300">

            <div>• Freelance Projects</div>
            <div>• Design Consultations</div>
            <div>• Creative Collaborations</div>
            <div>• Brand Development</div>

          </div>
        </div>

        {/* Footer Quote */}

        <div className="text-center mt-24">

          <p className="text-zinc-500 italic text-lg">
            Where art, design and imagination
            <br />
            come together to create meaningful experiences.
          </p>

          <div className="mt-10">
            <h3 className="text-2xl font-bold">
              Banafsheh Sorayaneshan
            </h3>

            <p className="text-zinc-400 mt-2">
              Multidisciplinary Designer & Visual Artist
            </p>
          </div>

        </div>

      </section>

    </main>
  );
}