"use client";

import Link from "next/link";

// قائمـة HOT DRINK من المنيو
export default function HotDrinks() {
  const items = [
    {
      name: "شاي",
      description: "شاي أسود كلاسيكي يقدم ساخنًا بطعم متوازن.",
      sizes: [{ price: 25 }],
    },
    {
      name: "شاي حليب",
      description: "شاي بالحليب بقوام كريمي ونكهة مريحة.",
      sizes: [{ price: 38 }],
    },
    {
      name: "شاي كرك",
      description: "شاي كرك بالتوابل والهيل بنكهة خليجية دافئة.",
      sizes: [{ price: 40 }],
    },
    {
      name: "أعشاب (ينسون - قرفة - جنزبيل)",
      description: "مشروب أعشاب مهدئ، اختر بين ينسون، قرفة، أو زنجبيل.",
      sizes: [{ price: 25 }],
    },
    {
      name: "ميكس أعشاب",
      description: "خليط خاص من الأعشاب الدافئة لراحة واسترخاء أكثر.",
      sizes: [{ price: 40 }],
    },
    {
      name: "سحلب",
      description: "مشروب سحلب كثيف ودافئ، إختر بين المكسرات أو الشوكليت.",
      sizes: [{ price: 60 }],
    },
    {
      name: "هوت سيدر",
      description: "عصير تفاح ساخن مع قرفة ولمسة شتوية مميزة.",
      sizes: [{ price: 60 }],
    },
    {
      name: "هوت شوكليت",
      description: "شوكليت ساخن كريمي لعشاق الشوكولاتة الغنية.",
      sizes: [{ price: 75 }],
    },
    {
      name: "هوت اوريو",
      description: "مشروب ساخن بطعم الأوريو وكريمة لذيذة.",
      sizes: [{ price: 80 }],
    },
    {
      name: "هوت NU",
      description: "توقيع NU الساخن بمزيج خاص من النكهات.",
      sizes: [{ price: 90 }],
    },
  ];

  return (
    <main className="nu-page text-right">
      <div className="nu-page__inner flex flex-col gap-8">
        <header className="text-center mb-2">
          <h1 className="nu-heading">• HOT DRINK •</h1>
          <p className="nu-heading-sub">
            مشروبات دافئة بطابع منزلي لترافقك في أجواء NU الهادئة.
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
