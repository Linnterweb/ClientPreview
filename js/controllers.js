angular.module('Axle.controllers', [])
    .controller('MainController', ['$scope', '$location', function ($scope, $location) {
        // var angular.element = $.noConflict();
        new WOW().init();


        // function theme_resizePanelSlide() {
        //     var e = angular.element("#custom-panel-slide .slide-pic").eq(0).height();
        //     angular.element("#panel-slide-img").height(e)
        // }

        // function isoDesktop() {
        //     var e, i, o, s = "is-active", t = s + " is-scrollable--first is-scrollable--last", a = "is-scrollable--first", n = "is-scrollable--last", l = parseInt(angular.element(".iso-sections").attr("data-height")), r = angular.element(".iso-indicator");
        //     if (angular.element(".iso-sections").eq(0).isOnScreen(0, .2)) {
        //         var d = parseInt(angular.element(".iso-sections").attr("data-rel"));
        //         e = d + l,
        //             i = d + 2 * l,
        //             o = d + 3 * l,
        //             r.on("click", function (o) {
        //                 var t, a = angular.element(this), n = a.attr("data-rel"), t = n.split("-").pop();
        //                 1 == t ? window.scrollTo(0, d) : 2 == t ? window.scrollTo(0, e) : 3 == t && window.scrollTo(0, i),
        //                     a.hasClass(s) || (r.removeClass(s),
        //                         a.addClass(s)),
        //                     o.preventDefault()
        //             }),
        //             angular.element(window).scrollTop() <= d && (angular.element(".iso-section.first").addClass(s + " " + a),
        //                 angular.element(".iso-indicator").removeClass(s),
        //                 angular.element("#iso-dot1").addClass(s)),
        //             angular.element(window).scrollTop() >= d && angular.element(window).scrollTop() <= e && (angular.element(".iso-section").removeClass(t),
        //                 angular.element(".iso-section.first").addClass(s),
        //                 angular.element(".iso-indicator").removeClass(s),
        //                 angular.element("#iso-dot1").addClass(s),
        //                 angular.element(".iso-progress").hasClass(s) || angular.element(".iso-progress").addClass(s)),
        //             angular.element(window).scrollTop() >= e && angular.element(window).scrollTop() < i && (angular.element(".iso-section").removeClass(t),
        //                 angular.element(".iso-section.middle").addClass(s),
        //                 angular.element(".iso-indicator").removeClass(s),
        //                 angular.element("#iso-dot2").addClass(s)),
        //             angular.element(window).scrollTop() >= i && (angular.element(".iso-section").removeClass(t),
        //                 angular.element(".iso-section.last").addClass(s),
        //                 angular.element(".iso-indicator").removeClass(s),
        //                 angular.element("#iso-dot3").addClass(s),
        //                 angular.element(".iso-progress").hasClass(s) || angular.element(".iso-progress").addClass(s))
        //     } else
        //         angular.element(".iso-progress").hasClass(s) && angular.element(".iso-progress").removeClass(s);
        //     angular.element("#block-earnings").isOnScreen(0, .05) && (angular.element(".iso-section.first").removeClass(t),
        //         angular.element(".iso-section.last").addClass(s + " " + n),
        //         angular.element(".iso-progress").hasClass(s) && angular.element(".iso-progress").removeClass(s))
        // }
        // function isopage() {
        //     return angular.element("#contentWrap.customer-page").length ? 1 : !!angular.element("#contentWrap.advertiser-page").length && 2
        // }

        // function setSectionAttr() {
        //     var e = angular.element(".iso-sections")
        //         , i = angular.element(".iso-section")
        //         , o = angular.element(".iso-section.first")
        //         , s = angular.element(".iso-section.last")
        //         , t = "is-active is-scrollable--first"
        //         , a = "is-active is-scrollable--last";
        //     e.attr("data-rel", parseInt(e.offset().top)),
        //         e.attr("data-height", o.height()),
        //         Math.round(document.querySelectorAll(".iso-sections")[0].offsetTop) > angular.element(window).scrollTop() ? (i.removeClass(a),
        //             o.addClass(t)) : Math.round(document.querySelectorAll(".iso-sections")[0].offsetTop) < angular.element(window).scrollTop() && (i.removeClass(t),
        //                 s.addClass(a))
        // }

        // function getMobileOperatingSystem() {
        //     var e = navigator.userAgent || navigator.vendor || window.opera;
        //     return /windows phone/i.test(e) ? "windows" : /android/i.test(e) ? "android" : /iPad|iPhone|iPod/.test(e) && !window.MSStream ? "ios" : "unknown"
        // }
        // function showStoreButtons() {
        //     var e = getMobileOperatingSystem();
        //     switch (angular.element(".app-links").removeClass("hidden"),
        //     e) {
        //         case "windows":
        //             angular.element(".button__start").css({
        //                 display: "block"
        //             }),
        //                 angular.element(".button__android").removeClass("hidden"),
        //                 angular.element(".button__ios").removeClass("hidden");
        //             break;
        //         case "android":
        //             angular.element(".button__android").removeClass("hidden");
        //             break;
        //         case "ios":
        //             angular.element(".button__ios").removeClass("hidden");
        //             break;
        //         case "unknown":
        //             angular.element(".button__android").removeClass("hidden"),
        //                 angular.element(".button__ios").removeClass("hidden")
        //     }
        // }


        // var waitForFinalEvent = function () {
        //     var e = {};
        //     return function (i, o, s) {
        //         s || (s = "Don't call this twice without a uniqueId"),
        //             e[s] && clearTimeout(e[s]),
        //             e[s] = setTimeout(i, o)
        //     }
        // }()
        //     , isMobile = !1;
        // (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) && (isMobile = !0),
        //     function (e) {
        //         e.fn.isOnScreen = function (i, o) {
        //             null != i && "undefined" != typeof i || (i = 1),
        //                 null != o && "undefined" != typeof o || (o = 1);
        //             var s = e(window)
        //                 , t = {
        //                     top: s.scrollTop(),
        //                     left: s.scrollLeft()
        //                 };
        //             t.right = t.left + s.width(),
        //                 t.bottom = t.top + s.height();
        //             var a = this.outerHeight()
        //                 , n = this.outerWidth();
        //             if (!n || !a)
        //                 return !1;
        //             var l = this.offset();
        //             l.right = l.left + n,
        //                 l.bottom = l.top + a;
        //             var r = !(t.right < l.left || t.left > l.right || t.bottom < l.top || t.top > l.bottom);
        //             if (!r)
        //                 return !1;
        //             var d = {
        //                 top: Math.min(1, (l.bottom - t.top) / a),
        //                 bottom: Math.min(1, (t.bottom - l.top) / a),
        //                 left: Math.min(1, (l.right - t.left) / n),
        //                 right: Math.min(1, (t.right - l.left) / n)
        //             };
        //             return d.left * d.right >= i && d.top * d.bottom >= o
        //         }
        //     }(angular.element),
        //     angular.element(function () {
        //         var e = angular.element("iframe[src^='//player.vimeo.com'], iframe[src^='//www.youtube.com'], object, embed")
        //             , i = angular.element("figure");
        //         e.each(function () {
        //             angular.element(this).attr("data-aspectRatio", this.height / this.width).removeAttr("height").removeAttr("width")
        //         }),
        //             angular.element(window).resize(function () {
        //                 var o = i.width();
        //                 e.each(function () {
        //                     var e = angular.element(this);
        //                     e.width(o).height(o * e.attr("data-aspectRatio"))
        //                 })
        //             }).resize()
        //     }),

        //     angular.element(document).ready(function () {
        //         var e = location.pathname.split("/").pop();
        //         !e.indexOf("index.html") > -1 && angular.element('.nav a[href^="' + e + '"]').not(".no-trail").addClass("active"),
        //             // toggleViewClass(),
        //             isMobile && (angular.element("body").addClass("mobile-device"),
        //                 isopage && angular.element(".iso").addClass("is--mobile")),
        //             // theme_events(),
        //             1 == isopage() && (
        //                 // theme_videoTools(),
        //                 // theme_colslide(),
        //                 // theme_driverSlider(),
        //                 theme_resizePanelSlide()
        //                 // theme_panelSlide()
        //             )
        //     }),
        //     angular.element(window).on("load", function () {
        //         showStoreButtons(),
        //             1 == isopage() ? (theme_resizePanelSlide(),
        //                 isMobile ? (angular.element(".iso-section").removeClass("is-active is-scrollable--first is-scrollable--first"),
        //                     isoMobile(angular.element(".iso"), angular.element(".iso-section"), "is-active"),
        //                     angular.element(window).scroll(function () {
        //                         isoMobile(angular.element(".iso"), angular.element(".iso-section"), "is-active")
        //                     })) : setTimeout(function () {
        //                         setSectionAttr(),
        //                             isoDesktop(),
        //                             angular.element(window).scroll(function () {
        //                                 isoDesktop()
        //                             })
        //                     }, 10)) : 2 == isopage() && (isoMobile(angular.element(".iso-fader"), angular.element(".iso-block"), "is-active"),
        //                         angular.element(window).scroll(function () {
        //                             isoMobile(angular.element(".iso-fader"), angular.element(".iso-block"), "is-active"),
        //                                 scrollInFrame(angular.element("#swarm-anim-block"), "in-view")
        //                         }))
        //     }),
        //     angular.element(window).on("resize", function () {
        //         waitForFinalEvent(function () {
        //             // toggleViewClass(),
        //             1 == isopage() && (theme_resizePanelSlide(),
        //                 isMobile || (setSectionAttr(),
        //                     // toggleSliderPager(),
        //                     isoDesktop())),
        //                 2 == isopage() && isoMobile(angular.element(".iso-fader"), angular.element(".iso-block"), "is-active")
        //         }, 0, "resize panel slide")
        //     });


    }])

    .controller('UserController', ['$scope', '$location', function ($scope, $location) {
        $(document).ready(function () {
            $('[data-toggle="offcanvas"]').click(function () {
                $("#navigation").toggleClass("hidden-xs");
            });
        });
    }])