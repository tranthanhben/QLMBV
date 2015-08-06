import React from 'react';
import markdown from 'markdown';
import {changeDTI, parseDate } from './changeTime';
import datetime from './datetime';
import Select from 'react-select';
let md = markdown.markdown;
let inputs = {};

let types = {
  date: { def: changeDTI(datetime(new Date())) },
  number: { def: 0 },
  bool: { def: false },
  single: { def: '' },
  md: { def: '' },
  select: { def: '' },
  special: { def: '' },
  object: { def: {} },
  multiline: { def: '' },
  multiselect: { def: '' },
  interest: { def: {} }
};
inputs.default = function (field) {
  return function (scope, fn, addr) {
    let address = addr ? addr + field.name : field.name;
    return (
      <input className='form-control'
        data-addr={address}
        onChange={::fn.handleChange}
        placeholder={field.label}
        value={scope[field.name] || ''}/>
    );
  };
};

inputs.date = function (field) {
  return function (scope, fn, addr) {
    let address = addr ? addr + field.name : field.name;
    let value = changeDTI(datetime(new Date(scope[field.name])))
    return (
      <input className='form-control' type='date'
        data-addr={address}
        data-test={changeDTI(scope[field.name])}
        onChange={::fn.handleChange}
        value={value}/>
    );
  };
};

inputs.image = function (field) {
  return function (scope, fn, addr) {
    let address = addr ? addr + field.name : field.name;
    return (
      <input className='form-control'
        data-addr={address}
        onChange={::fn.handleChange}
        placeholder={field.label}
        value={scope[field.name]}/>
    );
  };
};

inputs.number = function (field) {
  return function (scope, fn, addr) {
    let address = addr ? addr + field.name : field.name;
    return (
      <input className='form-control' step='1' type='number'
        data-addr={address}
        onChange={::fn.handleChange}
        placeholder={field.label}
        value={scope[field.name] || ''}/>
    );
  };
};
inputs.single = function (field) {
  return function (scope, fn, addr) {
    let address = addr ? addr + field.name : field.name;
    return (
      <input className='form-control'
        data-addr={address}
        onChange={::fn.handleChange}
        placeholder={field.label}
        value={scope[field.name] || ''}/>
    );
  };
};
inputs.multiline = function (field) {
  return function (scope, fn, addr) {
    let address = addr ? addr + field.name : field.name;
    return (
      <textarea className='form-control' type='text'
        data-addr={address}
        onChange={::fn.handleChange}
        placeholder={field.label}
        value={scope[field.name] || ''}>
      </textarea>
    );
  };
};
inputs.md = function (field) {
  return function (scope, fn, addr) {
    let address = addr ? addr + field.name : field.name;
    let html = md.toHTML(scope[field.name] || '');
    return (
      <div>
        <textarea className='form-control' type='text'
          data-addr={address}
          onChange={::fn.handleChange}
          placeholder={field.label}
          value={scope[field.name] || ''}>
        </textarea>
        <div className='content' dangerouslySetInnerHTML={{ __html: html }}></div>
      </div>
    );
  };
};
inputs.bool = function (field) {
  return function (scope, fn, addr) {
    let address = addr ? addr + field.name : field.name;
    return (
      <div className='input-checkbox'>
        <input type='checkbox'
          checked={scope[field.name] === true ? 'checked' : ''}
          data-addr={address}
          onChange={::fn.handleChange}/>
      </div>
    );
  };
};
inputs.object = function (field) {
  let subs = field.children;
  let arr = [];
  for (let sub in subs) {
    let fn;
    fn = inputs[subs[sub].type] || inputs.default;
    fn = fn(subs[sub]);
    subs[sub].$input = fn;
    arr.push(subs[sub]);
  }
  return function (scope, fn) {
    return (
      <div className='row'>
        {arr.map(function (sub) {
          return (
            <div className='col-md-6' key={sub.name}>
              <p>
                {sub.label}
              </p>
              {sub.$input(scope[field.name], fn, field.name + ".")}
            </div>
          );
        })}
      </div>
    );
  };
};
inputs.array = function (field) {
  let subs = field.children;
  let arr = [];
  for (let sub in subs) {
    let fn;
    fn = inputs[subs[sub].type] || inputs.default;
    fn = fn(subs[sub]);
    subs[sub].$input = fn;
    arr.push(subs[sub]);
  }
  return function (scope, fn, addr) {
    return arr.map(function (sub) {
      return (
        <div className='col-md-3' key={sub.name}>
          <p>
            {sub.label}
          </p>
          {sub.$input(scope, fn, addr)}
        </div>
      );
    });
  };
};
inputs.multiselect = function (field) {
  return function (scope, fn, addr) {
    let address = addr ? addr + field.name : field.name;
    let value = scope[field.name];
    return (
      <div style={{ position: 'relative' }}>
        <Select delimiter=','
          data-addr={address}
          multi={true}
          onChange={::fn.logChange}
          options={field.options}
          value={scope[field.name] || undefined}/>
      </div>
    );
  };
};
inputs.select = function (field) {
  return function (scope, fn, addr) {
    let address = addr ? addr + field.name : field.name;
    let value = scope[field.name];
    return (
      <select className='form-control'
        data-addr={address}
        disabled={field.disabled}
        onChange={::fn.handleChange}
        value={scope[field.name] || ''}>
        <option key='select'></option>
        {field.options.map(function (f) {
          return (
            <option key={f.name} value={f.value}>
              {f.label}
            </option>
          );
        })}
      </select>
    );
  };
};
export function preprocess(fields) {
  for (let name in fields) {
    let field = fields[name];
    let typeDef = types[field.type];
    if (!typeDef) {
      let err = 'Unsupported type ' + field.type;
      console.error(err, field);
      throw err;
    }
    if (field.type === "interest") {
      field.children = preprocess(field.children);
    }

    let fn;
    fn = inputs[field.type] || inputs.default;
    fn = fn(field);
    field.$input = fn;
    field.$def = typeDef.def;

    if (field.special) {
      for (let i in field.special) {
        if (field[i] === undefined)
          field[i] = field.special[i];
      }
    }
  }

  return fields;
}
export function preprocessPost(object, meta){
  for (let i in meta) {
    let field = meta[i];
    if (!!field.children && field.type === "object")
      object[i] = parseNumber(object[i], field.children);
    if (field.type === "number"){
      object[i] = parseFloat(object[i]) || 0;
    }
    if (field.type ==="date"){
      object[i] = parseDate(object[i]);
    }
  }
  return object;
}



