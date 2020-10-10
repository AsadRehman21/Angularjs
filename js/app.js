(function() {
    'use strict';

    angular.module('DIApp', [])

    .controller('DIController', DIController)
        .controller('DIControllerShowList', DIControllerShowList)
        .service('ListService', ListService);
    DIControllerShowList.$inject = ['ListService'];

    function DIControllerShowList(ListService) {
        var list = this;

        list.items = ListService.getItems();
        list.Buy = function(itemIndex) {
            try {
                ListService.Buy(itemIndex);
                list.errorMessage = "";
            } catch (error) {
                list.errorMessage = error.message;
            }
        }
    }

    function DIController(ListService) {
        var list2 = this;
        list2.Buy2 = function() {
            try {
                list2.items2 = ListService.getItems2();
                list2.errorMessage2 = "";
            } catch (error) {
                list2.errorMessage2 = error.message;
            }
        };

    }

    function ListService() {
        var service = this;
        var items2 = [];
        var items = [{
            quantity: 8,
            name: 'Cookies'
        }, {
            quantity: 22,
            name: 'biscuit'
        }, {
            quantity: 72,
            name: 'bread'
        }, {
            quantity: 45,
            name: 'paisties'
        }, {
            quantity: 2,
            name: 'brownies'
        }, {
            quantity: 16,
            name: 'cakes'
        }];
        service.getItems = function() {

            return items;

        };

        service.Buy = function(itemIndex) {
            items2.push(items[itemIndex]);
            items.splice(itemIndex, 1);

            if (items.length != 0) {


            } else {
                throw new Error("Everything is bought!");
            }



        };

        service.getItems2 = function() {

            if (items2.length != 0) {

                return items2;
            } else {
                throw new Error("Nothing bought yet.");
            }

        };
    }






})();