"use client";

import Link from "next/link";

// EXTRA منيو
export default function Extra() {
  const items = [
    {
      name: "مكسرات + عسل",
      description: "مزيج مكسرات طازجة مع عسل طبيعي لإضافة غنية.",
      sizes: [{ price: 40 }],
    },
    {
      name: "مكسرات",
      description: "تشكيلة مكسرات تقدم كإضافة جانبية أو سناك.",
      sizes: [{ price: 30 }],
    },
    {
      name: "صوص",
      description: "أنواع صوص مختلفة لتزيين المشروبات والحلويات.",
      sizes: [{ price: 30 }],
    },
    {
      name: "بوله",
      description: "سكوب إضافي من الآيس كريم حسب اختيارك.",
      sizes: [{ price: 25 }],
    },
    {
      name: "طاجن أم على",
      description:
        "طاجن فخار مصري أصلي، يتحمل حرارة الفرن ويمنح الطواجن طعم وتسوية مثالية..",
      sizes: [{ price: 20 }],
    },
    {
      name: "قطع شوكليت",
      description: "قطع شوكليت إضافية لرفع جرعة الحلاوة.",
      sizes: [{ price: 35 }],
    },
  ];

  return (
    <main className="nu-page text-right">
      <div className="nu-page__inner flex flex-col gap-8">
        <header className="text-center mb-2">
          <h1 className="nu-heading">• EXTRA •</h1>
          <p className="nu-heading-sub">
            إضافات وحلويات جانبية تكمل تجربتك مع مشروبات NU.
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
