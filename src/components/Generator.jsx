import React, { useState } from "react";
import html2pdf from "html2pdf.js";

function Generator() {
  const [ingredients, setIngredients] = useState("");
  const [recipe, setRecipe] = useState("");
  const [loading, setLoading] = useState(false);

  const webhookUrl = "https://zainshah.app.n8n.cloud/webhook/recipe-generator";

  const generateRecipe = async () => {
    setLoading(true);
    setRecipe("");

    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ingredients }),
      });

      const data = await response.json();

      const extractRecipe = (obj) => {
        if (typeof obj === "string") return obj;
        if (typeof obj === "object") {
          for (const key in obj) {
            const result = extractRecipe(obj[key]);
            if (result) return result;
          }
        }
        return null;
      };

      const extracted = extractRecipe(data);
      setRecipe(extracted || "No recipe found in the response.");
    } catch (error) {
      console.error("Error fetching recipe:", error);
      setRecipe("Error fetching recipe.");
    }

    setLoading(false);
  };

  const downloadPDF = () => {
    const element = document.getElementById("recipe-pdf");
    const opt = {
      margin: 0.5,
      filename: "ai-generated-recipe.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };
    html2pdf().set(opt).from(element).save();
  };

  return (
    <section className="py-20 px-6 md:px-20 relative bg-green-50">
      <div className="absolute top-0 right-0 w-32 h-32 bg-green-100 rounded-full opacity-20 -mr-16 -mt-16"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-green-200 rounded-full opacity-10 -ml-16 -mb-16"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-green-100">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-green-800 font-serif">
              AI Recipe Generator
            </h2>
            <p className="text-lg text-green-700 max-w-2xl mx-auto">
              Just tell us what's in your kitchen — we'll whip up something delicious and nutritious.
            </p>
          </div>

          <div className="mb-8">
            <label htmlFor="ingredients" className="block text-lg font-medium text-green-900 mb-3 text-left">
              Available Ingredients
              <span className="text-sm text-green-600 ml-2">(comma-separated)</span>
            </label>
            <textarea
              id="ingredients"
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
              placeholder="e.g. chickpeas, spinach, lemon, garlic..."
              className="w-full px-6 py-4 rounded-xl border border-green-300 focus:ring-2 focus:ring-green-500 focus:border-transparent bg-green-50 text-green-900 placeholder-green-400 h-40 resize-none font-sans text-lg shadow-sm"
              rows="6"
            />
          </div>

          <div className="text-center">
            <button
              onClick={generateRecipe}
              disabled={loading || !ingredients.trim()}
              className={`bg-green-600 hover:bg-green-700 text-white px-10 py-4 rounded-xl transition-all font-semibold text-lg shadow-lg transform hover:scale-105 disabled:opacity-70 disabled:transform-none ${loading ? 'cursor-not-allowed' : ''}`}
            >
              {loading ? (
                <span className="flex items-center justify-center space-x-2">
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  <span>Crafting Recipe...</span>
                </span>
              ) : (
                <span className="flex items-center justify-center space-x-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span>Generate Recipe</span>
                </span>
              )}
            </button>
          </div>
        </div>

        {recipe && (
          <div className="mt-12 bg-white p-8 rounded-2xl shadow-lg border border-green-100">
            <h3 className="text-2xl font-bold mb-6 text-green-800 font-serif border-b border-green-200 pb-4">
              Your Custom Recipe
            </h3>
            <div id="recipe-pdf" className="prose prose-green max-w-none">
              <div className="whitespace-pre-wrap font-sans text-green-900 bg-green-50 p-6 rounded-lg">
                <div className="space-y-4">
                  {recipe.split('\n').map((line, index) => {
                    if (/^Ingredients:/i.test(line)) {
                      return <h4 key={index} className="text-xl font-semibold text-green-700">{line}</h4>;
                    }
                    if (/^Recipe:|^Method:|^Instructions:/i.test(line)) {
                      return <h4 key={index} className="text-xl font-semibold text-green-700">{line}</h4>;
                    }
                    if (/^- /.test(line)) {
                      return (
                        <div key={index} className="flex items-start">
                          <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></span>
                          <span>{line.replace(/^- /, '')}</span>
                        </div>
                      );
                    }
                    if (/^\d+\./.test(line)) {
                      return (
                        <div key={index} className="flex items-start">
                          <span className="bg-green-500 text-white font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">
                            {line.match(/^\d+/)[0]}
                          </span>
                          <span>{line.replace(/^\d+\.\s*/, '')}</span>
                        </div>
                      );
                    }
                    if (line.trim() === '') return <div key={index} className="h-4" />;
                    return <p key={index}>{line}</p>;
                  })}
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-green-100 flex justify-end">
              <button
                onClick={downloadPDF}
                className="flex items-center text-green-700 hover:text-green-900 font-medium"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                </svg>
                Download PDF
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Generator;
