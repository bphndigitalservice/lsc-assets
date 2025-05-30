var App = (function (a) {
    var t = a(".wrapper"),
      e = a("aside.left"),
      l = a(".layer-close");
    return {
      init: function () {
        function i() {
          e.toggleClass("clicked"),
            t.toggleClass("clicked"),
            l.toggleClass("show");
        }
        a(".offcanvas__toggle").on("click", function () {
          i();
        }),
          a(".layer-close").on("click", function () {
            i();
          });
        var n = location.href.match(/\/video/),
          s = location.href.match(/\/radio/),
          d = location.href.match(/\/konsultasi/),
          c = location.href.match(/\/news/),
          h = location.href.match(/\/download/),
          o = location.href.match(/\/download/),
          u = location.href.match(/\/festival/),
          r = location.href.match(/filmPendek$/i),
          v = location.href.match(/filmDokumenter$/i),
          f = location.href.match(/festivalCiptaLagu$/i),
          m = location.href.match(/StandUpComedy$/i),
          C = location.href.match(/artikelAksesKeadilanMelaluiBlog$/i);
        location.href.match(/^(?:(?:https?:\/\/)?[^\/]+)?\/$/);
        u &&
          a(".toggle__nav")
            .find("i")
            .removeClass("fa-plus")
            .addClass("fa-minus"),
          n
            ? a("ul.menu > li:nth-child(2)").addClass("active")
            : s
            ? a("ul.menu > li:nth-child(3)").addClass("active")
            : d
            ? a("ul.menu > li:nth-child(4)").addClass("active")
            : c
            ? a("ul.menu > li:nth-child(5)").addClass("active")
            : h
            ? a("ul.menu > li:nth-child(6)").addClass("active")
            : o
            ? a("ul.menu > li:nth-child(8)").addClass("active")
            : r
            ? (a("ul.menu > li:nth-child(9)").addClass("active"),
              a("ul.nested__nav li:nth-child(1)").addClass("active"))
            : v
            ? (a("ul.menu > li:nth-child(9)").addClass("active"),
              a("ul.nested__nav li:nth-child(2)").addClass("active"))
            : f
            ? (a("ul.menu > li:nth-child(9)").addClass("active"),
              a("ul.nested__nav li:nth-child(3)").addClass("active"))
            : m
            ? (a("ul.menu > li:nth-child(9)").addClass("active"),
              a("ul.nested__nav li:nth-child(4)").addClass("active"))
            : C
            ? (a("ul.menu > li:nth-child(9)").addClass("active"),
              a("ul.nested__nav li:nth-child(5)").addClass("active"))
            : a("ul.menu > li:nth-child(1)").addClass("active");
      },
    };
  })(jQuery),
  parent = $(".menu__item > a"),
  parentIcon = $(".menu__item i");
parent.on("click", function (a) {
  parentIcon.removeClass("fa-minus").addClass("fa-plus"),
    (child = $(this).next(".nested__nav")),
    $(".nested__nav").not(child).slideUp(),
    child.is(":visible")
      ? ($(this).find("i").removeClass("fa-minus").addClass("fa-plus"),
        child.slideUp())
      : ($(this).find("i").removeClass("fa-plus").addClass("fa-minus"),
        child.slideDown());
});
var Calendar = (function (a) {
  return {
    init: function () {
      a("#calendar").fullCalendar({
        header: {
          left: "prev,next today",
          center: "title",
          right: "month,basicWeek,basicDay",
        },
        defaultDate: "2015-02-12",
        editable: !0,
        eventLimit: !0,
        events: [
          { title: "All Day Event", start: "2015-02-01" },
          { title: "Long Event", start: "2015-02-07", end: "2015-02-10" },
          { id: 999, title: "Repeating Event", start: "2015-02-09T16:00:00" },
          { id: 999, title: "Repeating Event", start: "2015-02-16T16:00:00" },
          { title: "Conference", start: "2015-02-11", end: "2015-02-13" },
          {
            title: "Meeting",
            start: "2015-02-12T10:30:00",
            end: "2015-02-12T12:30:00",
          },
          { title: "Lunch", start: "2015-02-12T12:00:00" },
          {
            title: "Click for Google",
            url: "http://google.com/",
            start: "2015-02-28",
          },
        ],
      });
    },
  };
})(jQuery);
App.init();
