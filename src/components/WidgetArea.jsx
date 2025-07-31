import React, { useEffect, useState } from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

const ResponsiveGridLayout = WidthProvider(Responsive);

const defaultLayouts = {
  lg: [{ i: "a", x: 3, y: 0, w: 2, h: 1 }, { i: "b", x: 5, y: 0, w: 2, h: 2 }, { i: "c", x: 7, y: 0, w: 2, h: 1 }],
  md: [{ i: "a", x: 0, y: 0, w: 2, h: 1 }, { i: "b", x: 0, y: 1, w: 4, h: 2 }, { i: "c", x: 0, y: 3, w: 2, h: 1 }],
  sm: [{ i: "a", x: 0, y: 0, w: 6, h: 1 }, { i: "b", x: 0, y: 1, w: 6, h: 2 }, { i: "c", x: 0, y: 3, w: 6, h: 1 }],
  xs: [{ i: "a", x: 0, y: 0, w: 4, h: 1 }, { i: "b", x: 0, y: 1, w: 4, h: 2 }, { i: "c", x: 0, y: 3, w: 4, h: 1 }],
  xxs: [{ i: "a", x: 0, y: 0, w: 2, h: 1 }, { i: "b", x: 0, y: 1, w: 2, h: 2 }, { i: "c", x: 0, y: 3, w: 2, h: 1 }],
};

const breakpoints = { lg: 1200, md: 992, sm: 768, xs: 576, xxs: 0 };
const cols = { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 };

const WidgetArea = ({ editMode, layouts, setLayouts }) => {

  const handleLayoutChange = (currentLayout, allLayouts) => {
  if (editMode) {
    setLayouts(allLayouts);
    localStorage.setItem("tempLayouts", JSON.stringify(allLayouts));
  }
};

  return (
    <div className="bg-secondary flex-grow-1">
      <ResponsiveGridLayout
        className="layout"
        layouts={layouts}
        breakpoints={breakpoints}
        cols={cols}
        rowHeight={200}
        compactType={null}
        preventCollision={false}
        isDraggable={editMode}
        isResizable={editMode}
        onLayoutChange={handleLayoutChange}
      >
        <div key="a" className="bg-warning p-1">a</div>
        <div key="b" className="bg-danger p-1">b</div>
        <div key="c" className="bg-primary p-1">c</div>
      </ResponsiveGridLayout>
    </div>
  );
};

export default WidgetArea;
