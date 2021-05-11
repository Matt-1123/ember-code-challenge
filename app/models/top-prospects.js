import Model, { attr } from "@ember-data/model";

export default class TopProspectsModel extends Model {
  @attr("string") name;
  @attr("string") company;
  @attr("number") budget;
}
