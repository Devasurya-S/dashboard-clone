import React, { useState } from 'react';
import './App.css';
import ControlPanel from './components/ControlPanel';
import WidgetArea from './components/WidgetArea';

function App() {
  const [editMode, setEditMode] = useState(false);

  const defaultLayouts = {
    lg: [{ i: "a", x: 3, y: 0, w: 2, h: 1 }, { i: "b", x: 5, y: 0, w: 2, h: 2 }, { i: "c", x: 7, y: 0, w: 2, h: 1 }],
    md: [{ i: "a", x: 0, y: 0, w: 2, h: 1 }, { i: "b", x: 0, y: 1, w: 4, h: 2 }, { i: "c", x: 0, y: 3, w: 2, h: 1 }],
    sm: [{ i: "a", x: 0, y: 0, w: 6, h: 1 }, { i: "b", x: 0, y: 1, w: 6, h: 2 }, { i: "c", x: 0, y: 3, w: 6, h: 1 }],
    xs: [{ i: "a", x: 0, y: 0, w: 4, h: 1 }, { i: "b", x: 0, y: 1, w: 4, h: 2 }, { i: "c", x: 0, y: 3, w: 4, h: 1 }],
    xxs: [{ i: "a", x: 0, y: 0, w: 2, h: 1 }, { i: "b", x: 0, y: 1, w: 2, h: 2 }, { i: "c", x: 0, y: 3, w: 2, h: 1 }],
  };

  const [layouts, setLayouts] = useState(() => {
    const saved = localStorage.getItem("layouts");

    // If saved layout exists, use it
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (err) {
        console.warn("Couldn't read saved layout. Using default.");
      }
    }

    // Otherwise, fall back to default layout
    return defaultLayouts;
  });

  return (
    <div className="d-flex flex-column h-100">
      <ControlPanel
        editMode={editMode}
        setEditMode={setEditMode}
        layouts={layouts}
        setLayouts={setLayouts}
      />
      <WidgetArea
        editMode={editMode}
        layouts={layouts}
        setLayouts={setLayouts}
      />
    </div>
  );
}

export default App;
