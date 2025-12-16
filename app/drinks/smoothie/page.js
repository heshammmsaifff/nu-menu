"use client";

import Link from "next/link";

// قائمة SMOOTHIE من المنيو
export default function Smoothie() {
  const items = [
    {
      name: "كيوي",
      description: "سموثي كيوي منعش بنكهة حمضية خفيفة.",
      sizes: [{ price: 100 }],
    },
    {
      name: "راسبيري",
      description: "سموثي توت أحمر بطعم قوي وفاكهي.",
      sizes: [{ price: 95 }],
    },
    {
      name: "بلوبيري",
      description: "سموثي بلوبيري غني بمذاق التوت الأزرق.",
      sizes: [{ price: 95 }],
    },
    {
      name: "باشون",
      description: "سموثي باشون فروت بحلاوة متزنة ولمسة استوائية.",
      sizes: [{ price: 95 }],
    },
    {
      name: "يوسفي",
      description: "سموثي يوسفي بطعم حمضي لطيف ومنعش.",
      sizes: [{ price: 95 }],
    },
    {
      name: "أناناس",
      description: "سموثي أناناس استوائي بطعم حلو وخفيف.",
      sizes: [{ price: 95 }],
    },
    {
      name: "خوخ",
      description: "سموثي خوخ فاكهي ناعم الملمس.",
      sizes: [{ price: 95 }],
    },
    {
      name: "تفاح",
      description: "سموثي تفاح بحلاوة خفيفة وطعم مألوف.",
      sizes: [{ price: 95 }],
    },
    {
      name: "بلو ليمون",
      description: "سموثي بلو ليمون بلون زاهي ونكهة منعشة.",
      sizes: [{ price: 85 }],
    },
    {
      name: "nU",
      description: "سموثي توقيع NU بمزيج خاص من الفواكه.",
      sizes: [{ price: 110 }],
    },
  ];

  return (
    <main className="nu-page text-right">
      <div className="nu-page__inner flex flex-col gap-8">
        <header className="text-center mb-2">
          <h1 className="nu-heading">• SMOOTHIE •</h1>
          <p className="nu-heading-sub">
            سموثي فواكه كثيف ومنعش مع توازن بين الحلاوة والحموضة.
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
