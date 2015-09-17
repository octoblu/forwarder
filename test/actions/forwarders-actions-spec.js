var expect  = require('expect');
var types   = require('../../src/constants/action-types');
var actions = require('../../src/actions/forwarders-actions');

describe('Forwarders.Actions', function() {

  it('should create FORWARDER_ADD_DATA_STORE action', function() {
    expect(actions.addDataStore({}).toEqual({

    }));
  });

  it('should create SUBSCRIBE_DEVICE action', function(){
    expect(actions.subscribeDevice('data-store-uuid')).toEqual({
      type: types.SUBSCRIBE_DEVICE,
      dataStore: 'data-store-uuid'
    });
  });

  it('should create UNSUBSCRIBE_DEVICE action', function() {
    expect(actions.unsubscribeDevice({})).toEqual({
      type: types.UNSUBSCRIBE_DEVICE,
      device: {}
    });
  });

  it('should create a SUBSCRIBE_ALL_DEVICES action', function() {
    expect(actions.subscribeAllDevices(['one', 'two'])).toEqual({
      type: types.SUBSCRIBE_ALL_DEVICES,
      devices: ['one', 'two']
    });
  });

  it('should create a UNSUBSCRIBE_ALL_DEVICES action', function() {
    expect(actions.unsubscribeAllDevices()).toEqual({
      type: types.UNSUBSCRIBE_ALL_DEVICES
    });
  });
});
