import _ from "lodash"
import React from "react"
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link, Navigation } from 'react-router';
import Form from 'plexus-form';
import validate from 'plexus-validate';

import * as ForwarderActions from '../../actions/forwarders-actions';

var ForwarderNewOptions = React.createClass({
  render: function() {
    const { dataStores, dispatch, forwarder } = this.props;
    const forwarderActions = bindActionCreators(ForwarderActions, dispatch);

    return (
      <div>
        <h2>Set Options</h2>
        {
          forwarder.optionsSchema &&
          <Form schema={forwarder.optionsSchema} validate={validate} onSubmit={forwarderActions.setOptions} />
        }
      </div>
    );
  }
});

function mapStateToProps(state) {
  return {
    forwarder: state.forwarder,
  };
};

export default connect(mapStateToProps)(ForwarderNewOptions);
