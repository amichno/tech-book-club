# Tech Book Club — Landing Page

Struktura projektu React (Vite + Tailwind CSS).

## Struktura folderów

```
src/
├── main.jsx                     # punkt wejścia aplikacji (Vite)
├── index.css                    # importy Tailwind
├── App.jsx                      # składa wszystkie sekcje strony w całość
├── data/
│   └── content.js                # dane tekstowe: avatary, benefity, kroki, plany cenowe
└── components/
    ├── Hero.jsx                  # sekcja hero (nagłówek + CTA + zdjęcie)
    ├── ReadTogetherSection.jsx   # "Read together, grow together"
    ├── DifferentiatorSection.jsx # "Not your average book club"
    ├── JourneySection.jsx        # "Your tech reading journey" (4 kroki)
    ├── PricingSection.jsx        # "Membership options" (cennik)
    ├── TestimonialSection.jsx    # opinia klienta
    ├── FooterCta.jsx             # sekcja CTA na dole (ciemne tło)
    └── ui/
        ├── Badge.jsx              # pigułka "Tech book club"
        ├── AvatarRating.jsx       # awatary + gwiazdki + licznik
        ├── BenefitItem.jsx        # pojedynczy wiersz checklisty
        ├── PricingCard.jsx        # pojedyncza karta cenowa
        └── DotGrid.jsx            # dekoracyjna siatka kropek
```

## Zasady zastosowane w podziale

- **Jeden komponent = jeden plik**, nazwa pliku = nazwa komponentu (PascalCase).
- **`components/ui/`** — małe, w pełni reużywalne elementy prezentacyjne bez własnej logiki biznesowej (atomy).
- **`components/`** (poziom wyżej) — sekcje strony, złożone z komponentów `ui/`.
- **`data/`** — treści/dane oddzielone od JSX, żeby edycja tekstów (np. cen, korzyści) nie wymagała grzebania w kodzie komponentów.
- **`App.jsx`** — jedyne miejsce, które zna kolejność sekcji na stronie.
- Każdy komponent eksportuje się jako `export default`, importy są relatywne.

## Instalacja i uruchomienie (Vite)

```bash
npm create vite@latest tech-book-club -- --template react
cd tech-book-club
npm install
npm install lucide-react
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Następnie podmień wygenerowane `src/` i `tailwind.config.js` (dodaj `content: ["./index.html", "./src/**/*.{js,jsx}"]`) na pliki z tego projektu.

```bash
npm run dev
```

## Uwagi

- Zdjęcia to placeholdery z Unsplash — podmień na własne assety.
- Tekst w `FooterCta.jsx` ("Ready to debug your reading list?") to moja propozycja dokończenia ucięcia na oryginalnym screenie — do potwierdzenia.
