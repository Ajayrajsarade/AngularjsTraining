namespace app.Controllers {
  export class AboutController {
    public description: string;

    constructor() {
      this.description = "Welcome to our online store! We offer the best laptops and watches.";
    }
  }

  angular.module("app").controller("AboutController", AboutController);
}
