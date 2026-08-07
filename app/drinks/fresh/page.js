"use client";

import Link from "next/link";

// page 4
export default function Fresh() {
  const items = [
    {
      name: "ليمون نعناع",
      description: "",
      sizes: [{ price: 70 }],
    },
    {
      name: "موز",
      description: "",
      sizes: [{ price: 75 }],
    },
    {
      name: "مانجا",
      description: "",
      sizes: [{ price: 85 }],
    },
    {
      name: "بطيخ",
      description: "",
      sizes: [{ price: 85 }],
    },
    {
      name: "فراولة",
      description: "",
      sizes: [{ price: 75 }],
    },
    {
      name: "فراولة حليب",
      description: "",
      sizes: [{ price: 85 }],
    },
    {
      name: "جوافة",
      description: "",
      sizes: [{ price: 75 }],
    },
    {
      name: "جوافة حليب",
      description: "",
      sizes: [{ price: 85 }],
    },
    {
      name: "بلح",
      description: "",
      sizes: [{ price: 95 }],
    },
    {
      name: "كيوي",
      description: "",
      sizes: [{ price: 110 }],
    },
    {
      name: "افوكادو",
      description: "",
      sizes: [{ price: 120 }],
    },
  ];

  return (
    <main className="nu-page text-right">
      <div className="nu-page__inner flex flex-col gap-8">
        <header className="text-center mb-2">
          <h1 className="nu-heading">• FRESH •</h1>
          <p className="nu-heading-sub">
            عصائر فريش من فواكه موسمية مختارة لضمان طعم طبيعي ومنعش.
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
