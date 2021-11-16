const init = () => {
  const input = document.getElementById("upload");

  const fileReader = new FileReader();
  fileReader.addEventListener("load", () => {
    const data = fileReader.result.replace(/^data:image\/(png|jpeg|jpg);base64,/, "");
    console.log(data);
  });

  input.addEventListener("change", () => {
    const file = input.files[0];
    fileReader.readAsDataURL(file);
  });
};

init();
