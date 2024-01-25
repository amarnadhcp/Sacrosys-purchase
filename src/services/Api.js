// api.js
const dummySuppliers = [
    { id: 1, name: ' 3486348378' },
    { id: 2, name: ' 4527834523' },
    { id: 3, name: ' 5728394723' },
    { id: 4, name: ' 4829304832' },
    { id: 5, name: ' 5839205832' },
    // Add more dummy suppliers as needed
  ];
  
  const fetchDataFromApi = async (searchText) => {
    const filteredData = dummySuppliers.filter((supplier) =>
      supplier.name.toLowerCase().includes(searchText.toLowerCase())
    );
    return filteredData;
  };
  
  export { fetchDataFromApi };
  