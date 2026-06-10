import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

export default function SpaarreturnCalculator() {
  const [principal, setPrincipal] = useState(5000);
  const [rate, setRate] = useState(2);
  const [years, setYears] = useState(5);
  const [compound, setCompound] = useState(12);

  const calculateReturns = () => {
    const p = parseFloat(principal);
    const r = parseFloat(rate) / 100;
    const t = parseFloat(years);
    const n = parseFloat(compound);

    const amount = p * Math.pow(1 + r / n, n * t);
    const interest = amount - p;

    return {
      principal: p.toFixed(2),
      amount: amount.toFixed(2),
      interest: interest.toFixed(2),
      percentageGain: ((interest / p) * 100).toFixed(2),
    };
  };

  const results = calculateReturns();

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Spaarreturn Calculator',
    description: 'Bereken je spaarreturn met samengestelde rente',
    url: 'https://rentepermaand.nl/tools/spaarreturn-calculator',
  };

  return (
    <>
      <Head>
        <title>Spaarreturn Calculator - Bereken je spaaropbrengsten | Rente Per Maand</title>
        <meta
          name="description"
          content="Gebruik onze gratis spaarreturn calculator. Bereken hoeveel je verdient met sparen, inclusief samengestelde rente."
        />
        <meta name="keywords" content="spaarreturn calculator, samengestelde rente, spaarrente, rente calculator" />
        <link rel="canonical" href="https://rentepermaand.nl/tools/spaarreturn-calculator" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      </Head>

      <header className="bg-gradient-to-r from-green-600 to-green-800 text-white py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="text-green-100 hover:text-white mb-4 inline-block">
            ← Terug naar home
          </Link>
          <h1 className="text-4xl font-bold">Spaarreturn Calculator</h1>
          <p className="text-green-100 mt-2">Bereken hoeveel je verdient met sparen</p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Input Form */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Voer je gegevens in</h2>

            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">
                Startbedrag (€)
              </label>
              <input
                type="number"
                value={principal}
                onChange={(e) => setPrincipal(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-600"
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">
                Jaarlijkse rentepercentage (%)
              </label>
              <input
                type="number"
                step="0.01"
                value={rate}
                onChange={(e) => setRate(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-600"
              />
              <p className="text-sm text-gray-500 mt-1">Huidige spaarrentevergelijker: 0,5% - 3,5%</p>
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">
                Aantal jaren
              </label>
              <input
                type="number"
                value={years}
                onChange={(e) => setYears(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-600"
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">
                Renteberekening
              </label>
              <select
                value={compound}
                onChange={(e) => setCompound(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-600"
              >
                <option value={1}>Jaarlijks</option>
                <option value={4}>Per kwartaal</option>
                <option value={12}>Maandelijks</option>
                <option value={365}>Dagelijks</option>
              </select>
            </div>
          </div>

          {/* Results */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Resultaten</h2>

            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg border border-green-200">
                <p className="text-gray-600 mb-1">💰 Startbedrag</p>
                <p className="text-2xl font-bold text-gray-900">€{results.principal}</p>
              </div>

              <div className="bg-white p-4 rounded-lg border border-green-200">
                <p className="text-gray-600 mb-1">📈 Eindwaarde</p>
                <p className="text-2xl font-bold text-green-600">€{results.amount}</p>
              </div>

              <div className="bg-white p-4 rounded-lg border border-green-200">
                <p className="text-gray-600 mb-1">💵 Verdiende rente</p>
                <p className="text-2xl font-bold text-green-600">€{results.interest}</p>
              </div>

              <div className="bg-white p-4 rounded-lg border border-green-200">
                <p className="text-gray-600 mb-1">📊 Procentuele winst</p>
                <p className="text-2xl font-bold text-green-600">{results.percentageGain}%</p>
              </div>
            </div>

            <p className="text-sm text-gray-600 mt-6 bg-yellow-50 p-3 rounded">
              ⚠️ Deze calculator is voor informatiedoeleinden. Actueel percentage kan verschillen per bank.
            </p>
          </div>
        </div>

        <section className="mt-12 bg-blue-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">🎓 Wil je meer weten?</h2>
          <p className="text-gray-700 mb-4">
            Lees ons artikel over{' '}
            <Link href="/articles/hoe-werkt-rente" className="text-blue-600 hover:text-blue-800 font-semibold">
              hoe rente werkt
            </Link>{' '}
            voor een diepere uitleg van samengestelde rente en formules.
          </p>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-8 px-4 text-center mt-12">
        <p>&copy; 2024 Rente Per Maand. Alle rechten voorbehouden.</p>
      </footer>
    </>
  );
}
