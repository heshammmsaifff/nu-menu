"use client";

import Link from "next/link";

// STICK FRUIT منيو
export default function StickFruit() {
  const items = [
    {
      name: "بنانا ستيك",
      description: "شرائح موز على أعواد مع صوص أو توبينج حسب اختيارك.",
      sizes: [{ price: 40 }],
    },
    {
      name: "ستروبرى ستيك",
      description: "فراولة على أعواد لتقديم خفيف وممتع.",
      sizes: [{ price: 40 }],
    },
    {
      name: "مارشميلو ستيك",
      description: "قطع مارشميلو على أعواد يمكن غمسها في الصوص.",
      sizes: [{ price: 50 }],
    },
    {
      name: "ستيك NU",
      description: "تقديم خاص من NU مزيج بين الفواكه والحلويات على أعواد.",
      sizes: [{ price: 60 }],
    },
  ];

  return (
    <main className="nu-page text-right">
      <div className="nu-page__inner flex flex-col gap-8">
        <header className="text-center mb-2">
          <h1 className="nu-heading">• STICK FRUIT •</h1>
          <p className="nu-heading-sub">
            فواكه على أعواد بطريقة مرحة وخفيفة لمشاركة اللحظات.
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
