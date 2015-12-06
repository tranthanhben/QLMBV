import React from 'react';

export default function renderField(obj, meta) {
  let info = [];
    for(const key in meta){
      const field = meta[key];
      info.push(
        <div className="info-group" key={key}>
          <div className="row">
            <div className="col-md-3 align-right">
              <span>{field.label + ": "}</span>
            </div>
            <div className="col-md-9">
              <p className={field.up? 'uppercase':''}>{(item[key]||'') + ' ' + (field.unit||'')}</p>
            </div>
          </div>
        </div>
      );
    }
  return info;
}
