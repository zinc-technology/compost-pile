const { Before, After } = require("cucumber");
const axios = require("axios").default;
const { Builder } = require("selenium-webdriver");

/* Encapsulates responsibility for interacting with the
 * API server for Node or Browser JavaScript clients.
 *
 * Uses `Axios` under the covers for high-quality
 * request/response oriented API calls
 *
 * @see {@link https://github.com/axios/axios } Axios' documentation
 */
class ApiClient {
  /*
   * @param {string} axiosConfig.baseURL - API endpoint for the serice
   * @param {int} axiosConfig.timeout
   */
  constructor({ baseURL, timeout }) {
    this.axios = axios.create({
      baseURL,
      headers: { Accept: "application/json" },
      timeout,
    });
  }

  /*
   * @param {CompostPile} compostPile
   * @return {Promise<AxiosResponse<any>>}
   */
  createCompostPile(compostPile) {
    return this.axios
      .post("/compost_piles/", { compostPile })
      .then((response) => response.data)
      .catch((reason) => console.error(reason.response.data));
  }

  /*
   * Retrieves a compost pile
   * @param {CompostPile} compostPile
   * @param {string} compostPile.id
   * @return {Promise<AxiosResponse<any>>}
   */
  getCompostPile({ id }) {
    return this.axios.get(`/compost_piles/${id}`)
      .then((response) => response.data)
      .catch((reason) => console.error(reason.response.data));
  }
}

/*
 * Attaches `this.browser` and `this.api` to the
 * Cucumber World using Cucumber Before and After Hooks
 * @see {@link https://github.com/cucumber/cucumber-js/blob/master/docs/support_files/hooks.md } Cucumber Hooks Documentation
 * @see {@link https://github.com/cucumber/cucumber-js/blob/master/docs/support_files/world.md } Cucumber World Documentation
 */
const buildAndAttachDrivers = async function () {
  this.browser = await new Builder().forBrowser("firefox").build();
  this.api = new ApiClient({ baseURL: "http://localhost:3000/", timeout: 100 });
};

/*
 * Ensure the Selenium browser is stopped after each scenario
 * Otherwise it can stay open forever, or have multiple browsers
 * running against it.
 */
const teardownDrivers = function () {
  return this.browser.quit();
};

Before(buildAndAttachDrivers);
After(teardownDrivers);
