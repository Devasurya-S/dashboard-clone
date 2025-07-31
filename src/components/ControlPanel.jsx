import React from 'react';
import Btn from './Btn';

const ControlPanel = ({ editMode, setEditMode, layouts, setLayouts }) => {
  return (
    <div className='d-flex flex-column flex-md-row gap-2 justify-content-center py-2'>
      {!editMode && (
        <>
            <Btn name="Edit" editMode={editMode} setEditMode={setEditMode} />
            <Btn name="Reset" editMode={editMode} setEditMode={setEditMode} setLayouts={setLayouts} />
        </>
      )}
      {editMode && (
        <>
          <Btn name="Cancel" editMode={editMode} setEditMode={setEditMode} setLayouts={setLayouts} />
          <Btn name="Save" editMode={editMode} setEditMode={setEditMode} setLayouts={setLayouts} />
        </>
      )}
    </div>
  );
};

export default ControlPanel;
