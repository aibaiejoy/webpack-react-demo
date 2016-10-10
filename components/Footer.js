import React, {PropTypes} from 'react';
import {findDOMNode, Component} from 'react-dom';

class Footer extends React.Component {
	renderFilter(filter, name) {
		if(filter === this.props.filter){
			return name;
		}

		return (
			<a href="#" 
			onClick={
				e=>{e.preventDefault();this.props.onFilterChange(filter)}
			}>{name}</a>
		)
	}

	render() {
		return (
			<p>
			Show:{this.renderFilter('SHOW_ALL', 'all')}
			{', '}
			{this.renderFilter('SHOW_COMPLETED', 'completed')}
			{', '}
			{this.renderFilter('SHOW_ACTIVE', 'active')}
			</p>
		)
	}
}

export default Footer;