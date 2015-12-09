import React from 'react';
export function renderLabel(field) {
  if (!field)
    field = {};
  return (
    <label className='control-label'>
      <span>
        {field.label}
      </span>
      &nbsp;
      {field.required ? <span className='required'>*</span> : null}
      <br/>
      <span className='label-small'>
        {field.label_vi}
      </span>
      <span className='unit'>
        {field.unit}
      </span>
    </label>
  );
}
