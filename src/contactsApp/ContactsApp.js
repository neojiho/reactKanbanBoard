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
	}

	render() {
		return (
			<div>
				{"ContactsApp"}
				<SearchBar filterText = {this.state.filterText} />
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
	render() {
		return <input type="search" placeholder={"search"} />
	}
}

SearchBar.propTypes = {
	filterText : PropTypes.string.isRequired
};

class ContactList extends Component {
	render() {
		const filteredContacts = this.props.contacts.filter(
			(contact) => contact.name.indexOf(this.props.filterText) !== -1
		);

		const filteredContactsList = filteredContacts.map((contact) => {
			return <ContactItem key={contact.email} name={contact.name} email={contact.email} />
		});

		return (
			<ul>
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

