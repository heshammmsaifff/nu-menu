"use client";

import Link from "next/link";

// قائمة MILKSHAKE من المنيو
export default function Milkshake() {
  const items = [
    {
      name: "فانيليا",
      description: "ميلك شيك فانيليا كلاسيكي بقوام سميك وناعم.",
      sizes: [{ price: 100 }],
    },
    {
      name: "شوكليت",
      description: "ميلك شيك شوكليت غني ومحبب للجميع.",
      sizes: [{ price: 100 }],
    },
    {
      name: "لوتس",
      description: "ميلك شيك بنكهة بسكويت اللوتس المميز.",
      sizes: [{ price: 110 }],
    },
    {
      name: "فراولة",
      description: "ميلك شيك فراولة طازجة بطعم فاكهي حلو.",
      sizes: [{ price: 100 }],
    },
    {
      name: "مانجا",
      description: "ميلك شيك مانجا كريمي بحلاوة طبيعية.",
      sizes: [{ price: 100 }],
    },
    {
      name: "كيوي",
      description: "ميلك شيك كيوي بنكهة منعشة وحمضية خفيفة.",
      sizes: [{ price: 100 }],
    },
    {
      name: "شوكليت (سنكرز - كيت كات - جالكسي)",
      description: "ميلك شيك شوكليت مع قطع شوكليت مفضلة لديك.",
      sizes: [{ price: 125 }],
    },
    {
      name: "أوريو",
      description: "ميلك شيك أوريو بقطع بسكويت مقرمشة.",
      sizes: [{ price: 105 }],
    },
    {
      name: "بستاشيو",
      description: "ميلك شيك فستق بقوام غني ونكهة مميزة.",
      sizes: [{ price: 110 }],
    },
    {
      name: "بلوبيري",
      description: "ميلك شيك بلوبيري فاكهي ولطيف.",
      sizes: [{ price: 100 }],
    },
  ];

  return (
    <main className="nu-page text-right">
      <div className="nu-page__inner flex flex-col gap-8">
        <header className="text-center mb-2">
          <h1 className="nu-heading">• MILKSHAKE •</h1>
          <p className="nu-heading-sub">
            ميلك شيك كثيف ومُغري بنكهات كلاسيكية ومبتكرة.
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
