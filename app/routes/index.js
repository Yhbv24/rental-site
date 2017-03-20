import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('property');
  },
  actions: {
    saveProperty3(params) {
      var newProperty = this.store.createRecord('property', params);
      newProperty.save();
      this.transitionTo('index');
    },
  }
});
