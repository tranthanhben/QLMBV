import React, {Component, PropTypes} from 'react';
import {formatDate, numeral, ATOLV} from '../../meta';

export class THead extends Component {
  static propTypes = {
    meta: PropTypes.object,
    add: PropTypes.func.isRequired
  }
  render(){
    let thList = [];
    for(let key in this.props.meta){
      let classField = '';
      let field = this.props.meta[key];
      if(field.view === false){
        continue;
      }
      thList.push(
        <th className={classField} key={field.name} tabIndex="0" aria-controls="example" rowSpan="1" colSpan="1">{field.label}</th>
      );
    }
    return (
      <tr role="row">
        <th key="stt" tabIndex="0" aria-controls="example" >#</th>
        {thList}
        <th key="control" className="group-edit">
          <button className="btn btn-success btn-table btn-in-th btn-in-add" title="Add" onClick={this.props.add}>
            <i className="fa fa-plus"/>
          </button>
        </th>
      </tr>
    )
  }
}
export class THeadViewFull extends Component {
  static propTypes = {
    meta: PropTypes.object
  }
  render(){
    let thList = [];
    for(let key in this.props.meta){
      let classField = '';
      let field = this.props.meta[key];
      if(field.view === false){
        continue;
      }
      thList.push(
        <th className={classField} key={field.name} tabIndex="0" aria-controls="example" rowSpan="1" colSpan="1">{field.label}</th>
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
    item: PropTypes.object,
    listLV: PropTypes.array,
    add: PropTypes.func.isRequired,
    del: PropTypes.func.isRequired,
    edit: PropTypes.func.isRequired
  }
  state = {
    object: {},
    loaivai: {}
  }
  componentWillMount(){
    this.state.object = ATOLV(this.props.listLV || []);
    this.state.loaivai = this.state.object[this.props.item.loaivaiid]|| {};
  }
  componentWillReceiveProps(nextProps) {
    if(nextProps.listLV){
      this.setState({object: ATOLV(nextProps.listLV || [])});
    }
  }
  selectLoaivai(){
    this.props.edit(event);
    let value = event.target.value;
    this.setState({loaivai: this.state.object[value]});
  }
  render(){
    const {meta, item, add, del, edit, index, listLV} = this.props;
    const {loaivai, object} = this.state;
    return (
      <tr role="row" className={index%2===1 ? "even":"odd"} key={index}>
        <td>{index+1}</td>
        <td key={'loaivai'+ index}>
          <select className='form-control' data-addr='loaivaiid'
            onChange={::this.selectLoaivai}
            value={item.loaivaiid || ''}>
            <option key={index + 'default'}>-- Loai Vai --</option>
            {listLV && listLV.map(b => {
              return (
                <option key={index + ' ' +b.id} value={b.id}>
                  {b.ten}
                </option>
              );
            })}
          </select>
        </td>
        <td key='mausac' >
          <input type="text" data-addr='mausac'className="form-control" readOnly nvalue={loaivai.mausac || ''} />
        </td>
        <td key='chatlieu' >
          <input type="text" data-addr='chatlieu'className="form-control" readOnly  value={loaivai.chatlieu || ''} />
        </td>
        <td key='soluong' >
          <input type="number" step='10' min='0' data-addr='soluong'className="form-control dt-body-right" value={item.soluong || ''} onChange={edit} />
        </td>
        <td key='gia' >
          <input type="number" step='10' min='0' data-addr='gia'className="form-control dt-body-right" value={item.gia || ''} onChange={edit}/>
        </td>
        <td key='thanhtien' >
          <input type="number" step='10' min='0' data-addr='thanhtien' readOnly className="form-control dt-body-right" value={item.gia*item.soluong} />
        </td>

        <td key='control' className="group-edit">
          <button className="btn btn-danger btn-table btn-in-th btn-in-del" title="Del" onClick={del} key="del">
            <i className='fa fa-close'/>
          </button>
          <button className="btn btn-success btn-table btn-in-th btn-in-add" title="Add" onClick={add} key="add">
            <i className="fa fa-plus"/>
          </button>
        </td>
      </tr>
    )
  }
}
export class TBodyViewFull extends Component {
  static propTypes = {
    meta: PropTypes.object,
    item: PropTypes.object,
    listLV: PropTypes.array
  }
  render(){
    const {meta, item} = this.props;
    return (
      <tr role="row" className={index%2===1 ? "even":"odd"} key={index}>
        <td>{index+1}</td>
        <td key={'loaivai'+ index}>
          <select className='form-control' data-addr='loaivaiid'
            onChange={edit}
            value={item.loaivaiid || ''}>
            <option key={index + 'default'}>-- Loai Vai --</option>
            {listLV && listLV.map(b => {
              return (
                <option key={index + ' ' +b.id} value={b.id}>
                  {b.ten}
                </option>
              );
            })}
          </select>
        </td>
        <td key='soluong' >
          <input type="number" step='10' min='0' data-addr='soluong'className="form-control" value={item.soluong || ''} onChange={edit} />
        </td>
        <td key='gia' >
          <input type="number" step='10' min='0' data-addr='gia'className="form-control" value={item.gia || ''} onChange={edit}/>
        </td>
        <td key='control' className="group-edit">
          <button className="btn btn-danger btn-table btn-in-th btn-in-del" title="Del" onClick={del} key="del">
            <i className='fa fa-close'/>
          </button>
          <button className="btn btn-success btn-table btn-in-th btn-in-add" title="Add" onClick={add} key="add">
            <i className="fa fa-plus"/>
          </button>
        </td>
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
      let classField = '';
      if(field.view === false){
        continue;
      }
      // if(field.type === "number"){
      //   classField += " dt-body-right";
      // }
      thList.push(
        <th className={classField} key={field.name} tabIndex="0" aria-controls="example" rowSpan="1" colSpan="1" >{field.label}</th>
        );
    }
    return (
      <tr role="row">
        <th key="stt" tabIndex="0" aria-controls="example" >#</th>
        {thList}
        <th key="control"></th>
      </tr>
    )
  }
}
