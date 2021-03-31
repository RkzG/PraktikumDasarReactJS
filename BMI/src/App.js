import React, {Component} from 'react';
import './App.css';
import Alert from './components/Alert';
import Media from './components/Media';

class BMI extends Component {
  constructor(props){
    super(props);

    this.state = {
      berat: '0',
      tinggi: '0',
      hasil: "Anda ideal",
      pesan: ""
    }

    this.beratChange = this.beratChange.bind(this);
    this.tinggiChange = this.tinggiChange.bind(this);
    this.hitungBMI = this.hitungBMI.bind(this);

  }

  beratChange = (event) =>{
    this.setState({berat: event.target.value});
  }

  tinggiChange = (event) =>{
    this.setState({tinggi: event.target.value});
  }

  hitungBMI = (event) => {
    let berat = this.state.berat;
    let tinggi = this.state.tinggi;

    let hasil = berat / (tinggi*tinggi);

    if(hasil <= 18.5){
      this.setState({hasil: "Anda Kurus"})
    }else if(hasil >= 18.5 && hasil <= 22.9){
      this.setState({hasil: "Anda Ideal"})
    }else if(hasil >= 23 && hasil <= 24.9){
      this.setState({hasil: "Anda Obesitas"})
    }else{
      this.setState({hasil: "Anda Tidak Normal"})
    }

    event.preventDefault();
  }

  render(){
    return (
      <div className="card col-sm-4 mx-auto m-5">
        <div className="card-header bg-sendary text-center text-dark">
          <h4>Body Mass Index</h4>
        </div>

        <div className="card-body">
          <div class="input-group mb-2">
            <div class="input-group-prepend">
              <label class="input-group-text">Berat (KG) </label>
            </div>
            <input type="number" className="form-control" value={this.state.berat} onChange={this.beratChange}/>
          </div>
          <div class="input-group mb-2">
            <div class="input-group-prepend">
              <label class="input-group-text">Tinggi (M) </label>
            </div>
            <input type="number" className="form-control" value={this.state.tinggi} onChange={this.tinggiChange}/>
          </div>
        </div>

        <div className="card-footer">
          <button className="form-control btn btn-info text-white" onClick={this.hitungBMI}>
            Hitung
          </button>
          <h4 className="text-center mt-4">Hasil</h4>
          <Alert hasil={this.state.hasil} pesan={this.state.pesan}/>
        </div>
      </div>
    );
  }
}
export default BMI;