import { event } from 'jquery';
import React, { Component } from 'react';
import './App.css';
import Alert from './components/Alert';


class Cicilan extends Component {
  constructor(props){
    super(props);
    
    this.state = {
      nominal: '',
      bunga: '',
      periode: '12',
      hasil: "Cicilan per bulan"
    }

    this.nominalChange = this.nominalChange.bind(this);
    this.bungaChange = this.bungaChange.bind(this);
    this.periodeChange = this.periodeChange.bind(this);

  }
  	
  	nominalChange = (event) =>{  
  	  this.setState({nominal: event.target.value});  
  	}  
  	
  	bungaChange = (event) => {  
  	  this.setState({tinggi: event.target.value});  
  	}  
    
    periodeChange = (event) => {
      this.setState({periode: event.target.value})
    }

    	hitung = (event) => {  
        let nominal = this.state.nominal;
        let bunga = this.state.bunga;
        let periode = this.state.periode;

        //hitung
        let b = bunga / 100;
        let pbulan = nominal / periode;
        let flower = (pbulan / 100) * 10;
        let hasil = pbulan + flower;

        //output
        this.setState({hasilA: "Rp " + hasil})
        
        event.preventDefault();
    }  

  render(){
    return (
      <div className="card col-sm-5 mx-auto m-5">
        <div className="card-header bg-primary text-center text-white">
            <h4>Cicilan Bank</h4>
        </div>

        <div className="card-body">
        <form>
          <div class="form-group row">
            <label for="Nominal" class="col-sm-3 col-form-label">Nominal</label>
            <div class="col-sm-9">
              <input type="number"  class="form-control" onChange={this.nominalChange} />
            </div>
          </div>
          <div class="form-group row">
            <label for="Bunga" class="col-sm-3 col-form-label">Bunga (%)</label>
            <div class="col-sm-9">
              <input type="number" class="form-control" onChange={this.bungaChange} />
            </div>
          </div>
          <div class="form-group row">
            <label for="Periode" class="col-sm-3 col-form-label">Periode</label>
            <select class="custom-select col-sm-9" value={this.state.periode} onChange={this.periodeChange}>
            <option value="12">12</option>
            <option value="24">24</option>
            <option value="36">36</option>
          </select>
          </div>
        </form>
        </div>


        <div className="card-footer">
          <button className="form-control btn btn-primary text-white" onClick={this.hitung}>
            Hitung
          </button>
          <h4 className="text-center mt-4">Hasil</h4>
          <input className="form-control mb-1" value={this.state.hasilA} readOnly/>
          
        </div>
      </div>
      
    );
  }
}

export default Cicilan;
