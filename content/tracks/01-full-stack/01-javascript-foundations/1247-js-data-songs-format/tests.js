const SONGS = [
  {id: 1, title: "Tides", seconds: 321, plays: 3339, artist: "The Pines", mood: "calm"},
  {id: 2, title: "Gravity", seconds: 292, plays: 3811, artist: "The Pines", mood: "calm"},
  {id: 3, title: "Drift", seconds: 213, plays: 6510, artist: "Kairo", mood: "happy"},
  {id: 4, title: "Static", seconds: 131, plays: 2031, artist: "Kairo", mood: "calm"},
  {id: 5, title: "Halo", seconds: 239, plays: 2401, artist: "Kairo", mood: "calm"},
  {id: 6, title: "Lanterns", seconds: 218, plays: 5772, artist: "Nova", mood: "happy"},
  {id: 7, title: "Riverside", seconds: 284, plays: 1132, artist: "Kairo", mood: "dark"},
  {id: 8, title: "Paper Planes", seconds: 278, plays: 6220, artist: "Nova", mood: "dark"}
];

test("an empty list", () => {
  expect(describeSongs([])).toEqual([]);
});

test("all songs", () => {
  expect(describeSongs(SONGS)).toEqual(["Tides (3339)","Gravity (3811)","Drift (6510)","Static (2031)","Halo (2401)","Lanterns (5772)","Riverside (1132)","Paper Planes (6220)"]);
});
