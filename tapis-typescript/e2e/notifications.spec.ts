// Load e2e environment variables into process.env
require("dotenv").config({ path: "e2e.env" });

import "mocha";
import { before } from "mocha";
import { Jobs, Notifications } from "../src";
import { getToken, checkJsonError } from "./utils";
import { expect } from "chai";
import fetch from "cross-fetch";

describe("Notifications e2e tests", async () => {
  let configuration: Notifications.Configuration;

  before(async () => {
    const token = await getToken();
    // Tenants configuration for all tests
    const configurationParameters: Notifications.ConfigurationParameters = {
      basePath: process.env.TEST_TENANT,
      headers: {
        "X-Tapis-Token": token.access_token,
      },
      fetchApi: fetch,
    };
    configuration = new Notifications.Configuration(configurationParameters);
  });

  it("should retrieve a notification listing on the test system", async () => {
    try {
      const api: Notifications.SubscriptionsApi =
        new Notifications.SubscriptionsApi(configuration);
      const listNotificationsRequest: Notifications.GetSubscriptionsRequest = {
        ownedBy: process.env.TEST_USER,
      };
      const response: Notifications.RespSubscriptions =
        await api.getSubscriptions(listNotificationsRequest);
      const subscriptions: Notifications.TapisSubscription[] | undefined =
        response.result;
      expect(subscriptions).not.be.undefined;
      if (subscriptions !== undefined) {
        expect(subscriptions.length).to.be.equal(0);
      }
    } catch (error) {
      checkJsonError(error);
    }
  });
});
