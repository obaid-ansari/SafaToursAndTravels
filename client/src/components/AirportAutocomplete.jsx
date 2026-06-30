import React, { useState, useEffect, useRef, useMemo } from "react";

// The Autocomplete Sub-Component
const AirportAutocomplete = ({
  name,
  value,
  onChange,
  placeholder,
  airports,
}) => {
  const [query, setQuery] = useState(value || "");
  const [debouncedQuery, setDebouncedQuery] = useState(query);
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef(null);

  // 1. Debounce user typing
  useEffect(() => {
    const timer = setTimeout(() => setDebouncedQuery(query), 300);
    return () => clearTimeout(timer);
  }, [query]);

  // 2. Filter airports efficiently
  const filteredResults = useMemo(() => {
    if (!debouncedQuery) return [];
    const lowerQuery = debouncedQuery.toLowerCase().trim();
    return airports
      .filter(
        (item) =>
          item.city.toLowerCase().includes(lowerQuery) ||
          item.code.toLowerCase().includes(lowerQuery) ||
          item.airport.toLowerCase().includes(lowerQuery),
      )
      .slice(0, 10); // Limit to top 10
  }, [debouncedQuery, airports]);

  // 3. Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // 4. Handle input changes and pass to parent
  const handleInputChange = (e) => {
    const val = e.target.value;
    setQuery(val);
    setIsOpen(true);
    // Send standard event structure to your handleFlightChange
    onChange({ target: { name, value: val } });
  };

  // 5. Handle user selection
  const handleSelect = (airport) => {
    const formattedSelection = `${airport.city} (${airport.code})`;
    setQuery(formattedSelection);
    setIsOpen(false);
    // Send the final selection to your handleFlightChange
    onChange({ target: { name, value: formattedSelection } });
  };

  return (
    <div className="position-relative" ref={wrapperRef}>
      <input
        type="text"
        required
        className="form-control form-control-lg fs-6"
        placeholder={placeholder}
        value={query}
        onChange={handleInputChange}
        onFocus={() => setIsOpen(true)}
        autoComplete="off"
      />

      {isOpen && debouncedQuery && filteredResults.length > 0 && (
        <ul
          className="list-group position-absolute w-100 mt-1"
          style={{ zIndex: 1050, maxHeight: "250px", overflowY: "auto" }}
        >
          {filteredResults.map((item) => (
            <li
              key={item.code}
              className="list-group-item   bg-light list-group-item-action"
              style={{ cursor: "pointer" }}
              onClick={() => handleSelect(item)}
            >
              <strong className="text-color">
                {item.city} ({item.code})
              </strong>
              <div className="text-muted" style={{ fontSize: "0.85em" }}>
                {item.airport}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AirportAutocomplete;
