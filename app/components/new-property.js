import Ember from 'ember';

export default Ember.Component.extend({
  addNewProperty: false,
  actions: {
    propertyFormShow() {
      this.set("addNewProperty", true);
    },
    saveProperty1() {
      var params = {
        owner: this.get('owner'),
        city: this.get('city'),
        type: this.get('type'),
        image: this.get('image'),
        bedrooms: this.get('bedrooms')
      }
      this.set("addNewProperty", false);
      this.sendAction("saveProperty2", params);
    }
  }
});
