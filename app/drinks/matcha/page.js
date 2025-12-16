"use client";

import Link from "next/link";

// قائمة MATCHA من المنيو
export default function Matcha() {
  const items = [
    {
      name: "ماتشا كلاسيك لاتيه",
      description: "ماتشا بالحليب بقوام هادئ ونكهة متزنة.",
      sizes: [{ price: 130 }],
    },
    {
      name: "جوز هند ماتشا",
      description: "ماتشا مع حليب جوز الهند بلمسة استوائية ناعمة.",
      sizes: [{ price: 140 }],
    },
    {
      name: "استروبيري ماتشا",
      description: "مزيج ماتشا مع فراولة لطعم فاكهي مميز.",
      sizes: [{ price: 140 }],
    },
    {
      name: "مانجا ماتشا",
      description: "ماتشا مع مانجا لمزيج غني وحلو.",
      sizes: [{ price: 140 }],
    },
    {
      name: "بلو كرزو ماتشا",
      description: "ماتشا مع توت أزرق لنكهة مختلفة وجريئة.",
      sizes: [{ price: 140 }],
    },
    {
      name: "وايت موكا ماتشا",
      description: "ماتشا مع وايت شوكليت لقوام ناعم وحلاوة مريحة.",
      sizes: [{ price: 150 }],
    },
    {
      name: "بستاشيو ماتشا",
      description: "ماتشا مع فستق لنكهة مميزة لعشاق البستاشيو.",
      sizes: [{ price: 150 }],
    },
    {
      name: "NU ماتشا",
      description: "توقيع NU الخاص من الماتشا بنكهات متوازنة.",
      sizes: [{ price: 160 }],
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
