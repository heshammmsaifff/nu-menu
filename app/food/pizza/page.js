"use client";

import Link from "next/link";

export default function Cocktails() {
  const items = [
    {
      name: "مارجريتا",
      description: "صوص بيتزا - جبنة مودزريلا",
      sizes: [{ price: 160 }],
    },
    {
      name: "ميكس تشيز",
      description:
        "صوص بيتزا - جبنة رومي - جبنة شيدر - جبنة فلامنك - جبنة مودزريلا",
      sizes: [{ price: 230 }],
    },
    {
      name: "تشكن رانش",
      description:
        "صوص بيتزا - فراخ شيش - جبنة مودزريلا - فلفل ألوان - زيتون - صوص رانش",
      sizes: [{ price: 240 }],
    },
    {
      name: "تشكن باربكيو",
      description:
        "صوص بيتزا - فراخ شيش - جبنة مودزريلا - فلفل ألوان - زيتون - صوص باربكيو",
      sizes: [{ price: 240 }],
    },
    {
      name: "سلامي",
      description: "سلامي - صوص بيتزا - جبنة مودزريلا - زيتون",
      sizes: [{ price: 250 }],
    },
    {
      name: "سوبر كرانشي",
      description: "صوص بيتزا - تركي مدخن - كريسبي - فلفل ألوان - زيتون",
      sizes: [{ price: 230 }],
    },
    {
      name: "فاهيتا",
      description: "صوص بيتزا - فراخ مكسيكي - زيتون - جبنة مودزريلا",
      sizes: [{ price: 230 }],
    },
    {
      name: "سوبر سوبريم",
      description: "صوص بيتزا - هوت دوج - مفروم - فراخ جريل",
      sizes: [{ price: 240 }],
    },
    {
      name: "مكس لحوم",
      description: "صوص بيتزا - هوت دوج - روزبيف - مفروم - سلامي",
      sizes: [{ price: 270 }],
    },
  ];

  return (
    <main className="nu-page text-right">
      <div className="nu-page__inner flex flex-col gap-8">
        <header className="text-center mb-2">
          <h1 className="nu-heading">~ PIZZA ~</h1>
          <p className="nu-heading-sub" dir="rtl">
            بيتزا NU
          </p>
          <span className="text-xs text-amber-900 font-semibold mt-1 block" dir="rtl">
            * البيتزا كلها أطراف جبن *
          </span>
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

        <Link href="/food" className="nu-back-button">
          العودة للخلف
        </Link>
      </div>
    </main>
  );
}
