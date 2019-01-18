/* eslint no-use-before-define: 2 */  // --> ON
/* eslint-disable no-param-reassign */
import axios from 'axios';
import { timeParse } from "d3-time-format";

const parseDateA = timeParse("%Y-%m-%d");
const parseDateB = timeParse("%Y-%m-%d %H:%M:%S");

// eslint-disable-next-line
export function getData(symbol) {
	// eslint-disable-next-line
	const promiseMSFT = axios.get("/stocks",{params:{symbol:symbol}}) 
		.then(res=>res.data)
			.then(data=>data.map(d=>{
				try{
					d.date=new Date(parseDateA(d.date).getTime());
				}
				catch(err){
					d.date=new Date(parseDateB(d.date).getTime());
				}
				d.open = +d.open;
				d.high = +d.high;
				d.low = +d.low;
				d.close = +d.close;
				d.volume = +d.volume;

				return d;

			})
		);

	return promiseMSFT;
}
