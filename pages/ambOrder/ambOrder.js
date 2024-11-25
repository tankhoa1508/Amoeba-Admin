// ambOrder Control Board ARRAY
let ambOrderControlBoardCourses = [
    {
      text: "ambOrder Users",
      icon: "usersBold.svg",
      class: "users",
      href: "../ambOrder Users/ambOrderUsers.html",
    },
    {
      text: "ambOrder Products",
      icon: "productsBold.svg",
      class: "products",
      href: "../ambOrder Products/ambOrderProducts.html",
    },
    {
      text: "ambOrder Catalogs",
      icon: "catalogsBold.svg",
      class: "catalogs",
      href: "../ambOrder Catalogs/ambOrderCatalogs.html",
    },
    {
      text: "ambOrder Orders",
      icon: "ordersBold.svg",
      class: "orders",
      href: "../ambOrder Orders/ambOrderOrders.html",
    },
    {
      text: "ambOrder Avenue",
      icon: "avenueBold.svg",
      class: "avenue",
      href: "../ambOrder Avenue/ambOrderAvenue.html",
    },
    {
      text: "ambOrder Popups",
      icon: "popupsBold.svg",
      class: "popups",
      href: "../ambOrder Popups/ambOrderPopups.html",
    },
    {
      text: "ambOrder Notifications",
      icon: "notificationsBold.svg",
      class: "notifications",
      href: "../ambOrder Notifications/ambOrderNotifications.html",
    },
    {
      text: "ambOrder Contents",
      icon: "contentsBold.svg",
      class: "contents",
      href: "../ambOrder Contents/ambOrderContents.html",
    },
    {
      text: "ambOrder Packages",
      icon: "packagesBold.svg",
      class: "packages",
      href: "../ambOrder Packages/ambOrderPackages.html",
    },
    {
      text: "ambOrder Reports",
      icon: "reportsBold.svg",
      class: "reports",
      href: "../ambOrder Reports/ambOrderReports.html",
    },
    {
      text: "ambOrder Messages",
      icon: "messagesBold.svg",
      class: "messages",
      href: "../ambOrder Messages/ambOrderMessages.html",
    },
  ];

// ambOrder Control Board
const _ulAmbOrderBoard = $("ul.controlBoard-list-ambOrder");
const ambOrderControlBoardList = ambOrderControlBoardCourses.map(function (item) {
  _ulAmbOrderBoard.append(
    `<li class="controlBoard-list__item ${item.class}">
            <a href="${item.href}" class="Board__link ">
              <div class="element-container">
                <img class="img-text" src="../../assets/images/${item.icon} " alt="">
                <p class="text">${item.text}</p>
              </div>
            </a>
    </li>`
  );
});