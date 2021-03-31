import { event } from 'jquery';
import React, { Component } from 'react';
import './App.css';
import Alert from './components/Alert';


class Harga extends Component {
  constructor(props){
    super(props);
    
    this.state = {
      hargaAwal: '',
      ppn: '',
      diskon: '',
      hargaAkhir: ''
    }

    this.hargaAwalChange = this.hargaAwalChange.bind(this);
    this.ppnChange = this.ppnChange.bind(this);
    this.diskonChange = this.diskonChange.bind(this);
    this.hitung = this.hitung.bind(this);

  }
  	
  	hargaAwalChange = (event) =>{  
  	  this.setState({hargaAwal: event.target.value});  
  	}  
  	
  	ppnChange = (event) => {  
  	  this.setState({ppn: event.target.value});  
  	}  
    
    diskonChange = (event) => {
      this.setState({diskon: event.target.value})
    }

    	hitung = (event) => {  
        let ha = parseInt(this.state.hargaAwal);
        let ppn = parseInt(this.state.ppn);
        let disc = parseInt(this.state.diskon);

        let pajak = (ha / 100 * ppn);
        let disk = (ha /100 * disc);
        let akhir = ha + pajak - disk;

        this.setState({hargaAkhir: "Rp " + akhir})
        
        event.preventDefault();
    }  

  render(){
    return (
      <div className="card col-sm-5 mx-auto m-5">
        <div className="card-header bg-danger text-center text-white">
            <h4>Hitung Harga Akhir</h4>
        </div>

        <div className="card-body">
        <form>
          <div class="form-group row">
            <label for="HargaAwal" class="col-sm-3 col-form-label">Harga Awal</label>
            <div class="col-sm-12">
              <input type="number"  class="form-control" onChange={this.hargaAwalChange} />
            </div>
          </div>
          <div class="form-group row">
            <label for="ppn" class="col-sm-3 col-form-label">PPN (%)</label>
            <div class="col-sm-12">
              <input type="number" class="form-control" onChange={this.ppnChange} />
            </div>
          </div>
          <div class="form-group row">
            <label for="diskon" class="col-sm-3 col-form-label">Diskon (%)</label>
            <div class="col-sm-12">
              <input type="number" class="form-control" onChange={this.diskonChange} />
            </div>
          </div>
        </form>
        </div>


        <div className="card-footer">
          <button className="form-control btn btn-danger text-white" onClick={this.hitung}>
            Hitung
          </button>
          <h4 className="text-center mt-4">Hasil</h4>
          <input className="form-control mb-1" value={this.state.hargaAkhir} readOnly/>
          
        </div>
      </div>
      
    );
  }
}

export default Harga;
