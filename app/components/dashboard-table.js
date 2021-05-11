import Component from "@glimmer/component";
import { inject as service } from "@ember/service";
import { action } from "@ember/object";
import { empty } from "@ember/object/computed";
import { A } from "@ember/array";

export default class DashboardTableComponent extends Component {
  @service router;
  @empty("model") isEmpty;

  get model() {
    return this.args.model ? this.args.model : A();
  }

  // get fullName(item:A) {
  //   return `${item.firstName} ${item.lastName}`;
  // }

  get columns() {
    return [
      {
        name: "Name",
        // valuePath: this.fullName(),
        value: this.fullName 
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
}
