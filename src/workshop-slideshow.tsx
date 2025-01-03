import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { DecisionGraph } from './DecisionGraph.tsx';

export function WorkshopSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [hoveredButton, setHoveredButton] = useState(null);

  const goToSlide = (index: number) => {
    setIsVisible(false);
    setTimeout(() => {
      setCurrentSlide(index);
      setIsVisible(true);
    }, 300);
  };

  const slides = [
    {
      title: "Icebreaker",
      content: () => (
        <div className={`space-y-6 transition-opacity duration-500 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg shadow-sm">
            Icebreaker
          </div>
        </div>

      )
    },

    {
      title: "Herausforderungen im Management",
      content: () => (
        <div className={`space-y-6 transition-opacity duration-500 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg shadow-sm">
            <blockquote className="text-xl font-medium text-gray-900 mb-8">
              "C-Level-Führungskräfte müssen in einer dynamischen Welt klare Entscheidungen treffen – oft mit wenig Zeit und Transparenz."
            </blockquote>
            
            <DecisionGraph />
          </div>

          <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg shadow-sm">
              <p className="text-lg text-gray-700 italic">
                Welche Funktionen und Erlebnisse muss die Software bieten, um Führungskräfte erfolgreich zu unterstützen?
              </p>
          </div>
        </div>

      )
    },

    {
      title: "Die Perspektive des C-Levels",
      content: () => (
        <div className={`space-y-6 transition-opacity duration-500 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="space-y-6">
            <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Wie steht es um unseren Zielzustand?</h3>
              <p className="text-lg text-gray-700 ml-4">• Verstehen wir, wo wir hinwollen?</p>
            </div>

            <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Sind wir auf dem Weg?</h3>
              <p className="text-lg text-gray-700 ml-4">• Wie erkennen wir Abweichungen frühzeitig?</p>
            </div>

            <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Wie engagiert ist die Organisation?</h3>
              <p className="text-lg text-gray-700 ml-4">• Was motiviert unsere Teams, diesen Weg mitzugehen?</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Deine Aufgabe – Play",
      content: () => (
        <div className={`space-y-6 transition-opacity duration-500 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Identifiziere die Kernprobleme aus deiner Sicht:</h3>
            <p className="text-gray-700 ml-4">• Wo siehst du die größten Herausforderungen für Führungskräfte im Umgang mit Zielen, Fortschritt und Engagement?</p>
          </div>

          <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Entwickle erste Ansätze:</h3>
            <div className="ml-4 space-y-2">
              <p className="text-gray-700">• Welche Ideen könnten diese Herausforderungen lösen?</p>
              <p className="text-gray-700">• Wie sollte eine AI-led Software gestaltet sein, um den C-Level optimal zu unterstützen?</p>
            </div>
          </div>

          <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Hinweis:</h3>
            <p className="text-gray-700 ml-4">
              Denke kreativ und pragmatisch. Gehe dabei spielerisch vor. Fachliche Details spielen heute keine Rolle. 
              Frag dich einfach: Was würde wirklich gut funktionieren?
            </p>
          </div>
        </div>
      )
    },

    {
      title: "Workshop-Ablauf",
      content: () => (
        <div className={`space-y-6 transition-opacity duration-500 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Ideenfindung</h3>
            <div className="ml-4 space-y-2">
              <p className="text-gray-700">1. How Might We - Fragen (20 Min)</p>
              <p className="text-gray-700">2. Crazy 8s Methode (16 Min)</p>
              <p className="text-gray-700">3. Solution Sketch (25 Min)</p>
              <p className="text-gray-700">4. Team Review (30 Min)</p>
            </div>
          </div>
          <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Abschluss</h3>
            <div className="ml-4 space-y-2">
              <p className="text-gray-700">5. Team-Pitches (25 Min)</p>
              <p className="text-gray-700">6. Feedback & Diskussion (20 Min)</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "How Might We - Methode",
      content: () => (
        <div className={`space-y-6 transition-opacity duration-500 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">1. Formulieren Sie "How Might We"-Fragen (10 Min)</h3>
            <div className="ml-4 space-y-2">
              <p className="text-gray-700">• "Wie könnten wir... Entscheidungsprozesse transparenter gestalten?"</p>
              <p className="text-gray-700">• "Wie könnten wir... Fortschrittsmessung vereinfachen?"</p>
              <p className="text-gray-700">• "Wie könnten wir... Teamengagement besser verstehen?"</p>
            </div>
          </div>
          <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">2. Ideenentwicklung (10 Min)</h3>
            <div className="ml-4 space-y-2">
              <p className="text-gray-700">• Jedes Teammitglied notiert mindestens 3 Antworten pro HMW-Frage</p>
              <p className="text-gray-700">• Denken Sie an die Perspektive des C-Levels</p>
              <p className="text-gray-700">• Fokussieren Sie auf konkrete AI-Funktionen</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Crazy 8s Methode",
      content: () => (
        <div className={`space-y-8 transition-opacity duration-500 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Vorbereitung</h3>
            <div className="ml-4 space-y-2">
              <p className="text-gray-700">• Falten Sie ein Blatt Papier dreimal, um 8 Felder zu erhalten</p>
              <p className="text-gray-700">• Nummerieren Sie die Felder von 1 bis 8</p>
              <p className="text-gray-700">• Timer auf 16 Minuten stellen (2 Min pro Feld)</p>
            </div>
            <div className="mt-6">
              <svg viewBox="0 0 1000 200" className="w-full max-w-3xl mx-auto">
                <defs>
                  <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                    <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#CBD5E1" strokeWidth="0.5"/>
                  </pattern>
                </defs>
                
                {/* Schritt 1: Originalpapier */}
                <g transform="translate(50,20)">
                  <rect x="0" y="0" width="120" height="160" fill="white" stroke="#94A3B8" strokeWidth="2"/>
                  <rect x="0" y="0" width="120" height="160" fill="url(#grid)" opacity="0.5"/>
                  <text x="60" y="180" textAnchor="middle" className="text-sm" fill="#475569">1. Original</text>
                </g>

                {/* Pfeil 1 */}
                <path d="M 190 80 L 230 80" stroke="#94A3B8" strokeWidth="2" markerEnd="url(#arrowhead)"/>
                <defs>
                  <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="#94A3B8"/>
                  </marker>
                </defs>

                {/* Schritt 2: Erste Faltung */}
                <g transform="translate(250,20)">
                  <rect x="0" y="0" width="120" height="160" fill="white" stroke="#94A3B8" strokeWidth="2"/>
                  <line x1="60" y1="0" x2="60" y2="160" stroke="#3B82F6" strokeWidth="2" strokeDasharray="4"/>
                  <text x="60" y="180" textAnchor="middle" className="text-sm" fill="#475569">2. Vertikal falten</text>
                </g>

                {/* Pfeil 2 */}
                <path d="M 390 80 L 430 80" stroke="#94A3B8" strokeWidth="2" markerEnd="url(#arrowhead)"/>

                {/* Schritt 3: Zweite Faltung */}
                <g transform="translate(450,20)">
                  <rect x="0" y="0" width="120" height="160" fill="white" stroke="#94A3B8" strokeWidth="2"/>
                  <line x1="60" y1="0" x2="60" y2="160" stroke="#3B82F6" strokeWidth="2" strokeDasharray="4"/>
                  <line x1="0" y1="80" x2="120" y2="80" stroke="#3B82F6" strokeWidth="2" strokeDasharray="4"/>
                  <text x="60" y="180" textAnchor="middle" className="text-sm" fill="#475569">3. Horizontal falten</text>
                </g>

                {/* Pfeil 3 */}
                <path d="M 590 80 L 630 80" stroke="#94A3B8" strokeWidth="2" markerEnd="url(#arrowhead)"/>

                {/* Schritt 4: Finale Version mit Vorder- und Rückseite */}
                <g transform="translate(650,20)">
                  {/* Vorderseite */}
                  <rect x="0" y="0" width="120" height="160" fill="white" stroke="#94A3B8" strokeWidth="2"/>
                  <line x1="60" y1="0" x2="60" y2="160" stroke="#94A3B8" strokeWidth="1"/>
                  <line x1="0" y1="80" x2="120" y2="80" stroke="#94A3B8" strokeWidth="1"/>
                  
                  {/* Nummerierung Vorderseite */}
                  <text x="30" y="40" textAnchor="middle" fill="#1E40AF" className="text-sm">1</text>
                  <text x="90" y="40" textAnchor="middle" fill="#1E40AF" className="text-sm">2</text>
                  <text x="30" y="120" textAnchor="middle" fill="#1E40AF" className="text-sm">3</text>
                  <text x="90" y="120" textAnchor="middle" fill="#1E40AF" className="text-sm">4</text>

                  {/* "Vorderseite" Label */}
                  <text x="60" y="-10" textAnchor="middle" fill="#475569" className="text-sm">Vorderseite</text>
                  
                  {/* Rückseite (leicht versetzt) */}
                  <g transform="translate(140, 0)">
                    <rect x="0" y="0" width="120" height="160" fill="white" stroke="#94A3B8" strokeWidth="2"/>
                    <line x1="60" y1="0" x2="60" y2="160" stroke="#94A3B8" strokeWidth="1"/>
                    <line x1="0" y1="80" x2="120" y2="80" stroke="#94A3B8" strokeWidth="1"/>
                    
                    {/* Nummerierung Rückseite */}
                    <text x="30" y="40" textAnchor="middle" fill="#1E40AF" className="text-sm">5</text>
                    <text x="90" y="40" textAnchor="middle" fill="#1E40AF" className="text-sm">6</text>
                    <text x="30" y="120" textAnchor="middle" fill="#1E40AF" className="text-sm">7</text>
                    <text x="90" y="120" textAnchor="middle" fill="#1E40AF" className="text-sm">8</text>

                    {/* "Rückseite" Label */}
                    <text x="60" y="-10" textAnchor="middle" fill="#475569" className="text-sm">Rückseite</text>
                  </g>
                  
                  {/* Erklärung */}
                  <text x="130" y="180" textAnchor="middle" className="text-sm" fill="#475569">4. Beide Seiten nummerieren (1-8)</text>

                  {/* Verbindungspfeil zwischen Vorder- und Rückseite */}
                  <path d="M 125 80 L 135 80" stroke="#94A3B8" strokeWidth="2" markerEnd="url(#arrowhead)"/>
                </g>
              </svg>
            </div>
          </div>
          <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Durchführung</h3>
            <div className="ml-4 space-y-2">
              <p className="text-gray-700">• Pro 2 Minuten: Eine Lösungsskizze entwickeln</p>
              <p className="text-gray-700">• Fokus auf unterschiedliche Aspekte der HMW-Fragen</p>
              <p className="text-gray-700">• Zeit für mehr Details und Überlegungen pro Skizze</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Solution Sketch",
      content: () => (
        <div className={`space-y-6 transition-opacity duration-500 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Ausarbeitung (25 Min)</h3>
            <div className="ml-4 space-y-2">
              <p className="text-gray-700">• Wählen Sie Ihre vielversprechendste Idee aus den Crazy 8s</p>
              <p className="text-gray-700">• Erstellen Sie eine detailliertere Skizze auf einem neuen Blatt</p>
              <p className="text-gray-700">• Fügen Sie erklärende Beschriftungen hinzu</p>
              <p className="text-gray-700">• Nutzen Sie die Zeit für durchdachte Details</p>
            </div>
          </div>
          <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Wichtige Elemente</h3>
            <div className="ml-4 space-y-2">
              <p className="text-gray-700">• Titel und Kernnutzen der Lösung</p>
              <p className="text-gray-700">• Zentrale UI-Elemente und Interaktionen</p>
              <p className="text-gray-700">• Konkrete AI-Funktionalitäten</p>
              <p className="text-gray-700">• Nutzerführung und Hauptfunktionen</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Team Review",
      content: () => (
        <div className={`space-y-6 transition-opacity duration-500 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Vorstellung (10 Min)</h3>
            <div className="ml-4 space-y-2">
              <p className="text-gray-700">• Jedes Teammitglied stellt seine Solution Sketches vor</p>
              <p className="text-gray-700">• Detaillierte Erklärung der Kernidee</p>
              <p className="text-gray-700">• Kurze Verständnisfragen sind erlaubt</p>
            </div>
          </div>
          <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Auswahl (5 Min)</h3>
            <div className="ml-4 space-y-2">
              <p className="text-gray-700">• Stille Abstimmung mit Klebepunkten</p>
              <p className="text-gray-700">• Drei Punkte pro Person</p>
              <p className="text-gray-700">• Auswahl des Entwurfs mit den meisten Punkten</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Team-Präsentation & Synthese",
      content: () => (
        <div className={`space-y-6 transition-opacity duration-500 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Team-Pitches (25 Min)</h3>
            <div className="ml-4 space-y-2">
              <p className="text-gray-700">• 5 Minuten pro Team</p>
              <p className="text-gray-700">• Vorstellen des ausgewählten und verfeinerten Solution Sketches</p>
              <p className="text-gray-700">• Fokus auf Nutzen für C-Level Entscheidungen</p>
              <p className="text-gray-700">• Erklärung der wichtigsten Features</p>
            </div>
          </div>
          <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Feedback & Diskussion (20 Min)</h3>
            <div className="ml-4 space-y-2">
              <p className="text-gray-700">• Konstruktives Feedback von anderen Teams</p>
              <p className="text-gray-700">• Identifizieren von Gemeinsamkeiten</p>
              <p className="text-gray-700">• Sammeln von Verbesserungsvorschlägen</p>
              <p className="text-gray-700">• Diskussion über Implementierungsmöglichkeiten</p>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="w-full max-w-5xl mx-auto p-4">
      <div className="relative bg-white border border-gray-200 rounded-lg shadow-md p-8 min-h-[40rem]">
        <div className="h-full">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">
            {slides[currentSlide].title}
          </h2>
          <div className="text-base">
            {slides[currentSlide].content()}
          </div>
        </div>
        
        <div className="absolute inset-x-0 bottom-4 flex justify-center items-center space-x-4">
          <button
            onClick={() => goToSlide((currentSlide - 1 + slides.length) % slides.length)}
            onMouseEnter={() => setHoveredButton('prev')}
            onMouseLeave={() => setHoveredButton(null)}
            className={`p-2 rounded-full transition-all duration-300 ${
              hoveredButton === 'prev' 
                ? 'bg-blue-100 shadow-md' 
                : 'bg-white shadow-sm'
            } border border-gray-200 hover:bg-blue-100 hover:shadow-md`}
          >
            <ChevronLeft className={`w-6 h-6 ${
              hoveredButton === 'prev' ? 'text-blue-600' : 'text-gray-600'
            }`} />
          </button>

          <span className="text-base font-medium text-gray-700">
            {currentSlide + 1} / {slides.length}
          </span>

          <button
            onClick={() => goToSlide((currentSlide + 1) % slides.length)}
            onMouseEnter={() => setHoveredButton('next')}
            onMouseLeave={() => setHoveredButton(null)}
            className={`p-2 rounded-full transition-all duration-300 ${
              hoveredButton === 'next' 
                ? 'bg-blue-100 shadow-md' 
                : 'bg-white shadow-sm'
            } border border-gray-200 hover:bg-blue-100 hover:shadow-md`}
          >
            <ChevronRight className={`w-6 h-6 ${
              hoveredButton === 'next' ? 'text-blue-600' : 'text-gray-600'
            }`} />
          </button>
        </div>
      </div>
    </div>
  );
}