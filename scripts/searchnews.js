let topNews = async (query) => {
  try {
    let res = await fetch(
      `https://masai-mock-api.herokuapp.com/news?q=${query}`
    );
    let data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export { topNews};
