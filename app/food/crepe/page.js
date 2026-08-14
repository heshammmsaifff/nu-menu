"use client";

import Link from "next/link";

export default function Cocktails() {
  const items = [
    {
      name: "كريسبي (حار - بارد)",
      description: "جبنة مودزريلا - كريسبي - كاتشب - مايونيز - كابوتشا",
      sizes: [{ price: 140 }],
    },

    {
      name: "شيش طاووق",
      description: "جبنة مودزريلا - شيش مشوي - بيج صوص - كاتشب - مايونيز",
      sizes: [{ price: 150 }],
    },
    {
      name: "ميكس فراخ",
      description: "جبنة مودزريلا - بانيه - ستربس - شيش - كاتشب - مايونيز",
      sizes: [{ price: 160 }],
    },
    {
      name: "تشكن فيلا",
      description: "مشوي صدور - مشروم - جبنة كيري - صوص رانش - جبنة مودزريلا",
      sizes: [{ price: 140 }],
    },
    {
      name: "ميكس لحوم",
      description: "جبنة مودزريلا - مفروم - سلامي - هوت دوج - روزبيف",
      sizes: [{ price: 180 }],
    },
    {
      name: "هيدرا",
      description: "جبنة مودزريلا - كريسبي حار - هالبينو - سويت شيلي",
      sizes: [{ price: 150 }],
    },
    {
      name: "فاهيتا",
      description: "فراخ مكسيكي - زيتون - جبنة مودزريلا",
      sizes: [{ price: 140 }],
    },
  ];

  return (
    <main className="nu-page text-right">
      <div className="nu-page__inner flex flex-col gap-8">
        <header className="text-center mb-2">
          <h1 className="nu-heading">~ CREPE ~</h1>
          <p className="nu-heading-sub" dir="rtl">
            كريب nu
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

        <Link href="/food" className="nu-back-button">
          العودة للخلف
        </Link>
      </div>
    </main>
  );
}
