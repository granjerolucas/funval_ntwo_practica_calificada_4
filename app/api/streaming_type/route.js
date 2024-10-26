export const GET = () => {
  return Response.json([
    { title: "Series", url: "/series", description: "Popular Series" },
    { title: "Movies", url: "/peliculas", description: "Popular Movies" },
  ]);
};
