// Environment configuration for the Weather App
export const config = {
  // OpenWeatherMap API Configuration
  OPENWEATHER_API_KEY: process.env.OPENWEATHER_API_KEY || "your-api-key-here",

  // Redis Configuration
  REDIS_URL: process.env.REDIS_URL || "redis://localhost:6379",

  // Azure Configuration
  AZURE_CLIENT_ID: process.env.AZURE_CLIENT_ID || "",
  AZURE_CLIENT_SECRET: process.env.AZURE_CLIENT_SECRET || "",
  AZURE_SUBSCRIPTION_ID: process.env.AZURE_SUBSCRIPTION_ID || "",
  AZURE_TENANT_ID: process.env.AZURE_TENANT_ID || "",

  // ACR Configuration
  ACR_USERNAME: process.env.ACR_USERNAME || "",
  ACR_PASSWORD: process.env.ACR_PASSWORD || "",
}; 