angular.module("myApp", [])

angular.module("myApp").controller("mainCtrl", ['$scope', 'mainService',
    function($scope, mainService) {
        // $scope.chartInfo = mainService.returnThisChart();

        $scope.weather = mainService.returnWeather().then(function(
            response) {
            $scope.data = response;
            $scope.city = response.data.name;
            $scope.clouds = response.data.weather[0].description;
            $scope.wind = function() {
                var windMph = (response.data.wind.speed *
                    1.152);
                wSpeedStr = windMph.toString();
                wSpeedStr = wSpeedStr.substr(0, (wSpeedStr.indexOf(
                    '.')));
                return wSpeedStr;
            }();
            // $scope.windDir = response.data.wind["deg"];
            $scope.windDir = function() { //perhaps you want this in the service(?)
                var direction = '';
                var deg = response.data.wind["deg"];
                if (deg >= 315 || deg <= 45) {
                    direction = "Southerly";
                } else if (deg > 45 && deg < 135) {
                    direction = "Westerly";
                } else if (deg > 135 && deg < 225) {
                    direction = "Northerly";
                } else if (deg > 225 && deg < 315) {
                    direction = "Easterly";
                }

                return direction;
            }();
            $scope.temp = response.data.main.temp;
        });
    }
])

$(document).ready(function() {

    var scrBtnCont = $('.scrn-btns-container'),
        scrns = $('.screen-pic'),
        navBtn = $('.nav-btn'),
        fourBtn = $('#four-btn'),
        threeBtn = $('#three-btn'),
        twoBtn = $('#two-btn'),
        fiveBtn = $('#five-btn'),
        sixBtn = $('#six-btn'),
        galleryBtn = $('#gallery-btn'),
        flectBox = $('.reflect-box'),
        reflect = $('.reflect'),
        bg = $('.bg'),
        bgDeck = $('.bg-on-deck'),
        fourBg = $('#four-bg'),
        threeBg = $('#three-bg'),
        twoBg = $('#two-bg'),
        fiveBg = $('#five-bg'),
        sixBg = $('#six-bg'),
        bgStage = $('.bg-on-stage'),
        galleryBg = $('#gallery-bg');
    //==============TEST SNIPPETS========


    galleryBtn.on('mouseenter', function() {
        bg.removeClass('bg-on-deck');
        galleryBg.addClass('bg-on-deck')
            .removeClass('bg-back-stage'); //opacity 1

        flectBox.add(scrns)
            .animate({
                    opacity: '0'
                }, 600,
                function() {
                    reflect.addClass('reflect-off');
                    $('#gallery-reflect').removeClass(
                        'reflect-off')
                })
        flectBox.animate({
            opacity: '.2'
        }, 600);
        $('#gallery-screen')
            .animate({
                opacity: '1'
            }, 600)
    });

    twoBtn.on('mouseenter', function() {
        bg.removeClass('bg-on-deck'); //opacity 1
        twoBg.addClass('bg-on-deck').removeClass(
            'bg-back-stage'); //opacity 1
        console.log("fired");
        flectBox.add(scrns)
            .animate({
                    opacity: '0'
                }, 600,
                function() {
                    reflect.addClass(
                        'reflect-off'
                    );
                    $('#two-reflect').removeClass(
                        'reflect-off'
                    )
                })
        flectBox.animate({
            opacity: '.2'
        }, 600);
        $('#two-screen')
            .animate({
                opacity: '1'
            }, 600)
    });

    threeBtn.on('mouseenter', function() {
        console.log("fired on 3");
        bg.removeClass('bg-on-deck')
        threeBg.addClass('bg-on-deck').removeClass(
            'bg-back-stage'); //opacity 1
        flectBox.add(scrns)
            .animate({
                    opacity: '0'
                }, 600,
                function() {
                    reflect.addClass('reflect-off');
                    $('#three-reflect')
                        .removeClass('reflect-off')
                })
        flectBox.animate({
            opacity: '.2'
        }, 600);
        $('#three-screen')
            .animate({
                opacity: '1'
            }, 600)
    });

    fourBtn.on('mouseenter', function() {
        bg.removeClass('bg-on-deck')
        fourBg.addClass('bg-on-deck').removeClass(
            'bg-back-stage'); //opacity 1
        flectBox.add(scrns)
            .animate({
                    opacity: '0'
                }, 600,
                function() {
                    reflect.addClass(
                        'reflect-off'
                    );
                    $('#four-reflect').removeClass(
                        'reflect-off'
                    )
                })
        flectBox.animate({
            opacity: '.2'
        }, 600);
        $('#four-screen')
            .animate({
                opacity: '1'
            }, 600)
    });

    fiveBtn.on('mouseenter', function() {
        bg.removeClass('bg-on-deck');
        fiveBg.removeClass(
            'bg-back-stage').addClass(
            'bg-on-deck'); //opacity 1
        flectBox.add(scrns)
            .animate({
                    opacity: '0'
                }, 600,
                function() {
                    reflect.addClass(
                        'reflect-off'
                    );
                    $('#five-reflect').removeClass(
                        'reflect-off'
                    )
                })
        flectBox.animate({
            opacity: '.2'
        }, 600);
        $('#five-screen')
            .animate({
                opacity: '1'
            }, 600)
    });


    sixBtn.on('mouseenter', function() {
        bg.removeClass('bg-on-deck');
        sixBg.addClass('bg-on-deck').removeClass(
            'bg-back-stage'); //opacity 1
        flectBox.add(scrns)
            .animate({
                    opacity: '0'
                }, 600,
                function() {
                    reflect.addClass(
                        'reflect-off'
                    );
                    $('#six-reflect').removeClass(
                        'reflect-off'
                    )
                })
        flectBox.animate({
            opacity: '.2'
        }, 600);
        $('#six-screen')
            .animate({
                opacity: '1'
            }, 600)
    });

    //Default nav-scrn hover functions NB: These are fine!
    scrBtnCont.on('mouseenter', function() {
        scrBtnCont.animate({
            opacity: '1'
        }, 600)
    });

    scrBtnCont.on('mouseleave', function() {
        scrBtnCont.delay(4000).animate({
            opacity: '0'
        }, 1000);
    });

    // TODO: Solve the prblem of inter-transitional translucency



    // Nav-btn click events===================================================

    galleryBtn.on('click', function() {
        bgStage.addClass('zoomBg') //animation
            .one('animationend',
                function(e) { //after animation
                    bgStage.removeClass(
                        'zoomBg bg-on-stage'
                    );
                    galleryBg.addClass(
                            'bg-on-stage').siblings(
                            '.bg')
                        .removeClass(
                            'bg-on-stage zoomBg bg-on-deck'
                        )
                        .addClass(
                            'bg-back-stage'
                        );
                });
    }); // galleryBtn click end

    //two button click
    twoBtn.on('click', function() {

        bgStage.addClass('zoomBg') //animation
            .one('animationend',
                function(e) { //after animation
                    bgStage.removeClass('zoomBg bg-on-stage');
                    twoBg.addClass('bg-on-stage').siblings(
                            '.bg')
                        .removeClass(
                            'bg-on-stage zoomBg bg-on-deck')
                        .addClass('bg-back-stage');
                });
    }); // two-btn click end

    //three button click
    threeBtn.on('click', function() {

        bgStage.addClass('zoomBg') //animation
            .one('animationend',
                function(e) { //after animation
                    bgStage.removeClass(
                        'zoomBg bg-on-stage'
                    );
                    threeBg.addClass(
                            'bg-on-stage').siblings(
                            '.bg')
                        .removeClass(
                            'bg-on-stage zoomBg bg-on-deck'
                        )
                        .addClass(
                            'bg-back-stage'
                        );
                });
    }); // 3-btn click end

    //four button (click) start
    fourBtn.on('click', function() {

        bgStage.addClass('zoomBg') //animation
            .one('animationend',
                function(e) { //after animation
                    bgStage.removeClass(
                        'zoomBg bg-on-stage'
                    );
                    fourBg.addClass(
                            'bg-on-stage').siblings(
                            '.bg')
                        .removeClass(
                            'bg-on-stage zoomBg bg-on-deck'
                        )
                        .addClass(
                            'bg-back-stage'
                        );
                });
    }); //fourbtn click end

    //five button click
    fiveBtn.on('click', function() {
        bgStage.addClass('zoomBg') //animation
            .one('animationend',
                function(e) { //after animation
                    bgStage.removeClass(
                        'zoomBg bg-on-stage'
                    );
                    fiveBg.addClass(
                            'bg-on-stage').siblings(
                            '.bg')
                        .removeClass(
                            'bg-on-stage zoomBg bg-on-deck'
                        )
                        .addClass(
                            'bg-back-stage'
                        );
                });
    }); // five-btn click end

    //six button click
    sixBtn.on('click', function() {

        bgStage.addClass('zoomBg') //animation
            .one('animationend',
                function(e) { //after animation
                    bgStage.removeClass(
                        'zoomBg bg-on-stage'
                    );
                    sixBg.addClass(
                            'bg-on-stage').siblings(
                            '.bg')
                        .removeClass(
                            'bg-on-stage zoomBg bg-on-deck'
                        )
                        .addClass(
                            'bg-back-stage'
                        );
                });
    }); // six-btn click end



}); //zzz master-js container

angular.module('myApp').service('mainService', ['$http', function($http) {



    // this.returnThisChart = function() {
    //     console.log("testing service")
    //     return thisChart;
    // }

    var apiKey = "ee148a39251d4314c86b16c7b0c3034d";
    //NB: coordinates of Provo hardcoded into the http request.
    var openWeatherUrl =
        "http://api.openweathermap.org/data/2.5/weather?lat=40.2181&lon=-111.6133&units=imperial&appid=" +
        apiKey;

    this.returnWeather = function() {
        return $http.get(openWeatherUrl);
    }
}])
