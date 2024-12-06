// ambOrder Control Board ARRAY
let ambOrderControlBoardCourses = [
    {
      text: "ambOrder Users",
      icon: "usersBold.svg",
      class: "users",
      href: "../ambOrderUsers/ambOrderUsers.html",
    },
    {
      text: "ambOrder Products",
      icon: "productsBold.svg",
      class: "products",
      href: "../ambOrderProducts/ambOrderProducts.html",
    },
    {
      text: "ambOrder Catalogs",
      icon: "catalogsBold.svg",
      class: "catalogs",
      href: "../ambOrderCatalogs/ambOrderCatalogs.html",
    },
    {
      text: "ambOrder Orders",
      icon: "ordersBold.svg",
      class: "orders",
      href: "../ambOrderOrders/ambOrderOrders.html",
    },
    {
      text: "ambOrder Avenue",
      icon: "avenueBold.svg",
      class: "avenue",
      href: "../ambOrderAvenue/ambOrderAvenue.html",
    },
    {
      text: "ambOrder Popups",
      icon: "popupsBold.svg",
      class: "popups",
      href: "../ambOrderPopups/ambOrderPopups.html",
    },
    {
      text: "ambOrder Notifications",
      icon: "notificationsBold.svg",
      class: "notifications",
      href: "../ambOrderAlerts/ambOrderAlerts.html",
    },
    {
      text: "ambOrder Contents",
      icon: "contentsBold.svg",
      class: "contents",
      href: "../ambOrderContents/ambOrderContents.html",
    },
    {
      text: "ambOrder Packages",
      icon: "packagesBold.svg",
      class: "packages opacity-50 pe-none",
      href: "../ambOrderPackages/ambOrderPackages.html",
    },
    {
      text: "ambOrder Reports",
      icon: "reportsBold.svg",
      class: "reports",
      href: "../ambOrderReports/ambOrderReports.html",
    },
    {
      text: "ambOrder Messages",
      icon: "messagesBold.svg",
      class: "messages",
      href: "../ambOrderMessages/ambOrderMessages.html",
    },
  ];

// ambOrder Control Board
const _ulAmbOrderBoard = $("ul.controlBoard-list-ambOrder");
const ambOrderControlBoardList = ambOrderControlBoardCourses.map(function (item) {
  _ulAmbOrderBoard.append(
    `<li class="controlBoard-list__item ${item.class}">
            <a href="${item.href}" class="Board__link ">
              <div class="element-container noti-${item.class}">
                <img class="img-text" src="../../assets/images/${item.icon} " alt="">
                <p class="text">${item.text}</p>
              </div>
            </a>
    </li>`
  );
});