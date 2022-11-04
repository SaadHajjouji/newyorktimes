async function fetchSections() {
  let res = "";
  try {
    const baseUrl =
      "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=EhgvtA3WE0sRHZeL6sQ8LPFZtn2CtGFz";
    const data = await fetch(baseUrl);
    res = data.json();
  } catch (err) {
    console.log(err);
  }
  return res;
  //   const baseUrl =
  //     "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=EhgvtA3WE0sRHZeL6sQ8LPFZtn2CtGFz";
  //   fetch(baseUrl)
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((res) => {
  //       if (!res.status) {
  //         throw new Error("failed to get data");
  //       } else return res.results;
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
}

export default async function getTitles() {
  const response = await fetchSections();
  const data = response.results;
  const sectionNames = data.map((el) => el.section);
  let uniqueTitles = [];
  sectionNames?.forEach((el) => {
    if (!uniqueTitles.includes(el)) {
      uniqueTitles.push(el);
    }
  });

  return uniqueTitles;
}
