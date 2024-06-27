import { createClient } from "redis";
import { print } from "redis";

const client = createClient();

client.connect();

client.on("error", (error) =>
  console.log(`Redis client not connected to the server: ${error.toString()}`)
);

client.on("connect", () => console.log("Redis client connected to the server"));

function setNewSchool(schoolName, value) {
  client.set(schoolName, value, print);
}

async function displaySchoolValue(schoolName) {
  const value = await client.get(schoolName);
  console.log(value);
}

displaySchoolValue("Holberton");
setNewSchool("HolbertonSanFrancisco", "100");
displaySchoolValue("HolbertonSanFrancisco");
