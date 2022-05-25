let File;
File = (input=[]) => {
    let arr = [1, 2, 3];
    for (let i of arr) {
        console.log(i);
    }
    for (let i in arr) {
        console.log(i);
    }
    arr.forEach(function (item, index) {
        console.log(item, index);
    });

    let file = input.files[0];
    let fileSize = 1024 * 1024 * 5;
    let fileType;
    if (file) {
        if (file.size > fileSize) {
            alert("File size must be less than " + fileSize + "MB");
            input.value = "";
            return false;
        }
        if (fileType ==="image") {
            if (
                file.type !=="image/png" &&
                file.type !=="image/jpeg" &&
                file.type !=="image/jpg"
            ) {
                alert("File type must be jpg, png");
                input.value = "";
                return false;
            }
        }
        if (fileType ==="video") {
            if (file.type !=="video/mp4") {
                alert("File type must be mp4");
                input.value = "";
                return false;
            }
        }
        if (fileType ==="audio") {
            if (file.type !=="audio/mp3") {
                alert("File type must be mp3");
                input.value = "";
                return false;
            }
        }
        if (fileType ==="pdf") {
            if (file.type !=="application/pdf") {
                alert("File type must be pdf");
                input.value = "";
                return false;
            }
        }
        if (fileType ==="doc") {
            if (
                file.type !=="application/msword" &&
                file.type !==
                "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            ) {
                alert("File type must be doc");
                input.value = "";
                return false;
            }
        }
        if (fileType ==="excel") {
            if (
                file.type !=="application/vnd.ms-excel" &&
                file.type !==
                "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
            ) {
                alert("File type must be excel");
                input.value = "";
                return false;
            }
        }
        if (fileType ==="powerpoint") {
            if (
                file.type !=="application/vnd.ms-powerpoint" &&
                file.type !==
                "application/vnd.openxmlformats-officedocument.presentationml.presentation"
            ) {
                alert("File type must be powerpoint");
                input.value = "";
                return false;
            }
        }
        if (fileType ==="text") {
            if (file.type !=="text/plain") {
                alert("File type must be text");
                input.value = "";
                return false;
            }
        }
        if (fileType === "zip") {
            if (
                file.type !=="application/zip" &&
                file.type !=="application/x-rar-compressed" &&
                file.type !=="application/x-7z-compressed" &&
                file.type !=="application/x-tar" &&
                file.type !=="application/x-gzip" &&
                file.type !=="application/x-bzip2"
            ) {
                alert("File type must be zip");
                input.value = "";
                return false;
            }
        }
    }
};

var User = {
    name: "1",
    age: 0,
    email: "1",
    password: "1",
    phone: "1",
    address: "1",
};
// loop object User forOf

for (const key in User) {
    if (User.hasOwnProperty(key)) {
        const element = User[key];
        console.log(element);
    }
}

for (let value of Object.values(User)) {
    console.log(value);
}
Object.keys(User).forEach(function (key) {
    console.log(User[key]);
});
// loop array 
let arr = [1, 2, 3];
for (let i of arr) {
    console.log(i);
}
for (let i in arr) {
    console.log(i);
}
arr.forEach(function (item, index) {
    console.log(item, index);
});