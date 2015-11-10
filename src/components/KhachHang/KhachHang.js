import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import * as khachhangActions from '../../actions/khachhang/khachhangActions';
import {isLoaded, loadList as loadKH} from '../../actions/khachhang/khachhangActions';
import {PanelView} from 'components/layout';

@connect(
  state =>({
    listKH: state.khachhang.list,
    error: state.khachhang.error,
    loading: state.khachhang.loading
  }),
  {...khachhangActions})

export default
class KhachHang extends Component{
  static propTypes = {
    listKH: PropTypes.array,
    error: PropTypes.object,
    loading: PropTypes.bool,
    loadList:PropTypes.func.isRequired
  }
  static fetchData(store){
    if(!isLoaded(store.getState)){
      return store.dispatch(loadKH());
    }
  }
  render(){
    return (
      <PanelView>
      </PanelView>
    );
  }
}
