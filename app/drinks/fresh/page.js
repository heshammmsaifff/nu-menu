"use client";

import Link from "next/link";

// قائمة FRESH من المنيو
export default function Fresh() {
  const items = [
    {
      name: "مانجا",
      description: "عصير مانجا فريش بحلاوة طبيعية وقوام كثيف.",
      sizes: [{ price: 85 }],
    },
    {
      name: "فراولة / حليب",
      description: "فراولة طازجة مع حليب بارد لمذاق كريمي منعش.",
      sizes: [{ price: 85 }],
    },
    {
      name: "جوافة / حليب",
      description: "جوافة كريمية مع حليب تعطي قوامًا ناعمًا غنيًا.",
      sizes: [{ price: 85 }],
    },
    {
      name: "كيوي",
      description: "عصير كيوي منعش بنكهة حامضة خفيفة.",
      sizes: [{ price: 110 }],
    },
    {
      name: "أفوكادو",
      description: "أفوكادو كثيف وغني مثالي لعشاق القوام الكريمي.",
      sizes: [{ price: 120 }],
    },
    {
      name: "بلح",
      description: "مشروب بلح بالحليب بطعم شرقي دافئ وحلو.",
      sizes: [{ price: 95 }],
    },
    {
      name: "ليمون نعناع",
      description: "ليمون فريش مع نعناع منعش وطعم متزن.",
      sizes: [{ price: 65 }],
    },
    {
      name: "موز",
      description: "عصير موز بالحليب بقوام ثقيل ومغذي.",
      sizes: [{ price: 75 }],
    },
    {
      name: "برتقال",
      description: "عصير برتقال فريش بطعم حمضي خفيف ومنعش.",
      sizes: [{ price: 70 }],
    },
    {
      name: "فواكه موسمية",
      description: "مزيج من أفضل الفواكه المتوفرة في الموسم.",
      sizes: [{ price: 85 }],
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
