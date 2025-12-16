"use client";

import Link from "next/link";

// WAFFLES منيو
export default function Waffles() {
  const items = [
    {
      name: "بستاشيو",
      description: "وافلز مع صوص فستق غني وتوبينج مميز.",
      sizes: [{ price: 100 }],
    },
    {
      name: "نوتيلا",
      description: "وافلز مغطى بصوص نوتيلا الشهير.",
      sizes: [{ price: 90 }],
    },
    {
      name: "لوتس",
      description: "وافلز بصوص بسكويت اللوتس وتزيين خفيف.",
      sizes: [{ price: 90 }],
    },
    {
      name: "شوكليت",
      description: "وافلز بصوص شوكليت كلاسيكي غني.",
      sizes: [{ price: 85 }],
    },
    {
      name: "كراميل",
      description: "وافلز مع صوص كراميل كريمي وحلو.",
      sizes: [{ price: 85 }],
    },
    {
      name: "وايت شوكليت",
      description: "وافلز بصوص شوكليت أبيض ناعم.",
      sizes: [{ price: 85 }],
    },
    {
      name: "family NU",
      description: "وافلز عائلي متنوع بالتوبينج والصوصات.",
      sizes: [{ price: 140 }],
    },
  ];

  return (
    <main className="nu-page text-right">
      <div className="nu-page__inner flex flex-col gap-8">
        <header className="text-center mb-2">
          <h1 className="nu-heading">• WAFFLES •</h1>
          <p className="nu-heading-sub">
            وافلز مقرمش من الخارج وطري من الداخل مع صوصات غنية.
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

        <Link href="/drinks" className="nu-back-button">
          العودة للخلف
        </Link>
      </div>
    </main>
  );
}
