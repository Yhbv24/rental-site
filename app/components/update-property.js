import Ember from 'ember';

export default Ember.Component.extend({
  updatePropertyForm: false,
  actions: {
    updatePropertyForm() {
      this.set("updatePropertyForm", true);
    },
    update(property) {
      var params = {
        owner: this.get('owner'),
        city: this.get('city'),
        type: this.get('type'),
        image: this.get('image'),
        bedrooms: this.get('bedrooms')
      };
      this.set("updatePropertyForm", false);
      this.sendAction("update", property, params);
    }
  }
});
