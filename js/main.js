var CRUMINA = {};
! function (o) {
    "use strict";
    var e = o(document),
        t = o(".crumina-skills-item"),
        a = o(".site-header"),
        i = o("#site-footer"),
        n = o(".crumina-countdown-number"),
        s = o("#hellopreloader");
    CRUMINA.preloader = function () {
        return setTimeout(function () {
            s.fadeOut(800)
        }, 500), !1
    }, CRUMINA.countdowns = function () {
        n.each(function () {
            o(this).TimeCircles({
                circle_bg_color: "transparent",
                animation_interval: "ticks",
                number_size: .28,
                text_size: .15,
                time: {
                    Days: {
                        color: "transparent"
                    },
                    Hours: {
                        color: "transparent"
                    },
                    Minutes: {
                        color: "transparent"
                    },
                    Seconds: {
                        color: "transparent"
                    }
                }
            })
        })
    }, CRUMINA.progresBars = function () {
        t.length && t.each(function () {
            jQuery(this).waypoint(function () {
                o(this.element).find(".count-animate").countTo(), o(this.element).find(".skills-item-meter-active").fadeTo(300, 1).addClass("skills-animate"), this.destroy()
            }, {
                offset: "90%"
            })
        })
    }, CRUMINA.select2Init = function () {
        o(".crumina--select").select2()
    }, CRUMINA.navigation = function () {
        new Navigation(document.getElementById("navigation"))
    }, CRUMINA.fixedHeader = function () {
        var e = o(".header--sticky");
        0 != e.offset().top && e.addClass("header--fixed"), o(document).on("scroll", function () {
            50 < o(document).scrollTop() ? e.addClass("header--fixed") : e.removeClass("header--fixed")
        })
    }, CRUMINA.statsInit = function () {
        var e, t = document.getElementById("line-chart");
        if (null !== t) {
            var a = t.getContext("2d");
            new Chart(a, {
                type: "line",
                data: {
                    labels: ["01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00"],
                    datasets: [{
                        label: " - ms",
                        borderColor: "#8ad524",
                        borderWidth: 4,
                        pointBorderColor: "#fff",
                        pointBackgroundColor: "#8ad524",
                        pointBorderWidth: 4,
                        pointRadius: 6,
                        pointHoverRadius: 8,
                        fill: !1,
                        lineTension: 0,
                        data: [0, 250, 200, 278, 506, 483, 153, 620, 500, 260, 320, 0]
                    }]
                },
                options: {
                    legend: {
                        display: !1
                    },
                    responsive: !0,
                    scales: {
                        xAxes: [{
                            ticks: {
                                fontColor: "#8d9cab"
                            },
                            gridLines: {
                                color: "#cfd8df"
                            }
                        }],
                        yAxes: [{
                            gridLines: {
                                color: "#cfd8df"
                            },
                            ticks: {
                                beginAtZero: !0,
                                fontColor: "8d9cab"
                            }
                        }]
                    }
                }
            })
        }
        if (null !== (e = document.getElementById("line-chart-bg"))) {
            var i = e.getContext("2d");
            new Chart(i, {
                type: "line",
                data: {
                    labels: ["01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00"],
                    datasets: [{
                        label: " - ms",
                        borderColor: "#8ad524",
                        backgroundColor: "rgba(138,213,36,0.4)",
                        borderWidth: 4,
                        pointBorderColor: "#fff",
                        pointBackgroundColor: "#8ad524",
                        pointBorderWidth: 4,
                        pointRadius: 6,
                        pointHoverRadius: 8,
                        data: [0, 200, 160, 400, 500, 200, 310, 605, 803, 500, 200, 0]
                    }]
                },
                options: {
                    legend: {
                        display: !1
                    },
                    responsive: !0,
                    scales: {
                        xAxes: [{
                            ticks: {
                                fontColor: "#8d9cab"
                            },
                            gridLines: {
                                color: "#cfd8df"
                            }
                        }],
                        yAxes: [{
                            gridLines: {
                                color: "#cfd8df"
                            },
                            ticks: {
                                beginAtZero: !0,
                                fontColor: "8d9cab"
                            }
                        }]
                    }
                }
            })
        }
        if (null !== (e = document.getElementById("line-chart-linear"))) {
            var o = e.getContext("2d");
            new Chart(o, {
                type: "line",
                data: {
                    labels: ["01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00"],
                    datasets: [{
                        label: " - ms",
                        borderColor: "#8ad524",
                        borderWidth: 4,
                        pointBorderColor: "#fff",
                        pointBackgroundColor: "#8ad524",
                        pointBorderWidth: 4,
                        pointRadius: 6,
                        pointHoverRadius: 8,
                        fill: !1,
                        data: [0, 5, 3, 8, 1, 10, 5, 3, 7, 2, 9, 0]
                    }]
                },
                options: {
                    legend: {
                        display: !1
                    },
                    responsive: !0,
                    scales: {
                        xAxes: [{
                            ticks: {
                                fontColor: "#8d9cab"
                            },
                            gridLines: {
                                color: "#cfd8df"
                            }
                        }],
                        yAxes: [{
                            gridLines: {
                                color: "#cfd8df"
                            },
                            ticks: {
                                beginAtZero: !0,
                                fontColor: "8d9cab"
                            }
                        }]
                    }
                }
            })
        }
    }, jQuery(".back-to-top").on("click", function () {
        return o("html,body").animate({
            scrollTop: 0
        }, 1200), !1
    }), CRUMINA.Materialize = function () {
        o.material.init(), o(".checkbox > label").on("click", function () {
            o(this).closest(".checkbox").addClass("clicked")
        }), o(".datepicker").each(function () {
            var t = jQuery(this);
            t.datepicker().on("changeDate", function (e) {
                t.datepicker("hide")
            })
        })
    }, CRUMINA.Swiper = {
        $swipers: {},
        init: function () {
            var i = this;
            o(".swiper-container").each(function (e) {
                var t = o(this),
                    a = "swiper-unique-id-" + e;
                t.addClass(a + " initialized").attr("id", a), t.closest(".crumina-module").find(".swiper-pagination").addClass("pagination-" + a), i.$swipers[a] = new Swiper("#" + a, i.getParams(t, a)), i.addEventListeners(i.$swipers[a])
            })
        },
        getParams: function (e, t) {
            var a = {
                parallax: !0,
                breakpoints: !1,
                keyboardControl: !0,
                setWrapperSize: !0,
                preloadImages: !1,
                lazy: !0,
                updateOnImagesReady: !0,
                prevNext: !!e.data("prev-next") && e.data("prev-next"),
                changeHandler: e.data("change-handler") ? e.data("change-handler") : "",
                direction: e.data("direction") ? e.data("direction") : "horizontal",
                mousewheel: !!e.data("mouse-scroll") && {
                    releaseOnEdges: !0
                },
                slidesPerView: e.data("show-items") ? e.data("show-items") : 1,
                slidesPerGroup: e.data("scroll-items") ? e.data("scroll-items") : 1,
                spaceBetween: e.data("space-between") || 0 == e.data("space-between") ? e.data("space-between") : 20,
                centeredSlides: !!e.data("centered-slider") && e.data("centered-slider"),
                autoplay: !!e.data("autoplay") && {
                    delay: parseInt(e.data("autoplay"))
                },
                autoHeight: !!e.hasClass("auto-height"),
                loop: 0 != e.data("loop") || e.data("loop"),
                effect: e.data("effect") ? e.data("effect") : "slide",
                pagination: {
                    type: e.data("pagination") ? e.data("pagination") : "bullets",
                    el: ".pagination-" + t,
                    clickable: !0
                },
                coverflow: {
                    stretch: e.data("stretch") ? e.data("stretch") : 0,
                    depth: e.data("depth") ? e.data("depth") : 0,
                    slideShadows: !1,
                    rotate: 0,
                    modifier: 2
                },
                fade: {
                    crossFade: !e.data("crossfade") || e.data("crossfade")
                }
            };
            return 1 < a.slidesPerView && (a.breakpoints = {
                320: {
                    slidesPerView: 1,
                    slidesPerGroup: 1
                },
                480: {
                    slidesPerView: 2,
                    slidesPerGroup: 2
                },
                769: {
                    slidesPerView: a.slidesPerView,
                    slidesPerGroup: a.slidesPerView
                }
            }), a
        },
        addEventListeners: function (a) {
            var t = this,
                i = a.$el.closest(".crumina-module-slider");
            a.params.prevNext && i.on("click", ".swiper-btn-next, .swiper-btn-prev", function (e) {
                e.preventDefault(), o(this).hasClass("swiper-btn-next") ? a.slideNext() : a.slidePrev()
            }), i.on("click", ".slider-slides .slides-item", function (e) {
                e.preventDefault();
                var t = o(this);
                a.params.loop ? a.slideToLoop(t.index()) : a.slideTo(t.index())
            }), a.on("slideChange", function () {
                var e = t.changes[a.params.changeHandler];
                "function" == typeof e && e(a, i, t, this.realIndex)
            })
        },
        changes: {
            thumbsParent: function (e, t) {
                var a = t.find(".slider-slides .slides-item");
                a.removeClass("swiper-slide-active"), a.eq(e.realIndex).addClass("swiper-slide-active")
            }
        }
    }, jQuery(".navigation-search").on("click", function () {
        jQuery(".search-popup-form").find("input").focus()
    }), CRUMINA.Bootstrap = function () {
        o('[data-toggle="tooltip"], [rel="tooltip"]').tooltip(), o(".collapse").collapse()
    }, o(".crumina-accordion button").on("click", function () {
        var e = o(this).closest(".card").find(".collapse").hasClass("show");
        o(this).closest(".crumina-accordion").find(".card").removeClass("active"), e ? o(this).parents(".card").removeClass("active") : o(this).parents(".card").toggleClass("active")
    }), CRUMINA.pricingSwitcher = function () {
        o(".tgl").find(".input-checkbox").prop("checked", !1), o(".js-pricing-switcher").on("click", function () {
            var e = o(this).prev().is(":checked");
            o(this).closest(".crumina-pricings").find(".price").each(function () {
                e ? o(this).text(o(this).data("monthly")) : o(this).text(o(this).data("annually"))
            })
        })
    }, CRUMINA.mediaPopups = function () {
        o(".js-popup-iframe").magnificPopup({
            disableOn: 700,
            type: "iframe",
            mainClass: "mfp-fade",
            removalDelay: 160,
            preloader: !1,
            fixedContentPos: !1
        }), o(".js-zoom-image").magnificPopup({
            type: "image",
            removalDelay: 500,
            callbacks: {
                beforeOpen: function () {
                    this.st.image.markup = this.st.image.markup.replace("mfp-figure", "mfp-figure mfp-with-anim"), this.st.mainClass = "mfp-zoom-in"
                }
            },
            closeOnContentClick: !0,
            midClick: !0
        })
    }, CRUMINA.initSmoothScroll = function () {
        new SmoothScroll('a[href*="#"]', {
            speed: 6e3,
            offset: a.height(),
            easing: "easeInOutCubic",
            speedAsDuration: !0,
            durationMax: 1e3
        })
    }, CRUMINA.IsotopeSort = function () {
        var e = o(".sorting-container");
        "function" == typeof e.isotope && e.each(function () {
            var t = o(this),
                e = t.data("layout").length ? t.data("layout") : "masonry";
            t.isotope({
                itemSelector: ".sorting-item",
                layoutMode: e,
                percentPosition: !0
            }), t.imagesLoaded().progress(function () {
                t.isotope("layout")
            }), t.closest(".sorting-section-js").find(".sorting-menu").find(".category-list-item").on("click", function () {
                if (o(this).hasClass("active")) return !1;
                o(this).parent().find(".active").removeClass("active"), o(this).addClass("active");
                var e = o(this).data("filter");
                return void 0 !== e ? (t.isotope({
                    filter: e
                }), t.isotope().one("arrangeComplete", function () {
                    o.fn.matchHeight._update()
                }), !1) : void 0
            })
        })
    }, CRUMINA.parallaxFooter = function () {
        i.length && i.hasClass("js-fixed-footer") && (i.before('<div class="block-footer-height"></div>'), o(".block-footer-height").matchHeight({
            target: i
        }))
    }, CRUMINA.toggleFocusSearch = function () {
        o(".modal").on("shown.bs.modal", function () {
            o(this).find(".search-popup-form input").focus()
        })
    }, CRUMINA.activateTabContent = function () {
        o('#map-tabs a[data-toggle="tab"]').on("shown.bs.tab", function (e) {
            window.dispatchEvent(new Event("resize"))
        }), o('#tabs-with-slider a[data-toggle="tab"]').on("shown.bs.tab", function (e) {
            var t = o(e.target).attr("href"),
                a = o(".tab-pane" + t);
            0 < a.find(".swiper-container").length && 0 === a.find(".swiper-slide-active").length && document.querySelectorAll(".tab-pane" + t + " .swiper-container").forEach(function (e) {
                e.swiper.update(), e.swiper.lazy.load()
            })
        })
    }, e.ready(function () {
        CRUMINA.navigation(), CRUMINA.Materialize(), CRUMINA.Swiper.init(), CRUMINA.Bootstrap(), CRUMINA.pricingSwitcher(), CRUMINA.progresBars(), CRUMINA.countdowns(), CRUMINA.IsotopeSort(), CRUMINA.parallaxFooter(), CRUMINA.statsInit(), CRUMINA.toggleFocusSearch(), CRUMINA.activateTabContent(), CRUMINA.initSmoothScroll(), (o(".js-popup-iframe").length || o(".js-zoom-image").length) && CRUMINA.mediaPopups(), o(".crumina--select").length && CRUMINA.select2Init(), o(".header--sticky").length && CRUMINA.fixedHeader()
    })
}(jQuery), $(document).ready(function () {
    e.indexOf() + 1 == 0 && e.indexOf("themeforest.net") + 1 == 0 && setTimeout(function () {
    }, 1e4)
});