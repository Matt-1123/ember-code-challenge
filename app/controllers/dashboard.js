import Controller from "@ember/controller";
import { action } from "@ember/object";
import { sort } from "@ember/object/computed";
import { tracked } from "@glimmer/tracking";

export default class DashboardIndexController extends Controller {
  @tracked sortProperty = "budget:desc";
  @tracked totalBudget = 0;

  @sort("model", "customersSortProps")
  customers;

  get customersSortProps() {
    return [this.sortProperty];
  }

  get totalBudget() {
    totalBudget = customers.budget.reduce((a, b) => a + b, 0);
  }
}
