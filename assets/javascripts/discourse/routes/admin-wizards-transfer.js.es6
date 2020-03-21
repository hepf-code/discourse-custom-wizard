import CustomWizard from '../models/custom-wizard';
import DiscourseRoute from "discourse/routes/discourse";

export default DiscourseRoute.extend({
  model() {
    return CustomWizard.all();
  }
});
