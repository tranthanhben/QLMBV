import React, {Component, PropTypes} from 'react';
import {formatDate, numeral, ATOLV, changeDTI, datetime, parseTinhtrang} from '../../meta';

export class THead extends Component {
  static propTypes = {
    meta: PropTypes.object,
    add: PropTypes.func.isRequired,
    addRow: PropTypes.func.isRequired,
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
          <button className="btn btn-default btn-table btn-in-th btn-in-add" title="Add many" onClick={this.props.addRow}>
            <i className="fa fa-list-ol"/>
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
        <th className={classField} key={field.name} tabIndex="0" aria-controls="example" rowSpan="1" colSpan="1">{field.label+(field.unitTable? field.unitTable : '')}</th>
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
    listK: PropTypes.array,
    add: PropTypes.func.isRequired,
    del: PropTypes.func.isRequired,
    edit: PropTypes.func.isRequired
  }
  state = {
    objectLV: ATOLV(this.props.listLV || [])|| {},
    loaivai: {},
    objectK: ATOLV(this.props.listLV || [])||{},
    kho: {}
  }
  componentWillMount(){
    this.state.objectLV = ATOLV(this.props.listLV || []);
    this.state.loaivai = this.state.objectLV[this.props.item.loaivaiid]|| {};
    this.state.objectK = ATOLV(this.props.listK || []);
    this.state.kho = this.state.objectK[this.props.item.khoid]|| {};
  }
  componentWillReceiveProps(nextProps) {
    if(nextProps.listLV){
      let obj = ATOLV(nextProps.listLV || [])|| {};
      let lv = obj[this.props.item.loaivaiid] || {};
      this.setState({objectLV: obj, loaivai: lv});
    }
    if(nextProps.listK){
      let obj = ATOLV(nextProps.listK || [])|| {};
      let kho = obj[this.props.item.khoid] || {};
      this.setState({objectK: obj, kho: kho});
    }
  }
  selectLoaivai(){
    this.props.edit(event);
    let value = event.target.value;
    if(value){
      this.setState({loaivai: this.state.objectLV[value]});
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
    return (
      <tr role="row" className={index%2===1 ? "even":"odd"} key={index}>
        <td>{index+1}</td>
        <td key='cayvaiid' className=' dt-body-right' >
          <input type="text" data-addr='cayvaiid'className="form-control dt-body-right" value={item.cayvaiid || ''} readOnly />
        </td>
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
        <td key={'kho'+ index}>
          <select className='form-control' data-addr='khoid'
            onChange={::this.selectKho}
            value={item.khoid || ''}>
            <option key={index + 'default'}>-- Kho --</option>
            {listK && listK.map(b => {
              return (
                <option key={index + ' ' +b.id} value={b.id}>
                  {b.ten}
                </option>
              );
            })}
          </select>
        </td>
        <td key='trong' className=' dt-body-right' >
          <input type="number" data-addr='trong' className="form-control" readOnly  value={kho.trong || ''} />
        </td>

        <td key='chieudai' className=' dt-body-right' >
          <input type="number" step='10' min='0' data-addr='chieudai'className="form-control dt-body-right" value={item.chieudai || ''} onChange={edit} />
        </td>
        <td key='gia' className=' dt-body-right' >
          <input type="number" step='10' min='0' data-addr='gia'className="form-control dt-body-right" value={item.gia || ''} onChange={edit}/>
        </td>
        <td key='thanhtien' className=' dt-body-right' >
          <input type="number" step='10' min='0' data-addr='thanhtien' readOnly className="form-control dt-body-right" value={item.gia*item.chieudai} />
        </td>
        <td key='ngaynhap' className=' dt-body-right' >
          <input type="date" step='10' min='0' data-addr='ngaynhap' className="form-control dt-body-right" value={changeDTI(datetime(new Date(item.ngaynhap || '')))} onChange={edit}/>
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
    listLV: PropTypes.array,
    listK: PropTypes.array
  }
  state = {
    objectLV: ATOLV(this.props.listLV || [])|| {},
    loaivai: {},
    objectK: ATOLV(this.props.listK || [])||{},
    kho: {}
  }
  componentWillMount(){
    this.state.objectLV = ATOLV(this.props.listLV || []);
    this.state.loaivai = this.state.objectLV[this.props.item.loaivaiid]|| {};
    this.state.objectK = ATOLV(this.props.listK || []);
    this.state.kho = this.state.objectK[this.props.item.khoid]|| {};
  }
  componentWillReceiveProps(nextProps) {
    if(nextProps.listLV){
      let obj = ATOLV(nextProps.listLV || [])|| {};
      let lv = obj[this.props.item.loaivaiid] || {};
      this.setState({objectLV: obj, loaivai: lv});
    }
    if(nextProps.listK){
      let obj = ATOLV(nextProps.listK || [])|| {};
      let kho = obj[this.props.item.khoid] || {};
      this.setState({objectK: obj, kho: kho});
    }
  }
  render(){
    const {meta, item, add, del, edit, index, listLV, listK} = this.props;
    const {loaivai, objectLV, kho, objectK} = this.state;
    return (
      <tr role="row" className={index%2===1 ? "even":"odd"} key={index}>
        <td>{index+1}</td>
        <td key='cayvaiid' >
          {item.cayvaiid}
        </td>
        <td key={'loaivai'+ index}>
          {loaivai.ten}
        </td>
        <td key={'kho'+ index}>
          {kho.ten}
        </td>
        <td key='trong' >
          {kho.trong}
        </td>
        <td key='chieudai' >
          {numeral(item.chieudai).format('(0,0.00)')}
        </td>
        <td key='gia' >
          {numeral(item.gia).format('(0,0.00)')}
        </td>
        <td key='thanhtien' >
          {numeral(item.gia*item.chieudai).format('(0,0.00)')}
        </td>
        <td key='ngaynhap' >
          {datetime(new Date(item.ngaynhap))}
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
export class THeadView extends Component {
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
      if(field.view === false){
        continue;
      }
      // if(field.type === "number"){
      //   classField += "dt-body-right";
      // }
      if(field.sort){
        if(sort === field.name){
          classField += " sorting_asc";
        }else if(sort === "-"+field.name){
          classField += " sorting_desc";
        }else{
          classField += " sorting";
        }
        thList.push(
        <th className={classField} onClick={sortFunc(field.name)} key={field.name} tabIndex="0" aria-controls="example" rowSpan="1" colSpan="1" >{field.label+(field.unitTable? field.unitTable : '')}</th>
        );
      }else{
        thList.push(
        <th className={classField} key={field.name} tabIndex="0" aria-controls="example" rowSpan="1" colSpan="1" >{field.label+(field.unitTable? field.unitTable : '')}</th>
        );
      }

    }
    return (
      <tr role="row" >
        <th key="stt" tabIndex="0" aria-controls="example" >#</th>
        {thList}
        <th key="control"></th>
      </tr>
    )
  }
}
export class TBodyView extends Component {
  static propTypes = {
    meta: PropTypes.object,
    sort: PropTypes.string,
    item: PropTypes.object,
    // view: PropTypes.func.isRequired,
    // edit: PropTypes.func.isRequired
  }
  render(){
    const {meta, sort, item, index, paging, view, edit} = this.props;
    const objNCC = ATOLV(this.props.listNCC||[])||{};
    return (
      <tr role="row" className={index%2===1 ? "even":"odd" + (item.lock? " disabled" : "")}>
        <td>{paging.page*paging.page_size+1+index}</td>
        <td className={" uppercase" + (sort === "id" || sort ==="-id"? " sorting_1":"")}key="giaodichid" >{item["id"]}</td>
        <td className={" uppercase" + (sort === "doitacid" || sort ==="-doitacid"? " sorting_1":"")} key="doitacid" >{item["doitacid"]}</td>
        <td className="" key="nhacungcap" >{objNCC[item["doitacid"]]&& objNCC[item["doitacid"]].ten || ''}</td>
        <td className="" key="tongtien" >{numeral(item["tongtien"]).format('(0,0.00)')}</td>
        <td className="" key="kho" >{numeral(item["kho"]).format('(0,0.00)')}</td>
        <td className="" key="donhang" >{numeral(item["donhang"]).format('(0,0.00)')}</td>
        <td className="" key="tinhtrangkho" >{parseTinhtrang(item["tinhtrangkho"])}</td>
        <td key='control' className="group-edit">
          <button className="btn btn-warning btn-table" title="View full" onClick={view?  view(item): function(){}}>
            <i className="fa fa-eye"/>
          </button>
          <button className="btn btn-success btn-table" title="Edit" onClick={edit?  edit(item.id): function(){}}>
            <i className='fa fa-pencil fa-fw'/>
          </button>
        </td>
      </tr>
    )
  }
}

export class TFootView extends Component {
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
