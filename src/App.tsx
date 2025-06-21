import React from 'react';

function App() {
  return (
    // Un conteneur qui prend tout l'écran avec un fond gris clair
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      
      {/* Une carte blanche au centre avec une ombre portée et des coins arrondis */}
      <div className="bg-white p-10 rounded-xl shadow-lg text-center">
        
        {/* Un titre avec une police large, grasse et de couleur bleue */}
        <h1 className="text-4xl font-bold text-blue-600 mb-4">
          Tailwind est bien configuré !
        </h1>

        {/* Un paragraphe simple */}
        <p className="text-lg text-gray-700 mb-6">
          Si ce texte est stylisé, cela signifie que tout fonctionne.
        </p>

        {/* Un bouton avec un fond, une couleur de texte, et un effet au survol */}
        <button
          type="button"
          className="bg-blue-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Super !
        </button>

      </div>
    </div>
  );
}

export default App;