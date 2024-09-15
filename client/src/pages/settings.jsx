import { useState } from "react";

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

export default function Settings() {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const toggleCategory = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((cat) => cat !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  return (
    <div className="container text-center py-4">
      <main>
        <h1 className="mb-4">Choose your interests</h1>
        <p>Select the categories you're interested in:</p>

        <div className="categories-container">
          {categories.map((category) => (
            <button
              key={category}
              className={`category-button ${selectedCategories.includes(category) ? "selected" : ""}`}
              onClick={() => toggleCategory(category)}
              style={{
                border: "2px solid black", 
                margin: "5px",
              }}
            >
              {category}
            </button>
          ))}
        </div>

        <h3 className="mt-4">Selected Categories:</h3>
        {selectedCategories.length > 0 ? (
          <p>{selectedCategories.join(", ")}</p>
        ) : (
          <p>No categories selected yet</p>
        )}

        <button className="save-button">Save Preferences</button>
      </main>
    </div>
  );
}
