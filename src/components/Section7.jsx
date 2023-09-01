import "../styles/Section7.scss";
import React from "react";
import axios from "axios";

export default function Section7() {
  const [name, setname] = React.useState("");
  const [phone, setPhone] = React.useState(NaN);
  let subjets = ["Matematika", "Ingliz tili", "Kimyo", "Biologiya"];
  const [sub, setSubject] = React.useState("");

  const botToken = "6566811418:AAFDYrV4F0J2YMipuaAZqIU3JYbtd1Aiz4g";
  const chatId = "-909675952";

  const sendMessage = (message) => {
    let base_url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${message}&parse_mode=HTML`;

    axios.get(base_url).then((response) => {
      console.log(response);
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    sendMessage(
      `<b>Ism Familiya</b>:<i>${name}</i>%0A<b>Telefon raqam</b>:<i>${phone}</i>%0A<b>Fan</b>:<i>${sub}</i>`
    );

    setPhone(NaN);
    setname("");
    setSubject("");
  };

  return (
    <div>
      <div className="section7">
        <div className="container text-center">
          <strong className="free1">
            Bepul Darslarga Ro‘yxatdan o‘ting va 25% chegrimaga ega bo‘ling!
          </strong>
          <p className="p-2 mt-3">
            Ma'lumotlaringizni qoldiring va adminstratorlarimiz siz{" "}
          </p>
          <p className="p-5"> bilan bog‘lanishadi.</p>
          <form onSubmit={submitHandler}>
            <div className="f-form">
              <div className=" t-input-block mb-2 me-2 wrapper">
                <input
                  required
                  value={name}
                  onChange={(it) => setname(it.target.value)}
                  type="text"
                  name="name"
                  className="t-input wrapper w-100"
                  placeholder="Familiya va Ism"
                />
              </div>
              <div className="t-input-block mb-2 me-2 wrapper">
                <input
                  value={phone}
                  onChange={(it) => setPhone(it.target.value)}
                  required
                  type="number"
                  name="phone"
                  className="t-input wrapper w-100"
                  placeholder="+998 99 123 45 67"
                />
              </div>
              <div className="t-input-block mb-2">
                <select
                  value={sub}
                  onChange={(it) => setSubject(it.target.value)}
                  required
                  name="fanlar"
                  className="form-select wrapper"
                  aria-label="Default select example"
                >
                  <option value>Kursni tanlang</option>
                  {subjets.map((o) => (
                    <option value={o}>{o}</option>
                  ))}
                </select>
              </div>
              <div className="d-input w-100">
                <button className="btn btn1 btn-primary cursor-pointer">
                  Darslarga yozilish
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
