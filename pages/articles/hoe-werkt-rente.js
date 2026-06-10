import Head from 'next/head';
import Link from 'next/link';

export default function HoeWerktRente() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Hoe werkt rente? Complete gids',
    description: 'Alles over rentebegrip, formules en praktische voorbeelden.',
    author: {
      '@type': 'Organization',
      name: 'Rente Per Maand',
    },
    datePublished: '2024-01-01',
    dateModified: '2024-06-10',
    image: 'https://rentepermaand.nl/images/rente-werking.jpg',
  };

  return (
    <>
      <Head>
        <title>Hoe werkt rente? - Complete gids en formules | Rente Per Maand</title>
        <meta
          name="description"
          content="Leer hoe rente werkt. We leggen rentebegrip, formules en praktische voorbeelden uit. Perfect voor beginners."
        />
        <meta name="keywords" content="rente, hoe werkt rente, rente formule, renteberekening, spaarrente" />
        <link rel="canonical" href="https://rentepermaand.nl/articles/hoe-werkt-rente" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      </Head>

      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="text-blue-100 hover:text-white mb-4 inline-block">
            ← Terug naar home
          </Link>
          <h1 className="text-4xl font-bold">Hoe werkt rente?</h1>
          <p className="text-blue-100 mt-2">Een complete gids voor beginners en gevorderden</p>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-12">
        <article className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Inleiding: Wat is rente?</h2>
            <p className="text-gray-700 leading-relaxed">
              Rente is de vergoeding die je krijgt of betaalt voor geleend geld. Als je geld spaart bij een bank, betaalt de bank jou rente. 
              Als je een lening afsluit, betaal je rente aan de bank. Het is essentieel om te begrijpen hoe rente werkt voor verstandig financieel beheer.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">De rentebasisformule</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              De eenvoudigste vorm van rente is simpele rente:
            </p>
            <div className="bg-blue-50 p-6 rounded-lg mb-4 font-mono text-center">
              <p className="text-lg">Rente = Hoofdsom × Rentepercentage × Tijd</p>
            </div>
            <p className="text-gray-700 leading-relaxed">
              <strong>Voorbeeld:</strong> Je spaart €10.000 tegen 2% rente per jaar. Na 1 jaar verdien je €200 rente (€10.000 × 0.02 × 1).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Samengestelde rente (compound interest)</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Samengestelde rente is veel krachtiger. Je verdient rente over je rente. Dit is het "wonder van samengestelde rente".
            </p>
            <div className="bg-blue-50 p-6 rounded-lg mb-4 font-mono text-center">
              <p className="text-lg">A = P (1 + r/n)^(nt)</p>
            </div>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li><strong>A</strong> = Eindwaarde</li>
              <li><strong>P</strong> = Hoofdsom</li>
              <li><strong>r</strong> = Jaarlijks rentepercentage</li>
              <li><strong>n</strong> = Aantal keren rente per jaar wordt verrekend</li>
              <li><strong>t</strong> = Aantal jaren</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Praktische voorbeelden</h2>
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <h3 className="font-bold mb-2">📊 Voorbeeld 1: Spaarrekening</h3>
              <p className="text-gray-700">
                €5.000 op een spaarrekening tegen 1,5% rente per jaar, samengesteld maandelijks, gedurende 5 jaar:
              </p>
              <p className="text-gray-700 mt-2 font-mono">A = 5000(1 + 0.015/12)^(12×5) = €5.386,36</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2">💳 Voorbeeld 2: Krediet</h3>
              <p className="text-gray-700">
                €10.000 lening tegen 5% rente per jaar, maandelijks verrekend, gedurende 3 jaar:
              </p>
              <p className="text-gray-700 mt-2">Totale te betalen: €11.605</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Soorten rente</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Vaste rente:</strong> Het rentepercentage verandert niet gedurende de looptijd</li>
              <li><strong>Variabele rente:</strong> Het rentepercentage kan veranderen (bijv. gekoppeld aan EURIBOR)</li>
              <li><strong>Nominale rente:</strong> De aangegeven rente zonder inflatie meegerekend</li>
              <li><strong>Reële rente:</strong> Nominale rente minus inflatie</li>
            </ul>
          </section>

          <section className="mb-8 bg-blue-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">💡 Tip: Gebruik onze calculator</h2>
            <p className="text-gray-700 mb-4">
              Wil je zelf berekeningen maken? Probeer onze{' '}
              <Link href="/tools/spaarreturn-calculator" className="text-blue-600 hover:text-blue-800 font-semibold">
                Spaarreturn Calculator
              </Link>
            </p>
          </section>
        </article>
      </main>

      <footer className="bg-gray-900 text-white py-8 px-4 text-center mt-12">
        <p>&copy; 2024 Rente Per Maand. Alle rechten voorbehouden.</p>
      </footer>
    </>
  );
}
