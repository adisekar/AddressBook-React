import React from "react";
import { connect } from "react-redux";
import { fetchContacts, selectContact, setPaginationValue } from "actions";
import { Contact } from "models";
import { State } from "reducers";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import { Pagination } from 'semantic-ui-react'

interface IConnectedProps {
    contacts: Array<Contact>;
    currentPageNumer: number;
    fetchContacts: Function;
    selectContact: Function;
    setPaginationValue: Function;
    history: any;
}

class ContactList extends React.Component<IConnectedProps, any> {
    componentDidMount() {
        const { contacts, fetchContacts } = this.props;
        if (!contacts || contacts.length === 0) {

            fetchContacts();
        }
    }

    onPaginationChange(page: any) {
        const { fetchContacts, setPaginationValue } = this.props;
        let pageNumber: number = page && parseInt(page);
        setPaginationValue(pageNumber);
        fetchContacts(pageNumber);
    }

    onContactClick(contact: Contact) {
        this.props.selectContact(contact);
        this.props.history && this.props.history.push('/details')
    }

    renderList() {
        const { contacts, currentPageNumer } = this.props;
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
                        <Pagination defaultActivePage={currentPageNumer} totalPages={10} onPageChange={(event, data) => this.onPaginationChange(data.activePage)} />
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
                        timeout={3000}
                    />
                </div >
        );

    }
}

const mapStateToProps = (state: State) => {
    return { contacts: state.contacts, currentPageNumer: state.currentPageNumer };
};

export default connect(mapStateToProps, { fetchContacts, selectContact, setPaginationValue })(ContactList);