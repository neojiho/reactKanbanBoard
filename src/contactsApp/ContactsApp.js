import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {render} from 'react-dom';

const contacts = [
	{name : "Cassio Zen", email : "cassiozen@gmail.com"},
	{name : "Dan Abramov", email : "gaeron@gmail.com"},
	{name : "Pete Hunt", email : "floydophone@gmail.com"},
	{name : "Paul O'Shannessy", email : "zpao@gmail.com"},
	{name : "Ryan Florence", email : "rpflorence@gmail.com"},
	{name : "Sebastian Markbage", email : "sebmarkbage@gmail.com"},
];

class ContactsApp extends Component {
	constructor(){
		super();
		this.state={
			filterText : ''
		};

		this.onChangeHandle = this.onChangeHandle.bind(this)
	}

	onChangeHandle(searchText){
		this.setState({filterText : searchText}, ()=>{console.log("setState callBack", this.state)});
		console.log("after setState",this.state)
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

render(<ContactsApp contacts = {contacts} />, document.getElementById('contactsApp'));
// export default ContactsApp;

