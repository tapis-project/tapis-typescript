const utils = require("../../utils");

console.log("Notifications API transform");
try {
  // Copy workflows spec  without transforms
  utils.copy("notifications");
} catch (error) {
  console.error(error);
}
