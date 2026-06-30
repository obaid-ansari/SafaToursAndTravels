import React, { useState, useEffect, useRef, useMemo } from "react";

const CountryCodeAutocomplete = ({ name, value, onChange, countries }) => {
  const [query, setQuery] = useState(""); // Holds the search text
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef(null);

  // Close the dropdown if the user clicks outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
        setQuery(""); // Clear search when closed
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Filter the countries based on the search query
  const filteredCountries = useMemo(() => {
    const lowerQuery = query.toLowerCase().trim();
    if (!lowerQuery) return countries; // Show all if search is empty

    return countries.filter(
      (c) =>
        c.name.toLowerCase().includes(lowerQuery) ||
        c.code.includes(lowerQuery),
    );
  }, [query, countries]);

  // Handle selection and pass it back to the parent
  const handleSelect = (code) => {
    onChange({ target: { name, value: code } });
    setIsOpen(false); // Close dropdown
    setQuery(""); // Reset search
  };

  return (
    <div
      className="position-relative"
      ref={wrapperRef}
      style={{ maxWidth: "120px" }}
    >
      {/* The visible button inside the input-group */}
      <button
        type="button"
        className="btn border-0 text-black form-control-lg fs-6 dropdown-toggle text-start"
        style={{
          width: "100%",
          borderRadius: "0.375rem 0 0 0.375rem",
          backgroundColor: "rgba(255, 255, 255, 0.6)",
        }}
        onClick={() => setIsOpen(!isOpen)}
      >
        {value || "+91"}
      </button>

      {/* The searchable dropdown menu */}
      {isOpen && (
        <div
          className="dropdown-menu show p-2 mt-1"
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            zIndex: 1050,
            minWidth: "250px", // Wider than the button to show full country names
            maxHeight: "250px",
            overflowY: "auto",
          }}
        >
          {/* Search Input */}
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Search country or code..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
          />

          {/* Filtered List */}
          <ul className="list-unstyled mb-0">
            {filteredCountries.length > 0 ? (
              filteredCountries.map((c, idx) => (
                <li
                  key={`${c.code}-${idx}`}
                  className="dropdown-item rounded"
                  style={{ cursor: "pointer" }}
                  onClick={() => handleSelect(c.code)}
                >
                  <strong>{c.code}</strong> {c.name}
                </li>
              ))
            ) : (
              <li className="text-muted text-center p-2">No matches found</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CountryCodeAutocomplete;
