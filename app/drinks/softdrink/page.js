"use client";

import Link from "next/link";

// page 5
export default function SoftDrink() {
  const items = [
    {
      name: "موهيتو ",
      description: "موهيتو منعش وصودا باردة.",
      sizes: [{ price: 100 }],
    },
    {
      name: "ميكس سوفت",
      description: "مزيج سوفت غازي خاص ومثلج.",
      sizes: [{ price: 150 }],
    },
    {
      name: "FLUX shoot",
      description: "مشروب طاقة غازي بنكهة قوية لعشاق الانتعاش.",
      sizes: [{ price: 150 }],
    },
  ];

  return (
    <main className="nu-page text-right">
      <div className="nu-page__inner flex flex-col gap-8">
        <header className="text-center mb-2">
          <h1 className="nu-heading">• SOFT DRINK •</h1>
          <p className="nu-heading-sub">
            مشروبات غازية ومثلجة بنكهات عصرية ولمسات خاصة من nu.
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
