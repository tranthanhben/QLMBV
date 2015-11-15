import React, {Component, PropTypes} from 'react';

export class THead extends Component {
  static propTypes = {
    meta: PropTypes.object,
    sort: PropTypes.string,
    sortFunc: PropTypes.func.isRequired
  }
  render(){
    const {meta, sort, sortFunc} = this.props;
    let thList = [];
    for(let key in meta){
      let classField = '';
      let field = meta[key];
      if(field.sort){
        if(sort === field.name){
          classField = "sorting_asc";
        }else if(sort === "-"+field.name){
          classField = "sorting_desc";
        }else{
          classField = "sorting";
        }
      }
      thList.push(
        <th className={classField} onClick={sortFunc(field.name)} key={field.name} tabIndex="0" aria-controls="example" rowSpan="1" colSpan="1" >{field.label}</th>
        );
    }
    return (
      <tr role="row">
        <th key="stt" tabIndex="0" aria-controls="example" >#</th>
        {thList}
      </tr>
    )
  }
}
export class TBody extends Component {
  static propTypes = {
    meta: PropTypes.object,
    sort: PropTypes.string,
    item: PropTypes.object
  }
  render(){
    const {meta, sort, item, index, paging} = this.props;
    let trList = [];
    for(let key in meta){
      let classField = '';
      let field = meta[key];
      if(field.sort){
        if(sort === field.name){
          classField = "sorting_1";
        }else if(sort === "-"+field.name){
          classField = "sorting_1";
        }
      }
      console.log(field.up);
      if(field.up){
        classField = classField + " uppercase";
      }
      trList.push(
        <td className={classField} key={field.name} >{item[key]}</td>
        );
    }
    return (
      <tr role="row" className={index%2===1 ? "even":"odd"}>
        <td>{paging.page*paging.page_size+1+index}</td>
        {trList}
      </tr>
    )
  }
}

export class TFoot extends Component {
  static propTypes = {
    meta: PropTypes.object
  }
  render(){
    const {meta} = this.props;
    let thList = [];
    for(let key in meta){
      let field = meta[key];
      thList.push(
        <th  key={field.name} tabIndex="0" aria-controls="example" rowSpan="1" colSpan="1" >{field.label}</th>
        );
    }
    return (
      <tr role="row">
        <th key="stt" tabIndex="0" aria-controls="example" >#</th>
        {thList}
      </tr>
    )
  }
}
