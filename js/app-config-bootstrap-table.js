angular.module('angularjsApp', ['ui.grid','ui.grid.resizeColumns', 'ui.grid.selection'])



    .controller('BootstrapTableController', function ($scope){
        $scope.carros = [
            {nome:'Gol', cor:'black', marca:'Volks'},
            {nome:'Palio', cor:'red', marca:'Fiat'},
            {nome:'Uno', cor:'black', marca:'Fiat'},
            {nome:'HB20', cor:'white', marca:'Hyundai'},
            {nome:'Gol', cor:'black', marca:'Volks'},
            {nome:'Palio', cor:'red', marca:'Fiat'},
            {nome:'Uno', cor:'black', marca:'Fiat'},
            {nome:'HB20', cor:'white', marca:'Hyundai'},
            {nome:'Gol', cor:'black', marca:'Volks'},
            {nome:'Palio', cor:'red', marca:'Fiat'},
            {nome:'Uno', cor:'black', marca:'Fiat'},
            {nome:'HB20', cor:'white', marca:'Hyundai'},
            {nome:'Gol', cor:'black', marca:'Volks'},
            {nome:'Palio', cor:'red', marca:'Fiat'},
            {nome:'Uno', cor:'black', marca:'Fiat'},
            {nome:'HB20', cor:'white', marca:'Hyundai'}
        ];


        function onRegisterApi (gridApi) {
            $scope.myGrid = gridApi;

            gridApi.selection.on.rowSelectionChanged($scope, function (rowItem) {
                $scope.carregarRegistrosSelecionados();
            });
        }

        var cellTemplate =
            '<div class="ui-grid-cell-contents" " ' +
            '   ng-click="grid.appScope.gridItemClick(row, col, $index)" > ' +
            '   <p ng-bind="::row.entity[col.colDef.field]"></p>' +
            '</div>';

        $scope.gridOptions = {
            columnDefs: [
                { name: 'Nome do carro', field:'nome', cellTemplate: cellTemplate },
                { name: 'Cor do carro', field:'cor', cellTemplate: cellTemplate },
                { name: 'Marca do carro', field:'marca', cellTemplate: cellTemplate }
            ],
            data: 'carros',
            enableRowSelection: true,
            enableColumnMenus: false,
            onRegisterApi: onRegisterApi
        };

        $scope.addColumn = function (col) {
            $scope.gridOptions.columnDefs.push(col);
        }

        function getSelectedItems() {
            try {
                return $scope.myGrid.selection.getSelectedRows();
            } catch (e) {
                return [];
            }
        };

        $scope.selecionados = [];

        $scope.carregarRegistrosSelecionados = function(){
            $scope.selecionados = getSelectedItems();
        }

        $scope.getRowStyle = function(row){
            var rowStyle = {};

            if (angular.isDefined(row.entity.cor))
                rowStyle.backgroundColor = row.entity.cor;

            return rowStyle;
        }

        /*rowTemplate*/
        var rowTemplate = '<div ' +
            'ng-style="grid.appScope.getRowStyle(row)"' +
            'ng-repeat="col in colContainer.renderedColumns track by col.colDef.name" ' +
            'class="ui-grid-cell" ui-grid-cell>' +
            '</div>';

        $scope.gridOptions.rowTemplate = rowTemplate;

        $scope.gridItemClick = function(row, col, colIndex){
            console.log(row);
        }

        var cellTemplate =
            '<div class="ui-grid-cell-contents" " ' +
            '   ng-click="grid.appScope.gridItemClick(row, col, $index)" > ' +
            '   <p ng-bind="::row.entity[col.colDef.field]"></p>' +
            '</div>';
    })

;