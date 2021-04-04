import React from "react";
import { connect } from "react-redux";

import { fetchContacts } from "../actions";

class ContactList extends React.Component {
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
        return (
            <div className="container" >
                <div className="row">
                    {this.renderList()}
                </div>
            </div>
        );

    }
}

const mapStateToProps = (state) => {
    return { contacts: state.contacts };
};

export default connect(mapStateToProps, { fetchContacts })(ContactList);