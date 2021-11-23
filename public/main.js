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
    const img_data_url = rustApp.grayscale(data);

    const img_Element = document.getElementById("new-img");
    img_Element.setAttribute('src', img_data_url);
  });

  input.addEventListener("change", () => {
    const file = input.files[0];
    fileReader.readAsDataURL(file);
  });
};

init();
