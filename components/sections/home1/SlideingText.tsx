

export default function SlideingText() {
  const points = [
    "Real-Time Production Monitoring",
    "Downtime Tracking & Root Cause",
    "30–60 Day Deployment",
    "Inspection + Dispatch Tracking",
    "OEE + Shift Performance Reports",
    "Works Alongside Existing ERP",
    "Operator-Level Visibility"
  ];

  return (
    <section className="sliding-text-three overflow-hidden">
      <div className="sliding-text-three__wrap flex whitespace-nowrap">
        {/* Original List */}
        <ul className="sliding-text-three__list list-unstyled flex animate-marquee">
          {points.map((point, index) => (
            <li key={index}>
              <h2 data-hover={point} className="sliding-text-three__title">{point}</h2>
              <span className="icon-star"></span>
            </li>
          ))}
        </ul>

        {/* Duplicate List for Infinite Loop */}
        <ul
          className="sliding-text-three__list list-unstyled flex animate-marquee"
          aria-hidden="true"
        >
          {points.map((point, index) => (
            <li key={index}>
              <h2 data-hover={point} className="sliding-text-three__title">{point}</h2>
              <span className="icon-star"></span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
