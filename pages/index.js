import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Rente Per Maand',
    url: 'https://rentepermaand.nl',
    logo: 'https://rentepermaand.nl/logo.png',
    description: 'Alles over rente, sparen en financiële tools voor consumenten en bedrijven',
    sameAs: [],
  };

  return (
    <>
      <Head>
        <title>Rente Per Maand - Alles Over Rente & Financiële Tools</title>
        <meta
          name="description"
          content="Leer alles over rente, sparen en financiële planning. Gebruik onze gratis calculators en tools voor consumenten en bedrijven."
        />
        <meta name="keywords" content="rente, sparen, calculator, hypotheek, lening, financieel, rentetarief" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Rente Per Maand - Alles Over Rente & Financiële Tools" />
        <meta
          property="og:description"
          content="Leer alles over rente, sparen en financiële planning. Gebruik onze gratis calculators en tools."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rentepermaand.nl" />
        <link rel="canonical" href="https://rentepermaand.nl" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      </Head>

      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Rente Per Maand</h1>
          <p className="text-xl text-blue-100">Alles wat je moet weten over rente, sparen en financiële planning</p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-12">
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Kennisbank</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <article className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">
                <Link href="/articles/hoe-werkt-rente">
                  Hoe werkt rente?
                </Link>
              </h3>
              <p className="text-gray-700 mb-4">
                Een complete gids over rentebegrip, formules en hoe rente wordt berekend in de praktijk.
              </p>
              <Link href="/articles/hoe-werkt-rente" className="text-blue-600 hover:text-blue-800 font-semibold">
                Lees artikel →
              </Link>
            </article>

            <article className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">
                <Link href="/tools/spaarreturn-calculator">
                  Spaarreturn Calculator
                </Link>
              </h3>
              <p className="text-gray-700 mb-4">
                Bereken hoeveel je verdient met sparen. Inclusief samengestelde rente berekening.
              </p>
              <Link href="/tools/spaarreturn-calculator" className="text-blue-600 hover:text-blue-800 font-semibold">
                Open tool →
              </Link>
            </article>
          </div>
        </section>

        <section className="bg-blue-50 p-8 rounded-lg mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Voor wie?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-blue-600 mb-2">💰 Consumenten</h3>
              <p className="text-gray-700">
                Leer alles over spaarrente, hypotheken en hoe je slim met geld omgaat.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-blue-600 mb-2">🏢 Bedrijven</h3>
              <p className="text-gray-700">
                Informatie over bedrijfskredieten, rentetarieven en financiële planning.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-8 px-4 text-center">
        <p>&copy; 2024 Rente Per Maand. Alle rechten voorbehouden.</p>
      </footer>
    </>
  );
}
