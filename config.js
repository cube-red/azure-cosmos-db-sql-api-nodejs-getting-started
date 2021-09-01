// @ts-check

const config = {
  endpoint: "https://cosmosdb111.documents.azure.com:443/",
  key: "<Your Azure Cosmos account key>",
  databaseId: "Tasks",
  containerId: "Items",
  partitionKey: { kind: "Hash", paths: ["/category"] }
  
};

module.exports = config;
