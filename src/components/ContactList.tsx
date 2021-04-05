import React from "react";
import { connect } from "react-redux";
import { fetchContacts, selectContact } from "actions";
import { Contact } from "models";
import { State } from "reducers";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import { Pagination } from 'semantic-ui-react'

interface IConnectedProps {
    contacts: Array<Contact>;
    fetchContacts: Function;
    selectContact: Function;
    history: any;
}

class ContactList extends React.Component<IConnectedProps, any> {
    componentDidMount() {
        this.props.fetchContacts();
    }

    onContactClick(contact: Contact) {
        this.props.selectContact(contact);
        this.props.history.push('/details')
    }

    renderList() {
        const { contacts, fetchContacts } = this.props;
        return (
            <>
                <div className="ui stackable one column grid">
                    <div className="column ui relaxed divided items">
                        {contacts.map(contact => {
                            const { name, picture, email } = contact;
                            return (
                                name &&
                                <div key={email} className="item" onClick={() => this.onContactClick(contact)}>
                                    <img className="ui avatar image" src={picture.medium} alt={picture.medium} />
                                    <div className="content">
                                        <a className="header">{`${name.first} ${name.last}`}</a>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className="centerAlignHorizontal">
                        <Pagination defaultActivePage={1} totalPages={10} onPageChange={(event, data) => fetchContacts(data.activePage)} />
                        <br /> <br />
                    </div>
                </div>
            </>
        );
    };

    render() {
        const { contacts } = this.props;
        return (
            contacts && contacts.length > 0 ? this.renderList() :
                <div className="loader centerAlign">
                    <Loader
                        type="Circles"
                        color="#000000"
                        height={200}
                        width={200}
                    />
                </div >
        );

    }
}

const mapStateToProps = (state: State) => {
    return { contacts: state.contacts };
};

export default connect(mapStateToProps, { fetchContacts, selectContact })(ContactList);