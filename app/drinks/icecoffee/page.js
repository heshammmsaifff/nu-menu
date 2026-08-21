"use client";

import Link from "next/link";

// page 2
export default function Coffee() {
  const items = [
    {
      name: "ايس لاتيه",
      description: "",
      sizes: [
        { label: "M", price: 90 },
        { label: "L", price: 110 },
      ],
    },
    {
      name: "سبانيش لاتيه",
      description: "",
      sizes: [
        { label: "M", price: 100 },
        { label: "L", price: 120 },
      ],
    },
    {
      name: "ايس موكا",
      description: "",
      sizes: [
        { label: "M", price: 100 },
        { label: "L", price: 120 },
      ],
    },
    {
      name: "كراميل ميكاتو",
      description: "",
      sizes: [
        { label: "M", price: 100 },
        { label: "L", price: 120 },
      ],
    },
    {
      name: "مليونير موكا",
      description: "",
      sizes: [
        { label: "M", price: 110 },
        { label: "L", price: 130 },
      ],
    },
    {
      name: "بستاشيو لاتيه",
      description: "",
      sizes: [
        { label: "M", price: 100 },
        { label: "L", price: 120 },
      ],
    },
    {
      name: "سولتد كراميل",
      description: "",
      sizes: [
        { label: "M", price: 100 },
        { label: "L", price: 120 },
      ],
    },
  ];

  return (
    <main className="nu-page text-right">
      <div className="nu-page__inner flex flex-col gap-8">
        <header className="text-center mb-2">
          <h1 className="nu-heading">~ ICE Coffee ~</h1>
          <p className="nu-heading-sub">آيس كوفي nu.</p>
        </header>

        {items.map((item, i) => (
          <div key={i} className="relative">
            <div className="nu-size-chips">
              {item.sizes.map((size, idx) => (
                <span key={idx} className="nu-size-chip">
                  {size.label}
                </span>
              ))}
            </div>

            <div className="nu-card">
              <div className="nu-card__prices">
                {item.sizes.map((size, idx) => (
                  <span
                    key={idx}
                    className={`nu-card__price ${
                      item.sizes.length === 1 ? "ml-[15px]" : ""
                    }`}
                  >
                    <span>{size.price}</span>L.E
                  </span>
                ))}
              </div>
              <div className="nu-card__content  w-full" dir="rtl">
                <span className="nu-card__name">{item.name}</span>
                {item.description && (
                  <span className="nu-card__description">
                    {item.description}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}

        {/* زر العودة */}
        <Link href="/drinks" className="nu-back-button">
          العودة للخلف
        </Link>
      </div>
    </main>
  );
}
