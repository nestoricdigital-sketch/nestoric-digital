import { Link } from "react-router-dom";
export default function ServiceCTA({ cta }) {
  return (
    <section className="py-24 bg-black text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-5xl font-bold max-w-3xl mx-auto">
          {cta.title}
        </h2>

        <p className="mt-6 text-lg text-gray-300">{cta.description}</p>

        <Link to="/contact">
          <button className="mt-10 bg-white text-black px-8 py-4 rounded-full font-semibold">
            {cta.buttonText}
          </button>
        </Link>
      </div>
    </section>
  );
}
