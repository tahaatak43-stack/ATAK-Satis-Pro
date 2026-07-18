const STORAGE_KEYS = {
  customers: "atak-sales-pro-customers",
  products: "atak-sales-pro-products",
  quotes: "atak-sales-pro-quotes",
  activityLog: "atak-sales-pro-activity-log",
  view: "atak-sales-pro-view"
};

const state = {
  customers: [],
  products: [],
  quotes: [],
  activityLog: [],
  activeView: "dashboard",
  quoteDraft: null,
  activeQuoteTab: "new",
  activeQuoteId: null,
  dragQuoteIndex: null
};

const defaultCustomers = [
  { id: crypto.randomUUID(), name: "Ahmet Yılmaz", company: "ATAK Teknoloji", phone: "0555 123 45 67", email: "ahmet@ataktek.com", city: "İstanbul", note: "Kurumsal paket müşterisi" },
  { id: crypto.randomUUID(), name: "Elif Demir", company: "Nord Medya", phone: "0533 444 22 11", email: "elif@nordmedya.com", city: "Ankara", note: "Yazılım satışı hedefleniyor" }
];

const defaultProducts = [];

const elements = {
  navItems: Array.from(document.querySelectorAll(".nav-item")),
  views: Array.from(document.querySelectorAll(".view")),
  sidebar: document.getElementById("sidebar"),
  menuToggle: document.getElementById("menuToggle"),
  customerForm: document.getElementById("customerForm"),
  customerId: document.getElementById("customerId"),
  customerName: document.getElementById("customerName"),
  customerCompany: document.getElementById("customerCompany"),
  customerPhone: document.getElementById("customerPhone"),
  customerWhatsapp: document.getElementById("customerWhatsapp"),
  customerEmail: document.getElementById("customerEmail"),
  customerTaxOffice: document.getElementById("customerTaxOffice"),
  customerTaxNumber: document.getElementById("customerTaxNumber"),
  customerAddress: document.getElementById("customerAddress"),
  customerCity: document.getElementById("customerCity"),
  customerDistrict: document.getElementById("customerDistrict"),
  customerNote: document.getElementById("customerNote"),
  customerTableBody: document.getElementById("customerTableBody"),
  customerCardsBody: document.getElementById("customerCardsBody"),
  customerSearchInput: document.getElementById("customerSearchInput"),
  customerTableViewBtn: document.getElementById("customerTableViewBtn"),
  customerCardViewBtn: document.getElementById("customerCardViewBtn"),
  customerTableWrap: document.getElementById("customerTableWrap"),
  customerCardsWrap: document.getElementById("customerCardsWrap"),
  cancelCustomerBtn: document.getElementById("cancelCustomerBtn"),
  clearCustomerFormBtn: document.getElementById("clearCustomerFormBtn"),
  productForm: document.getElementById("productForm"),
  productId: document.getElementById("productId"),
  productName: document.getElementById("productName"),
  productCode: document.getElementById("productCode"),
  productBarcode: document.getElementById("productBarcode"),
  productBrand: document.getElementById("productBrand"),
  productCategory: document.getElementById("productCategory"),
  productSubCategory: document.getElementById("productSubCategory"),
  productCostPrice: document.getElementById("productCostPrice"),
  productListPrice: document.getElementById("productListPrice"),
  productSalePrice: document.getElementById("productSalePrice"),
  productVatRate: document.getElementById("productVatRate"),
  productStock: document.getElementById("productStock"),
  productUnit: document.getElementById("productUnit"),
  productDescription: document.getElementById("productDescription"),
  productImageInput: document.getElementById("productImageInput"),
  productImagePreview: document.getElementById("productImagePreview"),
  productTableBody: document.getElementById("productTableBody"),
  productCardsBody: document.getElementById("productCardsBody"),
  productSearchInput: document.getElementById("productSearchInput"),
  productTableViewBtn: document.getElementById("productTableViewBtn"),
  productCardViewBtn: document.getElementById("productCardViewBtn"),
  productTableWrap: document.getElementById("productTableWrap"),
  productCardsWrap: document.getElementById("productCardsWrap"),
  productBrandFilter: document.getElementById("productBrandFilter"),
  productCategoryFilter: document.getElementById("productCategoryFilter"),
  productStockFilter: document.getElementById("productStockFilter"),
  productPriceFilter: document.getElementById("productPriceFilter"),
  selectAllProducts: document.getElementById("selectAllProducts"),
  deleteSelectedProductsBtn: document.getElementById("deleteSelectedProductsBtn"),
  productPagination: document.getElementById("productPagination"),
  cancelProductBtn: document.getElementById("cancelProductBtn"),
  clearProductFormBtn: document.getElementById("clearProductFormBtn"),
  todaySalesValue: document.getElementById("todaySalesValue"),
  monthlySalesValue: document.getElementById("monthlySalesValue"),
  customerCount: document.getElementById("customerCount"),
  productCount: document.getElementById("productCount"),
  quoteCount: document.getElementById("quoteCount"),
  revenueValue: document.getElementById("revenueValue"),
  recentActivityList: document.getElementById("recentActivityList"),
  newCustomersList: document.getElementById("newCustomersList"),
  lowStockList: document.getElementById("lowStockList"),
  liveClock: document.getElementById("liveClock"),
  salesChart: document.getElementById("salesChart"),
  globalSearch: document.getElementById("globalSearch"),
  quoteTabs: Array.from(document.querySelectorAll(".quote-tab")),
  quotePanels: Array.from(document.querySelectorAll(".quote-panel")),
  quoteForm: document.getElementById("quoteForm"),
  quoteNumber: document.getElementById("quoteNumber"),
  quoteDate: document.getElementById("quoteDate"),
  quoteValidityDate: document.getElementById("quoteValidityDate"),
  quoteStatus: document.getElementById("quoteStatus"),
  quoteSalesperson: document.getElementById("quoteSalesperson"),
  quoteCustomerSearch: document.getElementById("quoteCustomerSearch"),
  quoteCustomerSelect: document.getElementById("quoteCustomerSelect"),
  quotePhone: document.getElementById("quotePhone"),
  quoteAddress: document.getElementById("quoteAddress"),
  quoteCurrency: document.getElementById("quoteCurrency"),
  quoteProductSearch: document.getElementById("quoteProductSearch"),
  quoteSearchResults: document.getElementById("quoteSearchResults"),
  quoteProductSelect: document.getElementById("quoteProductSelect"),
  quoteProductCode: document.getElementById("quoteProductCode"),
  quoteProductBarcode: document.getElementById("quoteProductBarcode"),
  quoteProductDescription: document.getElementById("quoteProductDescription"),
  quoteProductPreview: document.getElementById("quoteProductPreview"),
  addQuoteProductBtn: document.getElementById("addQuoteProductBtn"),
  quoteItemsList: document.getElementById("quoteItemsList"),
  quoteVatRate: document.getElementById("quoteVatRate"),
  quoteSubtotalValue: document.getElementById("quoteSubtotalValue"),
  quoteVatValue: document.getElementById("quoteVatValue"),
  quoteGrandTotal: document.getElementById("quoteGrandTotal"),
  quoteNotes: document.getElementById("quoteNotes"),
  quoteDeliveryTime: document.getElementById("quoteDeliveryTime"),
  quotePaymentMethod: document.getElementById("quotePaymentMethod"),
  quoteWarranty: document.getElementById("quoteWarranty"),
  quoteAssembly: document.getElementById("quoteAssembly"),
  quoteComments: document.getElementById("quoteComments"),
  saveQuoteBtn: document.getElementById("saveQuoteBtn"),
  saveDraftQuoteBtn: document.getElementById("saveDraftQuoteBtn"),
  duplicateQuoteBtn: document.getElementById("duplicateQuoteBtn"),
  generatePdfBtn: document.getElementById("generatePdfBtn"),
  emailBtn: document.getElementById("emailBtn"),
  whatsappBtn: document.getElementById("whatsappBtn"),
  printBtn: document.getElementById("printBtn"),
  clearQuoteBtn: document.getElementById("clearQuoteBtn"),
  quoteHistoryList: document.getElementById("quoteHistoryList"),
  quoteHistoryTimeline: document.getElementById("quoteHistoryTimeline"),
  quoteDetailCard: document.getElementById("quoteDetailCard")
};

function formatCurrency(value) {
  return new Intl.NumberFormat("tr-TR", { style: "currency", currency: "TRY", maximumFractionDigits: 0 }).format(value);
}

function updateClock() {
  if (elements.liveClock) {
    elements.liveClock.textContent = new Date().toLocaleString("tr-TR", {
      dateStyle: "medium",
      timeStyle: "medium"
    });
  }
}

function addActivity(message, detail, type = "info") {
  state.activityLog.unshift({
    id: crypto.randomUUID(),
    message,
    detail,
    type,
    timestamp: new Date().toLocaleString("tr-TR")
  });
  state.activityLog = state.activityLog.slice(0, 10);
  saveState();
}

function getQuoteMonthKey(quote) {
  const dateValue = quote.createdAtIso || quote.createdAt;
  const parsed = new Date(dateValue);
  if (Number.isNaN(parsed.getTime())) {
    return null;
  }
  return `${parsed.getFullYear()}-${String(parsed.getMonth() + 1).padStart(2, "0")}`;
}

function buildMonthlySalesSeries() {
  const labels = [];
  const values = [];
  const current = new Date();
  for (let index = 5; index >= 0; index -= 1) {
    const monthDate = new Date(current.getFullYear(), current.getMonth() - index, 1);
    const monthKey = `${monthDate.getFullYear()}-${String(monthDate.getMonth() + 1).padStart(2, "0")}`;
    labels.push(monthDate.toLocaleString("tr-TR", { month: "short" }));
    values.push(
      state.quotes.reduce((sum, quote) => {
        return getQuoteMonthKey(quote) === monthKey ? sum + Number(quote.grandTotal || 0) : sum;
      }, 0)
    );
  }
  return { labels, values };
}

let salesChartInstance = null;

function renderSalesChart() {
  if (!elements.salesChart) return;
  if (!window.Chart) {
    elements.salesChart.parentElement.innerHTML = '<div class="empty-state">Chart.js yüklenemedi.</div>';
    return;
  }
  const { labels, values } = buildMonthlySalesSeries();
  if (salesChartInstance) {
    salesChartInstance.destroy();
  }
  salesChartInstance = new Chart(elements.salesChart, {
    type: "bar",
    data: {
      labels,
      datasets: [
        {
          label: "Aylık satış",
          data: values,
          backgroundColor: ["rgba(15, 95, 178, 0.85)", "rgba(47, 130, 219, 0.85)", "rgba(240, 182, 73, 0.9)", "rgba(15, 95, 178, 0.7)", "rgba(47, 130, 219, 0.7)", "rgba(240, 182, 73, 0.7)"],
          borderColor: "#f0b649",
          borderWidth: 1,
          borderRadius: 8,
          maxBarThickness: 36
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            callback(value) {
              return formatCurrency(Number(value));
            }
          }
        }
      }
    }
  });
}

function loadState() {
  try {
    const storedCustomers = JSON.parse(localStorage.getItem(STORAGE_KEYS.customers) || "null");
    const storedProducts = JSON.parse(localStorage.getItem(STORAGE_KEYS.products) || "null");
    const storedQuotes = JSON.parse(localStorage.getItem(STORAGE_KEYS.quotes) || "null");
    const storedActivityLog = JSON.parse(localStorage.getItem(STORAGE_KEYS.activityLog) || "null");
    const storedView = localStorage.getItem(STORAGE_KEYS.view);
    state.customers = Array.isArray(storedCustomers) && storedCustomers.length ? storedCustomers : defaultCustomers;
    state.products = Array.isArray(storedProducts) && storedProducts.length ? storedProducts : defaultProducts;
    state.quotes = Array.isArray(storedQuotes) ? storedQuotes : [];
    state.activityLog = Array.isArray(storedActivityLog) ? storedActivityLog : [];
    state.activeView = storedView || "dashboard";
  } catch (error) {
    state.customers = defaultCustomers;
    state.products = defaultProducts;
    state.quotes = [];
    state.activityLog = [];
    state.activeView = "dashboard";
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEYS.customers, JSON.stringify(state.customers));
  localStorage.setItem(STORAGE_KEYS.products, JSON.stringify(state.products));
  localStorage.setItem(STORAGE_KEYS.quotes, JSON.stringify(state.quotes));
  localStorage.setItem(STORAGE_KEYS.activityLog, JSON.stringify(state.activityLog));
  localStorage.setItem(STORAGE_KEYS.view, state.activeView);
}

function resetCustomerForm() {
  elements.customerForm.reset();
  elements.customerId.value = "";
  elements.customerCompany.focus();
}

function resetProductForm() {
  elements.productForm.reset();
  elements.productId.value = "";
  elements.productStock.value = "";
  elements.productVatRate.value = "20";
  elements.productSalePrice.value = "";
  elements.productImagePreview.innerHTML = "";
  if (elements.productImageInput) {
    elements.productImageInput.value = "";
  }
}

function resetQuoteForm() {
  elements.quoteForm.reset();
  elements.quoteDate.value = new Date().toISOString().slice(0, 10);
  elements.quoteValidityDate.value = new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10);
  elements.quoteStatus.value = "Taslak";
  elements.quoteNumber.value = generateQuoteNumber();
  elements.quoteVatRate.value = "20";
  elements.quoteItemsList.innerHTML = "";
  elements.quoteSubtotalValue.textContent = "₺0";
  elements.quoteVatValue.textContent = "₺0";
  elements.quoteGrandTotal.textContent = "₺0";
  elements.quoteProductSearch.value = "";
  elements.quoteSearchResults.innerHTML = "";
  state.quoteDraft = null;
}

function generateQuoteNumber() {
  const year = new Date().getFullYear();
  const existing = state.quotes.filter((quote) => quote.quoteNumber && quote.quoteNumber.startsWith(`TKL-${year}-`));
  const next = String(existing.length + 1).padStart(6, "0");
  return `TKL-${year}-${next}`;
}

function populateQuoteSelects() {
  elements.quoteCustomerSelect.innerHTML = '<option value="">Müşteri seçin</option>';
  elements.quoteProductSelect.innerHTML = '<option value="">Ürün seçin</option>';

  state.customers.forEach((customer) => {
    const option = document.createElement("option");
    option.value = customer.id;
    option.textContent = customer.name;
    elements.quoteCustomerSelect.appendChild(option);
  });

  state.products.forEach((product) => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = `${product.name} · ${formatCurrency(Number(product.salePrice || product.price || 0))}`;
    elements.quoteProductSelect.appendChild(option);
  });
}

function calculateQuoteTotals() {
  const items = state.quoteDraft?.items || [];
  const subtotal = items.reduce((sum, item) => sum + Number(item.quantity || 0) * Number(item.unitPrice || 0), 0);
  const discountAmount = items.reduce((sum, item) => sum + (Number(item.discountTl || 0) + (Number(item.quantity || 0) * Number(item.unitPrice || 0)) * ((Number(item.discountPercent || 0)) / 100)), 0);
  const taxable = Math.max(0, subtotal - discountAmount);
  const vatRate = Number(state.quoteDraft?.vatRate ?? elements.quoteVatRate?.value ?? 20);
  const vatAmount = taxable * (vatRate / 100);
  const grandTotal = taxable + vatAmount;
  if (state.quoteDraft) {
    state.quoteDraft.vatRate = vatRate;
  }
  elements.quoteSubtotalValue.textContent = formatCurrency(subtotal);
  elements.quoteVatValue.textContent = formatCurrency(vatAmount);
  elements.quoteGrandTotal.textContent = formatCurrency(grandTotal);
  return { subtotal, vatAmount, grandTotal };
}

function renderQuoteItems() {
  const items = state.quoteDraft?.items || [];
  if (!items.length) {
    elements.quoteItemsList.innerHTML = '<div class="empty-state">Henüz ürün eklenmedi.</div>';
    return;
  }

  elements.quoteItemsList.innerHTML = items.map((item, index) => `
    <div class="quote-item-card">
      <div class="quote-item-header">
        <strong>${item.name}</strong>
        <button class="secondary" type="button" data-action="remove-quote-item" data-index="${index}">Kaldır</button>
      </div>
      <div class="quote-item-meta">
        <span>${item.code || "—"}</span>
        <span>${formatCurrency(Number(item.unitPrice || 0))}</span>
      </div>
      <div class="quote-item-controls">
        <label>
          Adet
          <input type="number" min="1" value="${item.quantity || 1}" data-action="update-quote-quantity" data-index="${index}" />
        </label>
        <label>
          İndirim %
          <input type="number" min="0" max="100" value="${item.discountPercent || 0}" data-action="update-quote-discount-percent" data-index="${index}" />
        </label>
        <label>
          İndirim TL
          <input type="number" min="0" step="0.01" value="${item.discountTl || 0}" data-action="update-quote-discount-tl" data-index="${index}" />
        </label>
      </div>
      <div class="quote-item-footer">
        <span>${item.quantity || 1} adet</span>
        <strong>${formatCurrency((Number(item.quantity || 0) * Number(item.unitPrice || 0)) - (Number(item.discountTl || 0) + ((Number(item.quantity || 0) * Number(item.unitPrice || 0)) * (Number(item.discountPercent || 0) / 100))))}</strong>
      </div>
    </div>`).join("");
}

function renderQuoteSearchResults() {
  const query = elements.quoteProductSearch.value.trim().toLowerCase();
  const results = state.products.filter((product) => {
    const haystack = `${product.name} ${product.code || ""} ${product.barcode || ""} ${product.category || ""}`.toLowerCase();
    return haystack.includes(query);
  }).slice(0, 6);
  elements.quoteSearchResults.innerHTML = query && results.length
    ? results.map((product) => `
        <button class="quote-search-result" type="button" data-product-id="${product.id}">
          <span>${product.name}</span>
          <small>${formatCurrency(Number(product.salePrice || product.price || 0))}</small>
        </button>`).join("")
    : "";
}

function addQuoteItem(productId) {
  const product = state.products.find((entry) => entry.id === productId);
  if (!product) return;
  if (!state.quoteDraft) {
    state.quoteDraft = {
      id: crypto.randomUUID(),
      quoteNumber: elements.quoteNumber.value || generateQuoteNumber(),
      quoteDate: elements.quoteDate.value || new Date().toISOString().slice(0, 10),
      validityDate: elements.quoteValidityDate.value || new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10),
      status: elements.quoteStatus.value || "Taslak",
      customerId: elements.quoteCustomerSelect.value,
      phone: elements.quotePhone.value,
      address: elements.quoteAddress.value,
      items: [],
      vatRate: Number(elements.quoteVatRate?.value || 20),
      subtotal: 0,
      vatAmount: 0,
      grandTotal: 0,
      createdAt: new Date().toLocaleString("tr-TR")
    };
  }
  state.quoteDraft.items.push({
    id: crypto.randomUUID(),
    productId: product.id,
    name: product.name,
    code: product.code,
    unitPrice: Number(product.salePrice || product.price || 0),
    quantity: 1,
    discountPercent: 0,
    discountTl: 0,
    vatRate: Number(product.vatRate || 20)
  });
  state.quoteDraft.customerId = elements.quoteCustomerSelect.value || state.quoteDraft.customerId;
  state.quoteDraft.phone = elements.quotePhone.value || state.quoteDraft.phone;
  state.quoteDraft.address = elements.quoteAddress.value || state.quoteDraft.address;
  state.quoteDraft.status = elements.quoteStatus.value || state.quoteDraft.status;
  state.quoteDraft.vatRate = Number(elements.quoteVatRate?.value || state.quoteDraft.vatRate || 20);
  renderQuoteItems();
  calculateQuoteTotals();
}

function syncQuoteDraft() {
  if (!state.quoteDraft) {
    state.quoteDraft = {
      id: crypto.randomUUID(),
      quoteNumber: elements.quoteNumber.value || generateQuoteNumber(),
      quoteDate: elements.quoteDate.value || new Date().toISOString().slice(0, 10),
      validityDate: elements.quoteValidityDate.value || new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10),
      status: elements.quoteStatus.value || "Taslak",
      customerId: elements.quoteCustomerSelect.value,
      phone: elements.quotePhone.value,
      address: elements.quoteAddress.value,
      items: [],
      vatRate: Number(elements.quoteVatRate?.value || 20),
      subtotal: 0,
      vatAmount: 0,
      grandTotal: 0,
      createdAt: new Date().toLocaleString("tr-TR")
    };
  }
  state.quoteDraft.quoteNumber = elements.quoteNumber.value || generateQuoteNumber();
  state.quoteDraft.quoteDate = elements.quoteDate.value || new Date().toISOString().slice(0, 10);
  state.quoteDraft.validityDate = elements.quoteValidityDate.value || new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10);
  state.quoteDraft.status = elements.quoteStatus.value || "Taslak";
  state.quoteDraft.customerId = elements.quoteCustomerSelect.value || state.quoteDraft.customerId;
  state.quoteDraft.phone = elements.quotePhone.value || state.quoteDraft.phone;
  state.quoteDraft.address = elements.quoteAddress.value || state.quoteDraft.address;
  state.quoteDraft.vatRate = Number(elements.quoteVatRate?.value || state.quoteDraft.vatRate || 20);
}

function saveQuote() {
  syncQuoteDraft();
  const customerId = elements.quoteCustomerSelect.value;
  const customer = state.customers.find((entry) => entry.id === customerId);
  const totals = calculateQuoteTotals();
  const quote = {
    ...state.quoteDraft,
    customerId,
    customerName: customer ? customer.name : "—",
    subtotal: totals.subtotal,
    vatAmount: totals.vatAmount,
    grandTotal: totals.grandTotal,
    createdAt: new Date().toLocaleString("tr-TR"),
    createdAtIso: new Date().toISOString(),
    createdAtKey: `${new Date().getDate()}-${new Date().getMonth() + 1}-${new Date().getFullYear()}`
  };

  if (!customer || !quote.items.length) {
    alert("Lütfen müşteri seçin ve en az bir ürün ekleyin.");
    return;
  }

  if (state.quoteDraft?.id) {
    state.quotes = state.quotes.filter((entry) => entry.id !== state.quoteDraft.id);
  }
  state.quotes.unshift(quote);
  addActivity("Teklif kaydedildi", `${customer.name} · ${quote.quoteNumber}`, "quote");
  saveState();
  renderDashboard();
  renderQuoteHistory();
  resetQuoteForm();
  populateQuoteSelects();
  alert("Teklif kaydedildi.");
}

function buildPrintableQuoteHtml(quote) {
  const customer = state.customers.find((entry) => entry.id === quote.customerId);
  const itemRows = (quote.items || []).map((item) => `<tr><td>${item.name}</td><td>${item.quantity}</td><td>${formatCurrency(Number(item.unitPrice || 0))}</td><td>${formatCurrency((Number(item.quantity || 0) * Number(item.unitPrice || 0)) - (Number(item.discountTl || 0) + ((Number(item.quantity || 0) * Number(item.unitPrice || 0)) * (Number(item.discountPercent || 0) / 100))))}</td></tr>`).join("");
  return `<!DOCTYPE html>
  <html lang="tr">
    <head><meta charset="UTF-8" /><title>Teklif</title><style>body{font-family:Arial,sans-serif;padding:24px;color:#10213e;} table{width:100%;border-collapse:collapse;margin-top:12px;} th,td{padding:8px;border-bottom:1px solid #dbeafe;text-align:left;} strong{color:#0d5fb2;}</style></head>
    <body><h2>ATAK Ev Gereçleri Paz. Tic. Ltd. Şti.</h2><p><strong>Teklif No:</strong> ${quote.quoteNumber || "—"}</p><p><strong>Müşteri:</strong> ${customer ? customer.name : "—"}</p><p><strong>Telefon:</strong> ${quote.phone || "—"}</p><p><strong>Adres:</strong> ${quote.address || "—"}</p><table><thead><tr><th>Ürün</th><th>Adet</th><th>Birim Fiyat</th><th>Tutar</th></tr></thead><tbody>${itemRows}</tbody></table><p><strong>Ara Toplam:</strong> ${formatCurrency(Number(quote.subtotal || 0))}</p><p><strong>KDV:</strong> ${formatCurrency(Number(quote.vatAmount || 0))}</p><p><strong>Genel Toplam:</strong> ${formatCurrency(Number(quote.grandTotal || 0))}</p></body></html>`;
}

function exportPdf(quote) {
  const printWindow = window.open("", "_blank", "width=900,height=700");
  if (!printWindow) {
    alert("Açılan pencere engellendi. Lütfen popup engelleyiciyi kapatın.");
    return;
  }
  printWindow.document.write(buildPrintableQuoteHtml(quote));
  printWindow.document.close();
  printWindow.focus();
  setTimeout(() => printWindow.print(), 400);
}

function shareWhatsApp(quote) {
  const customer = state.customers.find((entry) => entry.id === quote.customerId);
  const message = `ATAK Ev Gereçleri Paz. Tic. Ltd. Şti.\nTeklif No: ${quote.quoteNumber}\nMüşteri: ${customer ? customer.name : "—"}\nGenel Toplam: ${formatCurrency(Number(quote.grandTotal || 0))}`;
  const url = `https://wa.me/?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

function renderQuoteHistory() {
  elements.quoteHistoryList.innerHTML = state.quotes.length
    ? state.quotes.map((quote) => `
        <tr>
          <td>${quote.quoteNumber || "—"}</td>
          <td>${quote.customerName || "—"}</td>
          <td>${formatCurrency(Number(quote.grandTotal || 0))}</td>
          <td>${quote.createdAt || "—"}</td>
          <td>${quote.status || "Taslak"}</td>
          <td class="action-cell">
            <button class="action-btn secondary" data-action="copy-quote" data-id="${quote.id}" type="button">Kopyala</button>
            <button class="action-btn" data-action="edit-quote" data-id="${quote.id}" type="button">Düzenle</button>
            <button class="action-btn" data-action="delete-quote" data-id="${quote.id}" type="button">Sil</button>
            <button class="action-btn secondary" data-action="pdf-quote" data-id="${quote.id}" type="button">PDF</button>
            <button class="action-btn secondary" data-action="whatsapp-quote" data-id="${quote.id}" type="button">WA</button>
          </td>
        </tr>`).join("")
    : '<tr><td colspan="6">Henüz teklif kaydedilmedi.</td></tr>';
}

function renderDashboard() {
  const today = new Date();
  const todayKey = `${today.getDate()}-${today.getMonth() + 1}-${today.getFullYear()}`;
  const monthKey = `${today.getMonth() + 1}-${today.getFullYear()}`;

  const todaySales = state.quotes.filter((quote) => (quote.createdAtKey || "") === todayKey).reduce((sum, quote) => sum + Number(quote.grandTotal || 0), 0);
  const monthlySales = state.quotes.filter((quote) => {
    const quoteMonthKey = `${today.getMonth() + 1}-${today.getFullYear()}`;
    return (quote.createdAtKey || "") === quoteMonthKey || getQuoteMonthKey(quote) === `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}`;
  }).reduce((sum, quote) => sum + Number(quote.grandTotal || 0), 0);
  const totalRevenue = state.quotes.reduce((sum, quote) => sum + Number(quote.grandTotal || 0), 0);

  elements.todaySalesValue.textContent = formatCurrency(todaySales);
  elements.monthlySalesValue.textContent = formatCurrency(monthlySales);
  elements.customerCount.textContent = String(state.customers.length);
  elements.productCount.textContent = String(state.products.length);
  elements.quoteCount.textContent = String(state.quotes.length);
  elements.revenueValue.textContent = formatCurrency(totalRevenue);

  const activity = (state.activityLog.length ? state.activityLog : [
    { message: "Sistem hazır", detail: "Dashboard aktif", timestamp: new Date().toLocaleString("tr-TR") }
  ]).slice(0, 10);

  elements.recentActivityList.innerHTML = activity.length
    ? activity.map((item) => `<li><div><strong>${item.message}</strong><div class="card-copy">${item.detail}</div></div><span class="pill">${item.timestamp}</span></li>`).join("")
    : '<li><div><strong>Henüz kayıt yok</strong><div class="card-copy">Müşteri, ürün ve teklif ekleyerek başlayın.</div></div></li>';

  const latestCustomers = state.customers.slice(0, 5);
  elements.newCustomersList.innerHTML = latestCustomers.length
    ? latestCustomers.map((customer) => `<li><div><strong>${customer.name}</strong><div class="card-copy">${customer.company || customer.city || "Yeni müşteri"}</div></div><span class="pill">${customer.phone || "İletişim"}</span></li>`).join("")
    : '<li><div><strong>Henüz müşteri yok</strong><div class="card-copy">Yeni müşteri ekleyin.</div></div></li>';

  const lowStockProducts = state.products.filter((product) => Number(product.stock || 0) <= 5).slice(0, 5);
  elements.lowStockList.innerHTML = lowStockProducts.length
    ? lowStockProducts.map((product) => `<li><div><strong>${product.name}</strong><div class="card-copy">${product.code || "—"}</div></div><span class="pill danger">${product.stock} adet</span></li>`).join("")
    : '<li><div><strong>Düşük stok yok</strong><div class="card-copy">Ürün stokları normal seviyede.</div></div></li>';

  renderSalesChart();
}

function renderCustomers() {
  const query = (elements.customerSearchInput?.value || elements.globalSearch.value || "").trim().toLowerCase();
  const filtered = state.customers.filter((customer) => {
    const haystack = `${customer.name} ${customer.company} ${customer.phone} ${customer.whatsapp || ""} ${customer.email} ${customer.city} ${customer.district} ${customer.address} ${customer.taxOffice} ${customer.taxNumber} ${customer.note}`.toLowerCase();
    return haystack.includes(query);
  });

  elements.customerTableBody.innerHTML = filtered.length
    ? filtered.map((customer) => `
        <tr>
          <td>${customer.company || "—"}</td>
          <td>${customer.name || "—"}</td>
          <td>${customer.phone || "—"}</td>
          <td>${customer.email || "—"}</td>
          <td>${[customer.city, customer.district].filter(Boolean).join(" / ") || "—"}</td>
          <td class="action-cell">
            <button class="action-btn secondary" data-action="edit-customer" data-id="${customer.id}" type="button">Düzenle</button>
            <button class="action-btn" data-action="delete-customer" data-id="${customer.id}" type="button">Sil</button>
            <button class="action-btn" data-action="create-quote-from-customer" data-id="${customer.id}" type="button">Teklif Oluştur</button>
          </td>
        </tr>`).join("")
    : '<tr><td colspan="6">Kayıt bulunamadı.</td></tr>';

  elements.customerCardsBody.innerHTML = filtered.length
    ? filtered.map((customer) => `
        <article class="customer-card">
          <div class="customer-card-header">
            <div>
              <strong>${customer.company || "—"}</strong>
              <div class="card-copy">${customer.name || "—"}</div>
            </div>
            <span class="pill">${customer.city || "—"}</span>
          </div>
          <div class="card-copy">Tel: ${customer.phone || "—"}</div>
          <div class="card-copy">WhatsApp: ${customer.whatsapp || "—"}</div>
          <div class="card-copy">E-posta: ${customer.email || "—"}</div>
          <div class="card-copy">Adres: ${customer.address || "—"}</div>
          <div class="card-copy">Vergi: ${customer.taxOffice || "—"} / ${customer.taxNumber || "—"}</div>
          <div class="customer-card-actions">
            <button class="action-btn secondary" data-action="edit-customer" data-id="${customer.id}" type="button">Düzenle</button>
            <button class="action-btn" data-action="delete-customer" data-id="${customer.id}" type="button">Sil</button>
            <button class="action-btn" data-action="create-quote-from-customer" data-id="${customer.id}" type="button">Teklif Oluştur</button>
          </div>
        </article>`).join("")
    : '<div class="empty-state">Müşteri bulunamadı.</div>';
}

function getProductImageMarkup(product) {
  if (product.image) {
    return `<img src="${product.image}" alt="${product.name}" class="product-thumb" />`;
  }
  return '<div class="product-thumb placeholder">📦</div>';
}

function getFilteredProducts() {
  const query = (elements.productSearchInput?.value || elements.globalSearch?.value || "").trim().toLowerCase();
  const brandFilter = elements.productBrandFilter?.value || "";
  const categoryFilter = elements.productCategoryFilter?.value || "";
  const stockFilter = elements.productStockFilter?.value || "";
  const priceFilter = elements.productPriceFilter?.value || "";

  return state.products.filter((product) => {
    const haystack = `${product.name} ${product.code || ""} ${product.barcode || ""} ${product.category || ""} ${product.brand || ""} ${product.description || ""}`.toLowerCase();
    const matchesQuery = !query || haystack.includes(query);
    const matchesBrand = !brandFilter || (product.brand || "").toLowerCase() === brandFilter.toLowerCase();
    const matchesCategory = !categoryFilter || (product.category || "").toLowerCase() === categoryFilter.toLowerCase();
    const matchesStock = !stockFilter || (stockFilter === "low" && Number(product.stock || 0) < 5) || (stockFilter === "out" && Number(product.stock || 0) === 0);
    const matchesPrice = !priceFilter || (priceFilter === "under10k" && Number(product.salePrice || 0) <= 10000) || (priceFilter === "10k-20k" && Number(product.salePrice || 0) > 10000 && Number(product.salePrice || 0) <= 20000) || (priceFilter === "over20k" && Number(product.salePrice || 0) > 20000);
    return matchesQuery && matchesBrand && matchesCategory && matchesStock && matchesPrice;
  });
}

function renderProductFilters() {
  if (!elements.productBrandFilter || !elements.productCategoryFilter) return;
  const brands = [...new Set(state.products.map((product) => product.brand || ""))].filter(Boolean).sort();
  const categories = [...new Set(state.products.map((product) => product.category || ""))].filter(Boolean).sort();
  const brandOptions = ['<option value="">Tüm markalar</option>', ...brands.map((brand) => `<option value="${brand}">${brand}</option>`)].join("");
  const categoryOptions = ['<option value="">Tüm kategoriler</option>', ...categories.map((category) => `<option value="${category}">${category}</option>`)].join("");
  elements.productBrandFilter.innerHTML = brandOptions;
  elements.productCategoryFilter.innerHTML = categoryOptions;
}

function renderProducts() {
  renderProductFilters();
  const filtered = getFilteredProducts();
  const pageSize = 6;
  const page = 1;
  const visible = filtered.slice(0, pageSize);

  elements.productTableBody.innerHTML = visible.length
    ? visible.map((product) => `
        <tr>
          <td><input type="checkbox" class="product-checkbox" value="${product.id}" /></td>
          <td>
            <div class="inventory-item">
              ${getProductImageMarkup(product)}
              <div>
                <strong>${product.name}</strong>
                <div class="card-copy">${product.code || "—"}</div>
              </div>
            </div>
          </td>
          <td>${product.brand || "—"}</td>
          <td>${product.category || "—"}</td>
          <td>${formatCurrency(Number(product.salePrice || product.price || 0))}</td>
          <td>${Number(product.stock || 0)} ${product.unit || "adet"}</td>
          <td class="action-cell">
            <button class="action-btn secondary" data-action="edit-product" data-id="${product.id}" type="button">Düzenle</button>
            <button class="action-btn" data-action="delete-product" data-id="${product.id}" type="button">Sil</button>
          </td>
        </tr>`).join("")
    : '<tr><td colspan="7">Kayıt bulunamadı.</td></tr>';

  elements.productCardsBody.innerHTML = visible.length
    ? visible.map((product) => `
        <article class="customer-card">
          <div class="customer-card-header">
            <div>
              <strong>${product.name}</strong>
              <div class="card-copy">${product.code || "—"}</div>
            </div>
            <span class="pill ${Number(product.stock || 0) <= 5 ? "danger" : ""}">${Number(product.stock || 0)} ${product.unit || "adet"}</span>
          </div>
          ${getProductImageMarkup(product)}
          <div class="card-copy">Marka: ${product.brand || "—"}</div>
          <div class="card-copy">Kategori: ${product.category || "—"}</div>
          <div class="card-copy">Satış: ${formatCurrency(Number(product.salePrice || product.price || 0))}</div>
          <div class="card-copy">Açıklama: ${product.description || "—"}</div>
          <div class="customer-card-actions">
            <button class="action-btn secondary" data-action="edit-product" data-id="${product.id}" type="button">Düzenle</button>
            <button class="action-btn" data-action="delete-product" data-id="${product.id}" type="button">Sil</button>
          </div>
        </article>`).join("")
    : '<div class="empty-state">Ürün bulunamadı.</div>';

  elements.productPagination.innerHTML = filtered.length
    ? `<span>${Math.min(pageSize, filtered.length)} / ${filtered.length} ürün</span>`
    : "<span>0 ürün</span>";
}

function renderQuoteHistory() {
  elements.quoteHistoryList.innerHTML = state.quotes.length
    ? state.quotes.map((quote) => `
        <tr>
          <td>${quote.customerName || "—"}</td>
          <td>${quote.productName || "—"}</td>
          <td>${formatCurrency(quote.grandTotal || 0)}</td>
          <td>${quote.createdAt || "—"}</td>
        </tr>`).join("")
    : '<tr><td colspan="4">Henüz teklif kaydedilmedi.</td></tr>';
}

function renderActiveView() {
  elements.views.forEach((view) => view.classList.toggle("active", view.id === `${state.activeView}View`));
  elements.navItems.forEach((item) => item.classList.toggle("active", item.dataset.view === state.activeView));
  if (window.innerWidth <= 980) {
    elements.sidebar.classList.remove("open");
  }
}

function handleCustomerSubmit(event) {
  event.preventDefault();
  const id = elements.customerId.value;
  const payload = {
    id: id || crypto.randomUUID(),
    name: elements.customerName.value.trim(),
    company: elements.customerCompany.value.trim(),
    phone: elements.customerPhone.value.trim(),
    whatsapp: elements.customerWhatsapp.value.trim(),
    email: elements.customerEmail.value.trim(),
    taxOffice: elements.customerTaxOffice.value.trim(),
    taxNumber: elements.customerTaxNumber.value.trim(),
    address: elements.customerAddress.value.trim(),
    city: elements.customerCity.value.trim(),
    district: elements.customerDistrict.value.trim(),
    note: elements.customerNote.value.trim()
  };

  const requiredFields = [payload.company, payload.name, payload.phone, payload.email, payload.address, payload.city, payload.district];
  const missing = requiredFields.some((field) => !field);
  if (missing) {
    alert("Firma adı, yetkili kişi, telefon, e-posta, adres, il ve ilçe alanları zorunludur.");
    return;
  }

  if (id) {
    state.customers = state.customers.map((customer) => (customer.id === id ? payload : customer));
    addActivity("Müşteri güncellendi", payload.company || payload.name, "customer");
  } else {
    state.customers.unshift(payload);
    addActivity("Müşteri eklendi", payload.company || payload.name, "customer");
  }

  saveState();
  populateQuoteSelects();
  renderDashboard();
  renderCustomers();
  resetCustomerForm();
}

function handleProductSubmit(event) {
  event.preventDefault();
  const id = elements.productId.value;
  const imageValue = elements.productImagePreview?.dataset.image || "";
  const payload = {
    id: id || crypto.randomUUID(),
    name: elements.productName.value.trim(),
    code: elements.productCode.value.trim(),
    barcode: elements.productBarcode.value.trim(),
    brand: elements.productBrand.value.trim(),
    category: elements.productCategory.value.trim(),
    subCategory: elements.productSubCategory.value.trim(),
    costPrice: Number(elements.productCostPrice.value || 0),
    listPrice: Number(elements.productListPrice.value || 0),
    salePrice: Number(elements.productSalePrice.value || 0),
    vatRate: Number(elements.productVatRate.value || 0),
    stock: Number(elements.productStock.value || 0),
    unit: elements.productUnit.value.trim() || "adet",
    description: elements.productDescription.value.trim(),
    image: imageValue,
    price: Number(elements.productSalePrice.value || elements.productListPrice.value || 0)
  };

  if (!payload.name) return;

  if (id) {
    state.products = state.products.map((product) => (product.id === id ? payload : product));
    addActivity("Ürün güncellendi", payload.name, "product");
  } else {
    state.products.unshift(payload);
    addActivity("Ürün eklendi", payload.name, "product");
  }

  saveState();
  populateQuoteSelects();
  renderDashboard();
  renderProducts();
  resetProductForm();
}

function handleProductImageUpload(event) {
  const file = event.target.files?.[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    const imageData = reader.result;
    elements.productImagePreview.dataset.image = imageData;
    elements.productImagePreview.innerHTML = `<img src="${imageData}" alt="Ürün resmi" class="product-thumb" />`;
  };
  reader.readAsDataURL(file);
}

function toggleProductSelection() {
  const checkboxes = document.querySelectorAll(".product-checkbox");
  checkboxes.forEach((checkbox) => {
    checkbox.checked = elements.selectAllProducts.checked;
  });
}

function deleteSelectedProducts() {
  const selected = Array.from(document.querySelectorAll(".product-checkbox:checked")).map((checkbox) => checkbox.value);
  if (!selected.length) return;
  const confirmed = window.confirm(`${selected.length} ürün silinsin mi?`);
  if (!confirmed) return;
  state.products = state.products.filter((product) => !selected.includes(product.id));
  addActivity("Ürünler silindi", `${selected.length} ürün`, "product");
  saveState();
  populateQuoteSelects();
  renderDashboard();
  renderProducts();
}

function handleQuoteItemInput(event) {
  const input = event.target;
  if (!(input instanceof HTMLInputElement)) return;
  const { action, index } = input.dataset;
  if (!action || index === undefined || !state.quoteDraft?.items?.length) return;
  const items = state.quoteDraft.items;
  const item = items[Number(index)];
  if (!item) return;

  if (action === "update-quote-quantity") {
    item.quantity = Number(input.value || 1);
  } else if (action === "update-quote-discount-percent") {
    item.discountPercent = Number(input.value || 0);
  } else if (action === "update-quote-discount-tl") {
    item.discountTl = Number(input.value || 0);
  }

  state.quoteDraft.items = items;
  renderQuoteItems();
  calculateQuoteTotals();
}

function handleTableAction(event) {
  const button = event.target.closest("button[data-action]");
  if (!button) return;
  const { action, id, index } = button.dataset;

  if (action === "remove-quote-item") {
    const items = state.quoteDraft?.items || [];
    items.splice(Number(index), 1);
    state.quoteDraft.items = items;
    renderQuoteItems();
    calculateQuoteTotals();
    return;
  }

  if (action === "copy-quote") {
    const quote = state.quotes.find((entry) => entry.id === id);
    if (!quote) return;
    state.quoteDraft = { ...quote, id: crypto.randomUUID(), quoteNumber: generateQuoteNumber() };
    elements.quoteNumber.value = state.quoteDraft.quoteNumber;
    elements.quoteDate.value = state.quoteDraft.quoteDate || new Date().toISOString().slice(0, 10);
    elements.quoteValidityDate.value = state.quoteDraft.validityDate || new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10);
    elements.quoteStatus.value = state.quoteDraft.status || "Taslak";
    elements.quoteCustomerSelect.value = state.quoteDraft.customerId || "";
    elements.quotePhone.value = state.quoteDraft.phone || "";
    elements.quoteAddress.value = state.quoteDraft.address || "";
    elements.quoteProductSearch.value = "";
    elements.quoteSearchResults.innerHTML = "";
    renderQuoteItems();
    calculateQuoteTotals();
    state.activeView = "quotes";
    renderActiveView();
    return;
  }

  if (action === "edit-quote") {
    const quote = state.quotes.find((entry) => entry.id === id);
    if (!quote) return;
    state.quoteDraft = { ...quote };
    elements.quoteNumber.value = quote.quoteNumber || generateQuoteNumber();
    elements.quoteDate.value = quote.quoteDate || new Date().toISOString().slice(0, 10);
    elements.quoteValidityDate.value = quote.validityDate || new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10);
    elements.quoteStatus.value = quote.status || "Taslak";
    elements.quoteCustomerSelect.value = quote.customerId || "";
    elements.quotePhone.value = quote.phone || "";
    elements.quoteAddress.value = quote.address || "";
    elements.quoteProductSearch.value = "";
    elements.quoteSearchResults.innerHTML = "";
    renderQuoteItems();
    calculateQuoteTotals();
    state.activeView = "quotes";
    renderActiveView();
    return;
  }

  if (action === "delete-quote") {
    const quote = state.quotes.find((entry) => entry.id === id);
    if (!quote) return;
    const confirmed = window.confirm(`${quote.quoteNumber || "Teklif"} silinsin mi?`);
    if (!confirmed) return;
    state.quotes = state.quotes.filter((entry) => entry.id !== id);
    addActivity("Teklif silindi", quote.quoteNumber || "Teklif", "quote");
    saveState();
    renderDashboard();
    renderQuoteHistory();
    return;
  }

  if (action === "pdf-quote") {
    const quote = state.quotes.find((entry) => entry.id === id);
    if (quote) exportPdf(quote);
    return;
  }

  if (action === "whatsapp-quote") {
    const quote = state.quotes.find((entry) => entry.id === id);
    if (quote) shareWhatsApp(quote);
    return;
  }

  if (action === "edit-customer") {
    const customer = state.customers.find((entry) => entry.id === id);
    if (customer) {
      elements.customerId.value = customer.id;
      elements.customerName.value = customer.name || "";
      elements.customerCompany.value = customer.company || "";
      elements.customerPhone.value = customer.phone || "";
      elements.customerWhatsapp.value = customer.whatsapp || "";
      elements.customerEmail.value = customer.email || "";
      elements.customerTaxOffice.value = customer.taxOffice || "";
      elements.customerTaxNumber.value = customer.taxNumber || "";
      elements.customerAddress.value = customer.address || "";
      elements.customerCity.value = customer.city || "";
      elements.customerDistrict.value = customer.district || "";
      elements.customerNote.value = customer.note || "";
      state.activeView = "customers";
      renderActiveView();
      elements.customerCompany.focus();
    }
  }

  if (action === "delete-customer") {
    const customer = state.customers.find((entry) => entry.id === id);
    if (!customer) return;
    const confirmed = window.confirm(`${customer.company || customer.name} müşterisini silmek istediğinize emin misiniz?`);
    if (!confirmed) return;
    state.customers = state.customers.filter((customerEntry) => customerEntry.id !== id);
    addActivity("Müşteri silindi", customer.company || customer.name, "customer");
    saveState();
    populateQuoteSelects();
    renderDashboard();
    renderCustomers();
  }

  if (action === "create-quote-from-customer") {
    const customer = state.customers.find((entry) => entry.id === id);
    if (customer) {
      state.activeView = "quotes";
      renderActiveView();
      elements.quoteCustomerSelect.value = customer.id;
      handleQuoteCustomerChange();
      elements.quotePhone.value = customer.phone || "";
      elements.quoteAddress.value = `${customer.address || ""} ${customer.city || ""}`.trim();
      elements.quoteDate.value = new Date().toISOString().slice(0, 10);
      elements.quoteValidityDate.value = new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10);
      elements.quoteStatus.value = "Taslak";
      elements.quoteNumber.value = generateQuoteNumber();
      state.quoteDraft = { id: crypto.randomUUID(), quoteNumber: elements.quoteNumber.value, quoteDate: elements.quoteDate.value, validityDate: elements.quoteValidityDate.value, status: elements.quoteStatus.value, customerId: customer.id, phone: elements.quotePhone.value, address: elements.quoteAddress.value, items: [], vatRate: 20, subtotal: 0, vatAmount: 0, grandTotal: 0, createdAt: new Date().toLocaleString("tr-TR") };
      renderQuoteItems();
      calculateQuoteTotals();
      alert("Teklif formu müşteri verileriyle dolduruldu.");
    }
  }

  if (action === "edit-product") {
    const product = state.products.find((entry) => entry.id === id);
    if (product) {
      elements.productId.value = product.id;
      elements.productName.value = product.name || "";
      elements.productCode.value = product.code || "";
      elements.productBarcode.value = product.barcode || "";
      elements.productBrand.value = product.brand || "";
      elements.productCategory.value = product.category || "";
      elements.productSubCategory.value = product.subCategory || "";
      elements.productCostPrice.value = product.costPrice || "";
      elements.productListPrice.value = product.listPrice || "";
      elements.productSalePrice.value = product.salePrice || product.price || "";
      elements.productVatRate.value = product.vatRate || "20";
      elements.productStock.value = product.stock || "";
      elements.productUnit.value = product.unit || "";
      elements.productDescription.value = product.description || "";
      elements.productImagePreview.dataset.image = product.image || "";
      elements.productImagePreview.innerHTML = product.image ? `<img src="${product.image}" alt="${product.name}" class="product-thumb" />` : "";
      state.activeView = "products";
      renderActiveView();
      elements.productName.focus();
    }
  }

  if (action === "delete-product") {
    const product = state.products.find((entry) => entry.id === id);
    const confirmed = window.confirm(`${product ? product.name : "Ürün"} silinsin mi?`);
    if (!confirmed) return;
    state.products = state.products.filter((productEntry) => productEntry.id !== id);
    addActivity("Ürün silindi", product ? product.name : "Ürün", "product");
    saveState();
    populateQuoteSelects();
    renderDashboard();
    renderProducts();
  }
}

function handleQuoteCustomerChange() {
  const customer = state.customers.find((entry) => entry.id === elements.quoteCustomerSelect.value);
  if (customer) {
    elements.quotePhone.value = customer.phone || "";
    elements.quoteAddress.value = `${customer.city || ""}${customer.city && customer.company ? " / " : ""}${customer.company || ""}`.trim();
  }
}

function bindEvents() {
  document.querySelectorAll(".nav-item[data-view]").forEach((item) => {
    item.addEventListener("click", () => {
      state.activeView = item.dataset.view;
      saveState();
      renderActiveView();
    });
  });

  elements.menuToggle.addEventListener("click", () => {
    elements.sidebar.classList.toggle("open");
  });

  elements.customerForm.addEventListener("submit", handleCustomerSubmit);
  elements.productForm.addEventListener("submit", handleProductSubmit);
  elements.cancelCustomerBtn.addEventListener("click", resetCustomerForm);
  elements.cancelProductBtn.addEventListener("click", resetProductForm);
  elements.clearCustomerFormBtn.addEventListener("click", resetCustomerForm);
  elements.clearProductFormBtn.addEventListener("click", resetProductForm);
  elements.customerSearchInput.addEventListener("input", renderCustomers);
  elements.productSearchInput.addEventListener("input", renderProducts);
  [elements.productBrandFilter, elements.productCategoryFilter, elements.productStockFilter, elements.productPriceFilter].forEach((filter) => {
    filter?.addEventListener("change", renderProducts);
  });
  elements.productImageInput.addEventListener("change", handleProductImageUpload);
  elements.selectAllProducts.addEventListener("change", toggleProductSelection);
  elements.deleteSelectedProductsBtn.addEventListener("click", deleteSelectedProducts);
  elements.productTableViewBtn.addEventListener("click", () => {
    elements.productTableWrap.classList.add("active");
    elements.productCardsWrap.classList.remove("active");
    elements.productTableViewBtn.classList.add("active");
    elements.productCardViewBtn.classList.remove("active");
  });
  elements.productCardViewBtn.addEventListener("click", () => {
    elements.productTableWrap.classList.remove("active");
    elements.productCardsWrap.classList.add("active");
    elements.productTableViewBtn.classList.remove("active");
    elements.productCardViewBtn.classList.add("active");
  });
  elements.customerTableViewBtn.addEventListener("click", () => {
    elements.customerTableWrap.classList.add("active");
    elements.customerCardsWrap.classList.remove("active");
    elements.customerTableViewBtn.classList.add("active");
    elements.customerCardViewBtn.classList.remove("active");
  });
  elements.customerCardViewBtn.addEventListener("click", () => {
    elements.customerTableWrap.classList.remove("active");
    elements.customerCardsWrap.classList.add("active");
    elements.customerTableViewBtn.classList.remove("active");
    elements.customerCardViewBtn.classList.add("active");
  });
  elements.globalSearch.addEventListener("input", () => {
    if (state.activeView === "customers") {
      renderCustomers();
    } else if (state.activeView === "products") {
      renderProducts();
    }
  });
  elements.quoteCustomerSelect.addEventListener("change", handleQuoteCustomerChange);
  elements.quoteProductSearch.addEventListener("input", renderQuoteSearchResults);
  document.addEventListener("input", handleQuoteItemInput);
  elements.quoteSearchResults.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-product-id]");
    if (!button) return;
    addQuoteItem(button.dataset.productId);
    elements.quoteProductSearch.value = "";
    renderQuoteSearchResults();
  });
  elements.addQuoteProductBtn.addEventListener("click", () => {
    const selectedProductId = elements.quoteProductSelect.value;
    if (selectedProductId) {
      addQuoteItem(selectedProductId);
    }
  });
  elements.quoteForm.addEventListener("input", () => {
    syncQuoteDraft();
    calculateQuoteTotals();
  });
  elements.saveQuoteBtn.addEventListener("click", saveQuote);
  elements.duplicateQuoteBtn.addEventListener("click", () => {
    if (state.quoteDraft) {
      state.quoteDraft = { ...state.quoteDraft, id: crypto.randomUUID(), quoteNumber: generateQuoteNumber() };
      elements.quoteNumber.value = state.quoteDraft.quoteNumber;
      renderQuoteItems();
      calculateQuoteTotals();
    }
  });
  elements.generatePdfBtn.addEventListener("click", () => {
    const quoteToExport = state.quoteDraft?.id ? state.quotes.find((entry) => entry.id === state.quoteDraft.id) || state.quoteDraft : state.quoteDraft;
    if (quoteToExport) exportPdf(quoteToExport);
  });
  elements.whatsappBtn.addEventListener("click", () => {
    const quoteToShare = state.quoteDraft?.id ? state.quotes.find((entry) => entry.id === state.quoteDraft.id) || state.quoteDraft : state.quoteDraft;
    if (quoteToShare) shareWhatsApp(quoteToShare);
  });
  elements.printBtn.addEventListener("click", () => window.print());
  elements.clearQuoteBtn.addEventListener("click", resetQuoteForm);
  document.addEventListener("click", handleTableAction);
}

function init() {
  loadState();
  bindEvents();
  updateClock();
  setInterval(updateClock, 1000);
  populateQuoteSelects();
  resetQuoteForm();
  renderActiveView();
  renderDashboard();
  renderCustomers();
  renderProducts();
  renderQuoteHistory();
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("./service-worker.js").catch((error) => console.error("SW registration failed", error));
    });
  }
}

document.addEventListener("DOMContentLoaded", init);
