import { useState } from "react"; // Only import useState if needed
import "../assets/styles/global.css"; // Correct path for global.css

// Exporting the Settings component
export default function Settings() {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const categories = [
    "General",
    "Science",
    "Sports",
    "Business",
    "Health",
    "Entertainment",
    "Tech",
    "Politics",
    "Food",
    "Travel",
  ];

  const toggleCategory = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(
        selectedCategories.filter((selected) => selected !== category)
      );
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  return (
    <div className="container text-center py-4">
      <main>
        <h1 className="mb-4">Choose your interests</h1>
        <p>Select the categories you're interested in:</p>

        {/* Category buttons */}
        <div className="categories-container">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`category-button ${
                selectedCategories.includes(category) ? "selected" : ""
              }`}
              onClick={() => toggleCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Selected categories */}
        <h3>Selected Categories:</h3>
        {selectedCategories.length > 0 ? (
          <p>{selectedCategories.join(", ")}</p>
        ) : (
          <p>No categories selected yet</p>
        )}

        {/* Save button */}
        <button className="btn btn-primary mt-3">Save Preferences</button>
      </main>
    </div>
  );
}
