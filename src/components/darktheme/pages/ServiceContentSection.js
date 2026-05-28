export default function ServiceContentSection({ section }) {
  return (
    <section className="py-16">
      <div className="container mx-auto lg:px-4 max-w-7xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          {section.heading}
        </h2>

        <p className="text-lg leading-8 text-white">{section.content}</p>

        {section.points && (
          <ul className="mt-8 space-y-4">
            {section.points.map((item, index) => (
              <li key={index} className="flex gap-3">
                <span>•</span>

                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
