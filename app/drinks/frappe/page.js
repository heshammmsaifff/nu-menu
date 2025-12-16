"use client";

import Link from "next/link";

// قائمة FRAPPE من المنيو
export default function Frappe() {
  const items = [
    {
      name: "فانيليا",
      description: "فرابيه فانيليا كريمي بطعم ناعم وحلو متزن.",
      sizes: [{ price: 85 }],
    },
    {
      name: "شوكليت",
      description: "فرابيه شوكليت غني ومثلج لعشاق الشوكولاتة.",
      sizes: [{ price: 85 }],
    },
    {
      name: "أوريو",
      description: "فرابيه بأوريو مطحون وكريمة لذيذة.",
      sizes: [{ price: 95 }],
    },
    {
      name: "كوفي",
      description: "فرابيه قهوة باردة مع حليب وكريمة خفيفة.",
      sizes: [{ price: 85 }],
    },
    {
      name: "فرابتشينو (كراميل - شوكليت)",
      description: "مزيج بارد بقوام سميك وممتع.",
      sizes: [{ price: 100 }],
    },
    {
      name: "سينابون",
      description: "فرابيه بنكهة السينابون مع قرفة وسكر بني.",
      sizes: [{ price: 85 }],
    },
  ];

  return (
    <main className="nu-page text-right">
      <div className="nu-page__inner flex flex-col gap-8">
        <header className="text-center mb-2">
          <h1 className="nu-heading">• FRAPPE •</h1>
          <p className="nu-heading-sub">
            مشروبات فرابيه كريمية بلمسة كوفي مميزة.
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
