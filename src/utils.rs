#[no_mangle]
pub extern "C" fn add(x: f64, y: f64) -> f64 { x + y }

#[no_mangle]
pub extern "C" fn subtract(x: f64, y: f64) -> f64 { x - y }

#[no_mangle]
pub extern "C" fn multiply(x: f64, y: f64) -> f64 { x * y }

#[no_mangle]
pub extern "C" fn divide(x: f64, y: f64) -> f64 { if y == 0f64 { x } else { x / y } }

#[no_mangle]
pub extern "C" fn fibonacci(n: usize) -> i32 {
    if n <= 1 {
        return 0;
    }
    let mut arr = vec![0; n + 1];
    arr[2] = 1;
    for i in 3..(n + 1) {
        arr[i] = arr[(i - 1)] + arr[(i - 2)];
    }
    arr[n]
}