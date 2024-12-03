// ambTalk Control Board ARRAY
let ambTalkControlBoardCourses = [
    {
      text: "ambTalk Clients",
      icon: "usersBold.svg",
      class: "clients",
      href: "../ambTalk Clients/ambTalkClients.html",
    },
    {
      text: "ambOrder Notifications",
      icon: "notificationsBold.svg",
      class: "notifications opacity-50 pe-none",
      href: "#",
    },
    {
      text: "ambOrder Packages",
      icon: "packagesBold.svg",
      class: "packages opacity-50 pe-none",
      href: "#",
    },
  ];


// ambTalk Control Board
const _ulAmbTalkBoard = $("ul.controlBoard-list-ambTalk");
const ambTalkControlBoardList = ambTalkControlBoardCourses.map(function (item) {
  _ulAmbTalkBoard.append(
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
  