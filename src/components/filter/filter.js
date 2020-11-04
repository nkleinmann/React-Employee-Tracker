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
}

export { filter }
