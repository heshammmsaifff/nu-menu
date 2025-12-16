"use client";

import Link from "next/link";

// DESSERT منيو
export default function Dessert() {
  const items = [
    {
      name: "ريد فيلفت",
      description: "كيك ريد فيلفت بطبقات كريمية ناعمة.",
      sizes: [{ price: 80 }],
    },
    {
      name: "براونيز",
      description: "براونيز شوكليت طري من الداخل وغني بالنكهة.",
      sizes: [{ price: 75 }],
    },
    {
      name: "سينابون",
      description: "رولات قرفة دافئة بصلصة كريمية.",
      sizes: [{ price: 75 }],
    },
    {
      name: "تشيزكيك",
      description: "تشيز كيك كريمي بقاعدة بسكويت مقرمشة.",
      sizes: [{ price: 75 }],
    },
    {
      name: "مولتن كيك",
      description: "كيك شوكليت ساخن بقلب سائل يذوب.",
      sizes: [{ price: 85 }],
    },
    {
      name: "شوكلينا كيك",
      description: "كيك شوكليت غني بطبقات متعددة.",
      sizes: [{ price: 80 }],
    },
    {
      name: "أم على",
      description: "طبق أم علي بالحليب والمكسرات والزبيب.",
      sizes: [{ price: 95 }],
    },
    {
      name: "تيراميسو",
      description:
        "حلوي إيطالية كلاسيكية باردة، طبقات من البسكويت المنغمس في القهوة مع الكريمة الغنية",
      sizes: [{ price: 85 }],
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
