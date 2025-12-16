"use client";

import Link from "next/link";

// FRUIT SALAD منيو
export default function FruitSalad() {
  const items = [
    {
      name: "فاكهة موسمية",
      description: "طبق فواكه مشكلة من أفضل فواكه الموسم.",
      sizes: [{ price: 150 }],
    },
  ];

  return (
    <main className="nu-page text-right">
      <div className="nu-page__inner flex flex-col gap-8">
        <header className="text-center mb-2">
          <h1 className="nu-heading">• FRUIT SALAD •</h1>
          <p className="nu-heading-sub">
            طبق فواكه موسمية طازجة بتقديم أنيق من NU.
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


