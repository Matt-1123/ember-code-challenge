import Model, { attr } from "@ember-data/model";

export default class DashboardModel extends Model {
  @attr("string") firstName;
  @attr("string") lastName;
  @attr("string") company;
  @attr("number") budget;
}
