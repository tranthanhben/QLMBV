import React, {Component, PropTypes} from 'react';
import {formatDate, numeral, ATOLV, parseTinhtrang} from '../../meta';

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
export class THeadCTK extends Component {
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
    objectLV: {},
    loaivai: {},
    objectK: {},
    kho: ''
  }
  componentWillMount(){
    this.state.objectLV = ATOLV(this.props.listLV || []);
    this.state.loaivai = this.state.objectLV[this.props.item.loaivaiid]|| {};
    this.state.objectK = this.state.loaivai && this.state.loaivai["chitietkho"] || {};
    this.state.kho = this.state.objectK[this.props.item.khoid]|| '';
  }
  componentWillReceiveProps(nextProps) {
    if(nextProps.listLV){
      this.setState({objectLV: ATOLV(nextProps.listLV || [])});
    }
  }
  selectLoaivai(){
    this.props.edit(event);
    let value = event.target.value;
    if(value){
      this.setState({
        loaivai: this.state.objectLV[value],
        objectK: this.state.objectLV[value].chitietkho,
        kho: this.state.objectLV[value].chitietkho[this.props.item.khoid]
      });
    }
  }
  selectKho(){
    this.props.edit(event);
    let value = event.target.value;
    if(value){
      this.setState({kho: this.state.objectK[value]});
    }
  }
  render(){
    const {meta, item, add, del, edit, index, listLV, listK} = this.props;
    const {loaivai, objectLV, kho, objectK} = this.state;
    const optionK = [];
    for(let key in objectK){
      optionK.push(
        <option key={key} value={key}>
          {key}
        </option>
        );
    }
    let soluong = item.soluong * -1;
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
        <td key='conlai' >
          <input type="text" data-addr='conlai' className="form-control" readOnly  value={loaivai.conlai || '0'} />
        </td>
        <td key={'kho'+ index}>
          <select className='form-control' data-addr='khoid'
            onChange={::this.selectKho}
            value={item.khoid || ''}>
            <option key={index + 'default'}>-- Kho --</option>
            {optionK}
          </select>
        </td>
        <td key='trong' className=' dt-body-right' >
          <input type="number" data-addr='trong' className="form-control" readOnly  value={kho || '0'} />
        </td>

        <td key='soluong' className=' dt-body-right' >
          <input type="number" step='10' min='0' data-addr='soluong'className="form-control dt-body-right" value={soluong || ''} onChange={edit} />
        </td>
        <td key='gia' className=' dt-body-right' >
          <input type="number" step='10' min='0' data-addr='gia'className="form-control dt-body-right" value={item.gia || ''} onChange={edit}/>
        </td>
        <td key='thanhtien' className=' dt-body-right' >
          <input type="number" step='10' min='0' data-addr='thanhtien' readOnly className="form-control dt-body-right" value={item.gia*soluong || '0'} />
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
export class TBodyCTK extends Component {
  static propTypes = {
    meta: PropTypes.object,
    item: PropTypes.object,
    listLV: PropTypes.array
  }
  state = {
    objectLV: {},
    loaivai: {},
    objectK: {},
    kho: ''
  }
  componentWillMount(){
    this.state.objectLV = ATOLV(this.props.listLV || []);
    this.state.loaivai = this.state.objectLV[this.props.item.loaivaiid]|| {};
    this.state.objectK = this.state.loaivai && this.state.loaivai["chitietkho"] || {};
    this.state.kho = this.state.objectK[this.props.item.khoid]|| '';
  }
  componentWillReceiveProps(nextProps) {
    if(nextProps.listLV){
      let obj = ATOLV(nextProps.listLV || [])|| {};
      let lv = obj[this.props.item.loaivaiid] || {};
      let objK = lv.chitietkho || {};
      let k = objK[this.props.item.khoid];
      this.setState({
        objectLV: obj,
        loaivai: lv,
        objectK: objK,
        kho: k
      });
    }
  }
  render(){
    const {meta, item, index} = this.props;
    const {loaivai, objectLV, kho, objectK} = this.state;
    return (
      <tr role="row" className={index%2===1 ? "even":"odd"} key={index}>
        <td>{index+1}</td>
        <td key={'loaivai'+ index}>
          {loaivai.ten}
        </td>
        <td key='conlai' >
          {loaivai.conlai}
        </td>
        <td key={'kho'+ index}>
          {item.khoid}
        </td>
        <td key='trong'  >
          {objectK[item.khoid]}
        </td>
        <td key='soluong'  >
          {numeral(item.soluong*-1).format('(0,0.00)') + ' Cây'}
        </td>
        <td key='gia' >
          {numeral(item.gia).format('(0,0.00)') + ' VND'}
        </td>
        <td key='thanhtien' >
          {numeral(item.gia*item.soluong*-1).format('(0,0.00)') + ' VND'}
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
