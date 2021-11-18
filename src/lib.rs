use wasm_bindgen::prelude::wasm_bindgen;
use web_sys::console::log_1 as j_log;

#[wasm_bindgen]
pub fn grayscale(encoded_file: &str){
    // let mut file = File::open(encoded_file).unwrap();
    // let mut contents = String::new();
    // file.read_to_string(&mut contents).unwrap();
    // let mut encoded_image = Image::new(contents);
    // encoded_image.grayscale();
    // encoded_image.save_to_file(encoded_file);

    j_log(&encoded_file.into());

}