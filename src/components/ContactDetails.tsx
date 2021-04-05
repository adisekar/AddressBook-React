import React from "react";
import { connect } from "react-redux";
import { Contact } from "models";
import { State } from "reducers";
import { Link } from 'react-router-dom';

interface IConnectedProps {
    selectedContact: Contact
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
        return (
            <div className="ui stackable one column grid">
                <div className="column">
                    {this.renderDetail()}
                    <div className="centerAlign">
                        <button className="ui secondary button">
                            <Link to='/'>Back to Contact List</Link>
                        </button>
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