"use client";

import Image from "next/image";
import Link from "next/link";

export default function Drinks() {
  const categories = [
    {
      name: "Hot Drink",
      slug: "hotdrinks",
      image: null,
      description: "مشروبات دافئة وأعشاب للحظات هادئة ومريحة.",
    },
    {
      name: "Hot Coffee",
      slug: "coffee",
      image: null,
      description: "قهوة ساخنة كلاسيكية ومختصة لعشاق النكهات العميقة.",
    },
    {
      name: "Ice Coffee",
      slug: "icecoffee",
      image: null,
      description: "قهوة باردة ومنعشة بنكهات متنوعة لمحبي التجديد.",
    },
    {
      name: "V60 Speciality",
      slug: "v60",
      image: null,
      description: "قهوة V60 مختصة بنكهات فاخرة ومحاصيل عالمية.",
    },
    {
      name: "Matcha",
      slug: "matcha",
      image: null,
      description: "مشروبات ماتشا فاخرة بنكهات خاصة ولمسات عصرية.",
    },
    {
      name: "NU Corner",
      slug: "nucorner",
      image: null,
      description: "مشروبات وحلويات خاصة بتوقيع وتوليفة NU الفاخرة.",
    },
    {
      name: "Frappe",
      slug: "frappe",
      image: null,
      description: "مشروبات فرابيه كريمية بلمسة قهوة مميزة.",
    },
    {
      name: "Fresh",
      slug: "fresh",
      image: null,
      description: "عصائر فريش من فواكه موسمية وطعم طبيعي منعش.",
    },
    {
      name: "Milk Shake",
      slug: "milkshake",
      image: null,
      description: "ميلك شيك كثيف بنكهات شوكليت، فانيليا وفواكه.",
    },
    {
      name: "Soft Drink",
      slug: "softdrink",
      image: null,
      description: "مشروبات غازية ومثلجة بلمسات عصرية.",
    },
    {
      name: "Dessert",
      slug: "dessert",
      image: null,
      description: "حلويات كلاسيكية وحديثة تناسب كل الأذواق.",
    },
    {
      name: "Waffles",
      slug: "waffles",
      image: null,
      description: "وافلز مقرمش مع صوصات وتوبينج غني.",
    },
    {
      name: "Extra",
      slug: "extra",
      image: null,
      description: "إضافات جانبية مكملة لتجربتك مثل المكسرات والصوص.",
    },
  ];

  return (
    <main className="nu-page" dir="rtl">
      <div className="nu-page__inner flex flex-col gap-6">
        <header className="text-center mb-2">
          <h1 className="nu-heading">Menu</h1>
          <p className="nu-heading-sub">
            اختر ما يناسب مزاجك في أي وقت من اليوم، من فطار شهي، قهوة ساخنة،
            مشروبات مميزة، وحلويات NU.
          </p>
        </header>

        {categories.map((cat, i) => (
          <div key={cat.slug} className="nu-category-shell" dir="rtl">
            <Link href={`/drinks/${cat.slug}`}>
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
