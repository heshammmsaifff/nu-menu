"use client";

import Image from "next/image";
import Link from "next/link";

export default function Food() {
  const categories = [
    {
      name: "Break Fast",
      slug: "croissant",
      image: null,
      description: "فطار NU.",
    },
    {
      name: "Soup",
      slug: "soup",
      image: null,
      description: "شوربة NU.",
    },
    {
      name: "Salad",
      slug: "salad",
      image: null,
      description: "سلطات NU.",
    },
    {
      name: "Pizza",
      slug: "pizza",
      image: null,
      description: "بيتزا NU.",
    },
    {
      name: "Crepe",
      slug: "crepe",
      image: null,
      description: "كريب NU.",
    },
    {
      name: "Pasta",
      slug: "pasta",
      image: null,
      description: "باستا NU.",
    },
    {
      name: "Fries",
      slug: "fries",
      image: null,
      description: "فرايز NU.",
    },
    {
      name: "Appetizers",
      slug: "appetizers",
      image: null,
      description: "مقبلات NU.",
    },
  ];

  return (
    <main className="nu-page" dir="rtl">
      <div className="nu-page__inner flex flex-col gap-6">
        <header className="text-center mb-2">
          <h1 className="nu-heading">Menu</h1>
          <p className="nu-heading-sub">الأطعمه</p>
        </header>

        {categories.map((cat, i) => (
          <div key={cat.slug} className="nu-category-shell" dir="rtl">
            <Link href={`/food/${cat.slug}`}>
              <div className="nu-category-card cursor-pointer">
                <div className="nu-category-text" dir="ltr">
                  <h2 className="nu-category-title">{cat.name}</h2>
                  <span className="nu-category-meta" dir="rtl">
                    {cat.description}
                  </span>
                </div>

                <div className="nu-category-thumb">
                  <div className="nu-category-thumb-inner">
                    <Image
                      src={cat.image || "/logo.png"}
                      alt={cat.name}
                      width={70}
                      height={68}
                      className={"rounded-full object-contain"}
                    />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}

        {/* زر العودة */}
        <Link href="/" className="nu-back-button">
          العودة للخلف
        </Link>
      </div>
    </main>
  );
}
