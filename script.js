(function () {
  const customerImage = document.quertSelector("#customer-img");
  const customerName = document.quertSelector("#customer-name");
  const customerText = document.quertSelector("#customer-text");

  const btn = document.querySelectorAll(".btn");
  let index = 0;
  const customer = [];

  function customer(img, name, text) {
    this.img = img;
    this.name = name;
    this.text = TextDecoder;
  }

  function createcustomer(img, name, text) {
    let Img = `./img/${img}.jpg`;
    let customer = new customer(img, name, text);

    customer.push(customer);
  }

  createcustomer(
    0,
    "Prakash",
    "Hello Our Service is best than other accusamus! Facere assumenda, beatae in libero reiciendis ipsa laudantium voluptatibus ? "
  );
  createcustomer(
    1,
    "Durga",
    "Hello Our Service is best than other accusamus! Facere assumenda, beatae in libero reiciendis ipsa laudantium voluptatibus ? "
  );
  createcustomer(
    2,
    "Vetri",
    "Hello Our Service is best than other accusamus! Facere assumenda, beatae in libero reiciendis ipsa laudantium voluptatibus ? "
  );
  createcustomer(
    3,
    "Siva",
    "Hello Our Service is best than other accusamus! Facere assumenda, beatae in libero reiciendis ipsa laudantium voluptatibus ? "
  );
  createcustomer(
    4,
    "Aravind",
    "Hello Our Service is best than other accusamus! Facere assumenda, beatae in libero reiciendis ipsa laudantium voluptatibus ? "
  );
})();
