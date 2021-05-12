import Component from "@glimmer/component";
import { inject as service } from "@ember/service";
import { action } from "@ember/object";
import { empty } from "@ember/object/computed";
import { A } from "@ember/array";
import { tracked } from "@glimmer/tracking";

export default class DashboardTableComponent extends Component {
  @service router;
  @empty("model") isEmpty;

  // @tracked showAll = false;

  @tracked items = this.model;

  get model() {
    let list = this.args.model ? this.args.model : A();

    // add new field
    list.forEach((item) => {
      item.fullName = `${item.firstName} ${item.lastName}`;
    });
    // if (!showAll) {
    //   list.slice(0, 4);
    // }
    return list;
  }

  get columns() {
    return [
      {
        name: "Name",
        valuePath: "fullName",
        isSortable: false,
      },
      {
        name: "Company",
        valuePath: "company",
        isSortable: false,
        breakpoints: ["desktop", "jumbo"],
      },
      {
        name: "Budget",
        valuePath: "budget",
        isSortable: false,
        breakpoints: ["jumbo"],
      },
    ];
  }

  @action
  onRowClick(row) {
    this.router.transitionTo("customers.customer", row.id);
  }

  // @action
  // showAll() {
  //   this.showAll = !this.showAll;
  //   items = this.model;
  // }
}
