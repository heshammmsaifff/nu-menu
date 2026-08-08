"use client";

import Link from "next/link";

// page 2
export default function Matcha() {
  const items = [
    {
      name: "ماتشا كلاسيك",
      description: "ماتشا بالحليب بقوام هادئ ونكهة متزنة.",
      sizes: [
        { label: "M", price: 130 },
        { label: "L", price: 145 },
      ],
    },
    {
      name: "ماتشا جوز هند",
      description: "ماتشا مع حليب جوز الهند بلمسة استوائية ناعمة.",
      sizes: [
        { label: "M", price: 145 },
        { label: "L", price: 160 },
      ],
    },
    {
      name: "ماتشا فراولة",
      description: "مزيج ماتشا مع فراولة لطعم فاكهي مميز.",
      sizes: [
        { label: "M", price: 145 },
        { label: "L", price: 160 },
      ],
    },
    {
      name: "ماتشا مانجا",
      description: "ماتشا مع مانجا لمزيج غني وحلو.",
      sizes: [
        { label: "M", price: 145 },
        { label: "L", price: 160 },
      ],
    },
    {
      name: "ماتشا بستاشيو",
      description: "ماتشا مع فستق لنكهة مميزة لعشاق البستاشيو.",
      sizes: [
        { label: "M", price: 145 },
        { label: "L", price: 160 },
      ],
    },
    {
      name: "ماتشا NU",
      description: "توقيع NU الخاص من الماتشا بنكهات متوازنة.",
      sizes: [
        { label: "M", price: 150 },
        { label: "L", price: 165 },
      ],
    },
  ];

  return (
    <main className="nu-page text-right">
      <div className="nu-page__inner flex flex-col gap-8">
        <header className="text-center mb-2">
          <h1 className="nu-heading">• MATCHA •</h1>
          <p className="nu-heading-sub">
            ماتشا فاخرة بنكهات خاصة لعشاق التفاصيل الهادئة.
          </p>
        </header>

        {items.map((item, i) => (
          <div key={i} className="relative">
            <div className="nu-size-chips">
              {item.sizes.map((size, idx) => (
                <span key={idx} className="nu-size-chip">
                  {size.label}
                </span>
              ))}
            </div>

            <div className="nu-card">
              <div className="nu-card__prices">
                {item.sizes.map((size, idx) => (
                  <span
                    key={idx}
                    className={`nu-card__price ${
                      item.sizes.length === 1 ? "ml-[15px]" : ""
                    }`}
                  >
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
