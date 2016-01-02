import React, {Component, PropTypes} from 'react';
import {formatDate, numeral, ATOLV, parseTinhtrang, changeDTI, datetime} from '../../meta';

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
export class THeadCTTT extends Component {
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
    add: PropTypes.func.isRequired,
    del: PropTypes.func.isRequired,
    edit: PropTypes.func.isRequired
  }
  render(){
    const {meta, item, add, del, edit, index} = this.props;
    let thanhtoan = item.thanhtoan *-1;
    return (
      <tr role="row" className={index%2===1 ? "even":"odd"} key={index}>
        <td>{index+1}</td>
        <td key='thanhtoan'>
          <input type="number" step='10' min='0' data-addr='thanhtoan'className="form-control dt-body-right" value={thanhtoan || ''} placeholder='So tien thanh toán' onChange={edit} />
        </td>
        <td key='phuongthuc'>
          <select className='form-control' data-addr='phuongthuc'
            onChange={edit}
            value={item.phuongthuc || ''}>
            <option key={index + 'default'}>-- Phuong thuc thanh toán--</option>
            {[{
                value: "tienmat",
                label: "Tien Mat"
              },{
                value: "chuyenkhoan",
                label: "Chuyen Khoan"
              }].map(b => {
              return (
                <option key={index + ' ' +b.value} value={b.value}>
                  {b.label}
                </option>
              );
            })}
          </select>
        </td>
        <td key='ngaythanhtoan'>
          <input type="date" data-addr='ngaythanhtoan' className="form-control"  onChange={edit} value={changeDTI(datetime(new Date(item.ngaythanhtoan || '')))} />
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
export class TBodyCTTT extends Component {
  static propTypes = {
    meta: PropTypes.object,
    item: PropTypes.object
  }
  render(){
    const {meta, item, index} = this.props;
    let thanhtoan = item.thanhtoan *-1;
    return (
      <tr role="row" className={index%2===1 ? "even":"odd"} key={index}>
        <td>{index+1}</td>
        <td key='thanhtoan'>
          {numeral(thanhtoan).format('(0,0)')+ ' VND'}
        </td>
        <td key='phuongthuc'>
          {item.phuongthuc}
        </td>
        <td key='ngaythanhtoan'>
          {datetime(new Date(item.ngaythanhtoan))}
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
        <td className="" key="tongtien" >{numeral(item["tongtien"]).format('(0,0)')}</td>
        <td className="" key="thanhtoan" >{numeral(item["thanhtoan"]).format('(0,0)')}</td>
        <td className="" key="tinhtrangthanhtoan" >{parseTinhtrang(item["tinhtrangthanhtoan"])}</td>
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
