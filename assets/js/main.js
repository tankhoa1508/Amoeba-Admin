// left Sidebar AmbOrder ARRAY
let leftSidebarAmbOrderCourses = [
  {
    name: "ambOrder",
    icon: "ambOrder-active.png",
    class: "ambOrder",
    iconActive: "ambOrder-active.png",
    href: "../ambOrder/ambOrder.html",
  },
  {
    name: "ambTalk",
    icon: "ambTalk.png",
    class: "ambTalk",
    iconActive: "ambTalk-active.png",
    href: "../ambTalk/ambTalk.html",
  },
];

// left Sidebar AmbTalk ARRAY
let leftSidebarAmbTalkCourses = [
  {
    name: "ambOrder",
    icon: "ambOrder.png",
    class: "ambOrder",
    iconActive: "ambOrder-active.png",
    href: "../ambOrder/ambOrder.html",
  },
  {
    name: "ambTalk",
    icon: "ambTalk-active.png",
    class: "ambTalk",
    iconActive: "ambTalk-active.png",
    href: "../ambTalk/ambTalk.html",
  },
  {
    name: "Members",
    icon: "Members.png",
    class: "members",
    iconActive: "Members-active.png",
    href: "../ambOrderMembers/ambOrderMembers.html",
  },
  {
    name: "Supports",
    icon: "Supports.png",
    class: "supports",
    iconActive: "Supports-active.png",
    href: "../ambOrderSupports/ambOrderSupports.html",
  },
  {
    name: "Settings",
    icon: "Settings.png",
    class: "settings opacity-50 pe-none",
    iconActive: "Settings-active.png",
    href: "#",
  },
];

// rightSidebarAmbOrder ARRAY
let rightSidebarAmbOrderCourses = [
  {
    name: "Products",
    icon: "Users.png",
    class: "users",
    iconActive: "Users-active.png",
    href: "../ambOrderUsers/ambOrderUsers.html",
  },
  {
    name: "Products",
    icon: "Products.png",
    class: "products",
    iconActive: "Products-active.png",
    href: "../ambOrderProducts/ambOrderProducts.html",
  },
  {
    name: "Catalogs",
    icon: "Catalogs.png",
    class: "catalogs",
    iconActive: "Catalogs-active.png",
    href: "../ambOrderCatalogs/ambOrderCatalogs.html",
  },
  {
    name: "Orders",
    icon: "Orders.png",
    class: "orders",
    iconActive: "Orders-active.png",
    href: "../ambOrderOrders/ambOrderOrders.html",
  },
  {
    name: "Popups",
    icon: "Popups.png",
    class: "popups",
    iconActive: "Popups-active.png",
    href: "../ambOrderPopups/ambOrderPopups.html",
  },
  {
    name: "Alerts",
    icon: "Alerts.png",
    class: "alerts",
    iconActive: "Alerts-active.png",
    href: "../ambOrderAlerts/ambOrderAlerts.html",
  },
  {
    name: "Contents",
    icon: "Contents.png",
    class: "contents",
    iconActive: "Contents-active.png",
    href: "../ambOrderContents/ambOrderContents.html",
  },
  {
    name: "Packages",
    icon: "Packages.png",
    class: "packages opacity-50 pe-none",
    iconActive: "Packages-active.png",
    href: "../ambOrderPackages/ambOrderPackages.html",
  },
  {
    name: "Reports",
    icon: "Reports.png",
    class: "reports",
    iconActive: "Reports-active.png",
    href: "../ambOrderReports/ambOrderReports.html",
  },
  {
    name: "Messages",
    icon: "Messages.png",
    class: "messages",
    iconActive: "Messages-active.png",
    href: "../ambOrderMessages/ambOrderMessages.html",
  },
  {
    name: "Avenue",
    icon: "Avenue.png",
    class: "avenue",
    iconActive: "Avenue-active.png",
    href: "../ambOrderAvenue/ambOrderAvenue.html",
  },
  {
    name: "Plugins",
    icon: "Plugins.png",
    class: "plugins",
    iconActive: "Plugins-active.png",
    href: "../ambOrderPlugins/ambOrderPlugins.html",
  },
  {
    name: "Subscriptions",
    icon: "Subscriptions.png",
    class: "subscriptions",
    iconActive: "Subscriptions-active.png",
    href: "../ambOrderSubscriptions/ambOrderSubscriptions.html",
  },
  {
    name: "Transactions",
    icon: "Transactions.png",
    class: "transactions",
    iconActive: "Transactions-active.png",
    href: "../ambOrderTransactions/ambOrderTransactions.html",
  },
  {
    name: "Members",
    icon: "Members.png",
    class: "members",
    iconActive: "Members-active.png",
    href: "../ambOrderMembers/ambOrderMembers.html",
  },
  {
    name: "Supports",
    icon: "Supports.png",
    class: "supports",
    iconActive: "Supports-active.png",
    href: "../ambOrderSupports/ambOrderSupports.html",
  },
  {
    name: "Settings",
    icon: "Settings.png",
    class: "settings opacity-50 pe-none",
    iconActive: "Settings-active.png",
    href: "../ambOrderSettings/ambOrderSettings.html",
  },
];

// rightSidebarAmbTalk ARRAY
let rightSidebarAmbTalkCourses = [
  {
    name: "Clients",
    icon: "Clients.png",
    class: "clients",
    iconActive: "Clients-active.png",
    href: "../../pages/ambTalkClients/ambTalkClients.html",
  },
  {
    name: "Alerts",
    icon: "Alerts.png",
    class: "alerts opacity-50 pe-none",
    iconActive: "Alerts-active.png",
    href: "#",
  },
  {
    name: "Packages",
    icon: "Packages.png",
    class: "packages opacity-50 pe-none",
    iconActive: "Packages-active.png",
    href: "#",
  },
  {
    name: "Members",
    icon: "Members.png",
    class: "members opacity-50 pe-none",
    iconActive: "Members-active.png",
    href: "#",
  },
];



// left Sidebar AmbOrder
const _ulLeftAmbOrder = $("ul.leftSidebarAmbOrder");
const leftSidebarAmbOrderList = leftSidebarAmbOrderCourses.map(function (item) {
  _ulLeftAmbOrder.append(
    `<li class="sidebar-nav__item ${item.class}">
            <a href="${item.href}" class="sidebar-nav__link">
                <img src="../../assets/images/${item.icon} " class="non-active" alt="">
                <img src="../../assets/images/${item.iconActive}" class="active" alt="">
            </a>
    </li>`
  );
});

// left Sidebar AmbTalk
const _ulLeftAmbTalk = $("ul.leftSidebarAmbTalk");
const leftSidebarAmbTalkList = leftSidebarAmbTalkCourses.map(function (item) {
  _ulLeftAmbTalk.append(
    `<li class="sidebar-nav__item ${item.class}">
            <a href="${item.href}" class="sidebar-nav__link">
                <img src="../../assets/images/${item.icon} " class="non-active" alt="">
                <img src="../../assets/images/${item.iconActive}" class="active" alt="">
            </a>
    </li>`
  );
});

// rightSidebarAmbOrder
const _ulRightAmbOrder = $("ul.rightSidebarAmbOrder");
const rightSidebarAmbOrderList = rightSidebarAmbOrderCourses.map(function (item) {
  _ulRightAmbOrder.append(
    `<li class="sidebar-nav__item ${item.class}">
            <a href="${item.href}" class="sidebar-nav__link">
                <img src="../../assets/images/${item.icon} " class="non-active" alt="">
                <img src="../../assets/images/${item.iconActive}" class="active" alt="">
            </a>
    </li>`
  );
});

// rightSidebarAmbTalk
const _ulAmbTalk = $("ul.rightSidebarAmbTalk");
const rightSidebarAmbTalkList = rightSidebarAmbTalkCourses.map(function (item) {
  _ulAmbTalk.append(
    `<li class="sidebar-nav__item ${item.class}">
            <a href="${item.href}" class="sidebar-nav__link">
                <img src="../../assets/images/${item.icon} " class="non-active" alt="">
                <img src="../../assets/images/${item.iconActive}" class="active" alt="">
            </a>
    </li>`
  );
});


// dropdown show notifications
function notiDropdown() {
  document.getElementById("noti-Dropdown").classList.toggle("show2");
}

// dropdown change language
function languageDropdown() {
  document.getElementById("language-Dropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (e) {
  if (
    !e.target.matches(".language-dropbtn") &&
    !e.target.matches(".language-header")
  ) {
    let languageDropdown = document.getElementById("language-Dropdown");
    if (languageDropdown.classList.contains("show")) {
      languageDropdown.classList.remove("show");
    }
  }
  if (!e.target.matches(".noti-dropbtn") && !e.target.matches(".noti-header")) {
    let notiDropdown = document.getElementById("noti-Dropdown");
    console.log(notiDropdown);
    if (notiDropdown.classList.contains("show2")) {
      notiDropdown.classList.remove("show2");
    }
  }
};

// new DataTable('.table');
$(".table").dataTable({
  oLanguage: {
    sSearchPlaceholder: "Search User by ID / Email / Phone Number",
  },
  layout: {
    topStart: {
      pageLength: {
        menu: [5, 10, 25, 50],
      },
    },
  },
  pageLength: 10,
});

const firstLayout = $(".dt-layout-row:first");
const lastLayout = $(".dt-layout-row:last");

lastLayout.append(function () {
  return firstLayout.children(".dt-layout-start");
});

// set item number of table
const options = document.querySelectorAll(".mainContent .dt-input option");
const labels = ["5 per page", "10 per page", "25 per page", "50 per page"];

options.forEach((option, index) => {
  option.innerHTML = labels[index];
});

// Button Save: hiện thông báo
document.querySelector('.btn-topElement').addEventListener('click', function() {
  var notification = document.querySelector('.noti-success');
  var progressBar = document.querySelector('.progress-bar');
  
  // Hiển thị thông báo
  notification.classList.remove('hidden');
  notification.classList.add('show');
  
  // Reset thanh tiến độ (đặt lại chiều rộng thành 100%)
  progressBar.style.width = '0%';
  
  // Tạm thời xóa transition để reset hiệu ứng
  progressBar.style.transition = 'none';
  
  // Sau 10ms, chúng ta thêm lại transition và bắt đầu giảm thanh tiến độ
  setTimeout(function() {
      // Cập nhật lại transition và bắt đầu quá trình giảm thanh tiến độ
      progressBar.style.transition = 'width 3s linear';
      progressBar.style.width = '100%';
  }, 10);

  // Hiển thị animation xuất hiện
  notification.style.animation = 'none'; // Reset animation
  notification.offsetHeight;  // Triggers a reflow, flushing the CSS changes
  notification.style.animation = 'slideIn 0.5s ease-out forwards'; // Thêm lại animation xuất hiện
  
  // Ẩn thông báo sau 3 giây
  setTimeout(function() {
      notification.style.animation = 'slideOut 0.5s ease-out forwards';
  }, 3000);
});


