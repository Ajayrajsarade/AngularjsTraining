import * as angular from 'angular';

interface ICustomScope extends angular.IScope {
  vm: any; 
}

export class MyController {
  static $inject = ['$scope'];
  message: string;
  users: Array<any>;

  constructor(private $scope: ICustomScope) {
    this.message = 'Welcome to Transflower TypeScript!';
    this.users=[
      { name: 'Ajay Sarade', email: 'ajay.sarade@gmail.com' },
      { name: 'ram Patil', email: 'ram.patil@gmail.com' },
      { name: 'shubham Pant', email: 'manisha.pant@gmail.com' }
    ];
    
    $scope['vm'] = this;
  }
}

//angular.module('myApp').controller('MyController', MyController);