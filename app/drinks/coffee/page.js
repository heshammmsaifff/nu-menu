"use client";

import Link from "next/link";

// page 1
export default function Coffee() {
  const items = [
    {
      name: "تركي",
      description: "",
      sizes: [
        { label: "S", price: 47 },
        { label: "D", price: 60 },
      ],
    },
    {
      name: "فرنساوي",
      description: "",
      sizes: [{ price: 65 }],
    },
    {
      name: "بندق",
      description: "",
      sizes: [{ price: 70 }],
    },
    {
      name: "اسبريسو",
      description: "",
      sizes: [
        { label: "S", price: 55 },
        { label: "D", price: 65 },
      ],
    },
    {
      name: "ميكاتو",
      description: "",
      sizes: [{ price: 65 }],
    },
    {
      name: "كورتادو",
      description: "",
      sizes: [{ price: 75 }],
    },
    {
      name: "فلات وايت",
      description: "",
      sizes: [{ price: 75 }],
    },
    {
      name: "لاتيه",
      description: "",
      sizes: [{ price: 87 }],
    },
    {
      name: "كابتشينو",
      description: "",
      sizes: [{ price: 90 }],
    },
    {
      name: "نسكافيه",
      description: "",
      sizes: [{ price: 85 }],
    },
    {
      name: "سبانش لاتيه",
      description: "",
      sizes: [{ price: 100 }],
    },
    {
      name: "امريكانو",
      description: "",
      sizes: [{ price: 85 }],
    },
    {
      name: "قهوه عربي",
      description: "",
      sizes: [{ price: 70 }],
    },
  ];

  return (
    <main className="nu-page text-right">
      <div className="nu-page__inner flex flex-col gap-8">
        <header className="text-center mb-2">
          <h1 className="nu-heading">~ Hot Coffee ~</h1>
          <p className="nu-heading-sub">
            قهوة مختارة بعناية لتحصل على توازن مثالي بين النكهة والقوام.
          </p>
        </header>

        {items.map((item, i) => (
          <div key={i} className="relative">
            {item.sizes.length > 1 && item.sizes[0].label && (
              <div className="nu-size-chips">
                {item.sizes.map((size, idx) => (
                  <span key={idx} className="nu-size-chip">
                    {size.label}
                  </span>
                ))}
              </div>
            )}

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
