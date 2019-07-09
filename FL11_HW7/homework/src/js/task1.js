let email = prompt("Enter your email");
let user = "user@gmail.com";
let admin = "admin@gmail.com";
let userPassword = "UserPass";
let adminPassword = "AdminPass";
if (email === "" || email === null) {
  alert("Canceled");
} else if (email.length < 6) {
  alert("I don't know any emails having name length less than 6 symbols");
} else if (email === user || email === admin) {
  let password = prompt("Enter your password");
  if (password === "" || password === null) {
    alert("Canceled");
  } else if (
    (email === user && password === userPassword) ||
    (email === admin && password === adminPassword)
  ) {
    let changePass = confirm("Do you want to change your password?");
    if (changePass === null) {
      alert("You have failed the change.");
    } else if (changePass === true) {
      let oldPass = prompt("Enter your old password");
      if (oldPass === null || oldPass === "") {
        alert("Canseled");
      } else if (
        (email === user && oldPass === userPassword) ||
        (email === admin && oldPass === adminPassword)
      ) {
        let newPass = prompt("Enter your new password");
        if (newPass.length < 5) {
          alert("It’s too short password. Sorry.");
        } else {
          repeatPass = prompt("Repeat your new password");
          if (repeatPass === newPass) {
            alert("You have successfully changed your password.");
          } else {
            alert("You wrote the wrong password.");
          }
        }
      } else {
        alert("Wrong password");
      }
    }
  } else {
    alert("Wrong password");
  }
} else {
  alert("I don’t know you");
}
