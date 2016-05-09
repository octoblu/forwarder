import superagent from 'superagent'
import * as types from '../../constants/action-types';

const DEV_UUID  = 'eec6df11-c180-4f8c-b5d2-5943a1a1a5ef'
const DEV_TOKEN = '732ccb5d2b2daf8df0df5b0dd469ec509c8e04a4'

function fetchForwardersRequest() {
  return {
    type: types.FETCH_FORWARDERS_REQUEST
  }
}

function fetchForwardersSuccess(body) {
  return {
    type: types.FETCH_FORWARDERS_SUCCESS,
    body
  }
}

function fetchForwardersFailure(error) {
  return {
    type: types.FETCH_FORWARDERS_FAILURE,
    error
  }
}

export function fetchForwarders() {
  return dispatch => {
    dispatch(fetchForwardersRequest())
    return superagent
      .get('https://forwarder-service.octoblu.dev/forwarders')
      .auth(DEV_UUID, DEV_TOKEN)
      .end((error, response) => {
        if(error) {
          dispatch(fetchForwardersFailure(error))
        }
        dispatch(fetchForwardersSuccess(response.body))
      })
  }
}
