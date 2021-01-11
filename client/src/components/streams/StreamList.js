import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';
import { Link } from 'react-router-dom';

class StreamList extends Component {

    componentDidMount() {
        this.props.fetchStreams();
    }

    renderAdmin({ userId, id }) {
        if (userId === this.props.user.userId) {
            return (
                <div className="right floated content">
                    <Link to={`/streams/edit/${id}`} className="ui button primary">Edit</Link>
                    <Link to={`/streams/delete/${id}`} className="ui button negative">
                        Delete
                    </Link>
                </div>
            );
        }
    }

    renderList = () => {
        return this.props.streams.map(stream => {
            return (
                <div className="item" key={stream.id}>
                    {this.renderAdmin(stream)}
                    <i className="large middle aligned icon camera" />
                    <div className="content">
                        <Link to={`/streams/${stream.id}`} className="link">
                            {stream.title}
                        </Link>
                        <div className="description">{stream.description}</div>
                    </div>

                </div>
            );
        })
    }


    renderCreate() {
        if (this.props.user.isSignedIn) {
            return (
                <div style={{ textAlign: 'right' }}>
                    <Link to="/streams/new" className="ui button primary">Create stream</Link>
                </div>

            );
        }
    }

    render() {

        return (
            <div>
                Stream List
                <div className="ui celled list">
                    {this.renderList()}
                </div>
                {this.renderCreate()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        streams: Object.values(state.streams),
        user: state.auth
    }
}

export default connect(mapStateToProps, { fetchStreams })(StreamList);