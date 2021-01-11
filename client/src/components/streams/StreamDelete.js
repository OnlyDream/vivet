import React, { Component } from 'react';
import Modal from '../Modal';
import history from '../../history';
import { connect } from 'react-redux'
import { fetchStream, deleteStream } from '../../actions';
import {Link} from 'react-router-dom';

class StreamDelete extends Component {

    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }

    deleteStream = () => {
        this.props.deleteStream(this.props.match.params.id);
    }

    actions = () => {
        if (this.props.stream) {
            return (
                <React.Fragment>
                    <button onClick={this.deleteStream} className="ui button negative">Delete</button>
                    <Link to="/" className="ui button">Cancel</Link>
                </React.Fragment>
            )
        }

    }

    renderContent = () => {
        if (!this.props.stream) {
            return 'Loading the stream to delete'
        }

        return `Are you sure you want to delete? "${this.props.stream.title}"`
    }

    render() {



        return (
                <Modal
                    title="Delete stream"
                    content={this.renderContent()}
                    actions={this.actions()}
                    onDismiss={() => history.push('/')}
                />
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchStream, deleteStream })(StreamDelete);