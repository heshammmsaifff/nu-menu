"use client";

import Link from "next/link";

// page 7
export default function Extra() {
  const items = [
    {
      name: "بولة ايس كريم",
      description: "سكوب إضافي من الآيس كريم حسب اختيارك.",
      sizes: [{ price: 25 }],
    },
    {
      name: "فخار تيك اواي",
      description: "طاجن فخار تيك أواي للحفاظ على التسوية والحرارة.",
      sizes: [{ price: 20 }],
    },
    {
      name: "فلافور",
      description: "إضافة نكهة للمشروبات أو الحلويات.",
      sizes: [{ price: 30 }],
    },
    {
      name: "مكسرات",
      description: "تشكيلة مكسرات طازجة إضافية.",
      sizes: [{ price: 20 }],
    },
    {
      name: "عسل",
      description: "إضافة عسل طبيعي خفيف وغني.",
      sizes: [{ price: 20 }],
    },
    {
      name: "قطع شوكلت",
      description: "قطع شوكليت إضافية لرفع جرعة الحلاوة.",
      sizes: [{ price: 35 }],
    },
    {
      name: "فواكه",
      description: "قطع فواكه طازجة إضافية.",
      sizes: [{ price: 35 }],
    },
    {
      name: "حليب",
      description: "إضافة حليب طازج للمشروب.",
      sizes: [{ price: 25 }],
    },
    {
      name: "كريم شانتيه",
      description: "إضافة كريم شانتيه.",
      sizes: [{ price: 20 }],
    },
    {
      name: "اكسترا شوت سبريسو",
      description: "إضافة شوت سبريسو.",
      sizes: [{ price: 25 }],
    },
  ];

  return (
    <main className="nu-page text-right">
      <div className="nu-page__inner flex flex-col gap-8">
        <header className="text-center mb-2">
          <h1 className="nu-heading">• EXTRA •</h1>
          <p className="nu-heading-sub">
            إضافات وحلويات جانبية تكمل تجربتك مع مشروبات nu.
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
