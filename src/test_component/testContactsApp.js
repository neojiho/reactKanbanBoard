import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {render} from 'react-dom';

class ContactsAppContainer extends Component {
	constructor() {
		super();
		this.state = {
			contacts: []
		}
	}

	componentDidMount() {
		fetch('../data/contacts.json') //절대주소.
			.then((response) => {
				// console.dir(response); //fetch는 data를 직접 보내지않고 response객체를 보냄
				const responseData = response.json(); //responseData.json()이 데이터를 json변경
				// console.log(responseData);
				return responseData
			})
			.then((responseData) => {
				this.setState({contacts: responseData}, () => {
					// console.log(this.state);
				})
			})
			.catch((error) => {
				console.log('error', error)
			})
	}

	render() {
		return (
			<div>
				<h3>contact list example</h3>
				<ContactsApp contacts={this.state.contacts} />
			</div>
		)
	}
}

class ContactsApp extends Component {
	constructor(){
		super();
		this.state={
			filterText : ''
		};

		this.onChangeHandle = this.onChangeHandle.bind(this)
	}

	onChangeHandle(searchText){
		this.setState({filterText: searchText});
	}

	render() {
		return (
			<div>
				{"ContactsApp"}
				<SearchBar filterText = {this.state.filterText} handleChange={this.onChangeHandle}/>
				<ContactList contacts={this.props.contacts}
							filterText = {this.state.filterText} />
			</div>
		)
	}
}

ContactsApp.propTypes = {
	contacts: PropTypes.arrayOf(PropTypes.object)
};

class SearchBar extends Component {

	handleChange(){
		this.props.handleChange(event.target.value)
	}

	render() {
		return <input type="search" placeholder={"search"} onChange={this.handleChange.bind(this)}/>
	}
}

SearchBar.propTypes = {
	filterText : PropTypes.string.isRequired
};

class ContactList extends Component {
	render() {
		const filteredContacts = this.props.contacts.filter(
			//filter는 인자로 받은 함수를 돌려 새로운 배열을 리턴한다.
			(contact) => contact.name.indexOf(this.props.filterText) !== -1 //filterText의 순서가 -1이 아닌 즉 연속된 문자열을
			// 포함하는것들만 새로운 배열로 리턴한다.
		);

		const filteredContactsList = filteredContacts.map((contact) => {
			return <ContactItem key={contact.email} name={contact.name} email={contact.email} />
		});

		const contactLists = this.props.contacts.map((contact)=>{
			return <ContactItem key={contact.email} name={contact.name} email={contact.email} />
		});

		return (
			<ul>
				{/*{contactLists}*/}
				{filteredContactsList}
			</ul>
		)
	}
}

ContactList.propTypes = {
	contact: PropTypes.arrayOf(PropTypes.object)
};

const ContactItem = ({name, email}) => {

	return (
		<li>{name} - {email}</li>
	)
};


export default ContactsAppContainer;

