import React from "react";
import { connect } from "react-redux";
import { fetchContacts } from "../actions";
import { Contact } from "../models";
import { State } from "../reducers";

interface IConnectedProps {
    contacts: Array<Contact>;
    fetchContacts: Function;
}

class ContactList extends React.Component<IConnectedProps, any> {
    componentDidMount() {
        this.props.fetchContacts();
    }

    renderList() {
        return this.props.contacts.map(contact => {
            const { name, picture, email } = contact;
            return (
                name &&
                < div key={email} className="col-md-6 padding10" >
                    <div className="media">
                        <div className="media-left">
                            <a href="#">
                                <img className="media-object" src={picture.thumbnail} alt={picture.medium} />
                            </a>
                        </div>
                        <div className="media-body">
                            <h4 className="media-heading padding10">{`${name.title} ${name.first} ${name.last}`}</h4>
                        </div>
                    </div>
                </div >
            );
        }
        )
    };

    render() {
        const { contacts } = this.props;
        return (
            <div className="container" >
                <div className="row">
                    {contacts && contacts.length > 0 ? this.renderList() : null}
                </div>
            </div>
        );

    }
}

const mapStateToProps = (state: State) => {
    return { contacts: state.contacts };
};

export default connect(mapStateToProps, { fetchContacts })(ContactList);