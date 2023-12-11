// licenseCheck.ts

import axios from "axios";

interface LicenseCheckResult {
  valid: boolean;
  message?: string;
}

// Function to check the license with Gumroad
async function checkGumroadLicense(
  licenseKey: string
): Promise<LicenseCheckResult> {
  try {
    const response = await axios.get(
      `https://api.gumroad.com/v2/licenses/verify/${licenseKey}`,
      {
        headers: {
          Authorization: "Bearer YOUR_GUMROAD_ACCESS_TOKEN",
        },
      }
    );

    if (response.data.success) {
      return { valid: true };
    } else {
      return { valid: false, message: "Invalid license key" };
    }
  } catch (error) {
    return { valid: false, message: "Error checking license with Gumroad" };
  }
}

// Function to check the license with LemonSqueezy
async function checkLemonSqueezyLicense(
  licenseKey: string
): Promise<LicenseCheckResult> {
  // Implement LemonSqueezy license check logic here

  // Placeholder logic
  const isValid = licenseKey === "YOUR_LEMONSQUEEZY_LICENSE_KEY";

  return isValid
    ? { valid: true }
    : { valid: false, message: "Invalid license key" };
}

// Function to check the license with Stripe
async function checkStripeLicense(
  licenseKey: string
): Promise<LicenseCheckResult> {
  // Implement Stripe license check logic here

  // Placeholder logic
  const isValid = licenseKey === "YOUR_STRIPE_LICENSE_KEY";

  return isValid
    ? { valid: true }
    : { valid: false, message: "Invalid license key" };
}

// Function to automatically detect the provider based on the license key
function detectLicenseProvider(licenseKey: string): string | null {
  // Add heuristics or patterns to identify the provider based on the license key format
  if (licenseKey.startsWith("GR-")) {
    //70B4551B-662D47F0-9ABCCDE9-31D53ED9
    return "gumroad";
  } else if (licenseKey.startsWith("LS-")) {
    return "lemonsqueezy";
  } else if (licenseKey.startsWith("ST-")) {
    return "stripe";
  } else {
    return null; // Unable to determine the provider
  }
}

// Updated function to check the license with automatic provider detection
export async function checkLicense(
  licenseKey: string
): Promise<LicenseCheckResult> {
  const provider = detectLicenseProvider(licenseKey);

  if (!provider) {
    return {
      valid: false,
      message: "Unable to determine the license provider",
    };
  }

  switch (provider.toLowerCase()) {
    case "gumroad":
      return checkGumroadLicense(licenseKey);
    case "lemonsqueezy":
      return checkLemonSqueezyLicense(licenseKey);
    case "stripe":
      return checkStripeLicense(licenseKey);
    default:
      return { valid: false, message: "Invalid license provider" };
  }
}
