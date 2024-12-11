pub fn add(left: usize, right: usize) -> usize {
    left + right
}

#[cfg(test)]
mod tests {

    #[test]
    fn it_works() {
        let fixed_arr = [1,2,3];
        let mut arr = Vec::from(fixed_arr);
        // add item
        arr.push(3);
        assert_eq!(arr.len(), 4);
    }
}