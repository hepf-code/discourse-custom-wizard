import CustomWizardApi from '../models/custom-wizard-api';
import DiscourseRoute from "discourse/routes/discourse";

export default DiscourseRoute.extend({
  model() {
    return CustomWizardApi.list();
  },

  afterModel(model) {
    const apiParams = this.paramsFor('admin-wizards-api');

    if (model.length) {
      if (!apiParams.name) {
        this.transitionTo('adminWizardsApi', model[0].name.dasherize());
      } else {
        return;
      }
    } else {
      this.transitionTo('adminWizardsApi', 'new');
    }
  },

  setupController(controller, model){
    controller.set("model", model);
  },

  actions: {
    refreshModel() {
      this.refresh();
    }
  }
});
