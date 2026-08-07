"use client";

import Link from "next/link";

// page 2
export default function V60Speciality() {
  const items = [
    {
      name: "Santos (Br)",
      description: "the CARNIVAL",
      sizes: [{ price: 100 }],
    },
    {
      name: "كولومبيا سوبريمو",
      description: "Spice, CARAMEL",
      sizes: [{ price: 110 }],
    },
    {
      name: "اثيوبيا يوجراشيف",
      description: "tea Rose, peach",
      sizes: [{ price: 130 }],
    },
  ];

  return (
    <main className="nu-page text-right">
      <div className="nu-page__inner flex flex-col gap-8">
        <header className="text-center mb-2">
          <h1 className="nu-heading">• V60 Speciality •</h1>
          <p className="nu-heading-sub">
            قهوة V60 مختصة بنكهات فاخرة ومحاصيل عالمية.
          </p>
        </header>

        {items.map((item, i) => (
          <div key={i}>
            <div className="nu-card">
              <div className="nu-card__prices">
                {item.sizes.map((size, idx) => (
                  <span key={idx} className="nu-card__price">
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
