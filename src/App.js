import "./styles.css";
// import Email from "smtpjs";

export default function App() {
  function sendEmailFnc(event) {
    event.preventDefault();
    console.log("Hi there, user!");
    Email.send({
      Host: "smtp.elasticemail.com",
      Username: "Sudhakarsn15@gmail.com",
      Password: "0901EABCF753076AB90DCB88DCDFCB078880",
      To: "sudhakarsn15@gmail.com",
      From: "Sudhakarsn15@gmail.com",
      Subject: "This is the subject",
      Body: "And this is the body"
    }).then((message) => alert(message));
  }

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <button onClick={sendEmailFnc}>Click to send Email</button>
      HTML
      <div id="capture">
        <h4 style={{ color: "#000;" }}>Hello world!</h4>
      </div>
    </div>
  );
}
