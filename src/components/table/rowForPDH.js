import React, {Component, PropTypes} from 'react';
import {formatDate, numeral, ATOLV, parseTinhtrang, parseOptTen} from '../../meta';
import Select from 'react-select';

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
        <th className={classField} key={field.name} tabIndex="0" aria-controls="example" rowSpan="1" colSpan="1">{field.label+(field.unitTable? field.unitTable : '')}</th>
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
export class THeadCTDH extends Component {
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
  selectLoaivai(val){
    let event = {
      target:{
        dataset:{
          addr: "loaivaiid"
        },
        value: val
      }
    };
    this.props.edit(event);
    this.setState({loaivai: this.state.object[val]});
  }
  render(){
    const {meta, item, add, del, edit, index} = this.props;
    const {loaivai, object} = this.state;
    const listLV = parseOptTen(this.props.listLV||[]);
    return (
      <tr role="row" className={index%2===1 ? "even":"odd"} key={index}>
        <td>{index+1}</td>
        <td key={'loaivai'+ index} className="td-content">
          <Select
            data-addr='loaivaiid'
            placeholder="Chon Loai Vai"
            clearable= {false}
            searchable={true}
            onChange={::this.selectLoaivai}
            value={item.loaivaiid}
            options={listLV} />
        </td>
        <td key='mausac' >
          <input type="text" data-addr='mausac'className="form-control" readOnly value={loaivai.mausac || ''} />
        </td>
        <td key='chatlieu' >
          <input type="text" data-addr='chatlieu'className="form-control" readOnly  value={loaivai.chatlieu || ''} />
        </td>
        <td key='chieudai' className=' dt-body-right' >
          <input type="number" step='10' min='0' data-addr='chieudai' className="form-control" value={item.chieudai || ''} onChange={edit} />
        </td>
        <td key='gia' className=' dt-body-right'>
          <input type="number" step='10' min='0' data-addr='gia'className="form-control" value={item.gia || ''} onChange={edit}/>
        </td>
        <td key='thanhtien' className=' dt-body-right'>
          <input type="number" step='10' min='0' data-addr='thanhtien' readOnly className="form-control" value={item.gia*item.chieudai} />
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
export class TBodyCTDH extends Component {
  static propTypes = {
    meta: PropTypes.object,
    item: PropTypes.object,
    listLV: PropTypes.array
  }
  state = {
    object: ATOLV(this.props.listLV || [])|| {},
    loaivai: {}
  }
  componentWillMount(){
    this.state.object = ATOLV(this.props.listLV || []) ||{};
    this.state.loaivai = this.state.object[this.props.item.loaivaiid]|| {};
  }
  componentWillReceiveProps(nextProps) {
    if(nextProps.listLV){
      let obj = ATOLV(nextProps.listLV || [])|| {};
      let lv = obj[this.props.item.loaivaiid] || {};
      this.setState({object: obj, loaivai: lv});
    }
  }
  render(){
    const {meta, item, index} = this.props;
    const {loaivai, object} = this.state;
    return (
      <tr role="row" className={index%2===1 ? "even":"odd"} key={index}>
        <td>{index+1}</td>
        <td key={'loaivai'+ index}>
          {loaivai.ten}
        </td>
        <td key='mausac' >
          {loaivai.mausac}
        </td>
        <td key='chatlieu' >
          {loaivai.chatlieu}
        </td>
        <td key='soluong' >
          {numeral(item.soluong).format('(0,0.00)')}
        </td>
        <td key='gia' >
          {numeral(item.gia).format('(0,0.00)')}
        </td>
        <td key='thanhtien' >
          {numeral(item.gia*item.soluong).format('(0,0.00)')}
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
        <td className="" key="tongtiendutinh" >{numeral(item["tongtiendutinh"]).format('(0,0.00)')}</td>
        <td className="" key="tinhtrangdonhang" >{parseTinhtrang(item["tinhtrangdonhang"])}</td>
        <td className={(sort === "ngaydat" || sort ==="-ngaydat"? " sorting_1":"")} key="ngaydat" >{formatDate(item["ngaydat"])}</td>
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
