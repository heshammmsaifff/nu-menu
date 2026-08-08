"use client";

import Link from "next/link";

// page 5
export default function Milkshake() {
  const items = [
    {
      name: "ميلك كراميل",
      description: "ميلك شيك بنكهة الكراميل الغنية والقوام الكريمي السلس.",
      sizes: [{ price: 100 }],
    },
    {
      name: "ميلك كوفي",
      description: "ميلك شيك بنكهة القهوة المميزة والقوام الكريمي.",
      sizes: [{ price: 110 }],
    },
    {
      name: "بلوبيري",
      description: "ميلك شيك بلوبيري فاكهي ولطيف.",
      sizes: [{ price: 100 }],
    },
    {
      name: "فانيليا",
      description: "ميلك شيك فانيليا كلاسيكي بقوام سميك وناعم.",
      sizes: [{ price: 100 }],
    },
    {
      name: "شوكلت",
      description: "ميلك شيك شوكليت غني ومحبب للجميع.",
      sizes: [{ price: 100 }],
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
      name: "لوتس",
      description: "ميلك شيك بنكهة بسكويت اللوتس المميز.",
      sizes: [{ price: 110 }],
    },
    {
      name: "اوريو",
      description: "ميلك شيك أوريو بقطع بسكويت مقرمشة.",
      sizes: [{ price: 110 }],
    },
    {
      name: "كيوي",
      description: "ميلك شيك كيوي بنكهة منعشة وحمضية خفيفة.",
      sizes: [{ price: 110 }],
    },
    {
      name: "سنيكرز / كيت كات / جلاكسي",
      description: "ميلك شيك شوكليت مع قطع شوكليت مفضلة لديك.",
      sizes: [{ price: 125 }],
    },
    {
      name: "بستاشيو",
      description: "ميلك شيك فستق بقوام غني ونكهة مميزة.",
      sizes: [{ price: 110 }],
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
