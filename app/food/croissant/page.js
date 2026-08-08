"use client";

import Link from "next/link";

// قائمـة HOT DRINK من المنيو
export default function HotDrinks() {
  const items = [
    {
      name: "فطار انجليزي",
      description:
        "قطعتين روزبيف - قطعتين تركي مدخن - بيض مسلوق - عسل نحل - زبدة",
      sizes: [{ price: 100 }],
    },
    {
      name: "كرواسو سادة",
      description: "",
      sizes: [{ price: 45 }],
    },
    {
      name: "كرواسو تركي",
      description: "شريحة تركي + خس + شيدر + مايونيز أو مستردة",
      sizes: [{ price: 85 }],
    },
    {
      name: "كرواسو رومي",
      description: "رومي + خس + مايونيز",
      sizes: [{ price: 65 }],
    },
    {
      name: "كرواسو شيدر",
      description: "شيدر + خس + مايونيز",
      sizes: [{ price: 65 }],
    },
    {
      name: "كرواسو (نوتيلا / لوتس / وايت شوكليت)",
      description: "",
      sizes: [{ price: 60 }],
    },
    {
      name: "كرواسو عسل",
      description: "",
      sizes: [{ price: 55 }],
    },
    {
      name: "كرواسو بستاشيو",
      description: "",
      sizes: [{ price: 65 }],
    },
    {
      name: "كرواسو ميكس جبن",
      description: "شيدر + موتزريلا + رومي",
      sizes: [{ price: 65 }],
    },
  ];

  return (
    <main className="nu-page text-right">
      <div className="nu-page__inner flex flex-col gap-8">
        <header className="text-center mb-2">
          <h1 className="nu-heading">• Croissant •</h1>
          <p className="nu-heading-sub" dir="rtl">
            فطار NU.
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

        <Link href="/food" className="nu-back-button">
          العودة للخلف
        </Link>
      </div>
    </main>
  );
}
