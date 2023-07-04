// TODO: Detect user language
const locale = "en-US";

// TODO: Detect user currency/Allow currency selection (usd | eur)
const regionCurrency = "usd";

export function formatPrice(variant) {
  const price = variant.prices.find(
    (price) => price.currency_code == regionCurrency
  );
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: regionCurrency,
  }).format(price.amount / 100);
}
