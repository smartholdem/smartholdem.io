#!/usr/bin/env python3
# Injects the global search UI keys (search.*) into all 18 locale JSONs.
# Idempotent: re-running overwrites the same keys.
import json, os

L = "/app/i18n/locales"

T = {
"en": dict(button="Search", placeholder="Search pages, glossary, news…", noResults="No results found", pages="Pages", glossary="Glossary", news="News", navigate="navigate", select="open", close="close"),
"ru": dict(button="Поиск", placeholder="Поиск по страницам, глоссарию, новостям…", noResults="Ничего не найдено", pages="Страницы", glossary="Глоссарий", news="Новости", navigate="навигация", select="открыть", close="закрыть"),
"zh": dict(button="搜索", placeholder="搜索页面、词汇表、新闻…", noResults="未找到结果", pages="页面", glossary="词汇表", news="新闻", navigate="导航", select="打开", close="关闭"),
"es": dict(button="Buscar", placeholder="Buscar páginas, glosario, noticias…", noResults="No se encontraron resultados", pages="Páginas", glossary="Glosario", news="Noticias", navigate="navegar", select="abrir", close="cerrar"),
"fr": dict(button="Recherche", placeholder="Rechercher pages, glossaire, actualités…", noResults="Aucun résultat trouvé", pages="Pages", glossary="Glossaire", news="Actualités", navigate="naviguer", select="ouvrir", close="fermer"),
"de": dict(button="Suche", placeholder="Seiten, Glossar, News durchsuchen…", noResults="Keine Ergebnisse gefunden", pages="Seiten", glossary="Glossar", news="News", navigate="navigieren", select="öffnen", close="schließen"),
"ja": dict(button="検索", placeholder="ページ・用語集・ニュースを検索…", noResults="結果が見つかりません", pages="ページ", glossary="用語集", news="ニュース", navigate="移動", select="開く", close="閉じる"),
"ko": dict(button="검색", placeholder="페이지, 용어집, 뉴스 검색…", noResults="결과가 없습니다", pages="페이지", glossary="용어집", news="뉴스", navigate="이동", select="열기", close="닫기"),
"pt": dict(button="Pesquisar", placeholder="Pesquisar páginas, glossário, notícias…", noResults="Nenhum resultado encontrado", pages="Páginas", glossary="Glossário", news="Notícias", navigate="navegar", select="abrir", close="fechar"),
"ar": dict(button="بحث", placeholder="ابحث في الصفحات والمسرد والأخبار…", noResults="لا توجد نتائج", pages="الصفحات", glossary="المسرد", news="الأخبار", navigate="تنقّل", select="فتح", close="إغلاق"),
"hi": dict(button="खोज", placeholder="पेज, शब्दावली, समाचार खोजें…", noResults="कोई परिणाम नहीं मिला", pages="पेज", glossary="शब्दावली", news="समाचार", navigate="नेविगेट", select="खोलें", close="बंद करें"),
"id": dict(button="Cari", placeholder="Cari halaman, glosarium, berita…", noResults="Tidak ada hasil", pages="Halaman", glossary="Glosarium", news="Berita", navigate="navigasi", select="buka", close="tutup"),
"vi": dict(button="Tìm kiếm", placeholder="Tìm trang, thuật ngữ, tin tức…", noResults="Không tìm thấy kết quả", pages="Trang", glossary="Thuật ngữ", news="Tin tức", navigate="điều hướng", select="mở", close="đóng"),
"th": dict(button="ค้นหา", placeholder="ค้นหาหน้า อภิธานศัพท์ ข่าว…", noResults="ไม่พบผลลัพธ์", pages="หน้า", glossary="อภิธานศัพท์", news="ข่าว", navigate="นำทาง", select="เปิด", close="ปิด"),
"kk": dict(button="Іздеу", placeholder="Беттер, глоссарий, жаңалықтар бойынша іздеу…", noResults="Ештеңе табылмады", pages="Беттер", glossary="Глоссарий", news="Жаңалықтар", navigate="навигация", select="ашу", close="жабу"),
"mn": dict(button="Хайлт", placeholder="Хуудас, тайлбар толь, мэдээ хайх…", noResults="Илэрц олдсонгүй", pages="Хуудсууд", glossary="Тайлбар толь", news="Мэдээ", navigate="шилжих", select="нээх", close="хаах"),
"sw": dict(button="Tafuta", placeholder="Tafuta kurasa, kamusi, habari…", noResults="Hakuna matokeo", pages="Kurasa", glossary="Kamusi", news="Habari", navigate="vinjari", select="fungua", close="funga"),
"uz": dict(button="Qidiruv", placeholder="Sahifalar, lug'at, yangiliklar bo'yicha qidirish…", noResults="Hech narsa topilmadi", pages="Sahifalar", glossary="Lug'at", news="Yangiliklar", navigate="navigatsiya", select="ochish", close="yopish"),
}

for code, tr in T.items():
    p = os.path.join(L, f"{code}.json")
    if not os.path.exists(p):
        print(f"!! missing locale file: {p}")
        continue
    with open(p, encoding="utf-8") as f:
        data = json.load(f)
    data["search"] = {
        "button": tr["button"],
        "placeholder": tr["placeholder"],
        "noResults": tr["noResults"],
        "pages": tr["pages"],
        "glossary": tr["glossary"],
        "news": tr["news"],
        "navigate": tr["navigate"],
        "select": tr["select"],
        "close": tr["close"],
    }
    with open(p, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
        f.write("\n")
    print(f"ok {code}.json")

print("done")
