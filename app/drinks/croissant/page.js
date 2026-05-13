"use client";

import Link from "next/link";

// قائمـة HOT DRINK من المنيو
export default function HotDrinks() {
  const items = [
    {
      name: "كرواسو سادة",
      description: "",
      sizes: [{ price: 40 }],
    },
    {
      name: "كرواسو تركي",
      description: "شريحة تركي + خس + شيدر + مايونيز أو مستردة",
      sizes: [{ price: 80 }],
    },
    {
      name: "كرواسو رومي",
      description: "رومي + خس + مايونيز",
      sizes: [{ price: 60 }],
    },
    {
      name: "كرواسو شيدر",
      description: "شيدر + خس + مايونيز",
      sizes: [{ price: 60 }],
    },
    {
      name: "كرواسو (نوتيلا / لوتس / وايت شوكليت)",
      description: "",
      sizes: [{ price: 55 }],
    },
    {
      name: "كرواسو عسل",
      description: "",
      sizes: [{ price: 50 }],
    },
    {
      name: "كرواسو بستاشيو",
      description: "",
      sizes: [{ price: 60 }],
    },
    {
      name: "كرواسو ميكس جبن",
      description: "شيدر + موتزريلا + رومي",
      sizes: [{ price: 60 }],
    },
  ];

  return (
    <main className="nu-page text-right">
      <div className="nu-page__inner flex flex-col gap-8">
        <header className="text-center mb-2">
          <h1 className="nu-heading">• Croissant •</h1>
          <p className="nu-heading-sub">
            كرواسون فرنسي فاخر بطبقات ذهبية هشة، يذوب في الفم ويكمل تجربتك مع
            القهوة.
          </p>
        </header>

        {items.map((item, i) => (
          <div key={i}>
            <div className="nu-card">
              <div className="nu-card__prices">
                {item.sizes.map((size, idx) => (
                  <span key={idx} className="nu-card__price">
                    <span>{size.price + 5}</span>L.E
                  </span>
                ))}
              </div>
              <div className="nu-card__content w-full" dir="rtl">
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
