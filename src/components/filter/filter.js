const filter = {

    // Check employee array to find item matching in search
    searchEmployees: (value, empAr) => {
        let queriedEmployee = empAr.filter((employee) => {
            return employee.first.toLowerCase().includes(value.toLowerCase()) ||
                employee.last.toLowerCase().includes(value.toLowerCase()) ||
                employee.phone.toLowerCase().includes(value.toLowerCase()) ||
                employee.email.toLowerCase().includes(value.toLowerCase())
        })
        return queriedEmployee;
    },

    // // Function to compare values in array and sort (ascending or descending)
    // compareValues: (key, order = "asc") => {
    //     return function compare(a, b) {
    //         const optionA = a[key].toUpperCase();
    //         const optionB = b[key].toUpperCase();

    //         let comparison = 0;
    //         if (optionA > optionB) {
    //             comparison = 1;
    //         } else if (optionA < optionB) {
    //             comparison = -1;
    //         }
    //         return (
    //             (order === "desc") ? (comparison * -1) : comparison
    //         );
    //     };
    // }
}

export { filter }
