import React, { useState } from 'react';

// Composant principal de l'application
function App() {
  // État pour stocker les transactions (description, montant, type)
  // 'id' est ajouté pour aider React à identifier chaque élément de manière unique lors du rendu de listes
  const [transactions, setTransactions] = useState([]);
  // État pour le champ de description de la nouvelle transaction
  const [description, setDescription] = useState('');
  // État pour le champ du montant de la nouvelle transaction
  const [amount, setAmount] = useState('');

  // Fonction pour ajouter une nouvelle transaction
  const addTransaction = (e) => {
    e.preventDefault(); // Empêche le rechargement de la page lors de la soumission du formulaire

    // Vérifie si la description et le montant sont valides
    if (!description.trim() || isNaN(parseFloat(amount))) {
      alert('Veuillez entrer une description valide et un montant numérique.'); // Utilise une alerte simple pour l'exemple
      return;
    }

    // Crée un nouvel objet transaction
    const newTransaction = {
      id: Date.now(), // ID unique basé sur l'horodatage
      description: description.trim(),
      amount: parseFloat(amount),
      // Le type (dépense ou revenu) est implicite par le signe du montant
    };

    // Ajoute la nouvelle transaction à la liste existante
    setTransactions([...transactions, newTransaction]);

    // Réinitialise les champs du formulaire après l'ajout
    setDescription('');
    setAmount('');
  };

  // Fonction pour calculer le solde total
  const getTotalBalance = () => {
    return transactions.reduce(
      (acc, transaction) => acc + transaction.amount,
      0
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 font-sans">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Mon Budget
        </h1>

        {/* Section du solde total */}
        <div className="mb-6 bg-blue-50 p-4 rounded-lg">
          <h2 className="text-lg font-semibold text-gray-700">Solde actuel:</h2>
          <p
            className={`text-3xl font-extrabold ${
              getTotalBalance() >= 0 ? 'text-green-600' : 'text-red-600'
            }`}
          >
            {getTotalBalance().toFixed(2)} CAD
          </p>
        </div>

        {/* Formulaire pour ajouter une transaction */}
        <form onSubmit={addTransaction} className="space-y-4 mb-8">
          <h2 className="text-xl font-semibold text-gray-800">
            Ajouter une nouvelle transaction
          </h2>
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Description
            </label>
            <input
              type="text"
              id="description"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Ex: Épicerie, Salaire, Loyer"
            />
          </div>
          <div>
            <label
              htmlFor="amount"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Montant (négatif pour dépense, positif pour revenu)
            </label>
            <input
              type="number"
              id="amount"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Ex: -50.00 ou 1200.00"
              step="0.01" // Permet les valeurs décimales
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-150 ease-in-out"
          >
            Ajouter la transaction
          </button>
        </form>

        {/* Liste des transactions */}
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Historique des transactions
          </h2>
          {transactions.length === 0 ? (
            <p className="text-gray-500 text-center">
              Aucune transaction pour le moment.
            </p>
          ) : (
            <ul className="space-y-3">
              {transactions.map((transaction) => (
                <li
                  key={transaction.id}
                  className={`flex justify-between items-center p-3 rounded-md shadow-sm border ${
                    transaction.amount < 0
                      ? 'border-red-200 bg-red-50'
                      : 'border-green-200 bg-green-50'
                  }`}
                >
                  <span className="text-gray-700 font-medium">
                    {transaction.description}
                  </span>
                  <span
                    className={`font-bold ${
                      transaction.amount < 0 ? 'text-red-600' : 'text-green-600'
                    }`}
                  >
                    {transaction.amount.toFixed(2)} CAD
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
