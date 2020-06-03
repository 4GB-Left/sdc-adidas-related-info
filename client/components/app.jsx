import React from 'react';
import styled from 'styled-components';
import CompleteTheLook from './ctl.jsx';
import ProductDetail from './detail.jsx';
import { YouMayAlsoLike } from './ymal.jsx';
import Feedback from './feedback.jsx';

import axios from 'axios';

class App extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			look_id: this.props.looksId,
			ctl: [],
			related_prod: []
		};

		this.sortDataCTL = this.sortDataCTL.bind(this);
		this.sortDataRelatedProd = this.sortDataRelatedProd.bind(this);
	}

	componentDidMount() {
		// axios.get(`http://localhost:5000/looks/${this.state.look_id}`)
		axios.get(`/looks/1`)
			.then(({data}) => {
				// console.log('CTL data =>', data)
				this.sortDataCTL(data);
			})
			.catch(e => {
				console.error('Error fetching CTL data => ', e)
			})

		// axios.get(`http://localhost:5000/looks/${this.state.look_id}`)
		axios.get(`/relatedProduct/1`)
			.then(({data}) => {
				// console.log('RelatedProdu data =>', data)
				this.sortDataRelatedProd(data);
			})
			.catch(e => {
				console.error('Error fetching related product data => ', e)
			})
	}

	sortDataCTL(data) {
		// console.log('sort fnx => ', data)
		let completeTheLook = [];

		data.forEach(el => {
			let ctlShirt = {};
			let ctlPant = {};
			let ctlSock = {};

			ctlShirt['productId'] = el.ctl_shirt_id;
			ctlShirt['title'] = el.shirt_name;
			ctlShirt['image'] = el.shirt_picture;
			ctlShirt['price'] = el.shirt_price;
			ctlShirt['sizes'] = ['XS', 'S', 'M', 'L', 'XL'];

			ctlPant['productId'] = el.ctl_pant_id;
			ctlPant['title'] = el.pant_name;
			ctlPant['image'] = el.pant_picture;
			ctlPant['price'] = el.pant_price;
			ctlPant['sizes'] = ['XS', 'S', 'M', 'L', 'XL'];

			ctlSock['productId'] = el.ctl_sock_id;
			ctlSock['title'] = el.sock_name;
			ctlSock['image'] = el.sock_picture;
			ctlSock['price'] = el.sock_price;
			ctlSock['sizes'] = ['XS', 'S', 'M', 'L', 'XL'];

			completeTheLook.push(ctlShirt, ctlPant, ctlSock);
		});

		this.setState({ ctl: completeTheLook });
	}

	sortDataRelatedProd(data) {
		// console.log('sort fnx => ', data)

		let relatedProd = [];

		data.forEach(el => {
			let related = {};

			related['productId'] = el.related_id;
			related['title'] = el.related_name;
			related['image'] = el.related_picture;
			related['price'] = el.related_price;
			related['liked'] = el.related_likes;

			relatedProd.push(related);
		});

		this.setState({ related_prod: relatedProd });
	}

	render(){
		return (
			<Container>
        <CompleteTheLook ctl={this.state.ctl}/>
				<YouMayAlsoLike relatedProd={this.state.related_prod}/>
			</Container>
		);
	}
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	align-items: center;
`;

export default App;
