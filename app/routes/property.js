import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord("property", params.property_id);
  },
  actions: {
    update(property, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key] !== undefined) {
          property.set(key,params[key]);
        }
      });
      property.save();
      this.transitionTo('index');
    },
    destroyRental(property) {
      property.destroyRecord();
      this.transitionTo('index');
    }
  }
});
