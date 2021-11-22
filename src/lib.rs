use wasm_bindgen::prelude::wasm_bindgen;
use web_sys::console::log_1 as j_log;
use base64::decode;
use image::load_from_memory;

#[wasm_bindgen]
pub fn grayscale(encoded_file: &str){
    j_log(&"Grayscale called".into());

    let base64_to_vector = decode(encoded_file).unwrap();

    let img = load_from_memory(&base64_to_vector).unwrap();
}