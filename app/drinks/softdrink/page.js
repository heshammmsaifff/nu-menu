"use client";

import Link from "next/link";

// SOFT DRINK منيو
export default function SoftDrink() {
  const items = [
    {
      name: "موخيتو ماتشا",
      description: "مزيج موخيتو منعش مع لمسة ماتشا خفيفة.",
      sizes: [{ price: 130 }],
    },
    {
      name: "بلوراس بيري ليمونادا",
      description: "عصير بيري مع ليمونادا غازية بنكهة فواكه زاهية.",
      sizes: [{ price: 120 }],
    },
    {
      name: "موخيتو",
      description: "موخيتو كلاسيكي بالنعناع والليمون وصودا منعشة.",
      sizes: [{ price: 100 }],
    },
    {
      name: "لافندر صودا",
      description: "صودا بنكهة اللافندر العطرية ولمسة زهرية ناعمة.",
      sizes: [{ price: 90 }],
    },
    {
      name: "شيري كولا",
      description: "مشروب كولا مع كرز لحلاوة مميزة.",
      sizes: [{ price: 85 }],
    },
    {
      name: "NU",
      description: "مشروب توقيع NU الغازي بنكهات خاصة.",
      sizes: [{ price: 150 }],
    },
    {
      name: "Flux shoot",
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
            مشروبات غازية ومثلجة بنكهات عصرية ولمسات خاصة من NU.
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
