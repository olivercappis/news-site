import { useState, useEffect } from "react";
import "../assets/styles/global.css";
import { useMutation, useQuery } from '@apollo/client';
import { ADD_PREFERENCE, REMOVE_PREFERENCE } from '../utils/mutations';
import { QUERY_USER } from '../utils/queries';
import Auth from '../utils/auth';

export default function Settings() {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const { data, loading, error: queryError, refetch } = useQuery(QUERY_USER, {
    variables: { email: Auth.getProfile().email },
  });

  const [addPreference, { error: addPreferenceError }] = useMutation(ADD_PREFERENCE);
  const [removePreference, { error: removePreferenceError }] = useMutation(REMOVE_PREFERENCE);

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

  useEffect(() => {
    if (data && data.user && data.user.preferences) {
      setSelectedCategories(data.user.preferences.map(pref => pref.name));
    }
  }, [data]);

  const toggleCategory = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(
        selectedCategories.filter((selected) => selected !== category)
      );
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const handleSavePreferences = async () => {
    try {
      const userId = Auth.getProfile()._id;

      const currentPreferences = data.user.preferences.map(pref => pref.name);
      const preferencesToRemove = currentPreferences.filter(
        (pref) => !selectedCategories.includes(pref)
      );

      for (const category of preferencesToRemove) {
        await removePreference({
          variables: { userId, name: category },
        });
      }

      const preferencesToAdd = selectedCategories.filter(
        (category) => !currentPreferences.includes(category)
      );

      for (const category of preferencesToAdd) {
        await addPreference({
          variables: { userId, name: category },
        });
      }

      refetch();

      alert('Preferences saved successfully!');
    } catch (err) {
      console.error(err);
      alert('Failed to save preferences.');
    }
  };

  if (loading) return <p>Loading...</p>;
  if (queryError) return <p>Error: {queryError.message}</p>;

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
              className={`category-button ${selectedCategories.includes(category) ? "selected" : ""}`}
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
        <button 
          className="btn btn-primary mt-3" 
          onClick={handleSavePreferences}
        >
          Save Preferences
        </button>

        {(addPreferenceError || removePreferenceError) && <p>Error: {addPreferenceError?.message || removePreferenceError?.message}</p>}
      </main>
    </div>
  );
}