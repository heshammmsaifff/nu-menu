"use client";

import Link from "next/link";

// page 3
export default function NuCorner() {
  const items = [
    {
      name: "شاي مثلج (إسأل عن النكهات المتاحة)",
      description: "",
      sizes: [{ price: 85 }],
    },
    {
      name: "افوجادو ايطالي",
      description: "",
      sizes: [{ price: 110 }],
    },
    {
      name: "مكس وينز",
      description: "",
      sizes: [{ price: 110 }],
    },
    {
      name: "اناناس اسكواش",
      description: "",
      sizes: [{ price: 110 }],
    },
    {
      name: "مانجا خوخ",
      description: "",
      sizes: [{ price: 110 }],
    },
    {
      name: "بيتش مانجو ابل",
      description: "",
      sizes: [{ price: 110 }],
    },
    {
      name: "بوبا",
      description: "",
      sizes: [{ price: 120 }],
    },
    {
      name: "Mix nu",
      description: "",
      sizes: [{ price: 120 }],
    },
  ];

  return (
    <main className="nu-page text-right">
      <div className="nu-page__inner flex flex-col gap-8">
        <header className="text-center mb-2">
          <h1 className="nu-heading">• nu CORNER •</h1>
          <p className="nu-heading-sub">
            مشروبات وحلويات خاصة بتوقيع وتوليفة nu الفاخرة.
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
