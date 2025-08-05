const ordersContainer = document.getElementById('ordersContainer');
const orders = JSON.parse(localStorage.getItem('orders')) || [];

if (orders.length === 0) {
  ordersContainer.innerHTML = `
    <div class="p-6 text-center bg-gray-800 rounded-lg border border-gray-700">
      <p class="text-gray-400 text-lg"">You have no previous orders.</p>
    </div>
  `;
} else {
  orders.forEach(order => {
    const div = document.createElement('div');
    div.className = "p-6 bg-gray-800 rounded-lg border border-gray-700";

    div.innerHTML = `
      <div class="flex justify-between items-center mb-3">
        <h2 class="font-semibold text-lg text-teal-400">Order #${order.id}</h2>
        <span class="bg-blue-600 text-white px-3 py-1 rounded-full text-xs">${order.date}</span>
      </div>

      <ul class="list-disc pl-6 mb-4 text-gray-300">
        ${order.items.map(i => `
          <li class="mb-1">
            <span class="font-medium text-white">${i.name}</span> (x${i.quantity}) 
            - <span class="text-teal-400 font-semibold">₹${i.price}</span>
          </li>`).join('')}
      </ul>

      <div class="flex justify-between items-center">
        <p class="font-bold text-lg text-white">Total: ₹${order.total}</p>
        <span class="bg-green-600 text-white px-3 py-1 rounded-full text-xs">Delivered</span>
      </div>
    `;
    ordersContainer.appendChild(div);
  });
}
