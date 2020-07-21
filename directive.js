angular.module('todo').directive('highlight', function () {
    return function (scope, element, attrs) {
        if (scope.day == attrs['hightlight']) {
            element.css('color', 'red')
        }
    }
})


angular.module('todo').directive('todoDate', function () {
    let today = new Date().toLocaleDateString();
    return {
        template: '<h1 class="text-center">' + today + '</h1>'
    }
})

angular.module('todo').directive('todoTitle', function () {
    return {
        template: '<h1 class="my-4">Todo List</h1>'
    }
})

angular.module('todo').directive('todoCard', function () {
    return {
        templateUrl: 'todoCards.tpl.html'
    }
})

angular.module('todo').directive('todoItem', function () {
    return {
        templateUrl: 'todoItem.tpl.html',

    }
})

angular.module('todo').directive('todoFilters', function () {
    return {
        templateUrl: 'todoFilters.tpl.html'
    }
})

angular.module('todo').directive('todoForm', function () {
    return {
        templateUrl: 'todoForm.tpl.html'
    }
})

app.directive('datePickerDirective', [
    function () {
        return {
            require: 'ngModel',
            link: function (scope, el, attr, ngModel) {
                $(el).datepicker({
                    dateFormat: "yy. m. dd.",
                    changeMonth: true,
                    changeYear: true,
                    onSelect: function (dateText) {
                        scope.$apply(function () {
                            ngModel.$setViewValue(dateText);
                        });
                    }
                });
            }
        }
    }
])

{/* <script>
    
$(document).ready(()=>{
        // APP 이 최초 실행인지 아닌지 판단. 
        // APP 최초 실행아님.
        if(!_.isUndefined(config.get('init'))) {
            isExistsRuleAndEventConfiguration()
                .then(() => {
                    // template.json이 존재하는지 안하는지 체크.
                    asyncService.loadDataFromTwoReq().then((res)=>{
                        // template.json 있을 시 shipkey 획득.
                        var shipKey = res[1].data.shipKey;

                        config.set('localConfigFileInfo.template.version', res[1].data.templateVersion);
        
                        // Template 내 shipkey를 config에 저장.
                        // if(shipKey !== null && shipKey !== undefined && shipKey !== "") config.set('shipKey', shipKey);
        
                        if(!_.isUndefined(config.get('init.method'))) {
                            config.set('init.originMethod', config.get('init.method'));
                            config.delete('init.method');
                        }
        
                        if(_.isUndefined(config.get('init.originMethod'))) {
                            $scope.loadingState = true;
                            $state.go('callsignCheck');
                        } else {
                            $scope.loadingState = true;
                            $rootScope.checkState = true;
                            $state.go('main');
                        }
        
                    },(err)=>{
                        // template.json 없을 시 체크.
                        $scope.loadingState = true;
                        $state.go('callsignCheck');
                    })
                }, err => {

                });
        // APP 최초 실행.
        } else {
            $scope.$apply(() => {
                $scope.loadingState = true;
                isExistsRuleAndEventConfiguration()
                    .then(() => {
                        $state.go('callsignCheck');
                    }, err => {
                        console.log('err: ', err);
                    });
            })
        }
    })
    </script> */}