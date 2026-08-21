"use client";

import Link from "next/link";

// page 7
export default function Extra() {
  const items = [
    {
      name: "بيبسي",
      description: "",
      sizes: [{ price: 50 }],
    },
    {
      name: "7 UP",
      description: "50",
      sizes: [{ price: 50 }],
    },
    {
      name: "شويبس رمان",
      description: "",
      sizes: [{ price: 50 }],
    },
    {
      name: "شويبس أناناس",
      description: "",
      sizes: [{ price: 50 }],
    },
    {
      name: "Red Bull",
      description: "Ask Flavor",
      sizes: [{ price: 90 }],
    },
    {
      name: "مياه معدنية",
      description: "",
      sizes: [{ price: 13 }],
    },
    {
      name: "بيريل",
      description: "",
      sizes: [{ price: 50 }],
    },
  ];

  return (
    <main className="nu-page text-right">
      <div className="nu-page__inner flex flex-col gap-8">
        <header className="text-center mb-2">
          <h1 className="nu-heading">• SODA CAN •</h1>
          <p className="nu-heading-sub">Soda Can nu.</p>
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
