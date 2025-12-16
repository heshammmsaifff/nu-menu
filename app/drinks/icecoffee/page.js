"use client";

import Link from "next/link";

// قائمة ICE COFFEE من المنيو
export default function IceCoffee() {
  const items = [
    {
      name: "ميلونير موكا",
      description: "موكا باردة غنية بالشوكليت مع إسبرسو وحليب مثلج.",
      sizes: [{ price: 110 }],
    },
    {
      name: "لا تيه",
      description: "لاتيه بارد ناعم بقوام كريمي منعش.",
      sizes: [{ price: 85 }],
    },
    {
      name: "كراميل ميكاتو",
      description: "قهوة باردة بطبقات كراميل وحليب لمسة حلاوة متوازنة.",
      sizes: [{ price: 95 }],
    },
    {
      name: "سبانش لاتيه",
      description: "لاتيه بارد بحليب مكثف محلى ونكهة مميزة.",
      sizes: [{ price: 100 }],
    },
    {
      name: "موكا",
      description: "خليط قهوة باردة مع شوكليت كريمي منعش.",
      sizes: [{ price: 95 }],
    },
    {
      name: "أمريكانو",
      description: "قهوة سوداء باردة خفيفة ومناسبة لعشاق الطعم الصافي.",
      sizes: [{ price: 80 }],
    },
    {
      name: "v60",
      description: "قهوة فلتر باردة توضح نكهات البن بتوازن.",
      sizes: [{ price: 100 }],
    },
    {
      name: "بوبا",
      description: "مشروب قهوة باردة مع حبيبات بوبا لمضغ ممتع.",
      sizes: [{ price: 90 }],
    },
    {
      name: "NU",
      description: "ابتكار NU البارد بمزيج خاص من القهوة والنكهات.",
      sizes: [{ price: 120 }],
    },
  ];

  return (
    <main className="nu-page text-right">
      <div className="nu-page__inner flex flex-col gap-8">
        <header className="text-center mb-2">
          <h1 className="nu-heading">• ICE COFFEE •</h1>
          <p className="nu-heading-sub">
            قهوة باردة ومنعشة بمذاقات متنوعة لعشاق التجديد.
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
