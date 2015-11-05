import React, {Component, PropTypes} from 'react';

export default class PanelView {
  static propTypes ={
    classTab: PropTypes.string
  }

  render(){
    let classTab = !this.props.classTab ? "": this.props.classTab;
    return (
      <div className={'inner '+classTab}>
        <nav id="nav-header" className="navbar navbar-default navbar-fixed-top">
          <div className="container-fluid mbv-nav">
            <div className="row">
              <div className="col-xs-3 visible-xs" ></div>
              <div className="col-xs-6 col-sm-4">
              Logo & Mua ban vai
              </div>
              <div className="col-xs-3 col-sm-8">
                <div className="navbar-content pull-right">Logout</div>
              </div>
            </div>
          </div>
        </nav>
        <div id="body" className="">
        <div className="mbv-grid container-fluid" >
          <div className="row">
            <div className="col-xs-12">
              <div className="mbv-panel">
                <div className="mbv-panel-body">
                  <div className="mbv-grid container-fluid" style={{"zIndex": "9999983"}}>
                    <div className="row">
                      <div className="col-xs-12">
                        <div id="example_wrapper" className="dataTables_wrapper">
                          <div className="dataTables_length" id="example_length" style={{"display": "inline-flex"}}>
                            <label className="line-height" style={{"display": "flex"}}>Show
                              <select name="example_length" aria-controls="example" className=" form-control">
                                <option value="10">10</option>
                                <option value="25">25</option>
                                <option value="50">50</option>
                                <option value="100">100</option>
                              </select> entries</label>
                          </div>
                          <div id="example_filter" className="dataTables_filter" style={{"display": "inline-flex", "float":"right"}}>
                            <label className="line-height" style={{"display": "flex"}}>Search:
                              <input type="search" className="form-control " placeholder="" aria-controls="example" />
                            </label>
                          </div>
                          <table id="example" className="table display nowrap dataTable" cellspacing="0" width="100%" role="grid" aria-describedby="example_info" style={{"width": "100%"}}>
                            <thead>
                              <tr role="row">
                                <th className="sorting" tabindex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Name: activate to sort column ascending" style={{"width": "158px"}}>Name</th>
                                <th className="sorting_desc" tabindex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Position: activate to sort column ascending" style={{"width": "240px"}} aria-sort="descending">Position</th>
                                <th className="sorting" tabindex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Office: activate to sort column ascending" style={{"width": "108px"}}>Office</th>
                                <th className="dt-body-right sorting" tabindex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Age: activate to sort column ascending" style={{"width": "46px"}}>Age</th>
                                <th className="sorting" tabindex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Start date: activate to sort column ascending" style={{"width": "100px"}}>Start date</th>
                                <th className="dt-body-right sorting" tabindex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Salary: activate to sort column ascending" style={{"width": "90px"}}>Salary</th>
                              </tr>
                            </thead>
                            <tfoot>
                              <tr>
                                <th rowspan="1" colspan="1">Name</th>
                                <th rowspan="1" colspan="1">Position</th>
                                <th rowspan="1" colspan="1">Office</th>
                                <th className="dt-body-right" rowspan="1" colspan="1">Age</th>
                                <th rowspan="1" colspan="1">Start date</th>
                                <th className="dt-body-right" rowspan="1" colspan="1">Salary</th>
                              </tr>
                            </tfoot>
                            <tbody>
                              <tr role="row" className="odd">
                                <td className="">Prescott Bartlett</td>
                                <td className="sorting_1">Technical Author</td>
                                <td className="">London</td>
                                <td className=" dt-body-right">27</td>
                                <td>2011/05/07</td>
                                <td className=" dt-body-right">$145,000</td>
                              </tr>
                              <tr role="row" className="even">
                                <td className="">Gavin Cortez</td>
                                <td className="sorting_1">Team Leader</td>
                                <td className="">San Francisco</td>
                                <td className=" dt-body-right">22</td>
                                <td>2008/10/26</td>
                                <td className=" dt-body-right">$235,500</td>
                              </tr>
                              <tr role="row" className="odd">
                                <td className="">Lael Greer</td>
                                <td className="sorting_1">Systems Administrator</td>
                                <td className="">London</td>
                                <td className=" dt-body-right">21</td>
                                <td>2009/02/27</td>
                                <td className=" dt-body-right">$103,500</td>
                              </tr>
                              <tr role="row" className="even">
                                <td className="">Gloria Little</td>
                                <td className="sorting_1">Systems Administrator</td>
                                <td className="">New York</td>
                                <td className=" dt-body-right">59</td>
                                <td>2009/04/10</td>
                                <td className=" dt-body-right">$237,500</td>
                              </tr>
                              <tr role="row" className="odd">
                                <td className="">Tiger Nixon</td>
                                <td className="sorting_1">System Architect</td>
                                <td className="">Edinburgh</td>
                                <td className=" dt-body-right">61</td>
                                <td>2011/04/25</td>
                                <td className=" dt-body-right">$320,800</td>
                              </tr>
                              <tr role="row" className="even">
                                <td className="">Quinn Flynn</td>
                                <td className="sorting_1">Support Lead</td>
                                <td className="">Edinburgh</td>
                                <td className=" dt-body-right">22</td>
                                <td>2013/03/03</td>
                                <td className=" dt-body-right">$342,000</td>
                              </tr>
                              <tr role="row" className="odd">
                                <td className="">Finn Camacho</td>
                                <td className="sorting_1">Support Engineer</td>
                                <td className="">San Francisco</td>
                                <td className=" dt-body-right">47</td>
                                <td>2009/07/07</td>
                                <td className=" dt-body-right">$87,500</td>
                              </tr>
                              <tr role="row" className="even">
                                <td className="">Olivia Liang</td>
                                <td className="sorting_1">Support Engineer</td>
                                <td className="">Singapore</td>
                                <td className=" dt-body-right">64</td>
                                <td>2011/02/03</td>
                                <td className=" dt-body-right">$234,500</td>
                              </tr>
                              <tr role="row" className="odd">
                                <td className="">Sakura Yamamoto</td>
                                <td className="sorting_1">Support Engineer</td>
                                <td className="">Tokyo</td>
                                <td className=" dt-body-right">37</td>
                                <td>2009/08/19</td>
                                <td className=" dt-body-right">$139,575</td>
                              </tr>
                              <tr role="row" className="even">
                                <td className="">Sonya Frost</td>
                                <td className="sorting_1">Software Engineer</td>
                                <td className="">Edinburgh</td>
                                <td className=" dt-body-right">23</td>
                                <td>2008/12/13</td>
                                <td className=" dt-body-right">$103,600</td>
                              </tr>
                            </tbody>
                          </table>
                          <div className="dataTables_info" id="example_info" role="status" aria-live="polite">Showing 1 to 10 of 57 entries</div>
                          <div className="dataTables_paginate paging_simple_numbers" id="example_paginate">
                            <a className="paginate_button btn btn-outlined btn-success previous disabled" aria-controls="example" data-dt-idx="0" tabindex="0" id="example_previous">Previous</a>
                            <span>
                          <a className="paginate_button btn btn-outlined btn-success active" aria-controls="example" data-dt-idx="1" tabindex="0">1</a>
                          <a className="paginate_button btn btn-outlined btn-success " aria-controls="example" data-dt-idx="2" tabindex="0">2</a>
                          <a className="paginate_button btn btn-outlined btn-success " aria-controls="example" data-dt-idx="3" tabindex="0">3</a>
                          <a className="paginate_button btn btn-outlined btn-success " aria-controls="example" data-dt-idx="4" tabindex="0">4</a>
                          <a className="paginate_button btn btn-outlined btn-success " aria-controls="example" data-dt-idx="5" tabindex="0">5</a>
                          <a className="paginate_button btn btn-outlined btn-success " aria-controls="example" data-dt-idx="6" tabindex="0">6</a>
                          </span>
                            <a className="paginate_button btn btn-outlined btn-success next" aria-controls="example" data-dt-idx="7" tabindex="0" id="example_next">Next</a>
                        </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    )
  }
}

