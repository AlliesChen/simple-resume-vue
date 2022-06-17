const _userInfo = {
  general: {
    name: "",
    email: "",
    phone: "",
  },
  education: {
    school: "",
    major: "",
    degree: "",
    since: "",
    end: ""
  },
  job: {
    company: "",
    position: "",
    description: "",
    since: "",
    end: "",
  },
};

const VALIDATION = Object.freeze({
  TEXT: {
    format: "[^-0-9._!&\x22`'#%,:;<>=@{}~$()*+/\\?\\x5B\\x5D^|]+",
    errMsg: "Please using words and space only",
  },
  EMAIL: {
    format: "[^@ \t\r\n]+@[^@ \t\r\n]+\\.[^@ \t\r\n]+",
    // errMsg: use browser default message
  },
  NUMBER: {
    format: "[0-9]+",
    errMsg: "Please use numbers only",
  },
});

function checkLocal() {
  return localStorage.getItem("appData");
}

function storeLocal(data) {
  const { to, ...items } = data
  if (_userInfo[to]) {
    _userInfo[to] = items
  } else {
    console.log("the section does not exist")
  }
  localStorage.setItem("appData", JSON.stringify(_userInfo));
  return localStorage.getItem("appData");
}

const appData = () => {
  const res = checkLocal()
  if (res) {
    const data = JSON.parse(res)
    return data
  } else {
    localStorage.setItem("appData", JSON.stringify(_userInfo));
    return appData()
  }
}

export { appData, VALIDATION, storeLocal };
