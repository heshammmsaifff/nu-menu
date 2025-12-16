"use client";

import Image from "next/image";
import Link from "next/link";

export default function Drinks() {
  const categories = [
    {
      name: "Hot Coffee",
      slug: "coffee",
      image: null,
      description: "قهوة ساخنة كلاسيكية ومختصة لعشاق النكهات العميقة.",
    },
    {
      name: "Hot Drinks",
      slug: "hotdrinks",
      image: null,
      description: "مشروبات دافئة وأعشاب لسط لحظات هادئة ومريحة.",
    },
    {
      name: "Matcha",
      slug: "matcha",
      image: null,
      description: "مشروبات ماتشا فاخرة بنكهات خاصة ولمسات عصرية.",
    },
    {
      name: "Ice Coffee",
      slug: "icecoffee",
      image: null,
      description: "قهوة باردة ومنعشة بنكهات متنوعة لمحبي التجديد.",
    },
    {
      name: "Fresh",
      slug: "fresh",
      image: null,
      description: "عصائر فريش من فواكه موسمية وطعم طبيعي منعش.",
    },
    {
      name: "Frappe",
      slug: "frappe",
      image: null,
      description: "مشروبات فرابيه كريمية بلمسة قهوة مميزة.",
    },
    {
      name: "Milk Shake",
      slug: "milkshake",
      image: null,
      description: "ميلك شيك كثيف بنكهات شوكليت، فانيليا وفواكه.",
    },
    {
      name: "Cocktails",
      slug: "cocktails",
      image: null,
      description: "كوكتيلات فواكه متوازنة تجمع أكثر من نكهة في كوب واحد.",
    },
    {
      name: "Smoothie",
      slug: "smoothie",
      image: null,
      description: "سموثي فواكه كريمي ومنعش بتركيبات مميزة.",
    },
    {
      name: "Soft Drink",
      slug: "softdrink",
      image: null,
      description: "مشروبات غازية ومثلجة بلمسات عصرية.",
    },
    {
      name: "Fruit Salad",
      slug: "fruitsalad",
      image: null,
      description: "سلطة فواكه موسمية تقدم بتقديم أنيق.",
    },
    {
      name: "Stick Fruit",
      slug: "stickfruit",
      image: null,
      description: "فواكه على أعواد بطريقة مرحة وخفيفة للمشاركة.",
    },
    {
      name: "Waffles",
      slug: "waffles",
      image: null,
      description: "وافلز مقرمش مع صوصات وتوبينج غني.",
    },
    {
      name: "Dessert",
      slug: "dessert",
      image: null,
      description: "حلويات كلاسيكية وحديثة تناسب كل الأذواق.",
    },
    {
      name: "Ice Cream",
      slug: "icecream",
      image: null,
      description: "آيس كريم غني يقدم بنكهات مميزة.",
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
            اختر القسم الذي يناسب مزاجك من قهوة ساخنة، مشروبات خاصة، وحلويات NU.
          </p>
        </header>

        {categories.map((cat, i) => (
          <div key={cat.slug} className="nu-category-shell">
            <Link href={`/drinks/${cat.slug}`}>
              <div className="nu-category-card cursor-pointer">
                <div className="nu-category-text" dir="ltr">
                  <h2 className="nu-category-title">{cat.name}</h2>
                  <span className="nu-category-meta">{cat.description}</span>
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
