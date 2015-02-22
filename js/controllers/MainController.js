app.controller('MainController', ['$scope', function($scope) {
  $scope.today = new Date();

  $scope.appetizers = [
    {
      name: 'Caprese',
      description: 'Mozzarella, tomatoes, basil, balsmaic glaze.',
      price: 4.95
    },
    {
      name: 'Mozzarella Sticks',
      description: 'Served with marinara sauce.',
      price: 3.95
    },
    {
      name: 'Bruschetta',
      description: 'Grilled bread garlic, tomatoes, olive oil',
      price: 4.95
    }
  ];

$scope.mains = [
  {
    name: "Awesome Burger",
    description: "A burger with bacon, avocado, egg and awesomeness",
    price: 9.95
  },
  {
    name: "Badass Tacos",
    description: "Three tacos with different meats including pork, fish & steak",
    price: 7.95
  },
  {
    name: "Delicious Cookie",
    description: "A giant chocolate chip cookie made from the heavens",
    price: 4.95
  }
];

$scope.extras = [
  {
    name: "Tomatoe Soup",
    description: "Some bomb ass soup",
    price: 4.95
  },
  {
    name: "Egg Sandwich",
    description: "A breakfast Sandwich too good to be true",
    price: 6.95
  },
  {
    name: "Hummus",
    description: "Delicious hummus with garlic and Tomatoe pesto",
    price: 8.49
  }
];

}]);