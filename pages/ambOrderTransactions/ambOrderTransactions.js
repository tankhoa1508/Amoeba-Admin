// Transactions courses table
let transactionsCourses = [
    {
      transactionID: "#TR.AGV274",
      userID: "#US.AGV274",
      billingType: "#SU.AGV223",
      amount: "49.000",
      paymentMethod: "Bank Transfers",
      purchasedDate: "01/01/2024",
      confirmedDate: "-",
      status: "Waiting",
      class: "waiting"
    },
    {
      transactionID: "#TR.AGV300",
      userID: "#US.AGV274",
      billingType: "#SU.AGV250",
      amount: "49.000",
      paymentMethod: "Bank Transfers",
      purchasedDate: "01/01/2024",
      confirmedDate: "-",
      status: "Failed",
      class: "failed"
    },
    {
      transactionID: "#TR.AGV274",
      userID: "#US.AGV274",
      billingType: "#SU.AGV223",
      amount: "49.000",
      paymentMethod: "Bank Transfers",
      purchasedDate: "01/01/2024",
      confirmedDate: "-",
      status: "Waiting",
      class: "waiting"
    },
    {
      transactionID: "#TR.AGV300",
      userID: "#US.AGV274",
      billingType: "#SU.AGV250",
      amount: "49.000",
      paymentMethod: "Bank Transfers",
      purchasedDate: "01/01/2024",
      confirmedDate: "-",
      status: "Failed",
      class: "failed"
    },
    {
      transactionID: "#TR.AGV274",
      userID: "#US.AGV274",
      billingType: "#SU.AGV223",
      amount: "49.000",
      paymentMethod: "Bank Transfers",
      purchasedDate: "01/01/2024",
      confirmedDate: "-",
      status: "Waiting",
      class: "waiting"
    },
    {
      transactionID: "#TR.AGV300",
      userID: "#US.AGV274",
      billingType: "#SU.AGV250",
      amount: "49.000",
      paymentMethod: "Bank Transfers",
      purchasedDate: "01/01/2024",
      confirmedDate: "01/01/2024",
      status: "Failed",
      class: "failed"
    },
    {
      transactionID: "#TR.AGV274",
      userID: "#US.AGV274",
      billingType: "#SU.AGV223",
      amount: "49.000",
      paymentMethod: "Bank Transfers",
      purchasedDate: "01/01/2024",
      confirmedDate: "01/01/2024",
      status: "Waiting",
      class: "waiting"
    },
    {
      transactionID: "#TR.AGV300",
      userID: "#US.AGV274",
      billingType: "#SU.AGV250",
      amount: "49.000",
      paymentMethod: "Bank Transfers",
      purchasedDate: "01/01/2024",
      confirmedDate: "01/01/2024",
      status: "Failed",
      class: "failed"
    },
    {
      transactionID: "#TR.AGV274",
      userID: "#US.AGV274",
      billingType: "#SU.AGV223",
      amount: "49.000",
      paymentMethod: "Bank Transfers",
      purchasedDate: "01/01/2024",
      confirmedDate: "01/01/2024",
      status: "Waiting",
      class: "waiting"
    },
    {
      transactionID: "#TR.AGV300",
      userID: "#US.AGV274",
      billingType: "#SU.AGV250",
      amount: "49.000",
      paymentMethod: "Cards",
      purchasedDate: "01/01/2024",
      confirmedDate: "01/01/2024",
      status: "Failed",
      class: "failed"
    },
    {
      transactionID: "#TR.AGV274",
      userID: "#US.AGV274",
      billingType: "#SU.AGV223",
      amount: "49.000",
      paymentMethod: "Cards",
      purchasedDate: "01/01/2024",
      confirmedDate: "01/01/2024",
      status: "Waiting",
      class: "waiting"
    },
    {
      transactionID: "#TR.AGV300",
      userID: "#US.AGV274",
      billingType: "#SU.AGV250",
      amount: "49.000",
      paymentMethod: "Cards",
      purchasedDate: "01/01/2024",
      confirmedDate: "01/01/2024",
      status: "Failed",
      class: "failed"
    },
    {
      transactionID: "#TR.AGV274",
      userID: "#US.AGV274",
      billingType: "#SU.AGV223",
      amount: "49.000",
      paymentMethod: "Cards",
      purchasedDate: "01/01/2024",
      confirmedDate: "01/01/2024",
      status: "Waiting",
      class: "waiting"
    },
    {
      transactionID: "#TR.AGV300",
      userID: "#US.AGV274",
      billingType: "#SU.AGV250",
      amount: "49.000",
      paymentMethod: "Cards",
      purchasedDate: "01/01/2024",
      confirmedDate: "01/01/2024",
      status: "Failed",
      class: "failed"
    },
    {
      transactionID: "#TR.AGV274",
      userID: "#US.AGV274",
      billingType: "#SU.AGV223",
      amount: "49.000",
      paymentMethod: "Cards",
      purchasedDate: "01/01/2024",
      confirmedDate: "01/01/2024",
      status: "Success",
      class: "success"
    },
    {
      transactionID: "#TR.AGV300",
      userID: "#US.AGV274",
      billingType: "#SU.AGV250",
      amount: "49.000",
      paymentMethod: "Cards",
      purchasedDate: "01/01/2024",
      confirmedDate: "01/01/2024",
      status: "Failed",
      class: "failed"
    },
    {
      transactionID: "#TR.AGV274",
      userID: "#US.AGV274",
      billingType: "#SU.AGV223",
      amount: "49.000",
      paymentMethod: "Cards",
      purchasedDate: "01/01/2024",
      confirmedDate: "01/01/2024",
      status: "Success",
      class: "success"
    },
    {
      transactionID: "#TR.AGV300",
      userID: "#US.AGV274",
      billingType: "#SU.AGV250",
      amount: "49.000",
      paymentMethod: "Cards",
      purchasedDate: "01/01/2024",
      confirmedDate: "01/01/2024",
      status: "Failed",
      class: "failed"
    },
    {
      transactionID: "#TR.AGV274",
      userID: "#US.AGV274",
      billingType: "#SU.AGV223",
      amount: "49.000",
      paymentMethod: "Cards",
      purchasedDate: "01/01/2024",
      confirmedDate: "01/01/2024",
      status: "Success",
      class: "success"
    },
    {
      transactionID: "#TR.AGV300",
      userID: "#US.AGV274",
      billingType: "#SU.AGV250",
      amount: "49.000",
      paymentMethod: "Cards",
      purchasedDate: "01/01/2024",
      confirmedDate: "01/01/2024",
      status: "Failed",
      class: "failed"
    },
    {
      transactionID: "#TR.AGV274",
      userID: "#US.AGV274",
      billingType: "#SU.AGV223",
      amount: "49.000",
      paymentMethod: "OnePay",
      purchasedDate: "01/01/2024",
      confirmedDate: "01/01/2024",
      status: "Success",
      class: "success"
    },
    {
      transactionID: "#TR.AGV300",
      userID: "#US.AGV274",
      billingType: "#SU.AGV250",
      amount: "49.000",
      paymentMethod: "OnePay",
      purchasedDate: "01/01/2024",
      confirmedDate: "01/01/2024",
      status: "Failed",
      class: "failed"
    },
    {
      transactionID: "#TR.AGV274",
      userID: "#US.AGV274",
      billingType: "#SU.AGV223",
      amount: "49.000",
      paymentMethod: "OnePay",
      purchasedDate: "01/01/2024",
      confirmedDate: "01/01/2024",
      status: "Success",
      class: "success"
    },
    {
      transactionID: "#TR.AGV300",
      userID: "#US.AGV274",
      billingType: "#SU.AGV250",
      amount: "49.000",
      paymentMethod: "OnePay",
      purchasedDate: "01/01/2024",
      confirmedDate: "01/01/2024",
      status: "Failed",
      class: "failed"
    },
    {
      transactionID: "#TR.AGV274",
      userID: "#US.AGV274",
      billingType: "#SU.AGV223",
      amount: "49.000",
      paymentMethod: "OnePay",
      purchasedDate: "01/01/2024",
      confirmedDate: "01/01/2024",
      status: "Success",
      class: "success"
    },
    {
      transactionID: "#TR.AGV300",
      userID: "#US.AGV274",
      billingType: "#SU.AGV250",
      amount: "49.000",
      paymentMethod: "OnePay",
      purchasedDate: "01/01/2024",
      confirmedDate: "01/01/2024",
      status: "Failed",
      class: "failed"
    },
    {
      transactionID: "#TR.AGV274",
      userID: "#US.AGV274",
      billingType: "#SU.AGV223",
      amount: "49.000",
      paymentMethod: "OnePay",
      purchasedDate: "01/01/2024",
      confirmedDate: "01/01/2024",
      status: "Success",
      class: "success"
    },
    {
      transactionID: "#TR.AGV300",
      userID: "#US.AGV274",
      billingType: "#SU.AGV250",
      amount: "49.000",
      paymentMethod: "OnePay",
      purchasedDate: "01/01/2024",
      confirmedDate: "01/01/2024",
      status: "Failed",
      class: "failed"
    },
    {
      transactionID: "#TR.AGV274",
      userID: "#US.AGV274",
      billingType: "#SU.AGV223",
      amount: "49.000",
      paymentMethod: "OnePay",
      purchasedDate: "01/01/2024",
      confirmedDate: "01/01/2024",
      status: "Success",
      class: "success"
    },
    {
      transactionID: "#TR.AGV300",
      userID: "#US.AGV274",
      billingType: "#SU.AGV250",
      amount: "49.000",
      paymentMethod: "OnePay",
      purchasedDate: "01/01/2024",
      confirmedDate: "01/01/2024",
      status: "Failed",
      class: "failed"
    },
    {
      transactionID: "#TR.AGV274",
      userID: "#US.AGV274",
      billingType: "#SU.AGV223",
      amount: "49.000",
      paymentMethod: "OnePay",
      purchasedDate: "01/01/2024",
      confirmedDate: "01/01/2024",
      status: "Success",
      class: "success"
    },
    {
      transactionID: "#TR.AGV300",
      userID: "#US.AGV274",
      billingType: "#SU.AGV250",
      amount: "49.000",
      paymentMethod: "OnePay",
      purchasedDate: "01/01/2024",
      confirmedDate: "01/01/2024",
      status: "Failed",
      class: "failed"
    },
    {
      transactionID: "#TR.AGV274",
      userID: "#US.AGV274",
      billingType: "#SU.AGV223",
      amount: "49.000",
      paymentMethod: "OnePay",
      purchasedDate: "01/01/2024",
      confirmedDate: "01/01/2024",
      status: "Success",
      class: "success"
    },
    {
      transactionID: "#TR.AGV300",
      userID: "#US.AGV274",
      billingType: "#SU.AGV250",
      amount: "49.000",
      paymentMethod: "OnePay",
      purchasedDate: "01/01/2024",
      confirmedDate: "01/01/2024",
      status: "Failed",
      class: "failed"
    },
    {
      transactionID: "#TR.AGV274",
      userID: "#US.AGV274",
      billingType: "#SU.AGV223",
      amount: "49.000",
      paymentMethod: "OnePay",
      purchasedDate: "01/01/2024",
      confirmedDate: "01/01/2024",
      status: "Success",
      class: "success"
    },
    {
      transactionID: "#TR.AGV300",
      userID: "#US.AGV274",
      billingType: "#SU.AGV250",
      amount: "49.000",
      paymentMethod: "OnePay",
      purchasedDate: "01/01/2024",
      confirmedDate: "01/01/2024",
      status: "Expired",
      class: "expired"
    },
    {
      transactionID: "#TR.AGV274",
      userID: "#US.AGV274",
      billingType: "#SU.AGV223",
      amount: "49.000",
      paymentMethod: "OnePay",
      purchasedDate: "01/01/2024",
      confirmedDate: "01/01/2024",
      status: "Success",
      class: "success"
    },
    {
      transactionID: "#TR.AGV300",
      userID: "#US.AGV274",
      billingType: "#SU.AGV250",
      amount: "49.000",
      paymentMethod: "OnePay",
      purchasedDate: "01/01/2024",
      confirmedDate: "01/01/2024",
      status: "Expired",
      class: "expired"
    },
    {
      transactionID: "#TR.AGV274",
      userID: "#US.AGV274",
      billingType: "#SU.AGV223",
      amount: "49.000",
      paymentMethod: "Bank Transfers",
      purchasedDate: "01/01/2024",
      confirmedDate: "01/01/2024",
      status: "Success",
      class: "success"
    },
    {
      transactionID: "#TR.AGV300",
      userID: "#US.AGV274",
      billingType: "#SU.AGV250",
      amount: "49.000",
      paymentMethod: "Bank Transfers",
      purchasedDate: "01/01/2024",
      confirmedDate: "01/01/2024",
      status: "Expired",
      class: "expired"
    },
    {
      transactionID: "#TR.AGV274",
      userID: "#US.AGV274",
      billingType: "#SU.AGV223",
      amount: "49.000",
      paymentMethod: "Bank Transfers",
      purchasedDate: "01/01/2024",
      confirmedDate: "01/01/2024",
      status: "Success",
      class: "success"
    },
    {
      transactionID: "#TR.AGV300",
      userID: "#US.AGV274",
      billingType: "#SU.AGV250",
      amount: "49.000",
      paymentMethod: "Bank Transfers",
      purchasedDate: "01/01/2024",
      confirmedDate: "01/01/2024",
      status: "Expired",
      class: "expired"
    },
    {
      transactionID: "#TR.AGV274",
      userID: "#US.AGV274",
      billingType: "#SU.AGV223",
      amount: "49.000",
      paymentMethod: "Bank Transfers",
      purchasedDate: "01/01/2024",
      confirmedDate: "01/01/2024",
      status: "Success",
      class: "success"
    },
    {
      transactionID: "#TR.AGV300",
      userID: "#US.AGV274",
      billingType: "#SU.AGV250",
      amount: "49.000",
      paymentMethod: "Bank Transfers",
      purchasedDate: "01/01/2024",
      confirmedDate: "01/01/2024",
      status: "Expired",
      class: "expired"
    },
    {
      transactionID: "#TR.AGV274",
      userID: "#US.AGV274",
      billingType: "#SU.AGV223",
      amount: "49.000",
      paymentMethod: "Bank Transfers",
      purchasedDate: "01/01/2024",
      confirmedDate: "01/01/2024",
      status: "Success",
      class: "success"
    },
    {
      transactionID: "#TR.AGV300",
      userID: "#US.AGV274",
      billingType: "#SU.AGV250",
      amount: "49.000",
      paymentMethod: "Bank Transfers",
      purchasedDate: "01/01/2024",
      confirmedDate: "01/01/2024",
      status: "Expired",
      class: "expired"
    },
    {
      transactionID: "#TR.AGV274",
      userID: "#US.AGV274",
      billingType: "#SU.AGV223",
      amount: "49.000",
      paymentMethod: "Bank Transfers",
      purchasedDate: "01/01/2024",
      confirmedDate: "01/01/2024",
      status: "Success",
      class: "success"
    },
    {
      transactionID: "#TR.AGV300",
      userID: "#US.AGV274",
      billingType: "#SU.AGV250",
      amount: "49.000",
      paymentMethod: "Bank Transfers",
      purchasedDate: "01/01/2024",
      confirmedDate: "01/01/2024",
      status: "Expired",
      class: "expired"
    },
    {
      transactionID: "#TR.AGV274",
      userID: "#US.AGV274",
      billingType: "#SU.AGV223",
      amount: "49.000",
      paymentMethod: "Bank Transfers",
      purchasedDate: "01/01/2024",
      confirmedDate: "01/01/2024",
      status: "Success",
      class: "success"
    },
    {
      transactionID: "#TR.AGV300",
      userID: "#US.AGV274",
      billingType: "#SU.AGV250",
      amount: "49.000",
      paymentMethod: "Bank Transfers",
      purchasedDate: "01/01/2024",
      confirmedDate: "01/01/2024",
      status: "Expired",
      class: "expired"
    },
    {
      transactionID: "#TR.AGV274",
      userID: "#US.AGV274",
      billingType: "#SU.AGV223",
      amount: "49.000",
      paymentMethod: "Bank Transfers",
      purchasedDate: "01/01/2024",
      confirmedDate: "01/01/2024",
      status: "Success",
      class: "success"
    },
    {
      transactionID: "#TR.AGV300",
      userID: "#US.AGV274",
      billingType: "#SU.AGV250",
      amount: "49.000",
      paymentMethod: "Bank Transfers",
      purchasedDate: "01/01/2024",
      confirmedDate: "01/01/2024",
      status: "Failed",
      class: "failed"
    },
    {
      transactionID: "#TR.AGV274",
      userID: "#US.AGV274",
      billingType: "#SU.AGV223",
      amount: "49.000",
      paymentMethod: "Bank Transfers",
      purchasedDate: "01/01/2024",
      confirmedDate: "01/01/2024",
      status: "Success",
      class: "success"
    },
    {
      transactionID: "#TR.AGV300",
      userID: "#US.AGV274",
      billingType: "#SU.AGV250",
      amount: "49.000",
      paymentMethod: "Bank Transfers",
      purchasedDate: "01/01/2024",
      confirmedDate: "01/01/2024",
      status: "Failed",
      class: "failed"
    },
    {
      transactionID: "#TR.AGV274",
      userID: "#US.AGV274",
      billingType: "#SU.AGV223",
      amount: "49.000",
      paymentMethod: "Bank Transfers",
      purchasedDate: "01/01/2024",
      confirmedDate: "01/01/2024",
      status: "Success",
      class: "success"
    },
    {
      transactionID: "#TR.AGV300",
      userID: "#US.AGV274",
      billingType: "#SU.AGV250",
      amount: "49.000",
      paymentMethod: "Bank Transfers",
      purchasedDate: "01/01/2024",
      confirmedDate: "01/01/2024",
      status: "Failed",
      class: "failed"
    }
  ]

// Transactions courses table
const _tbodyTransactions = $("tbody.transactions");
const transactionsList = transactionsCourses.map(function (item) {
  _tbodyTransactions.append(
    `
      <tr>
          <td class="fw-bold">
            <a href="./ambOrderTransactionsDetail.html" class="text-dark">
              ${item.transactionID}
            </a>
          </td>
          <td>
            <a href="./ambOrderTransactionsDetail.html" class="text-dark">
              ${item.userID}
            </a>
          </td>
          <td>
            <a href="./ambOrderTransactionsDetail.html" class="text-dark">
              Subscription <span class="fw-bold">${item.billingType}</span>
            </a>
          </td>
          <td>
            <a href="./ambOrderTransactionsDetail.html" class="text-dark">
              <span class="fw-bold" style="color: #ED1C24;">${item.amount}</span>đ
            </a>
          </td>
          <td>
            <a href="./ambOrderTransactionsDetail.html" class="text-dark">
              ${item.paymentMethod}
            </a>
          </td>
          <td>
            <a href="./ambOrderTransactionsDetail.html" class="text-dark">
              ${item.purchasedDate}
            </a>
          </td>
          <td>
            <a href="./ambOrderTransactionsDetail.html" class="text-dark">
              ${item.confirmedDate}
            </a>
          </td>
          <td>
            <a href="./ambOrderTransactionsDetail.html"  class="${item.class}">
              ${item.status}
            </a>
          </td>
      </tr>`
  );
});