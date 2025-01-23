"use strict";

module.exports = {
  async pullDataFrom1C() {
    try {
      // example 1C endpoint
      const resp = await fetch("https://1c.example.com/api/products");
      const data = await resp.json();

      console.log(data);

      console.log("Sync with 1C successful");
    } catch (error) {
      console.error("Failed to sync with 1C:", error);
    }
  },
};
