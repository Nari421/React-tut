import React,{Component} from 'react';
import Highcharts from '../highcharts/HighCharts';
import Chartspage from '../charts_page/Charts_page';

class Home extends Component{
    render(){
        const style ={
            minwidth: '310px',
	        maxwidth: '800px',
	        height: '400px',
	        margin: '0 auto'
        };

        return(
            <div sytle={style}>
                <h2>charts</h2>
                <Chartspage />
                <Highcharts />
            </div>
        );
    }
}

export default Home;