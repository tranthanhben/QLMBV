import React from 'react';

export default function renderField(obj, meta, fn) {
  let fieldEvent = [];
  for (let key in meta) {
    let field = meta[key];
    if (field.type !== "array")
      fieldEvent.push(
        <div className='form-group' key={key}>
          <label>
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
          &nbsp;
          {field.$input(obj, fn)}
        </div>);
  }
  return fieldEvent;
}
