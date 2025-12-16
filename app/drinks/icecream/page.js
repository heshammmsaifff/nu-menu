"use client";

import Link from "next/link";

// ICE CREAM منيو
export default function IceCream() {
  const items = [
    {
      name: "طن داما",
      description: "طاجن آيس كريم مع صوص وتوبينج غني.",
      sizes: [{ price: 85 }],
    },
    {
      name: "سكوب",
      description: "سكوب آيس كريم بالنكهة المفضلة لديك.",
      sizes: [{ price: 100 }],
    },
  ];

  return (
    <main className="nu-page text-right">
      <div className="nu-page__inner flex flex-col gap-8">
        <header className="text-center mb-2">
          <h1 className="nu-heading">• ICE CREAM •</h1>
          <p className="nu-heading-sub">
            آيس كريم غني يقدم مع توبينج مميز من NU.
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
              <div className="nu-card__content" dir="rtl">
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


