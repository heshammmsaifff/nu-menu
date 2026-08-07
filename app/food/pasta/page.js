"use client";

import Link from "next/link";

export default function Cocktails() {
  const items = [
    {
      name: "ألفريدو",
      description: "مكرونة بنّا - فراخ جريل - مشروم - صوص كريمي",
      sizes: [{ price: 140 }],
    },
    {
      name: "نجرسكو",
      description: "مكرونة فوتتشيني - فراخ جريل - صوص كريمي - تشيز",
      sizes: [{ price: 160 }],
    },
    {
      name: "بيستو",
      description:
        "مكرونة فوتتشيني - فراخ جريل - فلفل حار - صوص كريمي - صوص ريحان",
      sizes: [{ price: 160 }],
    },
    {
      name: "اسباجتي بلونيز",
      description: "مكرونة اسباجتي - لحم مفروم - ريد صوص",
      sizes: [{ price: 120 }],
    },
  ];

  return (
    <main className="nu-page text-right">
      <div className="nu-page__inner flex flex-col gap-8">
        <header className="text-center mb-2">
          <h1 className="nu-heading">~ PASTA ~</h1>
          <p className="nu-heading-sub" dir="rtl">
            باستا NU
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

        <Link href="/food" className="nu-back-button">
          العودة للخلف
        </Link>
      </div>
    </main>
  );
}
