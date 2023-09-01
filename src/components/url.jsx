import "./Section7.jsx";
import React from "react";
import axios from "axios";
let botToken = "";
const chatId = "";
export function sendMessage(message) {
  let base_url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${message}`;

  axios.get(base_url);
}
