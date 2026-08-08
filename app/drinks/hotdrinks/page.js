"use client";

import Link from "next/link";

// page 1
export default function HotDrinks() {
  const items = [
    {
      name: "شاي",
      description: "",
      sizes: [{ price: 30 }],
    },
    {
      name: "شاي كرك",
      description: "",
      sizes: [{ price: 70 }],
    },
    {
      name: "ميكس اعشاب",
      description: "",
      sizes: [{ price: 55 }],
    },
    {
      name: "سحلب مكسرات",
      description: "",
      sizes: [{ price: 70 }],
    },
    {
      name: "هوت سيدر",
      description: "",
      sizes: [{ price: 65 }],
    },
    {
      name: "هوت شوكلت",
      description: "",
      sizes: [{ price: 105 }],
    },
  ];

  return (
    <main className="nu-page text-right">
      <div className="nu-page__inner flex flex-col gap-8">
        <header className="text-center mb-2">
          <h1 className="nu-heading">• HOT DRINK •</h1>
          <p className="nu-heading-sub">
            مشروبات دافئة بطابع منزلي لترافقك في أجواء nu الهادئة.
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
