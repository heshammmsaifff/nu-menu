"use client";

import Link from "next/link";

// قائمة COCKTAILS من المنيو
export default function Cocktails() {
  const items = [
    {
      name: "أناناس سكواش (أناناس - رمان)",
      description: "كوكتيل أناناس ورمان بطعم استوائي منعش وحمضي.",
      sizes: [{ price: 110 }],
    },
    {
      name: "تروبیکا (مانجا - موز)",
      description: "مزيج مانجا وموز كريمي بنكهة فواكه غنية.",
      sizes: [{ price: 110 }],
    },
    {
      name: "ابل لايت (مانجا - تفاح - فانيليا)",
      description: "كوكتيل مانجا وتفاح مع لمسة فانيليا خفيفة.",
      sizes: [{ price: 110 }],
    },
    {
      name: "بنانا بيرت (موز - بلوبيري)",
      description: "موز وبلوبيري بلمسة كريمية متوازنة.",
      sizes: [{ price: 110 }],
    },
    {
      name: "ستروبيري بنانا (موز - فراولة)",
      description: "فراولة وموز في كوكتيل كلاسيكي محبب للجميع.",
      sizes: [{ price: 110 }],
    },
    {
      name: "NU",
      description: "كوكتيل توقيع NU بمزيج خاص من الفواكه.",
      sizes: [{ price: 120 }],
    },
  ];

  return (
    <main className="nu-page text-right">
      <div className="nu-page__inner flex flex-col gap-8">
        <header className="text-center mb-2">
          <h1 className="nu-heading">~ COCKTAILS ~</h1>
          <p className="nu-heading-sub" dir="rtl">
            كوكتيلات فواكه بطابع NU الخاص ولمسات متوازنة في كل كوب.
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
