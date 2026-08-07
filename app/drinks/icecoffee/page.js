"use client";

import Link from "next/link";

// page 2
export default function Coffee() {
  const items = [
    {
      name: "لاتيه",
      description: "",
      sizes: [
        { label: "S", price: 85 },
        { label: "D", price: 105 },
      ],
    },
    {
      name: "سبانيش لاتيه",
      description: "",
      sizes: [
        { label: "S", price: 95 },
        { label: "D", price: 110 },
      ],
    },
    {
      name: "موكا",
      description: "",
      sizes: [
        { label: "S", price: 95 },
        { label: "D", price: 110 },
      ],
    },
    {
      name: "كراميل ميكاتو",
      description: "",
      sizes: [
        { label: "S", price: 95 },
        { label: "D", price: 110 },
      ],
    },
    {
      name: "مليونير موكا",
      description: "",
      sizes: [
        { label: "S", price: 100 },
        { label: "D", price: 115 },
      ],
    },
    {
      name: "بستاشيو لاتيه",
      description: "",
      sizes: [
        { label: "S", price: 95 },
        { label: "D", price: 110 },
      ],
    },
    {
      name: "سولتد كراميل",
      description: "",
      sizes: [
        { label: "S", price: 90 },
        { label: "D", price: 105 },
      ],
    },
  ];

  return (
    <main className="nu-page text-right">
      <div className="nu-page__inner flex flex-col gap-8">
        <header className="text-center mb-2">
          <h1 className="nu-heading">~ ICE Coffee ~</h1>
          <p className="nu-heading-sub">آيس كوفي NU.</p>
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
