export default function ServiceHero({ service }) {
  return (
    <section className="max-w-7xl mx-auto py-24 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-[35%_65%] gap-16 items-center">
          {/* LEFT */}
          <div>
            {service.hero.badge && (
              <span className="text-sm uppercase tracking-widest text-gray-400">
                {service.hero.badge}
              </span>
            )}

            <h1 className="text-2xl lg:text-5xl font-bold mt-4 leading-tight">
              {service.hero.title}
            </h1>
          </div>

          {/* RIGHT */}
          <div>
            {/* {service.hero.image && (
              <img
                src={service.hero.image}
                alt={service.hero.title}
                className="mt-8 w-full mx-auto rounded-3xl object-contain"
                loading="eager"
              />
            )} */}
            {service.hero.description && (
              <p className="text-lg leading-8 text-gray-300">
                {service.hero.description}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
