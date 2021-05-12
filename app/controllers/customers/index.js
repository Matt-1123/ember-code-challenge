import Controller from "@ember/controller";
import { action } from "@ember/object";
import { sort } from "@ember/object/computed";
import { tracked } from "@glimmer/tracking";

// export default Controller.extend({
//   users: alias('model'),
//   sortedUsers: sort('users', 'usersSortDefinition'),
//   usersSortDefinition: ['firstName:asc', 'lastName:desc'],
// });

export default class CustomersIndexController extends Controller {
  @tracked sortProperty = "lastName";

  @tracked searchQuery = "";

  @sort("model", "customersSortProps")
  sortedCustomers;

  get customersSortProps() {
    return [this.sortProperty];
  }

  @action
  updateSortProperty(event) {
    this.sortProperty = event.target.value;
  }

  @action
  searchCustomers(event) {
    this.searchQuery = event.target.value;
    console.log(event.target.value);
  }
}
