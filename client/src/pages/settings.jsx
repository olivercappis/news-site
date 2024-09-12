import { useState } from "react"; // Only import useState if needed

// Exporting the Settings component
export default function Settings() {
  const [selectedWidgets, setSelectedWidgets] = useState([]);

  const handleAddWidget = () => {
    // Logic to add widget (placeholder)
    setSelectedWidgets([
      ...selectedWidgets,
      `Widget ${selectedWidgets.length + 1}`,
    ]);
  };

  const handleRemoveWidget = (index) => {
    // Logic to remove widget
    const updatedWidgets = selectedWidgets.filter((_, i) => i !== index);
    setSelectedWidgets(updatedWidgets);
  };

  return (
    <div className="container text-center py-4">
      <main>
        <h1 className="mb-4">My Settings (add/remove widgets) </h1>

        {/* Search bar placeholder */}
        <div className="d-flex justify-content-end mb-3">
          <button className="btn btn-light">Search</button>
        </div>

        {/* Widget list placeholder */}
        <div className="row mb-4">
          <div className="col-12">
            <div
              className="bg-light p-4"
              style={{ height: "200px", borderRadius: "10px" }}
            >
              <p className="mb-4">List of widgets to select</p>
              <button className="btn btn-primary" onClick={handleAddWidget}>
                Add Widget
              </button>
            </div>
          </div>
        </div>

        {/* Selected widgets */}
        {selectedWidgets.length > 0 && (
          <div className="row mb-4">
            {selectedWidgets.map((widget, index) => (
              <div className="col-12 mb-3" key={index}>
                <div
                  className="bg-light p-4"
                  style={{ position: "relative", borderRadius: "10px" }}
                >
                  {widget}
                  {/* Remove button */}
                  <button
                    className="btn btn-danger"
                    style={{ position: "absolute", top: "10px", right: "10px" }}
                    onClick={() => handleRemoveWidget(index)}
                  >
                    X
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Save button */}
        <button className="btn btn-light mt-3">Save</button>
      </main>
    </div>
  );
}
