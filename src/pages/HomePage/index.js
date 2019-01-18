import React from 'react';
import Select from 'react-select';
import axios from 'axios';
import ChartComponent from "../../components/charts";
import s from './index.css';

class HomePage extends React.Component {

  state = {
    selectedOption: null,
    options:[]

  }

  componentDidMount = () => {
    this.onInit();
  }

  onInit = () =>{
	   axios.get("/stocks/allsymbols").then(res=>res.data).then(data=> {
	   	const symbols=data.symbol.map(sym=>{            // eslint-disable-line
	   		return {
	   			value:sym,
	   			label:sym
	   		}
	   	});

	   	this.setState({
	   		options:symbols
	   	})
	   	
	  });
  }


  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
  }
  render() {
    const { selectedOption } = this.state;

    return (
    	<div className={s.homepage}>

	    	<div className={s.symbols}>
	    			<span className="label success">Select symbols</span>
			      <Select
			        value={selectedOption}
			        onChange={this.handleChange}
			        options={this.state.options}
			        classNamePrefix="my-select"
			      />
			      
			</div>
				<div className={s.chartComponent}>
					{this.state.selectedOption &&
					      	<ChartComponent selected={selectedOption.value}/>
					      }
				</div>
		</div>
    );
  }
}

export default HomePage;