"use-client";
const email = "koba@gmailcom";
const actionUrlAgent = `mailto:kobachincharauli8@gmail.com?subject=New customer from portfolio&body=Hi, Contact me on this email: ${email}!`;
const actionUrlGmail = `https://mail.google.com/mail/?view=cm&fs=1&to=kobachincharauli5@gmail.com&su=New+Customer+from+portfolio&body=Hi,+contact+me+on+this+email:+${email}`;
//const emailVerifier = `https://api.zerobounce.net/v2/validate?api_key=026944d604b143a78d0892c187f0c872&email=${email}`; -- verifier API

export default function About() {
  return <div className="contact">Contact</div>;
}
