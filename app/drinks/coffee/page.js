"use client";

import Link from "next/link";

export default function Coffee() {
  const items = [
    {
      name: "قهوة تركي",
      description: "قهوة تركية غنية بنكهة البن المحمص برغوة ناعمة.",
      sizes: [
        { label: "S", price: 45 },
        { label: "D", price: 55 },
      ],
    },
    {
      name: "قهوة عربي",
      description: "قهوة عربية خفيفة مع هيل ولمسة تقليدية دافئة.",
      sizes: [{ label: "Double", price: 60 }],
    },
    {
      name: "قهوة فرنساوي",
      description: "قهوة بالحليب بنكهة ناعمة ولمسة فانيليا خفيفة.",
      sizes: [{ label: "Double", price: 60 }],
    },
    {
      name: "قهوة بندق",
      description: "قهوة بالحليب مع نكهة البندق المحمص الغنية.",
      sizes: [{ label: "Double", price: 60 }],
    },
    {
      name: "اسبريسو",
      description: "شوت اسبريسو مركز بنكهة قوية لعشاق القهوة الصافية.",
      sizes: [
        { label: "s", price: 48 },
        { label: "D", price: 58 },
      ],
    },
    {
      name: "رستريتو",
      description: "شوت أقصر وأكثر تركيزًا من الاسبريسو لمحبي النكهة القوية.",
      sizes: [{ label: "Double", price: 55 }],
    },
    {
      name: "ميكاتو",
      description: "اسبريسو مع لمسة حليب صغيرة لتلطيف النكهة.",
      sizes: [{ label: "Double", price: 60 }],
    },
    {
      name: "كورتادو",
      description: "توازن متساوٍ بين الاسبريسو والحليب لقوام مخملي.",
      sizes: [{ label: "Double", price: 65 }],
    },
    {
      name: "فلات وايت",
      description: "شوت اسبريسو مع حليب مخمّر برغوة ناعمة وخفيفة.",
      sizes: [{ label: "Double", price: 80 }],
    },
    {
      name: "كوبا كوبانا",
      description: "مزيج خاص من القهوة والحليب بنكهات شوكليت خفيفة.",
      sizes: [{ label: "Double", price: 70 }],
    },
    {
      name: "لاتيه",
      description: "قهوة بالحليب الكلاسيكية بقوام كريمي وناعم.",
      sizes: [{ label: "Double", price: 85 }],
    },
    {
      name: "كابتشينو",
      description: "قهوة بالحليب مع رغوة كثيفة ورشة كاكاو خفيفة.",
      sizes: [{ label: "Double", price: 85 }],
    },
    {
      name: "نسكافيه",
      description: "مشروب قهوة سريع التحضير بقوام خفيف ومعتدل.",
      sizes: [{ label: "Double", price: 75 }],
    },
    {
      name: "سبانيش لاتيه",
      description: "لاتيه بحليب مكثف محلى يعطي حلاوة متوازنة وغنية.",
      sizes: [{ label: "Double", price: 95 }],
    },
    {
      name: "v 60",
      description: "قهوة فلتر مقطرة تعكس نكهات البن بوضوح ونقاوة.",
      sizes: [{ label: "Double", price: 85 }],
    },
    {
      name: "أمريكان",
      description: "قهوة سوداء خفيفة تشبه القهوة المفلترة الأمريكية.",
      sizes: [{ label: "Double", price: 60 }],
    },
  ];

  return (
    <main className="nu-page text-right">
      <div className="nu-page__inner flex flex-col gap-8">
        <header className="text-center mb-2">
          <h1 className="nu-heading">~ Hot Coffee ~</h1>
          <p className="nu-heading-sub">
            قهوة مختارة بعناية لتحصل على توازن مثالي بين النكهة والقوام.
          </p>
        </header>

        {items.map((item, i) => (
          <div key={i} className="relative">
            <div className="nu-size-chips">
              {item.sizes.map((size, idx) => (
                <span key={idx} className="nu-size-chip">
                  {size.label}
                </span>
              ))}
            </div>

            <div className="nu-card">
              <div className="nu-card__prices">
                {item.sizes.map((size, idx) => (
                  <span
                    key={idx}
                    className={`nu-card__price ${
                      item.sizes.length === 1 ? "ml-[15px]" : ""
                    }`}
                  >
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

        {/* زر العودة */}
        <Link href="/drinks" className="nu-back-button">
          العودة للخلف
        </Link>
      </div>
    </main>
  );
}
