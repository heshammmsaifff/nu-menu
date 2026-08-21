"use client";

import Link from "next/link";

// page 3
export default function Frappe() {
  const items = [
    {
      name: "فانيليا",
      description: "",
      sizes: [
        { label: "M", price: 90 },
        { label: "L", price: 110 },
      ],
    },
    {
      name: "شوكلت",
      description: "",
      sizes: [
        { label: "M", price: 95 },
        { label: "L", price: 115 },
      ],
    },
    {
      name: "كوفي",
      description: "",
      sizes: [
        { label: "M", price: 95 },
        { label: "L", price: 115 },
      ],
    },
    {
      name: "فرابتشينو (شوكلت / كراميل)",
      description: "",
      sizes: [
        { label: "M", price: 110 },
        { label: "L", price: 130 },
      ],
    },
  ];

  return (
    <main className="nu-page text-right">
      <div className="nu-page__inner flex flex-col gap-8">
        <header className="text-center mb-2">
          <h1 className="nu-heading">• FRAPPE •</h1>
          <p className="nu-heading-sub">
            مشروبات فرابيه كريمية بلمسة قهوة مميزة.
          </p>
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
              <div className="nu-card__content w-full" dir="rtl">
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

        <Link href="/drinks" className="nu-back-button">
          العودة للخلف
        </Link>
      </div>
    </main>
  );
}
