"use client";

import Link from "next/link";

// page 6
export default function Dessert() {
  const items = [
    {
      name: "ريد فلفيت",
      description: "كيك ريد فيلفت بطبقات كريمية ناعمة.",
      sizes: [{ price: 90 }],
    },
    {
      name: "براونيز",
      description: "براونيز شوكليت طري من الداخل وغني بالنكهة.",
      sizes: [{ price: 90 }],
    },
    {
      name: "تشيز كيك",
      description: "تشيز كيك كريمي بقاعدة بسكويت مقرمشة.",
      sizes: [{ price: 95 }],
    },
    {
      name: "مولتن كيك",
      description: "كيك شوكليت ساخن بقلب سائل يذوب.",
      sizes: [{ price: 105 }],
    },
    {
      name: "شوكليت كيك",
      description: "كيك شوكليت غني بطبقات متعددة.",
      sizes: [{ price: 95 }],
    },
    {
      name: "أم علي",
      description: "طبق أم علي بالحليب والمكسرات والزبيب.",
      sizes: [{ price: 100 }],
    },
  ];

  return (
    <main className="nu-page text-right">
      <div className="nu-page__inner flex flex-col gap-8">
        <header className="text-center mb-2">
          <h1 className="nu-heading">• DESSERT •</h1>
          <p className="nu-heading-sub">
            تشكيلة من الحلويات الكلاسيكية والحديثة تناسب مختلف الأذواق.
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
