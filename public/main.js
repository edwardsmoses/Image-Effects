const init = async () => {

  let rustApp = null;

  try {
    rustApp = await import("../pkg")
  } catch (error) {
    console.error(error);
    return;
  }

  console.log(rustApp);

  const input = document.getElementById("upload");

  const fileReader = new FileReader();
  fileReader.addEventListener("load", () => {
    const data = fileReader.result.replace(/^data:image\/(png|jpeg|jpg);base64,/, "");
    rustApp.grayscale(data);
  });

  input.addEventListener("change", () => {
    const file = input.files[0];
    fileReader.readAsDataURL(file);
  });
};

init();
