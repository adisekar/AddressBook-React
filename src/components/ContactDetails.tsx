import React from "react";
import { connect } from "react-redux";
import { Contact } from "models";
import { State } from "reducers";
import { Link } from 'react-router-dom';

interface IConnectedProps {
    selectedContact: Contact;
    history: any;
}

class ContactDetails extends React.Component<IConnectedProps, any> {
    renderDetail() {
        const { selectedContact } = this.props;
        const { name } = selectedContact;
        return (
            <div className="ui centered card">
                <div className="image">
                    <img src={selectedContact.picture.large} />
                </div>
                <div className="content">
                    <a className="header">{`${name.title} ${name.first} ${name.last}`}</a>
                    <div className="description">
                        <p>Phone: {selectedContact.phone}</p>
                        <p>Email: {selectedContact.email}</p>
                        <p>Gender: {selectedContact.gender}</p>
                    </div>
                </div>
            </div>
        );
    };

    render() {
        // Return null if no selected contact is available and go back to contact list page
        const { selectedContact } = this.props;
        if (!selectedContact || Object.keys(selectedContact).length === 0) {
            this.props.history.push('/');
            return null;
        }
        return (
            <div className="ui stackable one column grid">
                <div className="column">
                    {this.renderDetail()}
                    <div className="centerAlign">
                        <Link to='/'>
                            <button className="ui secondary button">
                                Back to Contact List
                        </button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: State) => {
    return { selectedContact: state.selectedContact };
};

export default connect(mapStateToProps)(ContactDetails);